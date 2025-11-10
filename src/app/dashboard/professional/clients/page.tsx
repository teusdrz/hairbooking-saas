"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
    Users,
    Search,
    Plus,
    Edit,
    Trash2,
    Phone,
    MessageSquare,
    Star,
    Calendar,
    DollarSign,
    User,
    Mail,
    MapPin,
    Clock,
    Eye,
    Filter,
    Download,
    Send,
    Heart,
    Gift,
    Award,
    Target,
    Zap
} from "lucide-react";
import { useState } from "react";

export default function ProfessionalClients() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [segmentFilter, setSegmentFilter] = useState("all");
    const [view, setView] = useState("list"); // list, segments, analytics

    // Dados simulados para clientes
    const clients = [
        {
            id: 1,
            name: "Maria Santos",
            email: "maria.santos@email.com",
            phone: "(11) 99999-0001",
            address: "Rua das Flores, 123 - Jardins",
            birthDate: "1985-05-15",
            registrationDate: "2023-01-15",
            status: "vip",
            totalVisits: 24,
            totalSpent: 4320,
            averageTicket: 180,
            lastVisit: "2024-01-10",
            nextAppointment: "2024-01-20",
            preferredProfessional: "Ana Silva",
            favoriteServices: ["Corte + Coloração", "Hidratação"],
            rating: 4.9,
            segment: "premium",
            loyaltyPoints: 432,
            referrals: 3,
            socialMedia: "Instagram: @mariasantos",
            notes: "Prefere agendamentos pela manhã. Alérgica a amônia.",
            marketingConsent: true,
            communicationPreference: "whatsapp"
        },
        {
            id: 2,
            name: "João Silva",
            email: "joao.silva@email.com",
            phone: "(11) 99999-0002",
            address: "Av. Paulista, 456 - Bela Vista",
            birthDate: "1990-08-22",
            registrationDate: "2023-06-20",
            status: "regular",
            totalVisits: 8,
            totalSpent: 280,
            averageTicket: 35,
            lastVisit: "2024-01-05",
            nextAppointment: null,
            preferredProfessional: "Carlos Santos",
            favoriteServices: ["Corte Masculino"],
            rating: 4.5,
            segment: "standard",
            loyaltyPoints: 28,
            referrals: 0,
            socialMedia: null,
            notes: "Cliente pontual. Gosta de conversar sobre futebol.",
            marketingConsent: false,
            communicationPreference: "phone"
        },
        {
            id: 3,
            name: "Ana Costa",
            email: "ana.costa@email.com",
            phone: "(11) 99999-0003",
            address: "Rua Augusta, 789 - Consolação",
            birthDate: "1992-12-03",
            registrationDate: "2023-11-10",
            status: "new",
            totalVisits: 2,
            totalSpent: 380,
            averageTicket: 190,
            lastVisit: "2024-01-08",
            nextAppointment: "2024-01-18",
            preferredProfessional: "Maria Costa",
            favoriteServices: ["Escova Progressiva"],
            rating: 5.0,
            segment: "potential_vip",
            loyaltyPoints: 38,
            referrals: 1,
            socialMedia: "Instagram: @aninhacosta",
            notes: "Primeira vez no salão. Muito satisfeita.",
            marketingConsent: true,
            communicationPreference: "email"
        }
    ];

    // Estatísticas dos clientes
    const clientStats = {
        total: clients.length,
        new: clients.filter(client => client.status === "new").length,
        regular: clients.filter(client => client.status === "regular").length,
        vip: clients.filter(client => client.status === "vip").length,
        totalRevenue: clients.reduce((sum, client) => sum + client.totalSpent, 0),
        averageTicket: clients.reduce((sum, client) => sum + client.averageTicket, 0) / clients.length,
        totalReferrals: clients.reduce((sum, client) => sum + client.referrals, 0),
        totalLoyaltyPoints: clients.reduce((sum, client) => sum + client.loyaltyPoints, 0)
    };

    // Segmentação de clientes
    const segments = [
        {
            name: "Premium VIP",
            count: clients.filter(c => c.segment === "premium").length,
            color: "bg-purple-100 text-purple-800",
            description: "Clientes de alto valor com gastos > R$ 3000"
        },
        {
            name: "VIP Potencial",
            count: clients.filter(c => c.segment === "potential_vip").length,
            color: "bg-blue-100 text-blue-800",
            description: "Clientes promissores com potencial de crescimento"
        },
        {
            name: "Standard",
            count: clients.filter(c => c.segment === "standard").length,
            color: "bg-green-100 text-green-800",
            description: "Clientes regulares com frequência estável"
        },
        {
            name: "Em Risco",
            count: 0,
            color: "bg-red-100 text-red-800",
            description: "Clientes com risco de churn"
        }
    ];

    const filteredClients = clients.filter(client => {
        const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.phone.includes(searchTerm);

        const matchesStatus = statusFilter === "all" || client.status === statusFilter;
        const matchesSegment = segmentFilter === "all" || client.segment === segmentFilter;

        return matchesSearch && matchesStatus && matchesSegment;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case "vip": return "bg-purple-100 text-purple-800";
            case "regular": return "bg-green-100 text-green-800";
            case "new": return "bg-blue-100 text-blue-800";
            case "inactive": return "bg-red-100 text-red-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "vip": return <Award className="w-4 h-4" />;
            case "regular": return <User className="w-4 h-4" />;
            case "new": return <Zap className="w-4 h-4" />;
            case "inactive": return <Clock className="w-4 h-4" />;
            default: return <User className="w-4 h-4" />;
        }
    };

    return (
        <DashboardLayout plan="professional">
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                            <Users className="w-6 h-6 text-purple-600 mr-2" />
                            Gestão Avançada de Clientes
                        </h1>
                        <p className="text-gray-600">CRM completo com segmentação e fidelização</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="flex rounded-lg border border-gray-300 bg-white">
                            <button
                                onClick={() => setView("list")}
                                className={`px-3 py-2 text-sm font-medium rounded-l-lg ${view === "list" ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-gray-50"}`}
                            >
                                Lista
                            </button>
                            <button
                                onClick={() => setView("segments")}
                                className={`px-3 py-2 text-sm font-medium ${view === "segments" ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-gray-50"}`}
                            >
                                Segmentos
                            </button>
                            <button
                                onClick={() => setView("analytics")}
                                className={`px-3 py-2 text-sm font-medium rounded-r-lg ${view === "analytics" ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-gray-50"}`}
                            >
                                Analytics
                            </button>
                        </div>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                            <Plus className="w-4 h-4 mr-2" />
                            Novo Cliente
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total de Clientes</p>
                                <p className="text-2xl font-semibold text-gray-900">{clientStats.total}</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-xs text-gray-500">
                                        {clientStats.new} novos este mês
                                    </span>
                                </div>
                            </div>
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Clientes VIP</p>
                                <p className="text-2xl font-semibold text-purple-600">{clientStats.vip}</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-xs text-gray-500">
                                        {((clientStats.vip / clientStats.total) * 100).toFixed(1)}% do total
                                    </span>
                                </div>
                            </div>
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <Award className="w-6 h-6 text-purple-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Faturamento Total</p>
                                <p className="text-2xl font-semibold text-green-600">
                                    R$ {clientStats.totalRevenue.toLocaleString('pt-BR')}
                                </p>
                                <div className="flex items-center mt-1">
                                    <span className="text-xs text-gray-500">
                                        Ticket médio: R$ {clientStats.averageTicket.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                            <div className="p-3 bg-green-100 rounded-lg">
                                <DollarSign className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Indicações</p>
                                <p className="text-2xl font-semibold text-orange-600">{clientStats.totalReferrals}</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-xs text-gray-500">
                                        {clientStats.totalLoyaltyPoints} pontos de fidelidade
                                    </span>
                                </div>
                            </div>
                            <div className="p-3 bg-orange-100 rounded-lg">
                                <Gift className="w-6 h-6 text-orange-600" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Segments Overview */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Segmentação de Clientes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {segments.map((segment, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${segment.color}`}>
                                        {segment.name}
                                    </span>
                                    <span className="text-2xl font-semibold text-gray-900">{segment.count}</span>
                                </div>
                                <p className="text-xs text-gray-600">{segment.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Buscar cliente..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>

                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        >
                            <option value="all">Todos os Status</option>
                            <option value="new">Novo</option>
                            <option value="regular">Regular</option>
                            <option value="vip">VIP</option>
                            <option value="inactive">Inativo</option>
                        </select>

                        <select
                            value={segmentFilter}
                            onChange={(e) => setSegmentFilter(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        >
                            <option value="all">Todos os Segmentos</option>
                            <option value="premium">Premium VIP</option>
                            <option value="potential_vip">VIP Potencial</option>
                            <option value="standard">Standard</option>
                        </select>

                        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                            <Filter className="w-4 h-4 mr-2" />
                            Filtros Avançados
                        </button>

                        <div className="flex space-x-2">
                            <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                                <Download className="w-4 h-4 mr-2" />
                                Exportar
                            </button>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Clients List */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900">Clientes ({filteredClients.length})</h3>
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-500">Mostrando {filteredClients.length} de {clients.length}</span>
                            </div>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-200">
                        {filteredClients.map((client) => (
                            <div key={client.id} className="p-6 hover:bg-gray-50 transition-colors">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                                <User className="w-6 h-6 text-purple-600" />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center space-x-2 mb-1">
                                                <h4 className="text-lg font-medium text-gray-900">{client.name}</h4>
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}>
                                                    {getStatusIcon(client.status)}
                                                    <span className="ml-1">{client.status}</span>
                                                </span>
                                                {client.marketingConsent && (
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                        <Heart className="w-3 h-3 mr-1" />
                                                        Marketing OK
                                                    </span>
                                                )}
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-2">
                                                <div className="flex items-center">
                                                    <Mail className="w-4 h-4 mr-2 text-gray-400" />
                                                    <span>{client.email}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Phone className="w-4 h-4 mr-2 text-gray-400" />
                                                    <span>{client.phone}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                                                    <span className="truncate">{client.address}</span>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm mb-2">
                                                <div className="flex items-center text-gray-600">
                                                    <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                                                    <span>{client.totalVisits} visitas</span>
                                                </div>
                                                <div className="flex items-center text-green-600 font-medium">
                                                    <DollarSign className="w-4 h-4 mr-1 text-gray-400" />
                                                    <span>R$ {client.totalSpent.toLocaleString('pt-BR')}</span>
                                                </div>
                                                <div className="flex items-center text-gray-600">
                                                    <Target className="w-4 h-4 mr-1 text-gray-400" />
                                                    <span>Ticket: R$ {client.averageTicket}</span>
                                                </div>
                                                <div className="flex items-center text-yellow-600">
                                                    <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                                                    <span>{client.rating}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                                                <div className="flex items-center">
                                                    <Gift className="w-4 h-4 mr-1 text-orange-400" />
                                                    <span>{client.loyaltyPoints} pontos</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Users className="w-4 h-4 mr-1 text-blue-400" />
                                                    <span>{client.referrals} indicações</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Clock className="w-4 h-4 mr-1 text-gray-400" />
                                                    <span>Última visita: {client.lastVisit}</span>
                                                </div>
                                            </div>

                                            <div className="text-sm text-gray-600">
                                                <span className="font-medium">Serviços favoritos:</span> {client.favoriteServices.join(", ")}
                                            </div>

                                            {client.notes && (
                                                <div className="mt-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-2">
                                                    <span className="font-medium">Observações:</span> {client.notes}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                                            <MessageSquare className="w-4 h-4" />
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

                {filteredClients.length === 0 && (
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                        <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum cliente encontrado</h3>
                        <p className="text-gray-600 mb-6">Ajuste os filtros ou cadastre um novo cliente para começar.</p>
                        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center mx-auto">
                            <Plus className="w-4 h-4 mr-2" />
                            Novo Cliente
                        </button>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}
