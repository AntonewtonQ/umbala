"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Step1Schema = z.object({
  fullName: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("Insira um e-mail válido."),
  phone: z
    .string()
    .min(9, "O número de telefone deve ter pelo menos 9 dígitos."),
  birthDate: z.string().min(10, "Insira uma data de nascimento válida."),
});

const Step2Schema = z.object({
  province: z.string().nonempty("Escolha uma província."),
  municipality: z.string().nonempty("Escolha um município."),
  neighborhood: z.string().min(2, "O bairro deve ter pelo menos 2 caracteres."),
});

const Step3Schema = z.object({
  educationLevel: z.string().nonempty("Escolha o nível de escolaridade."),
  interestArea: z.string().nonempty("Escolha uma área de interesse."),
  experienceLevel: z.string().nonempty("Escolha o nível de experiência."),
});

const Step4Schema = z
  .object({
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
    confirmPassword: z.string().min(6, "A confirmação da senha é obrigatória."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

export function RegisterForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const form1 = useForm<z.infer<typeof Step1Schema>>({
    resolver: zodResolver(Step1Schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      birthDate: "",
    },
  });

  const form2 = useForm<z.infer<typeof Step2Schema>>({
    resolver: zodResolver(Step2Schema),
    defaultValues: {
      province: "",
      municipality: "",
      neighborhood: "",
    },
  });

  const form3 = useForm<z.infer<typeof Step3Schema>>({
    resolver: zodResolver(Step3Schema),
    defaultValues: {
      educationLevel: "",
      interestArea: "",
      experienceLevel: "",
    },
  });

  const form4 = useForm<z.infer<typeof Step4Schema>>({
    resolver: zodResolver(Step4Schema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function handleSubmit() {
    const personalData = form1.getValues();
    const addressData = form2.getValues();
    const academicData = form3.getValues();
    const credentials = form4.getValues();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        personalData.email,
        credentials.password
      );
      const user = userCredential.user;

      // Salve os dados no Firestore usando o UID como ID do documento
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        uid: user.uid,
        fullName: personalData.fullName || "Usuário Não Informado",
        email: personalData.email || "",
        phone: personalData.phone || "",
        birthDate: personalData.birthDate || "",
        province: addressData.province || "",
        municipality: addressData.municipality || "",
        neighborhood: addressData.neighborhood || "",
        educationLevel: academicData.educationLevel || "",
        interestArea: academicData.interestArea || "",
        experienceLevel: academicData.experienceLevel || "",
        createdAt: new Date().toISOString(),
      });

      toast({
        title: "Conta criada com sucesso!",
        description: "Sua conta foi criada. Você pode fazer login agora.",
      });
      setStep(5);
    } catch (error) {
      toast({
        title: "Erro ao criar conta",
        description: "Ocorreu um erro ao criar sua conta. Tente novamente.",
      });
    }
  }

  const renderProgressIndicator = () => {
    return (
      <div className="flex justify-center mb-4">
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className={`h-2 w-12 mx-1 rounded ${
              i + 1 <= step ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex">
      <div
        className="relative w-1/2 flex items-center justify-center text-white shadow-lg"
        style={{
          backgroundImage: "url('/images/video.png')", // Caminho da imagem
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Logo no canto superior esquerdo */}
        <Link href={"/"}>
          <h1 className="absolute top-16 left-16 text-white text-3xl font-bold z-10">
            UMBALA
          </h1>
        </Link>

        {/* Overlay para escurecer a imagem */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Conteúdo centralizado */}
        <div className="relative z-10 text-center px-16">
          <p className="text-7xl font-bold text-left">
            A ponte entre o potencial e a oportunidade
          </p>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-3/4">
          {renderProgressIndicator()}
          {step === 1 && (
            <Form {...form1}>
              <form
                onSubmit={form1.handleSubmit(() => setStep(2))}
                className="space-y-6"
              >
                <FormField
                  control={form1.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form1.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu e-mail" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form1.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu telefone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form1.control}
                  name="birthDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data de Nascimento</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Continuar</Button>
              </form>
            </Form>
          )}

          {step === 2 && (
            <Form {...form2}>
              <form
                onSubmit={form2.handleSubmit(() => setStep(3))}
                className="space-y-6"
              >
                <FormField
                  control={form2.control}
                  name="province"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Província</FormLabel>
                      <FormControl>
                        <Input placeholder="Sua província" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form2.control}
                  name="municipality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Município</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu município" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form2.control}
                  name="neighborhood"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bairro</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu bairro" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Continuar</Button>
              </form>
            </Form>
          )}

          {step === 3 && (
            <Form {...form3}>
              <form
                onSubmit={form3.handleSubmit(() => setStep(4))}
                className="space-y-6"
              >
                <FormField
                  control={form3.control}
                  name="educationLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nível de Escolaridade</FormLabel>
                      <FormControl>
                        <Input placeholder="Escolha seu nível" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form3.control}
                  name="interestArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Área de Interesse</FormLabel>
                      <FormControl>
                        <Input placeholder="Escolha sua área" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form3.control}
                  name="experienceLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nível de Experiência</FormLabel>
                      <FormControl>
                        <Input placeholder="Escolha seu nível" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Continuar</Button>
              </form>
            </Form>
          )}

          {step === 4 && (
            <Form {...form4}>
              <form
                onSubmit={form4.handleSubmit(handleSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form4.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Crie sua senha"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form4.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirmar Senha</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Confirme sua senha"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Criar Conta</Button>
              </form>
            </Form>
          )}

          {step === 5 && (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#0CA060]">
                Conta Criada Com Sucesso!
              </h2>
              <h2 className="text-2xl font-bold text-[#170F49]">
                Vamos Começar
              </h2>

              <p className="mt-4 text-[#6F6C90]">
                Agora você pode explorar oportunidades e conectar-se ao futuro
                profissional.
              </p>
              <Button
                className="bg-[#215273] items-center"
                onClick={() => router.push("/login")}
              >
                Continuar
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
