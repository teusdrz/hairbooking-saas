"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
    Calendar,
    Clock,
    MapPin,
    Phone,
    X,
    Edit3,
    Plus,
    Filter,
    Search
} from "lucide-react";

interface Appointment {
    id: string;
    date: string;
    time: string;
    service: string;
    unit: string;
    address: string;
    phone: string;
    status: "confirmed" | "pending" | "completed" | "cancelled";
    price: number;
    duration: number;
}

export default function ClientDashboardPage() {
    const router = useRouter();
    const [appointments, setAppointments] = useState<Appointment[]>([
        {
            id: "1",
            date: "2024-11-12",
            time: "14:30",
            service: "Corte de Cabelo",
            unit: "Unidade Centro",
            address: "Rua das Flores, 123 - Centro",
            phone: "(11) 3325-4400",
            status: "confirmed",
            price: 45,
            duration: 45
        },
        {
            id: "2",
            date: "2024-11-08",
            time: "16:00",
            service: "Corte + Barba",
            unit: "Unidade Zona Sul",
            address: "Av. Paulista, 1000 - Bela Vista",
            phone: "(11) 2240-5500",
            status: "completed",
            price: 75,
            duration: 75
        }
    ]);

    const [filter, setFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const statusConfig = {
        confirmed: { label: "Confirmado", color: "bg-green-100 text-green-800" },
        pending: { label: "Pendente", color: "bg-yellow-100 text-yellow-800" },
        completed: { label: "Concluído", color: "bg-blue-100 text-blue-800" },
        cancelled: { label: "Cancelado", color: "bg-red-100 text-red-800" }
    };

    const filteredAppointments = appointments.filter(appointment => {
        const matchesFilter = filter === "all" || appointment.status === filter;
        const matchesSearch = appointment.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
            appointment.unit.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const cancelAppointment = (id: string) => {
        setAppointments(appointments.map(apt =>
            apt.id === id ? { ...apt, status: "cancelled" as const } : apt
        ));
    };

    const rescheduleAppointment = (id: string) => {
        // Redirect to booking system with reschedule mode
        router.push(`/client?reschedule=${id}`);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                                <Calendar className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-black">Meus Agendamentos</h1>
                                <p className="text-sm text-gray-600">Gerencie seus horários</p>
                            </div>
                        </div>
                        <button
                            onClick={() => router.push('/client')}
                            className="px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 flex items-center gap-2"
                        >
                            <Plus className="h-4 w-4" />
                            Novo Agendamento
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Filters and Search */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar por serviço ou unidade..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4 text-gray-400" />
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        >
                            <option value="all">Todos</option>
                            <option value="confirmed">Confirmados</option>
                            <option value="pending">Pendentes</option>
                            <option value="completed">Concluídos</option>
                            <option value="cancelled">Cancelados</option>
                        </select>
                    </div>
                </div>

                {/* Appointments List */}
                <div className="space-y-4">
                    {filteredAppointments.length === 0 ? (
                        <Card className="border-gray-200">
                            <CardContent className="p-12 text-center">
                                <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhum agendamento encontrado</h3>
                                <p className="text-gray-600 mb-6">
                                    {searchTerm || filter !== "all"
                                        ? "Tente ajustar os filtros ou buscar por outros termos."
                                        : "Você ainda não possui agendamentos. Que tal fazer o primeiro?"
                                    }
                                </p>
                                <button
                                    onClick={() => router.push('/client')}
                                    className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200"
                                >
                                    Fazer Agendamento
                                </button>
                            </CardContent>
                        </Card>
                    ) : (
                        filteredAppointments.map((appointment) => (
                            <Card key={appointment.id} className="border-gray-200 hover:shadow-lg transition-all duration-200">
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <h3 className="text-lg font-semibold text-black">{appointment.service}</h3>
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusConfig[appointment.status].color}`}>
                                                    {statusConfig[appointment.status].label}
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>{new Date(appointment.date).toLocaleDateString('pt-BR')}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4" />
                                                    <span>{appointment.time} ({appointment.duration}min)</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-4 w-4" />
                                                    <span>{appointment.unit}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Phone className="h-4 w-4" />
                                                    <span>{appointment.phone}</span>
                                                </div>
                                            </div>

                                            <div className="mt-4 text-sm text-gray-500">
                                                {appointment.address}
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-end gap-4 ml-6">
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-black">R$ {appointment.price}</div>
                                            </div>

                                            {appointment.status === "confirmed" && (
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => rescheduleAppointment(appointment.id)}
                                                        className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
                                                        title="Reagendar"
                                                    >
                                                        <Edit3 className="h-4 w-4 text-gray-600" />
                                                    </button>
                                                    <button
                                                        onClick={() => cancelAppointment(appointment.id)}
                                                        className="p-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-all duration-200"
                                                        title="Cancelar"
                                                    >
                                                        <X className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            )}

                                            {appointment.status === "completed" && (
                                                <button
                                                    onClick={() => router.push('/client')}
                                                    className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-200"
                                                >
                                                    Agendar Novamente
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>

                {/* Quick Actions */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer" onClick={() => router.push('/client')}>
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Plus className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="font-semibold text-black mb-2">Novo Agendamento</h3>
                            <p className="text-sm text-gray-600">Agende um novo horário</p>
                        </CardContent>
                    </Card>

                    <Card className="border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer">
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Calendar className="h-6 w-6 text-black" />
                            </div>
                            <h3 className="font-semibold text-black mb-2">Histórico</h3>
                            <p className="text-sm text-gray-600">Veja seus agendamentos passados</p>
                        </CardContent>
                    </Card>

                    <Card className="border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer">
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Phone className="h-6 w-6 text-black" />
                            </div>
                            <h3 className="font-semibold text-black mb-2">Suporte</h3>
                            <p className="text-sm text-gray-600">Entre em contato conosco</p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-50 border-t border-gray-200 mt-20">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="text-center text-gray-600">
                        <p className="mb-4">© 2024 HairBooking. Todos os direitos reservados.</p>
                        <div className="flex items-center justify-center gap-8 text-sm">
                            <a href="#" className="hover:text-black transition-colors font-medium">Termos de Uso</a>
                            <a href="#" className="hover:text-black transition-colors font-medium">Política de Privacidade</a>
                            <a href="#" className="hover:text-black transition-colors font-medium">Suporte</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
