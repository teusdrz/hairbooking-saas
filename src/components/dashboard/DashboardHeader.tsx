"use client";

import { useRouter } from "next/navigation";
import { Bell, Search, Settings, LogOut, User, Scissors } from "lucide-react";
import { useState } from "react";

interface DashboardHeaderProps {
    plan: "starter" | "professional" | "enterprise";
    username: string;
}

export default function DashboardHeader({ plan, username }: DashboardHeaderProps) {
    const router = useRouter();
    const [showUserMenu, setShowUserMenu] = useState(false);

    const planColors = {
        starter: "bg-blue-100 text-blue-800",
        professional: "bg-purple-100 text-purple-800",
        enterprise: "bg-amber-100 text-amber-800"
    };

    const planNames = {
        starter: "Starter",
        professional: "Professional",
        enterprise: "Enterprise"
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        router.push("/");
    };

    return (
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                {/* Logo e Plano */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center justify-center w-8 h-8 bg-black rounded-lg">
                            <Scissors className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">HairBooking</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${planColors[plan]}`}>
                        {planNames[plan]}
                    </span>
                </div>

                {/* Search Bar */}
                <div className="hidden md:flex flex-1 max-w-lg mx-8">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-black focus:border-black sm:text-sm"
                            placeholder="Buscar clientes, agendamentos..."
                        />
                    </div>
                </div>

                {/* Right Menu */}
                <div className="flex items-center space-x-4">
                    {/* Notifications */}
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    {/* User Menu */}
                    <div className="relative">
                        <button
                            onClick={() => setShowUserMenu(!showUserMenu)}
                            className="flex items-center space-x-2 p-2 text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                <User className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium hidden sm:block">{username}</span>
                        </button>

                        {/* Dropdown Menu */}
                        {showUserMenu && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                                <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                                    <p className="font-medium">{username}</p>
                                    <p className="text-gray-500">Plano {planNames[plan]}</p>
                                </div>
                                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                    <Settings className="w-4 h-4 mr-2" />
                                    Configurações
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors"
                                >
                                    <LogOut className="w-4 h-4 mr-2" />
                                    Sair
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
