import { LoginForm } from "@/components/loginForm";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const Login: React.FC = () => {
  return (
    <>
      <LoginForm />
      <Toaster />
    </>
  );
};

export default Login;
