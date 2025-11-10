"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
    Calendar,
    Users,
    DollarSign,
    TrendingUp,
    Clock,
    CheckCircle,
    XCircle,
    User
} from "lucide-react";

export default function StarterDashboard() {
    // Dados simulados para o dashboard Starter
    const stats = [
        {
            name: "Agendamentos Hoje",
            value: "12",
            change: "+2.1%",
            changeType: "increase" as const,
            icon: Calendar,
            color: "bg-blue-500"
        },
        {
            name: "Total de Clientes",
            value: "248",
            change: "+5.4%",
            changeType: "increase" as const,
            icon: Users,
            color: "bg-green-500"
        },
        {
            name: "Faturamento Mensal",
            value: "R$ 8.450",
            change: "+12.3%",
            changeType: "increase" as const,
            icon: DollarSign,
            color: "bg-purple-500"
        },
        {
            name: "Taxa de Ocupação",
            value: "78%",
            change: "+3.2%",
            changeType: "increase" as const,
            icon: TrendingUp,
            color: "bg-orange-500"
        }
    ];

    const recentAppointments = [
        { id: 1, client: "Maria Silva", service: "Corte + Escova", time: "09:00", status: "confirmed" },
        { id: 2, client: "João Santos", service: "Corte Masculino", time: "10:30", status: "completed" },
        { id: 3, client: "Ana Costa", service: "Coloração", time: "14:00", status: "confirmed" },
        { id: 4, client: "Pedro Lima", service: "Barba", time: "15:30", status: "pending" },
        { id: 5, client: "Carla Souza", service: "Corte + Hidratação", time: "16:00", status: "confirmed" }
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "completed":
                return <CheckCircle className="w-4 h-4 text-green-600" />;
            case "confirmed":
                return <Clock className="w-4 h-4 text-blue-600" />;
            case "pending":
                return <XCircle className="w-4 h-4 text-orange-600" />;
            default:
                return <Clock className="w-4 h-4 text-gray-600" />;
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case "completed":
                return "Concluído";
            case "confirmed":
                return "Confirmado";
            case "pending":
                return "Pendente";
            default:
                return "Agendado";
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "completed":
                return "bg-green-100 text-green-800";
            case "confirmed":
                return "bg-blue-100 text-blue-800";
            case "pending":
                return "bg-orange-100 text-orange-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <DashboardLayout plan="starter">
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-600">Bem-vindo ao seu painel de controle</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <div key={stat.name} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center">
                                <div className={`p-2 rounded-lg ${stat.color}`}>
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                                    <div className="flex items-center">
                                        <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                                        <span className={`ml-2 text-sm font-medium ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                                            }`}>
                                            {stat.change}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Agendamentos Recentes */}
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">Agendamentos de Hoje</h3>
                        </div>
                        <div className="overflow-hidden">
                            <div className="divide-y divide-gray-200">
                                {recentAppointments.map((appointment) => (
                                    <div key={appointment.id} className="p-6 hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                                        <User className="w-5 h-5 text-gray-600" />
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        {appointment.client}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        {appointment.service}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <span className="text-sm font-medium text-gray-900">
                                                    {appointment.time}
                                                </span>
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                                                    {getStatusIcon(appointment.status)}
                                                    <span className="ml-1">{getStatusText(appointment.status)}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-6">
                        {/* Ações Rápidas */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Ações Rápidas</h3>
                            <div className="space-y-3">
                                <button className="w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <div className="flex items-center">
                                        <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                                        <span className="text-sm font-medium text-blue-900">Novo Agendamento</span>
                                    </div>
                                </button>
                                <button className="w-full text-left p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                    <div className="flex items-center">
                                        <Users className="w-5 h-5 text-green-600 mr-3" />
                                        <span className="text-sm font-medium text-green-900">Cadastrar Cliente</span>
                                    </div>
                                </button>
                                <button className="w-full text-left p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <div className="flex items-center">
                                        <DollarSign className="w-5 h-5 text-purple-600 mr-3" />
                                        <span className="text-sm font-medium text-purple-900">Ver Relatórios</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Resumo do Plano */}
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                            <h3 className="text-lg font-medium mb-2">Plano Starter</h3>
                            <p className="text-blue-100 text-sm mb-4">
                                Você está usando o plano básico com funcionalidades essenciais para seu salão.
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    <span>Até 3 profissionais</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    <span>Agendamento online</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    <span>Relatórios básicos</span>
                                </div>
                            </div>
                            <button className="mt-4 bg-white text-blue-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                                Fazer Upgrade
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
