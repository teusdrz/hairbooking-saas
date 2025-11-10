"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
    Calendar,
    Clock,
    User,
    Phone,
    Plus,
    Search,
    Filter,
    CheckCircle,
    XCircle,
    AlertCircle,
    Edit,
    Trash2
} from "lucide-react";
import { useState } from "react";

export default function StarterAppointments() {
    const [filter, setFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    // Dados simulados de agendamentos
    const appointments = [
        {
            id: 1,
            client: "Maria Silva",
            phone: "(11) 99999-1234",
            service: "Corte + Escova",
            date: "2025-11-05",
            time: "09:00",
            duration: "1h 30min",
            price: "R$ 120",
            status: "confirmed",
            professional: "Ana",
            notes: "Cliente regular, prefere corte em camadas"
        },
        {
            id: 2,
            client: "João Santos",
            phone: "(11) 98888-5678",
            service: "Corte Masculino",
            date: "2025-11-05",
            time: "10:30",
            duration: "45min",
            price: "R$ 45",
            status: "completed",
            professional: "Carlos",
            notes: ""
        },
        {
            id: 3,
            client: "Ana Costa",
            phone: "(11) 97777-9012",
            service: "Coloração",
            date: "2025-11-05",
            time: "14:00",
            duration: "2h",
            price: "R$ 180",
            status: "confirmed",
            professional: "Maria",
            notes: "Primeira coloração"
        },
        {
            id: 4,
            client: "Pedro Lima",
            phone: "(11) 96666-3456",
            service: "Barba",
            date: "2025-11-05",
            time: "15:30",
            duration: "30min",
            price: "R$ 25",
            status: "pending",
            professional: "Carlos",
            notes: ""
        },
        {
            id: 5,
            client: "Carla Souza",
            phone: "(11) 95555-7890",
            service: "Hidratação",
            date: "2025-11-06",
            time: "09:00",
            duration: "1h",
            price: "R$ 80",
            status: "confirmed",
            professional: "Ana",
            notes: "Cabelo muito ressecado"
        }
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "completed":
                return <CheckCircle className="w-4 h-4 text-green-600" />;
            case "confirmed":
                return <Clock className="w-4 h-4 text-blue-600" />;
            case "pending":
                return <AlertCircle className="w-4 h-4 text-orange-600" />;
            case "cancelled":
                return <XCircle className="w-4 h-4 text-red-600" />;
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
            case "cancelled":
                return "Cancelado";
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
            case "cancelled":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    const filteredAppointments = appointments.filter(appointment => {
        const matchesFilter = filter === "all" || appointment.status === filter;
        const matchesSearch = appointment.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
            appointment.service.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const todayAppointments = appointments.filter(apt => apt.date === "2025-11-05").length;
    const completedToday = appointments.filter(apt => apt.date === "2025-11-05" && apt.status === "completed").length;
    const pendingToday = appointments.filter(apt => apt.date === "2025-11-05" && apt.status === "pending").length;

    return (
        <DashboardLayout plan="starter">
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                            <Calendar className="w-6 h-6 text-blue-600 mr-2" />
                            Agendamentos
                        </h1>
                        <p className="text-gray-600">Gerencie todos os agendamentos do seu salão</p>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                        <Plus className="w-4 h-4 mr-2" />
                        Novo Agendamento
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <Calendar className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-600">Hoje</p>
                                <p className="text-2xl font-semibold text-gray-900">{todayAppointments}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-600">Concluídos</p>
                                <p className="text-2xl font-semibold text-gray-900">{completedToday}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center">
                            <div className="p-2 bg-orange-100 rounded-lg">
                                <AlertCircle className="w-5 h-5 text-orange-600" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-600">Pendentes</p>
                                <p className="text-2xl font-semibold text-gray-900">{pendingToday}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <Clock className="w-5 h-5 text-purple-600" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-600">Próximo</p>
                                <p className="text-lg font-semibold text-gray-900">14:00</p>
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
                                    placeholder="Buscar cliente ou serviço..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        {/* Filter */}
                        <div className="flex items-center space-x-2">
                            <Filter className="w-4 h-4 text-gray-400" />
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="all">Todos</option>
                                <option value="confirmed">Confirmados</option>
                                <option value="pending">Pendentes</option>
                                <option value="completed">Concluídos</option>
                                <option value="cancelled">Cancelados</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Appointments List */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">
                            Lista de Agendamentos ({filteredAppointments.length})
                        </h3>
                    </div>
                    <div className="overflow-hidden">
                        {filteredAppointments.length === 0 ? (
                            <div className="text-center py-12">
                                <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum agendamento encontrado</h3>
                                <p className="text-gray-500">Tente ajustar os filtros ou adicionar um novo agendamento.</p>
                            </div>
                        ) : (
                            <div className="divide-y divide-gray-200">
                                {filteredAppointments.map((appointment) => (
                                    <div key={appointment.id} className="p-6 hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex-shrink-0">
                                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                                        <User className="w-6 h-6 text-gray-600" />
                                                    </div>
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <div className="flex items-center space-x-2">
                                                        <h4 className="text-sm font-medium text-gray-900">
                                                            {appointment.client}
                                                        </h4>
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                                                            {getStatusIcon(appointment.status)}
                                                            <span className="ml-1">{getStatusText(appointment.status)}</span>
                                                        </span>
                                                    </div>
                                                    <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                                                        <span>{appointment.service}</span>
                                                        <span>•</span>
                                                        <span>{appointment.professional}</span>
                                                        <span>•</span>
                                                        <span className="flex items-center">
                                                            <Phone className="w-3 h-3 mr-1" />
                                                            {appointment.phone}
                                                        </span>
                                                    </div>
                                                    {appointment.notes && (
                                                        <p className="mt-1 text-sm text-gray-600">{appointment.notes}</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <div className="text-right">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {appointment.time}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {appointment.duration}
                                                    </div>
                                                    <div className="text-sm font-medium text-green-600">
                                                        {appointment.price}
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
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
