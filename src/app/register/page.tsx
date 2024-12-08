import { LoginForm } from "@/components/loginForm";
import { RegisterForm } from "@/components/registerForm";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const Register: React.FC = () => {
  return (
    <>
      <RegisterForm />
      <Toaster />
    </>
  );
};

export default Register;
