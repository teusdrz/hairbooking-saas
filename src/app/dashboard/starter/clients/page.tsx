"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
    Users,
    User,
    Phone,
    Mail,
    Plus,
    Search,
    Filter,
    Calendar,
    DollarSign,
    Edit,
    Trash2,
    Eye,
    MapPin,
    Star,
    Clock
} from "lucide-react";
import { useState } from "react";

export default function StarterClients() {
    const [filter, setFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    // Dados simulados de clientes
    const clients = [
        {
            id: 1,
            name: "Maria Silva",
            email: "maria.silva@email.com",
            phone: "(11) 99999-1234",
            address: "Rua das Flores, 123 - Vila Madalena",
            registeredAt: "2024-05-15",
            lastVisit: "2025-11-01",
            totalVisits: 12,
            totalSpent: "R$ 1.440",
            status: "active",
            preferences: "Corte em camadas, gosta de produtos naturais",
            birthday: "1990-03-15",
            rating: 5
        },
        {
            id: 2,
            name: "João Santos",
            email: "joao.santos@email.com",
            phone: "(11) 98888-5678",
            address: "Av. Paulista, 456 - Bela Vista",
            registeredAt: "2024-08-22",
            lastVisit: "2025-10-28",
            totalVisits: 8,
            totalSpent: "R$ 360",
            status: "active",
            preferences: "Corte simples, sempre às terças",
            birthday: "1985-07-20",
            rating: 4
        },
        {
            id: 3,
            name: "Ana Costa",
            email: "ana.costa@email.com",
            phone: "(11) 97777-9012",
            address: "Rua Augusta, 789 - Consolação",
            registeredAt: "2024-01-10",
            lastVisit: "2025-10-15",
            totalVisits: 25,
            totalSpent: "R$ 3.750",
            status: "vip",
            preferences: "Coloração loira, hidratação mensal",
            birthday: "1988-12-05",
            rating: 5
        },
        {
            id: 4,
            name: "Pedro Lima",
            email: "pedro.lima@email.com",
            phone: "(11) 96666-3456",
            address: "Rua Oscar Freire, 321 - Jardins",
            registeredAt: "2024-09-03",
            lastVisit: "2025-09-20",
            totalVisits: 3,
            totalSpent: "R$ 75",
            status: "inactive",
            preferences: "Barba bem aparada",
            birthday: "1992-11-30",
            rating: 3
        },
        {
            id: 5,
            name: "Carla Souza",
            email: "carla.souza@email.com",
            phone: "(11) 95555-7890",
            address: "Rua da Consolação, 654 - Centro",
            registeredAt: "2024-06-18",
            lastVisit: "2025-11-03",
            totalVisits: 15,
            totalSpent: "R$ 1.200",
            status: "active",
            preferences: "Cabelo cacheado, produtos sem sulfato",
            birthday: "1995-04-10",
            rating: 5
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "active":
                return "bg-green-100 text-green-800";
            case "vip":
                return "bg-purple-100 text-purple-800";
            case "inactive":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case "active":
                return "Ativo";
            case "vip":
                return "VIP";
            case "inactive":
                return "Inativo";
            default:
                return "Desconhecido";
        }
    };

    const filteredClients = clients.filter(client => {
        const matchesFilter = filter === "all" || client.status === filter;
        const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.phone.includes(searchTerm);
        return matchesFilter && matchesSearch;
    });

    const totalClients = clients.length;
    const activeClients = clients.filter(c => c.status === "active").length;
    const vipClients = clients.filter(c => c.status === "vip").length;
    const thisMonthClients = clients.filter(c => {
        const registeredDate = new Date(c.registeredAt);
        const thisMonth = new Date();
        return registeredDate.getMonth() === thisMonth.getMonth() && registeredDate.getFullYear() === thisMonth.getFullYear();
    }).length;

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
        ));
    };

    return (
        <DashboardLayout plan="starter">
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                            <Users className="w-6 h-6 text-green-600 mr-2" />
                            Clientes
                        </h1>
                        <p className="text-gray-600">Gerencie o cadastro de todos os seus clientes</p>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
                        <Plus className="w-4 h-4 mr-2" />
                        Novo Cliente
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <Users className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-600">Total</p>
                                <p className="text-2xl font-semibold text-gray-900">{totalClients}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <User className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-600">Ativos</p>
                                <p className="text-2xl font-semibold text-gray-900">{activeClients}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <Star className="w-5 h-5 text-purple-600" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-600">VIP</p>
                                <p className="text-2xl font-semibold text-gray-900">{vipClients}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center">
                            <div className="p-2 bg-orange-100 rounded-lg">
                                <Plus className="w-5 h-5 text-orange-600" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-600">Novos (mês)</p>
                                <p className="text-2xl font-semibold text-gray-900">{thisMonthClients}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters and Search */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Buscar por nome, email ou telefone..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                />
                            </div>
                        </div>

                        {/* Filter */}
                        <div className="flex items-center space-x-2">
                            <Filter className="w-4 h-4 text-gray-400" />
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            >
                                <option value="all">Todos</option>
                                <option value="active">Ativos</option>
                                <option value="vip">VIP</option>
                                <option value="inactive">Inativos</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Clients List */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">
                            Lista de Clientes ({filteredClients.length})
                        </h3>
                    </div>
                    <div className="overflow-hidden">
                        {filteredClients.length === 0 ? (
                            <div className="text-center py-12">
                                <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum cliente encontrado</h3>
                                <p className="text-gray-500">Tente ajustar os filtros ou adicionar um novo cliente.</p>
                            </div>
                        ) : (
                            <div className="divide-y divide-gray-200">
                                {filteredClients.map((client) => (
                                    <div key={client.id} className="p-6 hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex-shrink-0">
                                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                                        <User className="w-6 h-6 text-gray-600" />
                                                    </div>
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <div className="flex items-center space-x-2 mb-1">
                                                        <h4 className="text-sm font-medium text-gray-900">
                                                            {client.name}
                                                        </h4>
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}>
                                                            {getStatusText(client.status)}
                                                        </span>
                                                        <div className="flex items-center">
                                                            {renderStars(client.rating)}
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                            <span className="flex items-center">
                                                                <Mail className="w-3 h-3 mr-1" />
                                                                {client.email}
                                                            </span>
                                                            <span className="flex items-center">
                                                                <Phone className="w-3 h-3 mr-1" />
                                                                {client.phone}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-500">
                                                            <MapPin className="w-3 h-3 mr-1" />
                                                            {client.address}
                                                        </div>
                                                        {client.preferences && (
                                                            <p className="text-sm text-gray-600 italic">{client.preferences}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-6">
                                                <div className="text-right">
                                                    <div className="text-sm font-medium text-gray-900 flex items-center">
                                                        <Calendar className="w-3 h-3 mr-1" />
                                                        {client.totalVisits} visitas
                                                    </div>
                                                    <div className="text-sm font-medium text-green-600 flex items-center">
                                                        <DollarSign className="w-3 h-3 mr-1" />
                                                        {client.totalSpent}
                                                    </div>
                                                    <div className="text-sm text-gray-500 flex items-center">
                                                        <Clock className="w-3 h-3 mr-1" />
                                                        Última: {new Date(client.lastVisit).toLocaleDateString('pt-BR')}
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                                                        <Eye className="w-4 h-4" />
                                                    </button>
                                                    <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                                                        <Edit className="w-4 h-4" />
                                                    </button>
                                                    <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
