"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/utils/firebase";

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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";

const FormSchema = z.object({
  email: z.string().email("Insira um email válido."),
  password: z.string().min(2, "A senha deve ter pelo menos 2 caracteres."),
});

export function LoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo de volta!",
      });
      router.push("/dashboard");
    } catch (error) {
      toast({
        title: "Erro no login",
        description: "Email ou senha inválidos.",
      });
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Esquerda: Texto e Imagem */}
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

      {/* Direita: Formulário */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-3/4 space-y-6"
          >
            <div className="flex flex-col mb-20">
              <h2 className="text-5xl text-[#215273] font-bold text-center mb-6">
                Fazer Login
              </h2>
              <p className="text-center text-[#6F6C90]">
                Descubra, Capacite-se e Conecte-se ao Sucesso
              </p>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insira o endereço de e-mail"
                      {...field}
                      className="border-gray-300 rounded-lg p-3"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Senha</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Insira a sua senha"
                        {...field}
                        className="border-gray-300 rounded-lg p-3 pr-12"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 px-3 text-gray-600"
                      >
                        {showPassword ? <EyeClosed /> : <Eye />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-[#215273] text-white p-5 rounded-lg font-bold hover:bg-[#1e4056] transition"
            >
              Continuar
            </Button>
            <Link
              href={"/register"}
              className="flex text-center justify-center text-[#6F6C90]"
            >
              criar uma conta
            </Link>
          </form>
        </Form>
      </div>
    </div>
  );
}
