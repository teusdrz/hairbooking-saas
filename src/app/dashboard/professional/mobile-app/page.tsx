"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
    Smartphone,
    Download,
    QrCode,
    Star,
    Users,
    Bell,
    Settings,
    Play,
    Pause,
    Eye,
    Edit,
    Zap,
    Award,
    TrendingUp,
    CheckCircle,
    Calendar,
    MessageSquare
} from "lucide-react";
import { useState } from "react";

export default function ProfessionalMobileApp() {
    const [activeTab, setActiveTab] = useState("overview");

    // Dados do app mobile
    const appStats = {
        downloads: 1247,
        activeUsers: 892,
        rating: 4.7,
        reviews: 156,
        uptime: 99.8,
        lastUpdate: "2024-01-10"
    };

    // Features do app
    const appFeatures = [
        {
            icon: <Calendar className="w-6 h-6" />,
            title: "Agendamento Online",
            description: "Clientes podem agendar diretamente pelo app",
            status: "active",
            usage: 89
        },
        {
            icon: <Bell className="w-6 h-6" />,
            title: "Notificações Push",
            description: "Lembretes automáticos para clientes e profissionais",
            status: "active",
            usage: 95
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Chat Integrado",
            description: "Comunicação direta entre salon e clientes",
            status: "active",
            usage: 73
        },
        {
            icon: <Star className="w-6 h-6" />,
            title: "Sistema de Avaliações",
            description: "Feedback e avaliações dos serviços",
            status: "active",
            usage: 82
        },
        {
            icon: <QrCode className="w-6 h-6" />,
            title: "Check-in QR Code",
            description: "Check-in rápido via QR Code",
            status: "beta",
            usage: 45
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Programa de Fidelidade",
            description: "Pontos e recompensas para clientes",
            status: "development",
            usage: 0
        }
    ];

    // Analytics do app
    const analytics = {
        dailyUsers: [
            { day: "Seg", users: 124 },
            { day: "Ter", users: 142 },
            { day: "Qua", users: 158 },
            { day: "Qui", users: 167 },
            { day: "Sex", users: 189 },
            { day: "Sáb", users: 201 },
            { day: "Dom", users: 156 }
        ],
        topFeatures: [
            { feature: "Agendamentos", usage: 89, change: 12 },
            { feature: "Notificações", usage: 95, change: 8 },
            { feature: "Perfil", usage: 78, change: 5 },
            { feature: "Histórico", usage: 67, change: -2 }
        ]
    };

    // Configurações do app
    const appSettings = [
        {
            category: "Notificações",
            settings: [
                { name: "Lembrete de agendamento", enabled: true },
                { name: "Promoções especiais", enabled: true },
                { name: "Novidades do salão", enabled: false }
            ]
        },
        {
            category: "Aparência",
            settings: [
                { name: "Tema escuro", enabled: false },
                { name: "Cores personalizadas", enabled: true },
                { name: "Logo customizada", enabled: true }
            ]
        },
        {
            category: "Funcionalidades",
            settings: [
                { name: "Agendamento online", enabled: true },
                { name: "Chat com clientes", enabled: true },
                { name: "Programa fidelidade", enabled: false }
            ]
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "active": return "bg-green-100 text-green-800";
            case "beta": return "bg-blue-100 text-blue-800";
            case "development": return "bg-yellow-100 text-yellow-800";
            case "inactive": return "bg-gray-100 text-gray-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const getMaxUsers = () => Math.max(...analytics.dailyUsers.map(day => day.users));

    return (
        <DashboardLayout plan="professional">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                            <Smartphone className="w-7 h-7 text-purple-600 mr-3" />
                            App Mobile
                        </h1>
                        <p className="text-gray-600 mt-2">Gerencie seu aplicativo móvel personalizado</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center font-medium">
                            <Download className="w-5 h-5 mr-2" />
                            Publicar Atualização
                        </button>
                        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center font-medium">
                            <Settings className="w-5 h-5 mr-2" />
                            Configurar
                        </button>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex space-x-1 bg-gray-100 rounded-xl p-1">
                    {["overview", "features", "analytics", "settings"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 px-6 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === tab
                                    ? "bg-white text-purple-600 shadow-sm"
                                    : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            {tab === "overview" && "Visão Geral"}
                            {tab === "features" && "Funcionalidades"}
                            {tab === "analytics" && "Analytics"}
                            {tab === "settings" && "Configurações"}
                        </button>
                    ))}
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Downloads</p>
                                <p className="text-2xl font-bold text-gray-900">{appStats.downloads.toLocaleString()}</p>
                                <div className="flex items-center mt-2">
                                    <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                                    <span className="text-sm font-medium text-green-600">+12% este mês</span>
                                </div>
                            </div>
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <Download className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Usuários Ativos</p>
                                <p className="text-2xl font-bold text-gray-900">{appStats.activeUsers}</p>
                                <div className="flex items-center mt-2">
                                    <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                                    <span className="text-sm font-medium text-green-600">+8% esta semana</span>
                                </div>
                            </div>
                            <div className="p-3 bg-green-100 rounded-lg">
                                <Users className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Avaliação</p>
                                <p className="text-2xl font-bold text-gray-900">{appStats.rating}</p>
                                <div className="flex items-center mt-2">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                    <span className="text-sm text-gray-600">{appStats.reviews} avaliações</span>
                                </div>
                            </div>
                            <div className="p-3 bg-yellow-100 rounded-lg">
                                <Star className="w-6 h-6 text-yellow-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Uptime</p>
                                <p className="text-2xl font-bold text-gray-900">{appStats.uptime}%</p>
                                <div className="flex items-center mt-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                                    <span className="text-sm text-gray-600">Excelente</span>
                                </div>
                            </div>
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <Zap className="w-6 h-6 text-purple-600" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content based on active tab */}
                {activeTab === "overview" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* App Preview */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Preview do App</h3>
                            <div className="flex justify-center">
                                <div className="relative">
                                    <div className="w-64 h-96 bg-gray-900 rounded-3xl p-2">
                                        <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                                            <div className="bg-purple-600 p-4 text-white">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="font-semibold">Meu Salão</h4>
                                                    <Bell className="w-5 h-5" />
                                                </div>
                                            </div>
                                            <div className="p-4 space-y-4">
                                                <div className="bg-gray-100 rounded-lg p-3">
                                                    <div className="flex items-center space-x-2">
                                                        <Calendar className="w-4 h-4 text-purple-600" />
                                                        <span className="text-sm font-medium">Próximo agendamento</span>
                                                    </div>
                                                    <p className="text-xs text-gray-600 mt-1">Hoje, 14:30</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="h-8 bg-gray-100 rounded"></div>
                                                    <div className="h-8 bg-gray-100 rounded"></div>
                                                    <div className="h-8 bg-gray-100 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                                        <QrCode className="w-8 h-8 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-6">
                                <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center mx-auto">
                                    <QrCode className="w-4 h-4 mr-2" />
                                    QR Code para Download
                                </button>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Ações Rápidas</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="p-6 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-colors text-left group">
                                    <div className="p-3 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 transition-colors">
                                        <Bell className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <p className="font-medium text-gray-900 mb-1">Enviar Notificação</p>
                                    <p className="text-sm text-gray-600">Push para todos os usuários</p>
                                </button>

                                <button className="p-6 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-colors text-left group">
                                    <div className="p-3 bg-green-100 rounded-lg mb-4 group-hover:bg-green-200 transition-colors">
                                        <Download className="w-6 h-6 text-green-600" />
                                    </div>
                                    <p className="font-medium text-gray-900 mb-1">Nova Versão</p>
                                    <p className="text-sm text-gray-600">Publicar atualização</p>
                                </button>

                                <button className="p-6 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-colors text-left group">
                                    <div className="p-3 bg-purple-100 rounded-lg mb-4 group-hover:bg-purple-200 transition-colors">
                                        <Settings className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <p className="font-medium text-gray-900 mb-1">Configurações</p>
                                    <p className="text-sm text-gray-600">Personalizar app</p>
                                </button>

                                <button className="p-6 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-colors text-left group">
                                    <div className="p-3 bg-orange-100 rounded-lg mb-4 group-hover:bg-orange-200 transition-colors">
                                        <Eye className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <p className="font-medium text-gray-900 mb-1">Analytics</p>
                                    <p className="text-sm text-gray-600">Ver relatórios</p>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "features" && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-semibold text-gray-900">Funcionalidades do App</h3>
                            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                                <Settings className="w-4 h-4 mr-2" />
                                Gerenciar
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {appFeatures.map((feature, index) => (
                                <div key={index} className="border border-gray-200 rounded-xl p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-3 bg-gray-100 rounded-lg">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(feature.status)}`}>
                                                    {feature.status}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                                                {feature.status === "active" ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4">{feature.description}</p>
                                    {feature.usage > 0 && (
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm text-gray-600">Uso</span>
                                                <span className="text-sm font-medium text-gray-900">{feature.usage}%</span>
                                            </div>
                                            <div className="bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                                                    style={{ width: `${feature.usage}%` }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "analytics" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Daily Users Chart */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Usuários Diários</h3>
                            <div className="space-y-4">
                                {analytics.dailyUsers.map((day, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="w-12 text-sm font-medium text-gray-600">{day.day}</div>
                                        <div className="flex-1 mx-4">
                                            <div className="bg-gray-200 rounded-full h-4">
                                                <div
                                                    className="bg-purple-600 h-4 rounded-full transition-all duration-300 flex items-center justify-end pr-2"
                                                    style={{ width: `${(day.users / getMaxUsers()) * 100}%` }}
                                                >
                                                    <span className="text-xs text-white font-medium">{day.users}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Top Features */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Features Mais Usadas</h3>
                            <div className="space-y-4">
                                {analytics.topFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div>
                                            <p className="font-medium text-gray-900">{feature.feature}</p>
                                            <p className="text-sm text-gray-600">{feature.usage}% de uso</p>
                                        </div>
                                        <div className={`flex items-center ${feature.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            {feature.change > 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingUp className="w-4 h-4 mr-1 transform rotate-180" />}
                                            <span className="text-sm font-medium">{Math.abs(feature.change)}%</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "settings" && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Configurações do App</h3>
                        <div className="space-y-8">
                            {appSettings.map((category, index) => (
                                <div key={index}>
                                    <h4 className="text-lg font-medium text-gray-900 mb-4">{category.category}</h4>
                                    <div className="space-y-3">
                                        {category.settings.map((setting, settingIndex) => (
                                            <div key={settingIndex} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                                <span className="font-medium text-gray-900">{setting.name}</span>
                                                <button className={`
                                                    relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                                                    ${setting.enabled ? 'bg-purple-600' : 'bg-gray-200'}
                                                `}>
                                                    <span className={`
                                                        inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                                                        ${setting.enabled ? 'translate-x-6' : 'translate-x-1'}
                                                    `} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}
