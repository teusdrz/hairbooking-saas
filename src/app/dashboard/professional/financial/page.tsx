"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
    DollarSign,
    TrendingUp,
    TrendingDown,
    CreditCard,
    Receipt,
    Download,
    Filter,
    Eye,
    BarChart3,
    Target,
    AlertCircle,
    CheckCircle,
    Clock,
    Plus
} from "lucide-react";
import { useState } from "react";

export default function ProfessionalFinancial() {
    const [dateRange, setDateRange] = useState("thisMonth");
    const [categoryFilter, setCategoryFilter] = useState("all");

    // Dados financeiros
    const financialStats = {
        totalRevenue: 18450,
        expenses: 5320,
        netProfit: 13130,
        profitMargin: 71.2,
        previousMonthRevenue: 15230,
        previousMonthExpenses: 4890,
        targetRevenue: 20000,
        cashFlow: 7810
    };

    // Receitas por categoria
    const revenueCategories = [
        { name: "Cortes", amount: 6780, percentage: 36.7, change: 12.5 },
        { name: "Coloração", amount: 5940, percentage: 32.2, change: 18.3 },
        { name: "Tratamentos", amount: 3420, percentage: 18.5, change: 8.7 },
        { name: "Produtos", amount: 1890, percentage: 10.2, change: -2.1 },
        { name: "Outros", amount: 420, percentage: 2.3, change: 5.2 }
    ];

    // Despesas por categoria
    const expenseCategories = [
        { name: "Aluguel", amount: 2200, percentage: 41.4, type: "fixed" },
        { name: "Produtos", amount: 1580, percentage: 29.7, type: "variable" },
        { name: "Salários", amount: 850, percentage: 16.0, type: "fixed" },
        { name: "Energia", amount: 420, percentage: 7.9, type: "fixed" },
        { name: "Marketing", amount: 270, percentage: 5.1, type: "variable" }
    ];

    // Fluxo de caixa diário
    const dailyCashFlow = [
        { day: "01", income: 850, expenses: 180, balance: 670 },
        { day: "02", income: 920, expenses: 220, balance: 700 },
        { day: "03", income: 750, expenses: 150, balance: 600 },
        { day: "04", income: 1100, expenses: 280, balance: 820 },
        { day: "05", income: 980, expenses: 190, balance: 790 },
        { day: "06", income: 1200, expenses: 320, balance: 880 },
        { day: "07", income: 680, expenses: 120, balance: 560 }
    ];

    // Formas de pagamento
    const paymentMethods = [
        { method: "Cartão de Crédito", amount: 8920, percentage: 48.4, transactions: 156 },
        { method: "Cartão de Débito", amount: 4560, percentage: 24.7, transactions: 89 },
        { method: "PIX", amount: 3240, percentage: 17.6, transactions: 67 },
        { method: "Dinheiro", amount: 1730, percentage: 9.4, transactions: 34 }
    ];

    // Contas a pagar/receber
    const accounts = [
        {
            id: 1,
            type: "receive",
            description: "Agendamento - Maria Silva",
            amount: 180,
            dueDate: "2024-01-18",
            status: "pending",
            category: "service"
        },
        {
            id: 2,
            type: "pay",
            description: "Fornecedor - Produtos Capilares",
            amount: 850,
            dueDate: "2024-01-20",
            status: "pending",
            category: "products"
        },
        {
            id: 3,
            type: "pay",
            description: "Aluguel Janeiro",
            amount: 2200,
            dueDate: "2024-01-25",
            status: "overdue",
            category: "rent"
        },
        {
            id: 4,
            type: "receive",
            description: "Tratamento - João Santos",
            amount: 250,
            dueDate: "2024-01-22",
            status: "paid",
            category: "service"
        }
    ];

    const calculateGrowth = (current: number, previous: number) => {
        return ((current - previous) / previous) * 100;
    };

    const revenueGrowth = calculateGrowth(financialStats.totalRevenue, financialStats.previousMonthRevenue);
    const expenseGrowth = calculateGrowth(financialStats.expenses, financialStats.previousMonthExpenses);

    const getStatusColor = (status: string) => {
        switch (status) {
            case "paid": return "bg-green-100 text-green-800";
            case "pending": return "bg-yellow-100 text-yellow-800";
            case "overdue": return "bg-red-100 text-red-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "paid": return <CheckCircle className="w-4 h-4" />;
            case "pending": return <Clock className="w-4 h-4" />;
            case "overdue": return <AlertCircle className="w-4 h-4" />;
            default: return <Clock className="w-4 h-4" />;
        }
    };

    return (
        <DashboardLayout plan="professional">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                            <DollarSign className="w-7 h-7 text-purple-600 mr-3" />
                            Gestão Financeira
                        </h1>
                        <p className="text-gray-600 mt-2">Controle completo das finanças do seu salão</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center font-medium">
                            <Plus className="w-5 h-5 mr-2" />
                            Nova Transação
                        </button>
                        <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center font-medium">
                            <Download className="w-5 h-5 mr-2" />
                            Relatório
                        </button>
                    </div>
                </div>

                {/* Main Financial Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-green-100 rounded-lg">
                                <DollarSign className="w-6 h-6 text-green-600" />
                            </div>
                            <div className={`flex items-center ${revenueGrowth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {revenueGrowth > 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                                <span className="text-sm font-medium">{Math.abs(revenueGrowth).toFixed(1)}%</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Receita Total</p>
                            <p className="text-2xl font-bold text-gray-900">R$ {financialStats.totalRevenue.toLocaleString()}</p>
                            <div className="mt-2 bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${(financialStats.totalRevenue / financialStats.targetRevenue) * 100}%` }}
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                                {((financialStats.totalRevenue / financialStats.targetRevenue) * 100).toFixed(1)}% da meta
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-red-100 rounded-lg">
                                <Receipt className="w-6 h-6 text-red-600" />
                            </div>
                            <div className={`flex items-center ${expenseGrowth > 0 ? 'text-red-600' : 'text-green-600'}`}>
                                {expenseGrowth > 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                                <span className="text-sm font-medium">{Math.abs(expenseGrowth).toFixed(1)}%</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Despesas Totais</p>
                            <p className="text-2xl font-bold text-gray-900">R$ {financialStats.expenses.toLocaleString()}</p>
                            <p className="text-xs text-gray-500 mt-2">
                                {((financialStats.expenses / financialStats.totalRevenue) * 100).toFixed(1)}% da receita
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <Target className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="text-green-600">
                                <span className="text-sm font-medium">+{financialStats.profitMargin.toFixed(1)}%</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Lucro Líquido</p>
                            <p className="text-2xl font-bold text-blue-600">R$ {financialStats.netProfit.toLocaleString()}</p>
                            <p className="text-xs text-gray-500 mt-2">
                                Margem: {financialStats.profitMargin.toFixed(1)}%
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <BarChart3 className="w-6 h-6 text-purple-600" />
                            </div>
                            <div className="text-purple-600">
                                <span className="text-sm font-medium">Positivo</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Fluxo de Caixa</p>
                            <p className="text-2xl font-bold text-purple-600">R$ {financialStats.cashFlow.toLocaleString()}</p>
                            <p className="text-xs text-gray-500 mt-2">
                                Saldo disponível
                            </p>
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
                                <option value="thisWeek">Esta Semana</option>
                                <option value="thisMonth">Este Mês</option>
                                <option value="lastMonth">Mês Passado</option>
                                <option value="quarter">Trimestre</option>
                                <option value="year">Ano</option>
                            </select>
                            <select
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            >
                                <option value="all">Todas Categorias</option>
                                <option value="services">Serviços</option>
                                <option value="products">Produtos</option>
                                <option value="expenses">Despesas</option>
                            </select>
                        </div>
                        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
                            <Filter className="w-4 h-4 mr-2" />
                            Filtros Avançados
                        </button>
                    </div>
                </div>

                {/* Revenue and Expenses Breakdown */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Revenue Categories */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Receitas por Categoria</h3>
                        <div className="space-y-4">
                            {revenueCategories.map((category, index) => (
                                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                                        <div>
                                            <p className="font-medium text-gray-900">{category.name}</p>
                                            <p className="text-sm text-gray-600">{category.percentage}% do total</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-green-600">R$ {category.amount.toLocaleString()}</p>
                                        <div className={`flex items-center ${category.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            {category.change > 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                                            <span className="text-xs font-medium">{Math.abs(category.change)}%</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Expense Categories */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Despesas por Categoria</h3>
                        <div className="space-y-4">
                            {expenseCategories.map((category, index) => (
                                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                    <div className="flex items-center space-x-3">
                                        <div className={`w-4 h-4 rounded-full ${category.type === 'fixed' ? 'bg-red-600' : 'bg-orange-600'}`}></div>
                                        <div>
                                            <p className="font-medium text-gray-900">{category.name}</p>
                                            <p className="text-sm text-gray-600">{category.percentage}% • {category.type === 'fixed' ? 'Fixa' : 'Variável'}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-red-600">R$ {category.amount.toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Daily Cash Flow */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Fluxo de Caixa Diário</h3>
                    <div className="space-y-4">
                        {dailyCashFlow.map((day, index) => (
                            <div key={index} className="grid grid-cols-4 gap-4 p-4 border border-gray-200 rounded-lg">
                                <div className="text-center">
                                    <p className="text-sm text-gray-600">Dia {day.day}</p>
                                    <p className="font-medium text-gray-900">Jan</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-600">Entrada</p>
                                    <p className="font-semibold text-green-600">R$ {day.income}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-600">Saída</p>
                                    <p className="font-semibold text-red-600">R$ {day.expenses}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-600">Saldo</p>
                                    <p className="font-semibold text-blue-600">R$ {day.balance}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Formas de Pagamento</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {paymentMethods.map((method, index) => (
                            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-purple-100 rounded-lg">
                                        <CreditCard className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{method.method}</p>
                                        <p className="text-sm text-gray-600">{method.transactions} transações</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-gray-900">R$ {method.amount.toLocaleString()}</p>
                                    <p className="text-sm text-gray-600">{method.percentage}%</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Accounts Payable/Receivable */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="px-8 py-6 border-b border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900">Contas a Pagar/Receber</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                                    <th className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                                    <th className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                                    <th className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vencimento</th>
                                    <th className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {accounts.map((account) => (
                                    <tr key={account.id} className="hover:bg-gray-50">
                                        <td className="px-8 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${account.type === 'receive' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                }`}>
                                                {account.type === 'receive' ? 'Receber' : 'Pagar'}
                                            </span>
                                        </td>
                                        <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {account.description}
                                        </td>
                                        <td className="px-8 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            R$ {account.amount.toLocaleString()}
                                        </td>
                                        <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {account.dueDate}
                                        </td>
                                        <td className="px-8 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(account.status)}`}>
                                                {getStatusIcon(account.status)}
                                                <span className="ml-1">{account.status}</span>
                                            </span>
                                        </td>
                                        <td className="px-8 py-4 whitespace-nowrap text-sm font-medium">
                                            <button className="text-purple-600 hover:text-purple-900 mr-3">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="text-green-600 hover:text-green-900">
                                                {account.status === 'pending' ? 'Pagar' : 'Ver'}
                                            </button>
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
