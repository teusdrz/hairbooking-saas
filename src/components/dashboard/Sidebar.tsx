"use client";

import {
    LayoutDashboard,
    Calendar,
    Users,
    DollarSign,
    BarChart3,
    Settings,
    Scissors,
    CreditCard,
    UserCheck,
    MessageSquare,
    PieChart,
    TrendingUp,
    Shield,
    Smartphone,
    Globe,
    Building,
    Menu,
    X
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SidebarProps {
    plan: "starter" | "professional" | "enterprise";
}

export default function Sidebar({ plan }: SidebarProps) {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Definir quais funcionalidades cada plano tem acesso
    const planFeatures = {
        starter: [
            { name: "Dashboard", href: "/dashboard/starter", icon: LayoutDashboard },
            { name: "Agendamentos", href: "/dashboard/starter/appointments", icon: Calendar },
            { name: "Clientes", href: "/dashboard/starter/clients", icon: Users },
            { name: "Relatórios Básicos", href: "/dashboard/starter/reports", icon: BarChart3 },
            { name: "Configurações", href: "/dashboard/starter/settings", icon: Settings },
        ],
        professional: [
            { name: "Dashboard", href: "/dashboard/professional", icon: LayoutDashboard },
            { name: "Agendamentos", href: "/dashboard/professional/appointments", icon: Calendar },
            { name: "Clientes", href: "/dashboard/professional/clients", icon: Users },
            { name: "Financeiro", href: "/dashboard/professional/financial", icon: DollarSign },
            { name: "Comissões", href: "/dashboard/professional/commissions", icon: CreditCard },
            { name: "Relatórios Completos", href: "/dashboard/professional/reports", icon: BarChart3 },
            { name: "Marketing", href: "/dashboard/professional/marketing", icon: MessageSquare },
            { name: "App Mobile", href: "/dashboard/professional/mobile-app", icon: Smartphone },
            { name: "Configurações", href: "/dashboard/professional/settings", icon: Settings },
        ],
        enterprise: [
            { name: "Dashboard", href: "/dashboard/enterprise", icon: LayoutDashboard },
            { name: "Multi-unidades", href: "/dashboard/enterprise/units", icon: Building },
            { name: "Agendamentos", href: "/dashboard/enterprise/appointments", icon: Calendar },
            { name: "Clientes", href: "/dashboard/enterprise/clients", icon: Users },
            { name: "Financeiro Avançado", href: "/dashboard/enterprise/financial", icon: DollarSign },
            { name: "Comissões", href: "/dashboard/enterprise/commissions", icon: CreditCard },
            { name: "Relatórios Personalizados", href: "/dashboard/enterprise/reports", icon: PieChart },
            { name: "Analytics", href: "/dashboard/enterprise/analytics", icon: TrendingUp },
            { name: "White-label", href: "/dashboard/enterprise/white-label", icon: Globe },
            { name: "Segurança", href: "/dashboard/enterprise/security", icon: Shield },
            { name: "Integrações API", href: "/dashboard/enterprise/integrations", icon: UserCheck },
            { name: "Configurações", href: "/dashboard/enterprise/settings", icon: Settings },
        ]
    };

    const navigation = planFeatures[plan];

    return (
        <>
            {/* Mobile Overlay */}
            {!isCollapsed && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setIsCollapsed(true)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed lg:static inset-y-0 left-0 z-50 
                ${isCollapsed ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'} 
                ${isCollapsed ? 'lg:w-16' : 'w-64'} 
                bg-gray-900 h-full lg:h-screen overflow-y-auto transition-all duration-300 ease-in-out
            `}>
                <div className="flex flex-col h-full min-h-screen">
                    {/* Logo */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
                        <div className={`flex items-center space-x-2 ${isCollapsed ? 'lg:justify-center' : ''}`}>
                            <div className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
                                <Scissors className="w-4 h-4 text-gray-900" />
                            </div>
                            {!isCollapsed && (
                                <span className="text-white font-bold">Dashboard</span>
                            )}
                        </div>

                        {/* Toggle Button */}
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-2">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`
                                        flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors group
                                        ${isActive
                                            ? "bg-gray-800 text-white"
                                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                        }
                                        ${isCollapsed ? 'lg:justify-center lg:px-2' : ''}
                                    `}
                                    title={isCollapsed ? item.name : undefined}
                                >
                                    <item.icon className={`w-5 h-5 ${isCollapsed ? '' : 'mr-3'}`} />
                                    {!isCollapsed && (
                                        <span className="truncate">{item.name}</span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Plan Info */}
                    <div className="px-6 py-4 border-t border-gray-800">
                        {!isCollapsed ? (
                            <>
                                <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                                    Plano Atual
                                </div>
                                <div className="text-sm text-white font-medium capitalize">
                                    {plan}
                                </div>
                                {plan !== "enterprise" && (
                                    <Link
                                        href="/#planos"
                                        className="text-xs text-blue-400 hover:text-blue-300 mt-1 inline-block"
                                    >
                                        Fazer upgrade →
                                    </Link>
                                )}
                            </>
                        ) : (
                            <div className="flex justify-center">
                                <div className={`
                                    w-8 h-2 rounded-full
                                    ${plan === 'starter' ? 'bg-blue-500' : ''}
                                    ${plan === 'professional' ? 'bg-purple-500' : ''}
                                    ${plan === 'enterprise' ? 'bg-amber-500' : ''}
                                `} />
                            </div>
                        )}
                    </div>

                    {/* Collapse Toggle for Desktop */}
                    <div className="hidden lg:block px-4 py-2 border-t border-gray-800">
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="w-full flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsCollapsed(false)}
                className={`
                    fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-gray-900 text-white shadow-lg
                    ${!isCollapsed ? 'hidden' : 'block'}
                `}
            >
                <Menu className="w-5 h-5" />
            </button>
        </>
    );
}
