"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
    CreditCard,
    DollarSign,
    TrendingUp,
    Users,
    Calendar,
    Download,
    Filter,
    Eye,
    Edit,
    Calculator,
    Target,
    Award,
    Clock,
    CheckCircle,
    AlertCircle
} from "lucide-react";
import { useState } from "react";

export default function ProfessionalCommissions() {
    const [dateRange, setDateRange] = useState("thisMonth");
    const [professionalFilter, setProfessionalFilter] = useState("all");

    // Dados de comissões
    const commissionStats = {
        totalCommissions: 3250,
        pendingPayment: 890,
        paidThisMonth: 2360,
        averageCommission: 15.5,
        totalProfessionals: 3,
        topPerformer: "Ana Silva"
    };

    // Configurações de comissão por profissional
    const professionals = [
        {
            id: 1,
            name: "Ana Silva",
            role: "Cabeleireira Senior",
            commissionRate: 18,
            services: ["Corte", "Coloração", "Hidratação"],
            thisMonth: {
                revenue: 8920,
                commission: 1605,
                appointments: 89,
                status: "pending"
            },
            totalEarned: 12450,
            averageTicket: 100.22,
            clientSatisfaction: 4.8,
            joinDate: "2023-01-15"
        },
        {
            id: 2,
            name: "Carlos Santos",
            role: "Barbeiro",
            commissionRate: 15,
            services: ["Corte Masculino", "Barba", "Bigode"],
            thisMonth: {
                revenue: 4680,
                commission: 702,
                appointments: 78,
                status: "paid"
            },
            totalEarned: 8940,
            averageTicket: 60.00,
            clientSatisfaction: 4.6,
            joinDate: "2023-03-20"
        },
        {
            id: 3,
            name: "Maria Costa",
            role: "Esteticista",
            commissionRate: 20,
            services: ["Escova", "Progressiva", "Tratamentos"],
            thisMonth: {
                revenue: 4850,
                commission: 970,
                appointments: 67,
                status: "processing"
            },
            totalEarned: 7890,
            averageTicket: 72.39,
            clientSatisfaction: 4.9,
            joinDate: "2023-02-10"
        }
    ];

    // Histórico de comissões
    const commissionHistory = [
        {
            id: 1,
            professional: "Ana Silva",
            period: "Janeiro 2024",
            revenue: 8920,
            commission: 1605,
            rate: 18,
            paidDate: "2024-02-05",
            status: "paid"
        },
        {
            id: 2,
            professional: "Carlos Santos",
            period: "Janeiro 2024",
            revenue: 4680,
            commission: 702,
            rate: 15,
            paidDate: "2024-02-05",
            status: "paid"
        },
        {
            id: 3,
            professional: "Maria Costa",
            period: "Janeiro 2024",
            revenue: 4850,
            commission: 970,
            rate: 20,
            paidDate: null,
            status: "pending"
        }
    ];

    // Metas de comissão
    const targets = [
        {
            professional: "Ana Silva",
            monthlyTarget: 1800,
            current: 1605,
            percentage: 89.2
        },
        {
            professional: "Carlos Santos",
            monthlyTarget: 800,
            current: 702,
            percentage: 87.8
        },
        {
            professional: "Maria Costa",
            monthlyTarget: 1000,
            current: 970,
            percentage: 97.0
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "paid": return "bg-green-100 text-green-800";
            case "pending": return "bg-yellow-100 text-yellow-800";
            case "processing": return "bg-blue-100 text-blue-800";
            case "overdue": return "bg-red-100 text-red-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "paid": return <CheckCircle className="w-4 h-4" />;
            case "pending": return <Clock className="w-4 h-4" />;
            case "processing": return <AlertCircle className="w-4 h-4" />;
            case "overdue": return <AlertCircle className="w-4 h-4" />;
            default: return <Clock className="w-4 h-4" />;
        }
    };

    const filteredProfessionals = professionals.filter(prof =>
        professionalFilter === "all" || prof.name === professionalFilter
    );

    return (
        <DashboardLayout plan="professional">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                            <CreditCard className="w-7 h-7 text-purple-600 mr-3" />
                            Gestão de Comissões
                        </h1>
                        <p className="text-gray-600 mt-2">Controle e pagamento de comissões dos profissionais</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center font-medium">
                            <DollarSign className="w-5 h-5 mr-2" />
                            Processar Pagamentos
                        </button>
                        <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center font-medium">
                            <Download className="w-5 h-5 mr-2" />
                            Relatório
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total de Comissões</p>
                                <p className="text-2xl font-bold text-gray-900">R$ {commissionStats.totalCommissions.toLocaleString()}</p>
                                <div className="flex items-center mt-2">
                                    <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                                    <span className="text-sm font-medium text-green-600">+12% vs mês anterior</span>
                                </div>
                            </div>
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <CreditCard className="w-6 h-6 text-purple-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Pendente Pagamento</p>
                                <p className="text-2xl font-bold text-yellow-600">R$ {commissionStats.pendingPayment.toLocaleString()}</p>
                                <p className="text-sm text-gray-600 mt-2">2 profissionais</p>
                            </div>
                            <div className="p-3 bg-yellow-100 rounded-lg">
                                <Clock className="w-6 h-6 text-yellow-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Pago Este Mês</p>
                                <p className="text-2xl font-bold text-green-600">R$ {commissionStats.paidThisMonth.toLocaleString()}</p>
                                <p className="text-sm text-gray-600 mt-2">1 profissional</p>
                            </div>
                            <div className="p-3 bg-green-100 rounded-lg">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Comissão Média</p>
                                <p className="text-2xl font-bold text-blue-600">{commissionStats.averageCommission}%</p>
                                <p className="text-sm text-gray-600 mt-2">{commissionStats.totalProfessionals} profissionais</p>
                            </div>
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <Calculator className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center space-x-4">
                            <select
                                value={dateRange}
                                onChange={(e) => setDateRange(e.target.value)}
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            >
                                <option value="thisMonth">Este Mês</option>
                                <option value="lastMonth">Mês Passado</option>
                                <option value="quarter">Trimestre</option>
                                <option value="year">Ano</option>
                            </select>
                            <select
                                value={professionalFilter}
                                onChange={(e) => setProfessionalFilter(e.target.value)}
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            >
                                <option value="all">Todos Profissionais</option>
                                {professionals.map(prof => (
                                    <option key={prof.id} value={prof.name}>{prof.name}</option>
                                ))}
                            </select>
                        </div>
                        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
                            <Filter className="w-4 h-4 mr-2" />
                            Filtros Avançados
                        </button>
                    </div>
                </div>

                {/* Professionals Commission Overview */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="px-8 py-6 border-b border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900">Comissões por Profissional</h3>
                    </div>
                    <div className="divide-y divide-gray-200">
                        {filteredProfessionals.map((professional) => (
                            <div key={professional.id} className="p-8">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <Users className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-3 mb-2">
                                                <h4 className="text-lg font-semibold text-gray-900">{professional.name}</h4>
                                                <span className="text-sm text-gray-600">({professional.role})</span>
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(professional.thisMonth.status)}`}>
                                                    {getStatusIcon(professional.thisMonth.status)}
                                                    <span className="ml-1">{professional.thisMonth.status}</span>
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
                                                <div>
                                                    <p className="text-sm text-gray-600">Taxa de Comissão</p>
                                                    <p className="text-lg font-semibold text-purple-600">{professional.commissionRate}%</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Faturamento</p>
                                                    <p className="text-lg font-semibold text-gray-900">R$ {professional.thisMonth.revenue.toLocaleString()}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Comissão</p>
                                                    <p className="text-lg font-semibold text-green-600">R$ {professional.thisMonth.commission.toLocaleString()}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Agendamentos</p>
                                                    <p className="text-lg font-semibold text-blue-600">{professional.thisMonth.appointments}</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                                <div className="flex items-center">
                                                    <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                                                    <span className="text-gray-600">Ticket médio: </span>
                                                    <span className="font-medium text-gray-900 ml-1">R$ {professional.averageTicket.toFixed(2)}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Award className="w-4 h-4 mr-2 text-gray-400" />
                                                    <span className="text-gray-600">Satisfação: </span>
                                                    <span className="font-medium text-gray-900 ml-1">{professional.clientSatisfaction}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                                                    <span className="text-gray-600">Total ganho: </span>
                                                    <span className="font-medium text-gray-900 ml-1">R$ {professional.totalEarned.toLocaleString()}</span>
                                                </div>
                                            </div>

                                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                                <p className="text-sm font-medium text-gray-900 mb-2">Serviços:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {professional.services.map((service, index) => (
                                                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                                            {service}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                                            <Eye className="w-5 h-5" />
                                        </button>
                                        <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                                            <Edit className="w-5 h-5" />
                                        </button>
                                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                                            Pagar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Targets */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Metas de Comissão</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {targets.map((target, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-semibold text-gray-900">{target.professional}</h4>
                                    <div className="p-2 bg-purple-100 rounded-lg">
                                        <Target className="w-5 h-5 text-purple-600" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">Meta Mensal</span>
                                        <span className="font-medium text-gray-900">R$ {target.monthlyTarget.toLocaleString()}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">Atual</span>
                                        <span className="font-medium text-green-600">R$ {target.current.toLocaleString()}</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-gray-600">Progresso</span>
                                            <span className="text-sm font-medium text-gray-900">{target.percentage.toFixed(1)}%</span>
                                        </div>
                                        <div className="bg-gray-200 rounded-full h-3">
                                            <div
                                                className={`h-3 rounded-full transition-all duration-300 ${target.percentage >= 100 ? 'bg-green-600' :
                                                        target.percentage >= 80 ? 'bg-blue-600' :
                                                            'bg-yellow-600'
                                                    }`}
                                                style={{ width: `${Math.min(target.percentage, 100)}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Commission History */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="px-8 py-6 border-b border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900">Histórico de Pagamentos</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profissional</th>
                                    <th className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Período</th>
                                    <th className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Faturamento</th>
                                    <th className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Taxa</th>
                                    <th className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comissão</th>
                                    <th className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Pagamento</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {commissionHistory.map((record) => (
                                    <tr key={record.id} className="hover:bg-gray-50">
                                        <td className="px-8 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {record.professional}
                                        </td>
                                        <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {record.period}
                                        </td>
                                        <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-900">
                                            R$ {record.revenue.toLocaleString()}
                                        </td>
                                        <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {record.rate}%
                                        </td>
                                        <td className="px-8 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                                            R$ {record.commission.toLocaleString()}
                                        </td>
                                        <td className="px-8 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                                                {getStatusIcon(record.status)}
                                                <span className="ml-1">{record.status}</span>
                                            </span>
                                        </td>
                                        <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {record.paidDate || "-"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
