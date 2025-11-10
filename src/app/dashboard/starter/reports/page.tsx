"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
    BarChart3,
    Calendar,
    DollarSign,
    TrendingUp,
    Users,
    Star,
    Download,
    Scissors
} from "lucide-react";
import { useState } from "react";

export default function StarterReports() {
    const [dateRange, setDateRange] = useState("thisMonth");

    // Dados simulados para relatórios
    const monthlyData = {
        revenue: 8450,
        appointments: 156,
        clients: 89,
        averageTicket: 54.17,
        previousRevenue: 7230,
        previousAppointments: 142,
        previousClients: 78,
        previousAverageTicket: 50.92
    };

    const serviceData = [
        { name: "Corte Feminino", quantity: 45, revenue: 2700, percentage: 32 },
        { name: "Corte Masculino", quantity: 38, revenue: 1710, percentage: 24 },
        { name: "Coloração", quantity: 22, revenue: 1980, percentage: 23 },
        { name: "Escova", quantity: 28, revenue: 840, percentage: 10 },
        { name: "Hidratação", quantity: 15, revenue: 900, percentage: 11 }
    ];

    const professionalData = [
        { name: "Ana Silva", appointments: 52, revenue: 3120, rating: 4.8 },
        { name: "Carlos Santos", appointments: 47, revenue: 2350, rating: 4.6 },
        { name: "Maria Costa", appointments: 41, revenue: 2980, rating: 4.9 }
    ];

    const weeklyAppointments = [
        { day: "Seg", appointments: 18 },
        { day: "Ter", appointments: 22 },
        { day: "Qua", appointments: 25 },
        { day: "Qui", appointments: 28 },
        { day: "Sex", appointments: 32 },
        { day: "Sáb", appointments: 35 },
        { day: "Dom", appointments: 12 }
    ];

    const calculateGrowth = (current: number, previous: number) => {
        const growth = ((current - previous) / previous) * 100;
        return {
            value: Math.abs(growth),
            isPositive: growth > 0
        };
    };

    const revenueGrowth = calculateGrowth(monthlyData.revenue, monthlyData.previousRevenue);
    const appointmentsGrowth = calculateGrowth(monthlyData.appointments, monthlyData.previousAppointments);
    const clientsGrowth = calculateGrowth(monthlyData.clients, monthlyData.previousClients);
    const ticketGrowth = calculateGrowth(monthlyData.averageTicket, monthlyData.previousAverageTicket);

    const getMaxAppointments = () => Math.max(...weeklyAppointments.map(day => day.appointments));

    return (
        <DashboardLayout plan="starter">
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                            <BarChart3 className="w-6 h-6 text-purple-600 mr-2" />
                            Relatórios Básicos
                        </h1>
                        <p className="text-gray-600">Acompanhe o desempenho do seu salão</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <select
                            value={dateRange}
                            onChange={(e) => setDateRange(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        >
                            <option value="thisWeek">Esta Semana</option>
                            <option value="thisMonth">Este Mês</option>
                            <option value="lastMonth">Mês Passado</option>
                            <option value="last3Months">Últimos 3 Meses</option>
                        </select>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                            <Download className="w-4 h-4 mr-2" />
                            Exportar
                        </button>
                    </div>
                </div>

                {/* Main Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Faturamento</p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    R$ {monthlyData.revenue.toLocaleString('pt-BR')}
                                </p>
                                <div className="flex items-center mt-1">
                                    <TrendingUp className={`w-4 h-4 mr-1 ${revenueGrowth.isPositive ? 'text-green-600' : 'text-red-600'}`} />
                                    <span className={`text-sm font-medium ${revenueGrowth.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                        {revenueGrowth.isPositive ? '+' : '-'}{revenueGrowth.value.toFixed(1)}%
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
                                <p className="text-sm font-medium text-gray-600">Agendamentos</p>
                                <p className="text-2xl font-semibold text-gray-900">{monthlyData.appointments}</p>
                                <div className="flex items-center mt-1">
                                    <TrendingUp className={`w-4 h-4 mr-1 ${appointmentsGrowth.isPositive ? 'text-green-600' : 'text-red-600'}`} />
                                    <span className={`text-sm font-medium ${appointmentsGrowth.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                        {appointmentsGrowth.isPositive ? '+' : '-'}{appointmentsGrowth.value.toFixed(1)}%
                                    </span>
                                </div>
                            </div>
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <Calendar className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Clientes Ativos</p>
                                <p className="text-2xl font-semibold text-gray-900">{monthlyData.clients}</p>
                                <div className="flex items-center mt-1">
                                    <TrendingUp className={`w-4 h-4 mr-1 ${clientsGrowth.isPositive ? 'text-green-600' : 'text-red-600'}`} />
                                    <span className={`text-sm font-medium ${clientsGrowth.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                        {clientsGrowth.isPositive ? '+' : '-'}{clientsGrowth.value.toFixed(1)}%
                                    </span>
                                </div>
                            </div>
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <Users className="w-6 h-6 text-purple-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Ticket Médio</p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    R$ {monthlyData.averageTicket.toFixed(2)}
                                </p>
                                <div className="flex items-center mt-1">
                                    <TrendingUp className={`w-4 h-4 mr-1 ${ticketGrowth.isPositive ? 'text-green-600' : 'text-red-600'}`} />
                                    <span className={`text-sm font-medium ${ticketGrowth.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                        {ticketGrowth.isPositive ? '+' : '-'}{ticketGrowth.value.toFixed(1)}%
                                    </span>
                                </div>
                            </div>
                            <div className="p-3 bg-orange-100 rounded-lg">
                                <Star className="w-6 h-6 text-orange-600" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Weekly Appointments Chart */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-6">Agendamentos por Dia da Semana</h3>
                        <div className="space-y-4">
                            {weeklyAppointments.map((day, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-12 text-sm text-gray-600">{day.day}</div>
                                    <div className="flex-1 mx-4">
                                        <div className="bg-gray-200 rounded-full h-3">
                                            <div
                                                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                                                style={{ width: `${(day.appointments / getMaxAppointments()) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-8 text-sm font-medium text-gray-900">{day.appointments}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Services Performance */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-6">Serviços Mais Vendidos</h3>
                        <div className="space-y-4">
                            {serviceData.map((service, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-gray-100 rounded-lg">
                                            <Scissors className="w-4 h-4 text-gray-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{service.name}</p>
                                            <p className="text-xs text-gray-500">{service.quantity} serviços</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-gray-900">
                                            R$ {service.revenue.toLocaleString('pt-BR')}
                                        </p>
                                        <p className="text-xs text-gray-500">{service.percentage}%</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Professional Performance */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">Performance dos Profissionais</h3>
                    </div>
                    <div className="p-6">
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Profissional</th>
                                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Agendamentos</th>
                                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Faturamento</th>
                                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Avaliação</th>
                                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Ticket Médio</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {professionalData.map((professional, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="py-4 px-4">
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                                                        <span className="text-sm font-medium text-gray-600">
                                                            {professional.name.charAt(0)}
                                                        </span>
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-900">
                                                        {professional.name}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 text-sm text-gray-900">
                                                {professional.appointments}
                                            </td>
                                            <td className="py-4 px-4 text-sm font-medium text-green-600">
                                                R$ {professional.revenue.toLocaleString('pt-BR')}
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center">
                                                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                                    <span className="text-sm text-gray-900">{professional.rating}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 text-sm text-gray-900">
                                                R$ {(professional.revenue / professional.appointments).toFixed(2)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Upgrade Banner */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-medium mb-2">Quer relatórios mais detalhados?</h3>
                            <p className="text-blue-100">
                                Faça upgrade para o plano Professional e tenha acesso a relatórios completos,
                                analytics avançados e muito mais!
                            </p>
                        </div>
                        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                            Fazer Upgrade
                        </button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
