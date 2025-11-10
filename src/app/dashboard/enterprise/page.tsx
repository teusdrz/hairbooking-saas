"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
    Calendar,
    Users,
    DollarSign,
    CheckCircle,
    BarChart3,
    Crown,
    Target,
    Building,
    Globe,
    Shield,
    PieChart,
    Zap,
    Activity,
    UserCheck,
    Settings
} from "lucide-react";

export default function EnterpriseDashboard() {
    // Dados simulados para o dashboard Enterprise (mais completo)
    const globalStats = [
        {
            name: "Receita Total",
            value: "R$ 87.450",
            change: "+23.1%",
            changeType: "increase" as const,
            icon: DollarSign,
            color: "bg-green-500"
        },
        {
            name: "Unidades Ativas",
            value: "8",
            change: "+2 novas",
            changeType: "increase" as const,
            icon: Building,
            color: "bg-blue-500"
        },
        {
            name: "Total de Clientes",
            value: "2.847",
            change: "+18.2%",
            changeType: "increase" as const,
            icon: Users,
            color: "bg-purple-500"
        },
        {
            name: "Agendamentos",
            value: "156",
            change: "+12.4%",
            changeType: "increase" as const,
            icon: Calendar,
            color: "bg-orange-500"
        },
        {
            name: "Conversão Geral",
            value: "34%",
            change: "+5.7%",
            changeType: "increase" as const,
            icon: Target,
            color: "bg-indigo-500"
        },
        {
            name: "Performance API",
            value: "99.8%",
            change: "+0.2%",
            changeType: "increase" as const,
            icon: Activity,
            color: "bg-green-600"
        }
    ];

    const unitsData = [
        { name: "Unidade Centro", revenue: "R$ 23.450", clients: 487, appointments: 45, growth: "+15%" },
        { name: "Unidade Shopping", revenue: "R$ 19.230", clients: 398, appointments: 38, growth: "+22%" },
        { name: "Unidade Bela Vista", revenue: "R$ 16.890", clients: 356, appointments: 32, growth: "+8%" },
        { name: "Unidade Vila Madalena", revenue: "R$ 14.320", clients: 289, appointments: 28, growth: "+18%" },
        { name: "Unidade Moema", revenue: "R$ 13.560", clients: 267, appointments: 13, growth: "+12%" }
    ];

    const securityAlerts = [
        { type: "info", message: "Backup automático realizado com sucesso", time: "2 min atrás" },
        { type: "warning", message: "Tentativa de login suspeita detectada", time: "15 min atrás" },
        { type: "success", message: "Certificado SSL renovado automaticamente", time: "1 hora atrás" }
    ];

    const integrationStatus = [
        { name: "Google Meu Negócio", status: "active", sync: "100%" },
        { name: "WhatsApp Business", status: "active", sync: "98%" },
        { name: "Instagram", status: "active", sync: "95%" },
        { name: "Facebook", status: "pending", sync: "0%" },
        { name: "PagSeguro", status: "active", sync: "100%" },
        { name: "Stripe", status: "active", sync: "100%" }
    ];

    const getAlertColor = (type: string) => {
        switch (type) {
            case "success":
                return "bg-green-100 border-green-200 text-green-800";
            case "warning":
                return "bg-yellow-100 border-yellow-200 text-yellow-800";
            case "info":
                return "bg-blue-100 border-blue-200 text-blue-800";
            default:
                return "bg-gray-100 border-gray-200 text-gray-800";
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "active":
                return "bg-green-100 text-green-800";
            case "pending":
                return "bg-yellow-100 text-yellow-800";
            case "error":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <DashboardLayout plan="enterprise">
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                            <Crown className="w-6 h-6 text-amber-600 mr-2" />
                            Dashboard Enterprise
                        </h1>
                        <p className="text-gray-600">Visão executiva completa de todas as unidades e operações</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors flex items-center">
                            <Globe className="w-4 h-4 mr-2" />
                            White-label
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                            <Building className="w-4 h-4 mr-2" />
                            Multi-unidades
                        </button>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
                            <PieChart className="w-4 h-4 mr-2" />
                            Analytics
                        </button>
                    </div>
                </div>

                {/* Global Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                    {globalStats.map((stat) => (
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

                {/* Main Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Performance das Unidades */}
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900 flex items-center">
                                <Building className="w-5 h-5 text-blue-600 mr-2" />
                                Performance por Unidade
                            </h3>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                {unitsData.map((unit, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-900">{unit.name}</h4>
                                            <p className="text-xs text-gray-500">{unit.clients} clientes • {unit.appointments} agendamentos hoje</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-gray-900">{unit.revenue}</p>
                                            <p className="text-xs text-green-600 font-medium">{unit.growth}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Segurança e Monitoramento */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900 flex items-center">
                                <Shield className="w-5 h-5 text-red-600 mr-2" />
                                Segurança
                            </h3>
                        </div>
                        <div className="p-6">
                            <div className="space-y-3">
                                {securityAlerts.map((alert, index) => (
                                    <div key={index} className={`p-3 rounded-lg border ${getAlertColor(alert.type)}`}>
                                        <p className="text-sm font-medium">{alert.message}</p>
                                        <p className="text-xs opacity-75 mt-1">{alert.time}</p>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-4 bg-red-50 text-red-700 py-2 px-4 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium">
                                Ver Logs Completos
                            </button>
                        </div>
                    </div>

                    {/* Integrações API */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900 flex items-center">
                                <UserCheck className="w-5 h-5 text-purple-600 mr-2" />
                                Integrações
                            </h3>
                        </div>
                        <div className="p-6">
                            <div className="space-y-3">
                                {integrationStatus.map((integration, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{integration.name}</p>
                                            <p className="text-xs text-gray-500">Sync: {integration.sync}</p>
                                        </div>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(integration.status)}`}>
                                            {integration.status === 'active' ? 'Ativo' : 'Pendente'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-4 bg-purple-50 text-purple-700 py-2 px-4 rounded-lg hover:bg-purple-100 transition-colors text-sm font-medium">
                                Gerenciar Integrações
                            </button>
                        </div>
                    </div>
                </div>

                {/* Ações Rápidas Enterprise */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Ações Executivas</h3>
                        <div className="space-y-3">
                            <button className="w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                <div className="flex items-center">
                                    <Building className="w-5 h-5 text-blue-600 mr-3" />
                                    <span className="text-sm font-medium text-blue-900">Nova Unidade</span>
                                </div>
                            </button>
                            <button className="w-full text-left p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                <div className="flex items-center">
                                    <PieChart className="w-5 h-5 text-green-600 mr-3" />
                                    <span className="text-sm font-medium text-green-900">Relatório Executivo</span>
                                </div>
                            </button>
                            <button className="w-full text-left p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                <div className="flex items-center">
                                    <Globe className="w-5 h-5 text-purple-600 mr-3" />
                                    <span className="text-sm font-medium text-purple-900">White-label Config</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Configurações</h3>
                        <div className="space-y-3">
                            <button className="w-full text-left p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                                <div className="flex items-center">
                                    <Shield className="w-5 h-5 text-red-600 mr-3" />
                                    <span className="text-sm font-medium text-red-900">Segurança</span>
                                </div>
                            </button>
                            <button className="w-full text-left p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                                <div className="flex items-center">
                                    <UserCheck className="w-5 h-5 text-indigo-600 mr-3" />
                                    <span className="text-sm font-medium text-indigo-900">APIs</span>
                                </div>
                            </button>
                            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div className="flex items-center">
                                    <Settings className="w-5 h-5 text-gray-600 mr-3" />
                                    <span className="text-sm font-medium text-gray-900">Configurações</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Analytics Avançado */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                            <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
                            Analytics
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Conversão Total</span>
                                <span className="text-sm font-medium text-green-600">+23%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">ROI Marketing</span>
                                <span className="text-sm font-medium text-green-600">340%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Ticket Médio</span>
                                <span className="text-sm font-medium text-blue-600">R$ 127</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Retenção</span>
                                <span className="text-sm font-medium text-green-600">89%</span>
                            </div>
                        </div>
                    </div>

                    {/* Resumo Enterprise */}
                    <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg p-6 text-white">
                        <h3 className="text-lg font-medium mb-2 flex items-center">
                            <Crown className="w-5 h-5 mr-2" />
                            Enterprise
                        </h3>
                        <p className="text-amber-100 text-sm mb-4">
                            Solução completa para grandes redes de salões.
                        </p>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                <span>Unidades ilimitadas</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                <span>White-label completo</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                <span>APIs personalizadas</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                <span>Suporte dedicado</span>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                            <Zap className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">Máxima Performance</span>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
