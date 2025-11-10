"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";

interface User {
    username: string;
    plan: string;
    isAuthenticated: boolean;
}

interface DashboardLayoutProps {
    children: React.ReactNode;
    plan: "starter" | "professional" | "enterprise";
}

export default function DashboardLayout({ children, plan }: DashboardLayoutProps) {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = () => {
            const userData = localStorage.getItem("user");
            if (!userData) {
                router.push("/login");
                return;
            }

            const parsedUser = JSON.parse(userData);
            if (!parsedUser.isAuthenticated || parsedUser.plan !== plan) {
                router.push("/login");
                return;
            }

            setUser(parsedUser);
            setIsLoading(false);
        };

        checkAuth();
    }, [router, plan]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <div className="h-screen bg-gray-50 flex overflow-hidden">
            {/* Sidebar */}
            <div className="flex-shrink-0">
                <Sidebar plan={plan} />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full overflow-hidden">
                <DashboardHeader plan={plan} username={user.username} />

                {/* Content Area */}
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
