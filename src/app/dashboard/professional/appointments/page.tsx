"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
    Calendar,
    Clock,
    Search,
    Plus,
    Edit,
    Trash2,
    Phone,
    MessageSquare,
    Star,
    Scissors,
    DollarSign,
    User,
    CheckCircle,
    XCircle,
    AlertCircle,
    Calendar as CalendarIcon,
    RefreshCw,
    Download,
    Eye,
    Bell
} from "lucide-react";
import { useState } from "react";

export default function ProfessionalAppointments() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [dateFilter, setDateFilter] = useState("today");
    const [professionalFilter, setProfessionalFilter] = useState("all");
    const [view, setView] = useState("list"); // list, calendar, analytics

    // Dados simulados para agendamentos
    const appointments = [
        {
            id: 1,
            clientName: "Maria Santos",
            clientPhone: "(11) 99999-0001",
            service: "Corte + Coloração",
            professional: "Ana Silva",
            date: "2024-01-15",
            time: "09:00",
            duration: 120,
            price: 180,
            status: "confirmed",
            notes: "Cliente quer corte bob e luzes mel",
            clientRating: 4.8,
            isRecurring: true,
            source: "whatsapp",
            reminderSent: true
        },
        {
            id: 2,
            clientName: "João Silva",
            clientPhone: "(11) 99999-0002",
            service: "Corte Masculino",
            professional: "Carlos Santos",
            date: "2024-01-15",
            time: "10:30",
            duration: 45,
            price: 35,
            status: "pending",
            notes: "",
            clientRating: 4.5,
            isRecurring: false,
            source: "site",
            reminderSent: false
        },
        {
            id: 3,
            clientName: "Ana Costa",
            clientPhone: "(11) 99999-0003",
            service: "Escova Progressiva",
            professional: "Maria Costa",
            date: "2024-01-15",
            time: "14:00",
            duration: 180,
            price: 250,
            status: "in_progress",
            notes: "Primeira vez no salão",
            clientRating: 5.0,
            isRecurring: false,
            source: "instagram",
            reminderSent: true
        },
        {
            id: 4,
            clientName: "Pedro Lima",
            clientPhone: "(11) 99999-0004",
            service: "Barba + Bigode",
            professional: "Carlos Santos",
            date: "2024-01-15",
            time: "16:00",
            duration: 30,
            price: 25,
            status: "completed",
            notes: "Cliente regular - corte padrão",
            clientRating: 4.9,
            isRecurring: true,
            source: "indicacao",
            reminderSent: true
        }
    ];

    // Estatísticas do dia
    const todayStats = {
        total: appointments.length,
        confirmed: appointments.filter(apt => apt.status === "confirmed").length,
        pending: appointments.filter(apt => apt.status === "pending").length,
        completed: appointments.filter(apt => apt.status === "completed").length,
        revenue: appointments.reduce((sum, apt) => sum + apt.price, 0),
        avgDuration: Math.round(appointments.reduce((sum, apt) => sum + apt.duration, 0) / appointments.length)
    };

    const filteredAppointments = appointments.filter(appointment => {
        const matchesSearch = appointment.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            appointment.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
            appointment.professional.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = statusFilter === "all" || appointment.status === statusFilter;
        const matchesProfessional = professionalFilter === "all" || appointment.professional === professionalFilter;

        return matchesSearch && matchesStatus && matchesProfessional;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case "confirmed": return "bg-green-100 text-green-800";
            case "pending": return "bg-yellow-100 text-yellow-800";
            case "in_progress": return "bg-blue-100 text-blue-800";
            case "completed": return "bg-gray-100 text-gray-800";
            case "cancelled": return "bg-red-100 text-red-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "confirmed": return <CheckCircle className="w-4 h-4" />;
            case "pending": return <AlertCircle className="w-4 h-4" />;
            case "in_progress": return <RefreshCw className="w-4 h-4" />;
            case "completed": return <CheckCircle className="w-4 h-4" />;
            case "cancelled": return <XCircle className="w-4 h-4" />;
            default: return <AlertCircle className="w-4 h-4" />;
        }
    };

    const getSourceIcon = (source: string) => {
        switch (source) {
            case "whatsapp": return "💬";
            case "site": return "🌐";
            case "instagram": return "📸";
            case "indicacao": return "👥";
            default: return "📞";
        }
    };

    return (
        <DashboardLayout plan="professional">
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                            <Calendar className="w-6 h-6 text-purple-600 mr-2" />
                            Agendamentos Avançados
                        </h1>
                        <p className="text-gray-600">Gestão completa com analytics e automação</p>
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
                                onClick={() => setView("calendar")}
                                className={`px-3 py-2 text-sm font-medium ${view === "calendar" ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-gray-50"}`}
                            >
                                Calendário
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
                            Novo Agendamento
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-600 uppercase">Total Hoje</p>
                                <p className="text-2xl font-semibold text-gray-900">{todayStats.total}</p>
                            </div>
                            <CalendarIcon className="w-8 h-8 text-blue-600" />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-600 uppercase">Confirmados</p>
                                <p className="text-2xl font-semibold text-green-600">{todayStats.confirmed}</p>
                            </div>
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-600 uppercase">Pendentes</p>
                                <p className="text-2xl font-semibold text-yellow-600">{todayStats.pending}</p>
                            </div>
                            <AlertCircle className="w-8 h-8 text-yellow-600" />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-600 uppercase">Finalizados</p>
                                <p className="text-2xl font-semibold text-gray-600">{todayStats.completed}</p>
                            </div>
                            <CheckCircle className="w-8 h-8 text-gray-600" />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-600 uppercase">Faturamento</p>
                                <p className="text-2xl font-semibold text-green-600">R$ {todayStats.revenue}</p>
                            </div>
                            <DollarSign className="w-8 h-8 text-green-600" />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-600 uppercase">Tempo Médio</p>
                                <p className="text-2xl font-semibold text-purple-600">{todayStats.avgDuration}min</p>
                            </div>
                            <Clock className="w-8 h-8 text-purple-600" />
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Buscar por cliente, serviço..."
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
                            <option value="pending">Pendente</option>
                            <option value="confirmed">Confirmado</option>
                            <option value="in_progress">Em Andamento</option>
                            <option value="completed">Finalizado</option>
                            <option value="cancelled">Cancelado</option>
                        </select>

                        <select
                            value={dateFilter}
                            onChange={(e) => setDateFilter(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        >
                            <option value="today">Hoje</option>
                            <option value="tomorrow">Amanhã</option>
                            <option value="week">Esta Semana</option>
                            <option value="month">Este Mês</option>
                        </select>

                        <select
                            value={professionalFilter}
                            onChange={(e) => setProfessionalFilter(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        >
                            <option value="all">Todos Profissionais</option>
                            <option value="Ana Silva">Ana Silva</option>
                            <option value="Carlos Santos">Carlos Santos</option>
                            <option value="Maria Costa">Maria Costa</option>
                        </select>

                        <div className="flex space-x-2">
                            <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                                <Download className="w-4 h-4 mr-2" />
                                Exportar
                            </button>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                                <Bell className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Appointments List */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900">Agendamentos ({filteredAppointments.length})</h3>
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-500">Mostrando {filteredAppointments.length} de {appointments.length}</span>
                            </div>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-200">
                        {filteredAppointments.map((appointment) => (
                            <div key={appointment.id} className="p-6 hover:bg-gray-50 transition-colors">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                                <User className="w-6 h-6 text-purple-600" />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center space-x-2 mb-1">
                                                <h4 className="text-lg font-medium text-gray-900">{appointment.clientName}</h4>
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                                                    {getStatusIcon(appointment.status)}
                                                    <span className="ml-1">{appointment.status}</span>
                                                </span>
                                                {appointment.isRecurring && (
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                        <RefreshCw className="w-3 h-3 mr-1" />
                                                        Recorrente
                                                    </span>
                                                )}
                                                <span className="text-sm">{getSourceIcon(appointment.source)}</span>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                                                <div className="flex items-center">
                                                    <Scissors className="w-4 h-4 mr-2 text-gray-400" />
                                                    <span>{appointment.service}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <User className="w-4 h-4 mr-2 text-gray-400" />
                                                    <span>{appointment.professional}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                                                    <span>{appointment.time} ({appointment.duration}min)</span>
                                                </div>
                                            </div>

                                            <div className="mt-2 flex items-center space-x-4 text-sm text-gray-600">
                                                <div className="flex items-center">
                                                    <Phone className="w-4 h-4 mr-1 text-gray-400" />
                                                    <span>{appointment.clientPhone}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <DollarSign className="w-4 h-4 mr-1 text-gray-400" />
                                                    <span className="font-medium text-green-600">R$ {appointment.price}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                                                    <span>{appointment.clientRating}</span>
                                                </div>
                                                {appointment.reminderSent && (
                                                    <div className="flex items-center">
                                                        <Bell className="w-4 h-4 mr-1 text-green-500" />
                                                        <span className="text-green-600">Lembrete enviado</span>
                                                    </div>
                                                )}
                                            </div>

                                            {appointment.notes && (
                                                <div className="mt-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-2">
                                                    <span className="font-medium">Observações:</span> {appointment.notes}
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

                {filteredAppointments.length === 0 && (
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                        <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum agendamento encontrado</h3>
                        <p className="text-gray-600 mb-6">Ajuste os filtros ou crie um novo agendamento para começar.</p>
                        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center mx-auto">
                            <Plus className="w-4 h-4 mr-2" />
                            Novo Agendamento
                        </button>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}
