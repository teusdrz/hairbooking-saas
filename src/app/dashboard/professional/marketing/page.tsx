"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
    Megaphone,
    TrendingUp,
    Users,
    Eye,
    Heart,
    Share2,
    MessageSquare,
    Target,
    Award,
    Zap,
    Send,
    Plus,
    Edit,
    Trash2,
    Instagram,
    Facebook,
    Chrome,
    Play,
    Mail
} from "lucide-react";
import { useState } from "react";

export default function ProfessionalMarketing() {
    const [activeTab, setActiveTab] = useState("overview");
    const [campaignFilter, setCampaignFilter] = useState("all");

    // Dados de marketing
    const marketingStats = {
        totalReach: 12450,
        engagement: 8.7,
        newClients: 28,
        roi: 320,
        campaignsActive: 3,
        socialFollowers: 2840
    };

    // Campanhas de marketing
    const campaigns = [
        {
            id: 1,
            name: "Promoção Verão 2024",
            type: "instagram",
            status: "active",
            budget: 500,
            spent: 320,
            reach: 4850,
            engagement: 9.2,
            clicks: 145,
            conversions: 12,
            startDate: "2024-01-01",
            endDate: "2024-01-31",
            description: "Desconto de 20% em colorações"
        },
        {
            id: 2,
            name: "Cliente Novo - Desconto",
            type: "facebook",
            status: "active",
            budget: 300,
            spent: 180,
            reach: 2340,
            engagement: 7.5,
            clicks: 89,
            conversions: 8,
            startDate: "2024-01-10",
            endDate: "2024-02-10",
            description: "50% de desconto para novos clientes"
        },
        {
            id: 3,
            name: "Email - Reativação",
            type: "email",
            status: "completed",
            budget: 100,
            spent: 100,
            reach: 580,
            engagement: 15.3,
            clicks: 67,
            conversions: 6,
            startDate: "2023-12-15",
            endDate: "2024-01-15",
            description: "Reativação de clientes inativos"
        }
    ];

    // Performance das redes sociais
    const socialMedia = [
        {
            platform: "Instagram",
            icon: <Instagram className="w-5 h-5" />,
            followers: 1840,
            growth: 12.5,
            engagement: 9.2,
            posts: 24,
            reach: 8450,
            color: "bg-pink-100 text-pink-800"
        },
        {
            platform: "Facebook",
            icon: <Facebook className="w-5 h-5" />,
            followers: 1000,
            growth: 8.3,
            engagement: 6.7,
            posts: 18,
            reach: 3240,
            color: "bg-blue-100 text-blue-800"
        },
        {
            platform: "Google",
            icon: <Chrome className="w-5 h-5" />,
            followers: 0,
            growth: 0,
            engagement: 0,
            posts: 0,
            reach: 760,
            color: "bg-gray-100 text-gray-800"
        }
    ];

    // Leads e conversões
    const leadsData = {
        totalLeads: 89,
        convertedLeads: 34,
        conversionRate: 38.2,
        leadSources: [
            { source: "Instagram", leads: 35, conversions: 15 },
            { source: "Facebook", leads: 24, conversions: 10 },
            { source: "Google", leads: 18, conversions: 6 },
            { source: "Indicação", leads: 12, conversions: 3 }
        ]
    };

    // Templates de campanha
    const templates = [
        {
            id: 1,
            name: "Promoção Flash",
            type: "social",
            description: "Template para promoções de curta duração",
            usage: 15
        },
        {
            id: 2,
            name: "Cliente Novo",
            type: "email",
            description: "Campanha de boas-vindas para novos clientes",
            usage: 8
        },
        {
            id: 3,
            name: "Aniversário",
            type: "whatsapp",
            description: "Mensagem personalizada de aniversário",
            usage: 42
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "active": return "bg-green-100 text-green-800";
            case "paused": return "bg-yellow-100 text-yellow-800";
            case "completed": return "bg-blue-100 text-blue-800";
            case "draft": return "bg-gray-100 text-gray-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case "instagram": return <Instagram className="w-4 h-4" />;
            case "facebook": return <Facebook className="w-4 h-4" />;
            case "email": return <Mail className="w-4 h-4" />;
            case "whatsapp": return <MessageSquare className="w-4 h-4" />;
            default: return <Megaphone className="w-4 h-4" />;
        }
    };

    const filteredCampaigns = campaigns.filter(campaign =>
        campaignFilter === "all" || campaign.status === campaignFilter
    );

    return (
        <DashboardLayout plan="professional">
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                            <Megaphone className="w-6 h-6 text-purple-600 mr-2" />
                            Marketing Digital
                        </h1>
                        <p className="text-gray-600">Gerencie campanhas e monitore performance</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                            <Play className="w-4 h-4 mr-2" />
                            Boost Automático
                        </button>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                            <Plus className="w-4 h-4 mr-2" />
                            Nova Campanha
                        </button>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                    <button
                        onClick={() => setActiveTab("overview")}
                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === "overview"
                                ? "bg-white text-purple-600 shadow-sm"
                                : "text-gray-600 hover:text-gray-900"
                            }`}
                    >
                        Visão Geral
                    </button>
                    <button
                        onClick={() => setActiveTab("campaigns")}
                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === "campaigns"
                                ? "bg-white text-purple-600 shadow-sm"
                                : "text-gray-600 hover:text-gray-900"
                            }`}
                    >
                        Campanhas
                    </button>
                    <button
                        onClick={() => setActiveTab("social")}
                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === "social"
                                ? "bg-white text-purple-600 shadow-sm"
                                : "text-gray-600 hover:text-gray-900"
                            }`}
                    >
                        Redes Sociais
                    </button>
                    <button
                        onClick={() => setActiveTab("leads")}
                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === "leads"
                                ? "bg-white text-purple-600 shadow-sm"
                                : "text-gray-600 hover:text-gray-900"
                            }`}
                    >
                        Leads
                    </button>
                </div>

                {/* Marketing Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-600 uppercase">Alcance Total</p>
                                <p className="text-2xl font-semibold text-gray-900">{marketingStats.totalReach.toLocaleString()}</p>
                            </div>
                            <Eye className="w-8 h-8 text-blue-600" />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-600 uppercase">Engajamento</p>
                                <p className="text-2xl font-semibold text-purple-600">{marketingStats.engagement}%</p>
                            </div>
                            <Heart className="w-8 h-8 text-purple-600" />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-600 uppercase">Novos Clientes</p>
                                <p className="text-2xl font-semibold text-green-600">{marketingStats.newClients}</p>
                            </div>
                            <Users className="w-8 h-8 text-green-600" />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-600 uppercase">ROI</p>
                                <p className="text-2xl font-semibold text-orange-600">{marketingStats.roi}%</p>
                            </div>
                            <Target className="w-8 h-8 text-orange-600" />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-600 uppercase">Campanhas Ativas</p>
                                <p className="text-2xl font-semibold text-blue-600">{marketingStats.campaignsActive}</p>
                            </div>
                            <Zap className="w-8 h-8 text-blue-600" />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-600 uppercase">Seguidores</p>
                                <p className="text-2xl font-semibold text-pink-600">{marketingStats.socialFollowers}</p>
                            </div>
                            <Share2 className="w-8 h-8 text-pink-600" />
                        </div>
                    </div>
                </div>

                {/* Content based on active tab */}
                {activeTab === "overview" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Top Performing Campaigns */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Campanhas com Melhor Performance</h3>
                            <div className="space-y-4">
                                {campaigns.slice(0, 3).map((campaign) => (
                                    <div key={campaign.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-2 bg-gray-100 rounded-lg">
                                                {getTypeIcon(campaign.type)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{campaign.name}</p>
                                                <p className="text-xs text-gray-500">{campaign.reach.toLocaleString()} alcance</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-medium text-green-600">{campaign.engagement}%</p>
                                            <p className="text-xs text-gray-500">{campaign.conversions} conversões</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Ações Rápidas</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                                    <Instagram className="w-6 h-6 text-pink-600 mb-2" />
                                    <p className="text-sm font-medium text-gray-900">Post Instagram</p>
                                    <p className="text-xs text-gray-500">Criar novo post</p>
                                </button>
                                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                                    <Mail className="w-6 h-6 text-blue-600 mb-2" />
                                    <p className="text-sm font-medium text-gray-900">Email Marketing</p>
                                    <p className="text-xs text-gray-500">Enviar newsletter</p>
                                </button>
                                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                                    <MessageSquare className="w-6 h-6 text-green-600 mb-2" />
                                    <p className="text-sm font-medium text-gray-900">WhatsApp</p>
                                    <p className="text-xs text-gray-500">Mensagem em massa</p>
                                </button>
                                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                                    <Award className="w-6 h-6 text-purple-600 mb-2" />
                                    <p className="text-sm font-medium text-gray-900">Promoção</p>
                                    <p className="text-xs text-gray-500">Criar promoção</p>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "campaigns" && (
                    <div className="space-y-6">
                        {/* Campaign Filters */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                            <div className="flex items-center justify-between">
                                <select
                                    value={campaignFilter}
                                    onChange={(e) => setCampaignFilter(e.target.value)}
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                >
                                    <option value="all">Todas as Campanhas</option>
                                    <option value="active">Ativas</option>
                                    <option value="paused">Pausadas</option>
                                    <option value="completed">Finalizadas</option>
                                </select>
                                <div className="text-sm text-gray-500">
                                    {filteredCampaigns.length} campanhas encontradas
                                </div>
                            </div>
                        </div>

                        {/* Campaigns List */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <div className="divide-y divide-gray-200">
                                {filteredCampaigns.map((campaign) => (
                                    <div key={campaign.id} className="p-6">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-start space-x-4">
                                                <div className="p-3 bg-gray-100 rounded-lg">
                                                    {getTypeIcon(campaign.type)}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-2 mb-2">
                                                        <h4 className="text-lg font-medium text-gray-900">{campaign.name}</h4>
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                                                            {campaign.status}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-600 mb-3">{campaign.description}</p>

                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                        <div>
                                                            <p className="text-gray-600">Orçamento</p>
                                                            <p className="font-medium">R$ {campaign.budget}</p>
                                                            <div className="mt-1 bg-gray-200 rounded-full h-2">
                                                                <div
                                                                    className="bg-blue-600 h-2 rounded-full"
                                                                    style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-600">Alcance</p>
                                                            <p className="font-medium">{campaign.reach.toLocaleString()}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-600">Engajamento</p>
                                                            <p className="font-medium text-purple-600">{campaign.engagement}%</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-600">Conversões</p>
                                                            <p className="font-medium text-green-600">{campaign.conversions}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-2">
                                                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "social" && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {socialMedia.map((platform, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <div className={`p-2 rounded-lg ${platform.color}`}>
                                            {platform.icon}
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-900">{platform.platform}</h3>
                                    </div>
                                    <div className="flex items-center text-green-600">
                                        <TrendingUp className="w-4 h-4 mr-1" />
                                        <span className="text-sm font-medium">{platform.growth.toFixed(1)}%</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-gray-600">Seguidores</p>
                                            <p className="text-xl font-semibold text-gray-900">{platform.followers.toLocaleString()}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Posts</p>
                                            <p className="text-xl font-semibold text-gray-900">{platform.posts}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Alcance</p>
                                            <p className="text-lg font-medium text-blue-600">{platform.reach.toLocaleString()}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Engajamento</p>
                                            <p className="text-lg font-medium text-purple-600">{platform.engagement}%</p>
                                        </div>
                                    </div>

                                    <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                                        <Send className="w-4 h-4 mr-2" />
                                        Criar Post
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "leads" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Leads Overview */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-6">Resumo de Leads</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Total de Leads</p>
                                        <p className="text-2xl font-semibold text-blue-600">{leadsData.totalLeads}</p>
                                    </div>
                                    <Users className="w-8 h-8 text-blue-600" />
                                </div>
                                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Leads Convertidos</p>
                                        <p className="text-2xl font-semibold text-green-600">{leadsData.convertedLeads}</p>
                                    </div>
                                    <Target className="w-8 h-8 text-green-600" />
                                </div>
                                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Taxa de Conversão</p>
                                        <p className="text-2xl font-semibold text-purple-600">{leadsData.conversionRate}%</p>
                                    </div>
                                    <Award className="w-8 h-8 text-purple-600" />
                                </div>
                            </div>
                        </div>

                        {/* Lead Sources */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-6">Fontes de Leads</h3>
                            <div className="space-y-4">
                                {leadsData.leadSources.map((source, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                                            <span className="text-sm font-medium text-gray-900">{source.source}</span>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-medium text-gray-900">{source.leads} leads</p>
                                            <p className="text-xs text-green-600">{source.conversions} conversões</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Templates Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-medium text-gray-900">Templates de Campanha</h3>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                            <Plus className="w-4 h-4 mr-2" />
                            Novo Template
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {templates.map((template) => (
                            <div key={template.id} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors cursor-pointer">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-medium text-gray-900">{template.name}</h4>
                                    <span className="text-xs text-gray-500">{template.usage} usos</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                        {template.type}
                                    </span>
                                    <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                                        Usar Template
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
