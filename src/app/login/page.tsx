"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Lock, User, Scissors, AlertCircle } from "lucide-react";

export default function LoginPage() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    // Credenciais válidas por plano
    const validCredentials = {
        startadm: { password: "start1", plan: "starter", redirect: "/dashboard/starter" },
        proadm: { password: "pro1", plan: "professional", redirect: "/dashboard/professional" },
        enterpriseadm: { password: "entreprise1", plan: "enterprise", redirect: "/dashboard/enterprise" }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        // Simular delay de autenticação
        await new Promise(resolve => setTimeout(resolve, 1000));

        const user = validCredentials[credentials.username as keyof typeof validCredentials];

        if (user && user.password === credentials.password) {
            // Salvar dados de autenticação no localStorage
            localStorage.setItem("user", JSON.stringify({
                username: credentials.username,
                plan: user.plan,
                isAuthenticated: true
            }));

            // Redirecionar para o dashboard correspondente
            router.push(user.redirect);
        } else {
            setError("Usuário ou senha incorretos. Verifique suas credenciais.");
        }

        setIsLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
        if (error) setError("");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                {/* Logo */}
                <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-black rounded-xl">
                        <Scissors className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">HairBooking</span>
                </Link>

                <h2 className="text-center text-3xl font-bold text-gray-900">
                    Acesse sua conta
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Entre com suas credenciais para acessar o dashboard
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border border-red-200 rounded-md p-4">
                                <div className="flex">
                                    <AlertCircle className="h-5 w-5 text-red-400" />
                                    <div className="ml-3">
                                        <p className="text-sm text-red-800">{error}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Username Field */}
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Usuário
                            </label>
                            <div className="mt-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    value={credentials.username}
                                    onChange={handleChange}
                                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                                    placeholder="Digite seu usuário"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Senha
                            </label>
                            <div className="mt-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={credentials.password}
                                    onChange={handleChange}
                                    className="appearance-none block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                                    placeholder="Digite sua senha"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {isLoading ? (
                                    <div className="flex items-center">
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                        Entrando...
                                    </div>
                                ) : (
                                    "Entrar"
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Credentials Info */}
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Credenciais de teste</span>
                            </div>
                        </div>

                        <div className="mt-4 space-y-3 text-xs text-gray-600">
                            <div className="bg-gray-50 p-3 rounded-md">
                                <p className="font-medium text-gray-700 mb-2">Planos disponíveis:</p>
                                <div className="space-y-1">
                                    <p><span className="font-medium">Starter:</span> startadm / start1</p>
                                    <p><span className="font-medium">Professional:</span> proadm / pro1</p>
                                    <p><span className="font-medium">Enterprise:</span> enterpriseadm / entreprise1</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Back to Home */}
                    <div className="mt-6 text-center">
                        <Link href="/" className="text-sm text-gray-600 hover:text-black transition-colors">
                            ← Voltar para página inicial
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
