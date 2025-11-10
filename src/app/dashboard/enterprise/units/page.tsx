"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Calendar, DollarSign, TrendingUp, MapPin, Plus, Settings, BarChart3, Eye } from "lucide-react";

export default function EnterpriseUnitsPage() {
    return (
        <DashboardLayout plan="enterprise">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Multi-unidades</h1>
                        <p className="text-gray-600 mt-2">Gestão centralizada de todas as unidades da rede</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            <Plus className="h-4 w-4 inline mr-2" />
                            Nova Unidade
                        </button>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            Relatório Consolidado
                        </button>
                    </div>
                </div>

                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Total de Unidades</p>
                                    <p className="text-2xl font-bold text-gray-900">12</p>
                                    <p className="text-sm text-gray-500 mt-1">3 novas este mês</p>
                                </div>
                                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <Building className="h-6 w-6 text-purple-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Funcionários Total</p>
                                    <p className="text-2xl font-bold text-gray-900">156</p>
                                    <div className="flex items-center mt-1">
                                        <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                                        <span className="text-sm text-green-600">+8 este mês</span>
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
                                    <p className="text-sm font-medium text-gray-600">Agendamentos Hoje</p>
                                    <p className="text-2xl font-bold text-gray-900">347</p>
                                    <p className="text-sm text-gray-500 mt-1">Todas as unidades</p>
                                </div>
                                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <Calendar className="h-6 w-6 text-green-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Receita Mensal</p>
                                    <p className="text-2xl font-bold text-gray-900">R$ 485K</p>
                                    <div className="flex items-center mt-1">
                                        <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                                        <span className="text-sm text-green-600">+12.5%</span>
                                    </div>
                                </div>
                                <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <DollarSign className="h-6 w-6 text-orange-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Units Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {/* Unit 1 */}
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">Unidade Centro</CardTitle>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-xs text-green-600">Online</span>
                                </div>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="h-4 w-4 mr-1" />
                                Rua das Flores, 123 - Centro
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-3 bg-blue-50 rounded-lg">
                                    <p className="text-lg font-bold text-blue-600">18</p>
                                    <p className="text-xs text-gray-600">Funcionários</p>
                                </div>
                                <div className="text-center p-3 bg-green-50 rounded-lg">
                                    <p className="text-lg font-bold text-green-600">32</p>
                                    <p className="text-xs text-gray-600">Agendamentos</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Receita Mensal:</span>
                                    <span className="font-medium text-green-600">R$ 45.2K</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Taxa de Ocupação:</span>
                                    <span className="font-medium">89%</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Avaliação Média:</span>
                                    <span className="font-medium text-yellow-600">4.8/5</span>
                                </div>
                            </div>

                            <div className="flex gap-2 pt-2">
                                <button className="flex-1 px-3 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                                    <Eye className="h-4 w-4 inline mr-1" />
                                    Ver Detalhes
                                </button>
                                <button className="px-3 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    <Settings className="h-4 w-4" />
                                </button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Unit 2 */}
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">Unidade Shopping</CardTitle>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-xs text-green-600">Online</span>
                                </div>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="h-4 w-4 mr-1" />
                                Shopping Center - Piso L2
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-3 bg-blue-50 rounded-lg">
                                    <p className="text-lg font-bold text-blue-600">25</p>
                                    <p className="text-xs text-gray-600">Funcionários</p>
                                </div>
                                <div className="text-center p-3 bg-green-50 rounded-lg">
                                    <p className="text-lg font-bold text-green-600">48</p>
                                    <p className="text-xs text-gray-600">Agendamentos</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Receita Mensal:</span>
                                    <span className="font-medium text-green-600">R$ 68.5K</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Taxa de Ocupação:</span>
                                    <span className="font-medium">94%</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Avaliação Média:</span>
                                    <span className="font-medium text-yellow-600">4.9/5</span>
                                </div>
                            </div>

                            <div className="flex gap-2 pt-2">
                                <button className="flex-1 px-3 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                                    <Eye className="h-4 w-4 inline mr-1" />
                                    Ver Detalhes
                                </button>
                                <button className="px-3 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    <Settings className="h-4 w-4" />
                                </button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Unit 3 */}
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">Unidade Zona Norte</CardTitle>
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                    <span className="text-xs text-yellow-600">Manutenção</span>
                                </div>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="h-4 w-4 mr-1" />
                                Av. Principal, 456 - Zona Norte
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-3 bg-blue-50 rounded-lg">
                                    <p className="text-lg font-bold text-blue-600">15</p>
                                    <p className="text-xs text-gray-600">Funcionários</p>
                                </div>
                                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                                    <p className="text-lg font-bold text-yellow-600">12</p>
                                    <p className="text-xs text-gray-600">Agendamentos</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Receita Mensal:</span>
                                    <span className="font-medium text-green-600">R$ 28.8K</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Taxa de Ocupação:</span>
                                    <span className="font-medium">65%</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Avaliação Média:</span>
                                    <span className="font-medium text-yellow-600">4.6/5</span>
                                </div>
                            </div>

                            <div className="flex gap-2 pt-2">
                                <button className="flex-1 px-3 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                                    <Eye className="h-4 w-4 inline mr-1" />
                                    Ver Detalhes
                                </button>
                                <button className="px-3 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    <Settings className="h-4 w-4" />
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Performance Comparison */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-purple-600" />
                            Comparativo de Performance
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {/* Revenue Comparison */}
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-4">Receita por Unidade (Último Mês)</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">Unidade Shopping</span>
                                        <div className="flex items-center gap-4 flex-1 mx-4">
                                            <div className="flex-1 bg-gray-200 rounded-full h-3">
                                                <div className="bg-green-500 h-3 rounded-full" style={{ width: '100%' }}></div>
                                            </div>
                                            <span className="text-sm font-medium min-w-[80px] text-right">R$ 68.5K</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">Unidade Centro</span>
                                        <div className="flex items-center gap-4 flex-1 mx-4">
                                            <div className="flex-1 bg-gray-200 rounded-full h-3">
                                                <div className="bg-blue-500 h-3 rounded-full" style={{ width: '66%' }}></div>
                                            </div>
                                            <span className="text-sm font-medium min-w-[80px] text-right">R$ 45.2K</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">Unidade Zona Norte</span>
                                        <div className="flex items-center gap-4 flex-1 mx-4">
                                            <div className="flex-1 bg-gray-200 rounded-full h-3">
                                                <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '42%' }}></div>
                                            </div>
                                            <span className="text-sm font-medium min-w-[80px] text-right">R$ 28.8K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                                    Expandir Rede
                                </button>
                                <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                                    Relatório Executivo
                                </button>
                                <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                                    Análise de Mercado
                                </button>
                                <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                                    Configurar Metas
                                </button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
