"use client";
import Navbar from "@/components/shared/Navbar";
import { login } from "@/lib/actions/firebaseAuth";
import { useForm } from "react-hook-form";
import { LoginType, loginValidation } from "./loginValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/shared/Input";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginType>({
    resolver: zodResolver(loginValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data: LoginType) => {
    setLoading(true);
    try {
      const { user, error } = await login(data);
      if (error) {
        toast.error(error);
        return;
      }
      if (user) {
        toast.success("Successfully logged in");
        reset();
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error("Failed to login");
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar pageName="corderoservices" />
      <div className="container">
        <div className="login">
          <h1 className="login-heading">Login</h1>
          <form className="form" onSubmit={handleSubmit(handleLogin)}>
            <Input
              type="email"
              name="email"
              label="Email"
              error={errors.email?.message}
              placeholder="Demo@gmail.com"
              register={register("email")}
            />
            <Input
              type="password"
              name="password"
              label="Password"
              error={errors.password?.message}
              placeholder="Enter your password"
              register={register("password")}
            />
            <button disabled={loading} type="submit" className="btn-primary">
              {loading ? "Logging in" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
