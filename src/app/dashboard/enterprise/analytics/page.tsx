"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, Calendar, DollarSign, Target, BarChart3, PieChart, Activity, Zap, Clock, Star } from "lucide-react";

export default function EnterpriseAnalyticsPage() {
    return (
        <DashboardLayout plan="enterprise">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Analytics Avançadas</h1>
                        <p className="text-gray-600 mt-2">Análise de dados empresarial com insights estratégicos</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            Exportar Relatório
                        </button>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            Configurar Dashboard
                        </button>
                    </div>
                </div>

                {/* KPI Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Receita Total</p>
                                    <p className="text-2xl font-bold text-gray-900">R$ 2.847.520</p>
                                    <div className="flex items-center mt-2">
                                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                                        <span className="text-sm text-green-600">+23.4%</span>
                                    </div>
                                </div>
                                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <DollarSign className="h-6 w-6 text-green-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Clientes Ativos</p>
                                    <p className="text-2xl font-bold text-gray-900">45.892</p>
                                    <div className="flex items-center mt-2">
                                        <TrendingUp className="h-4 w-4 text-blue-500 mr-1" />
                                        <span className="text-sm text-blue-600">+12.8%</span>
                                    </div>
                                </div>
                                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Users className="h-6 w-6 text-blue-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Agendamentos</p>
                                    <p className="text-2xl font-bold text-gray-900">28.456</p>
                                    <div className="flex items-center mt-2">
                                        <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                                        <span className="text-sm text-red-600">-3.2%</span>
                                    </div>
                                </div>
                                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <Calendar className="h-6 w-6 text-purple-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Taxa de Conversão</p>
                                    <p className="text-2xl font-bold text-gray-900">78.6%</p>
                                    <div className="flex items-center mt-2">
                                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                                        <span className="text-sm text-green-600">+5.1%</span>
                                    </div>
                                </div>
                                <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <Target className="h-6 w-6 text-orange-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Analytics Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Revenue Analytics */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BarChart3 className="h-5 w-5 text-purple-600" />
                                Análise de Receita
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                                    <p className="text-gray-500">Gráfico de Receita Mensal</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-green-50 rounded-lg">
                                    <p className="text-2xl font-bold text-green-600">R$ 485.2K</p>
                                    <p className="text-sm text-gray-600">Este Mês</p>
                                </div>
                                <div className="text-center p-4 bg-blue-50 rounded-lg">
                                    <p className="text-2xl font-bold text-blue-600">R$ 394.8K</p>
                                    <p className="text-sm text-gray-600">Mês Anterior</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Customer Segmentation */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <PieChart className="h-5 w-5 text-purple-600" />
                                Segmentação de Clientes
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                                    <p className="text-gray-500">Distribuição por Segmento</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                        <span className="text-sm">VIP Premium</span>
                                    </div>
                                    <span className="font-medium">35.2%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm">Frequentes</span>
                                    </div>
                                    <span className="font-medium">28.7%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-sm">Ocasionais</span>
                                    </div>
                                    <span className="font-medium">36.1%</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Operational Efficiency */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Activity className="h-5 w-5 text-purple-600" />
                                Eficiência Operacional
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-sm">
                                        <span>Taxa de Ocupação</span>
                                        <span className="font-medium">87%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm">
                                        <span>Tempo Médio Serviço</span>
                                        <span className="font-medium">42min</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm">
                                        <span>Satisfação Cliente</span>
                                        <span className="font-medium">94%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Growth Metrics */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Zap className="h-5 w-5 text-purple-600" />
                                Métricas de Crescimento
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-3 bg-green-50 rounded-lg">
                                    <div className="flex items-center justify-center gap-1 mb-1">
                                        <TrendingUp className="h-4 w-4 text-green-600" />
                                        <span className="font-semibold text-green-600">+18%</span>
                                    </div>
                                    <p className="text-xs text-gray-600">Novos Clientes</p>
                                </div>
                                <div className="text-center p-3 bg-blue-50 rounded-lg">
                                    <div className="flex items-center justify-center gap-1 mb-1">
                                        <TrendingUp className="h-4 w-4 text-blue-600" />
                                        <span className="font-semibold text-blue-600">+25%</span>
                                    </div>
                                    <p className="text-xs text-gray-600">Receita Recorrente</p>
                                </div>
                                <div className="text-center p-3 bg-purple-50 rounded-lg">
                                    <div className="flex items-center justify-center gap-1 mb-1">
                                        <TrendingUp className="h-4 w-4 text-purple-600" />
                                        <span className="font-semibold text-purple-600">+12%</span>
                                    </div>
                                    <p className="text-xs text-gray-600">Ticket Médio</p>
                                </div>
                                <div className="text-center p-3 bg-orange-50 rounded-lg">
                                    <div className="flex items-center justify-center gap-1 mb-1">
                                        <TrendingUp className="h-4 w-4 text-orange-600" />
                                        <span className="font-semibold text-orange-600">+8%</span>
                                    </div>
                                    <p className="text-xs text-gray-600">Retenção</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Time-based Analytics */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Clock className="h-5 w-5 text-purple-600" />
                                Análise Temporal
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                    <span className="text-sm">Pico de Demanda</span>
                                    <span className="font-medium text-purple-600">14h-17h</span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                    <span className="text-sm">Melhor Dia</span>
                                    <span className="font-medium text-green-600">Sábado</span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                    <span className="text-sm">Sazonalidade</span>
                                    <span className="font-medium text-blue-600">Alta</span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                    <span className="text-sm">Tendência</span>
                                    <span className="font-medium text-green-600">Crescente</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Predictive Analytics */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Star className="h-5 w-5 text-purple-600" />
                            Analytics Preditivas
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Previsões de Receita</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">Próximo Mês</span>
                                        <span className="font-medium text-green-600">R$ 520K</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">Próximo Trimestre</span>
                                        <span className="font-medium text-blue-600">R$ 1.6M</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">Próximo Ano</span>
                                        <span className="font-medium text-purple-600">R$ 6.8M</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Análise de Risco</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">Churn Rate</span>
                                        <span className="font-medium text-orange-600">2.3%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">Capacidade Ociosa</span>
                                        <span className="font-medium text-yellow-600">13%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">Risco Sazonal</span>
                                        <span className="font-medium text-green-600">Baixo</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Oportunidades</h4>
                                <div className="space-y-3">
                                    <div className="p-3 bg-green-50 rounded-lg">
                                        <p className="text-sm font-medium text-green-800">Expansão Horário</p>
                                        <p className="text-xs text-green-600">+R$ 85K potencial</p>
                                    </div>
                                    <div className="p-3 bg-blue-50 rounded-lg">
                                        <p className="text-sm font-medium text-blue-800">Novos Serviços</p>
                                        <p className="text-xs text-blue-600">+R$ 120K potencial</p>
                                    </div>
                                    <div className="p-3 bg-purple-50 rounded-lg">
                                        <p className="text-sm font-medium text-purple-800">Programa Fidelidade</p>
                                        <p className="text-xs text-purple-600">+15% retenção</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
