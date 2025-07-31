import type { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { signupInput } from "@priyanshu026/common"; 
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";


export function L({ type }: { type: "signup" | "signin" }) {
  const navigate = useNavigate();

  const [postInputs, setpostInputs] = useState<signupInput>({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  async function sendRequest() {
    setIsLoading(true);
    try {
      const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
      const jwt = res.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
    toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-white via-gray-100 to-blue-100 p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">
       
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>
            </div>
            <h1 className="text-2xl font-semibold text-gray-800">
              {type === "signup" ? "Create Account" : "Welcome Back"}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {type === "signup" ? "Join our community of writers" : "Sign in to your account"}
            </p>
          </div>

       
          <div className="text-center mb-6 text-sm">
            <span className="text-gray-600">
              {type === "signin" ? "Don't have an account?" : "Already have an account?"}
            </span>
            <Link
              className="ml-1 font-medium text-blue-600 hover:text-blue-700 transition duration-150"
              to={type === "signin" ? "/signup" : "/"}
            >
              {type === "signin" ? "Sign up" : "Sign in"}
            </Link>
          </div>

          <div className="space-y-5">
            <Labelinput
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              icon={<Mail className="w-5 h-5" />}
              onChange={(e) =>
                setpostInputs({
                  ...postInputs,
                  email: e.target.value,
                })
              }
            />

            <div className="relative">
              <Labelinput
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                icon={<Lock className="w-5 h-5" />}
                onChange={(e) =>
                  setpostInputs({
                    ...postInputs,
                    password: e.target.value,
                  })
                }
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            onClick={sendRequest}
            disabled={isLoading || !postInputs.email || !postInputs.password}
            type="button"
            className={`w-full mt-7 text-white font-medium rounded-xl py-3 px-6 flex items-center justify-center gap-2 transition-all duration-300
              ${
                isLoading || !postInputs.email || !postInputs.password
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-[1.02] hover:shadow-md"
              }`}
          >

            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Processing...
              </>
            ) : (
              <>
                {type === "signup" ? "Create Account" : "Sign In"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </>
            )}
          </button>

          <div className="mt-6 text-center text-xs text-gray-500">
            {type === "signup" ? (
              <p>By creating an account, you agree to our Terms of Service</p>
            ) : (
              <Link to="/forgot-password" className="hover:text-gray-700 transition-colors duration-150">
                Forgot your password?
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


interface labelIn {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  icon?: React.ReactNode;
}


function Labelinput({ label, placeholder, onChange, type, icon }: labelIn) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          {icon}
        </div>
        <input
          onChange={onChange}
          type={type || "text"}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 
          focus:ring-blue-500 focus:border-blue-500 transition duration-200 placeholder-gray-400 text-gray-900"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}
