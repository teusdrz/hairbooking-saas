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
    User,
    CreditCard,
    MessageSquare,
    Smartphone,
    BarChart3,
    Crown,
    Target
} from "lucide-react";

export default function ProfessionalDashboard() {
    // Dados simulados para o dashboard Professional (mais avançado)
    const stats = [
        {
            name: "Agendamentos Hoje",
            value: "28",
            change: "+8.2%",
            changeType: "increase" as const,
            icon: Calendar,
            color: "bg-blue-500"
        },
        {
            name: "Total de Clientes",
            value: "567",
            change: "+12.4%",
            changeType: "increase" as const,
            icon: Users,
            color: "bg-green-500"
        },
        {
            name: "Faturamento Mensal",
            value: "R$ 18.750",
            change: "+18.3%",
            changeType: "increase" as const,
            icon: DollarSign,
            color: "bg-purple-500"
        },
        {
            name: "Taxa de Ocupação",
            value: "92%",
            change: "+5.7%",
            changeType: "increase" as const,
            icon: TrendingUp,
            color: "bg-orange-500"
        },
        {
            name: "Comissões",
            value: "R$ 3.250",
            change: "+9.1%",
            changeType: "increase" as const,
            icon: CreditCard,
            color: "bg-indigo-500"
        },
        {
            name: "Conversão Marketing",
            value: "24%",
            change: "+4.8%",
            changeType: "increase" as const,
            icon: Target,
            color: "bg-pink-500"
        }
    ];

    const recentAppointments = [
        { id: 1, client: "Maria Silva", service: "Corte + Escova + Coloração", time: "09:00", value: "R$ 180", status: "completed", professional: "Ana" },
        { id: 2, client: "João Santos", service: "Corte Masculino Premium", time: "10:30", value: "R$ 65", status: "completed", professional: "Carlos" },
        { id: 3, client: "Ana Costa", service: "Coloração + Tratamento", time: "14:00", value: "R$ 220", status: "confirmed", professional: "Maria" },
        { id: 4, client: "Pedro Lima", service: "Barba + Corte", time: "15:30", value: "R$ 85", status: "pending", professional: "Carlos" },
        { id: 5, client: "Carla Souza", service: "Hidratação Premium", time: "16:00", value: "R$ 120", status: "confirmed", professional: "Ana" }
    ];

    const marketingStats = [
        { name: "Campanhas SMS", sent: 245, opened: 189, conversion: "12%" },
        { name: "E-mail Marketing", sent: 567, opened: 423, conversion: "8%" },
        { name: "WhatsApp", sent: 89, opened: 85, conversion: "32%" }
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
        <DashboardLayout plan="professional">
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                            <Crown className="w-6 h-6 text-purple-600 mr-2" />
                            Dashboard Professional
                        </h1>
                        <p className="text-gray-600">Painel avançado com todas as funcionalidades premium</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                            <Smartphone className="w-4 h-4 mr-2" />
                            App Mobile
                        </button>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Marketing
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                    {stats.map((stat) => (
                        <div key={stat.name} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center">
                                <div className={`p-2 rounded-lg ${stat.color}`}>
                                    <stat.icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-xs font-medium text-gray-600">{stat.name}</p>
                                    <div className="flex items-center">
                                        <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
                                        <span className={`ml-1 text-xs font-medium ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
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
                    {/* Agendamentos com Valores */}
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900">Agendamentos de Hoje</h3>
                            <span className="text-sm text-gray-500">Faturamento previsto: R$ 670</span>
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
                                                        {appointment.service} • {appointment.professional}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <span className="text-sm font-medium text-green-600">
                                                    {appointment.value}
                                                </span>
                                                <span className="text-sm font-medium text-gray-900">
                                                    {appointment.time}
                                                </span>
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                                                    {getStatusIcon(appointment.status)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar com mais funcionalidades */}
                    <div className="space-y-6">
                        {/* Marketing Performance */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                                <MessageSquare className="w-5 h-5 text-green-600 mr-2" />
                                Marketing Automático
                            </h3>
                            <div className="space-y-4">
                                {marketingStats.map((stat, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{stat.name}</p>
                                            <p className="text-xs text-gray-500">{stat.sent} enviados • {stat.opened} abertos</p>
                                        </div>
                                        <span className="text-sm font-medium text-green-600">{stat.conversion}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Comissões */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                                <CreditCard className="w-5 h-5 text-indigo-600 mr-2" />
                                Comissões dos Profissionais
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Ana Silva</span>
                                    <span className="text-sm font-medium text-gray-900">R$ 1.250</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Carlos Santos</span>
                                    <span className="text-sm font-medium text-gray-900">R$ 980</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Maria Costa</span>
                                    <span className="text-sm font-medium text-gray-900">R$ 1.020</span>
                                </div>
                                <div className="pt-2 border-t border-gray-200">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-900">Total</span>
                                        <span className="text-sm font-bold text-gray-900">R$ 3.250</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ações Rápidas Professional */}
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
                                        <MessageSquare className="w-5 h-5 text-green-600 mr-3" />
                                        <span className="text-sm font-medium text-green-900">Enviar Campanha</span>
                                    </div>
                                </button>
                                <button className="w-full text-left p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <div className="flex items-center">
                                        <BarChart3 className="w-5 h-5 text-purple-600 mr-3" />
                                        <span className="text-sm font-medium text-purple-900">Relatórios Completos</span>
                                    </div>
                                </button>
                                <button className="w-full text-left p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                                    <div className="flex items-center">
                                        <Smartphone className="w-5 h-5 text-indigo-600 mr-3" />
                                        <span className="text-sm font-medium text-indigo-900">Personalizar App</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Resumo do Plano Professional */}
                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                            <h3 className="text-lg font-medium mb-2 flex items-center">
                                <Crown className="w-5 h-5 mr-2" />
                                Plano Professional
                            </h3>
                            <p className="text-purple-100 text-sm mb-4">
                                Funcionalidades avançadas para acelerar o crescimento do seu negócio.
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    <span>Até 10 profissionais</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    <span>App com sua marca</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    <span>Marketing automático</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    <span>Comissões automáticas</span>
                                </div>
                            </div>
                            <button className="mt-4 bg-white text-purple-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">
                                Upgrade para Enterprise
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
