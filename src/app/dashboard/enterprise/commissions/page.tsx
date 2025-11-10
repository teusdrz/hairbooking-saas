"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Trophy, TrendingUp, DollarSign, Award, BarChart3, Star, Target, Calendar, Settings } from "lucide-react";

export default function EnterpriseCommissionsPage() {
    return (
        <DashboardLayout plan="enterprise">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Comissões e Performance</h1>
                        <p className="text-gray-600 mt-2">Gestão avançada de comissões e incentivos multi-unidades</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            <Settings className="h-4 w-4 inline mr-2" />
                            Configurar Planos
                        </button>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            Relatório Mensal
                        </button>
                    </div>
                </div>

                {/* Commission Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Comissões Pagas</p>
                                    <p className="text-2xl font-bold text-gray-900">R$ 89.2K</p>
                                    <div className="flex items-center mt-1">
                                        <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                                        <span className="text-sm text-green-600">+15.8% vs mês anterior</span>
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
                                    <p className="text-sm font-medium text-gray-600">Profissionais Ativos</p>
                                    <p className="text-2xl font-bold text-gray-900">47</p>
                                    <div className="flex items-center mt-1">
                                        <Users className="h-3 w-3 text-blue-500 mr-1" />
                                        <span className="text-sm text-blue-600">Across 12 units</span>
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
                                    <p className="text-sm font-medium text-gray-600">Performance Média</p>
                                    <p className="text-2xl font-bold text-purple-600">18.4%</p>
                                    <div className="flex items-center mt-1">
                                        <Trophy className="h-3 w-3 text-purple-500 mr-1" />
                                        <span className="text-sm text-purple-600">Taxa de comissão</span>
                                    </div>
                                </div>
                                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <Award className="h-6 w-6 text-purple-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Top Performer</p>
                                    <p className="text-2xl font-bold text-orange-600">R$ 8.5K</p>
                                    <div className="flex items-center mt-1">
                                        <Star className="h-3 w-3 text-orange-500 mr-1" />
                                        <span className="text-sm text-orange-600">Marina Silva</span>
                                    </div>
                                </div>
                                <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <Trophy className="h-6 w-6 text-orange-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Top Performers */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Trophy className="h-5 w-5 text-purple-600" />
                            Top 10 Profissionais - Comissões do Mês
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {/* Rank 1 */}
                            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">1</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-yellow-900">Marina Silva</p>
                                        <p className="text-sm text-yellow-700">Unidade Shopping • Cabeleireira Sênior</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-yellow-900">R$ 8.532</p>
                                    <p className="text-sm text-yellow-700">147 atendimentos • 22.5%</p>
                                </div>
                            </div>

                            {/* Rank 2 */}
                            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg border border-gray-200">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">2</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Carlos Mendes</p>
                                        <p className="text-sm text-gray-700">Unidade Centro • Barbeiro Especialista</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-gray-900">R$ 7.284</p>
                                    <p className="text-sm text-gray-700">129 atendimentos • 19.8%</p>
                                </div>
                            </div>

                            {/* Rank 3 */}
                            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">3</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-orange-900">Ana Rodriguez</p>
                                        <p className="text-sm text-orange-700">Unidade Shopping • Colorista</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-orange-900">R$ 6.947</p>
                                    <p className="text-sm text-orange-700">118 atendimentos • 21.2%</p>
                                </div>
                            </div>

                            {/* Remaining Top 10 */}
                            <div className="space-y-2">
                                {[
                                    { name: "Paula Costa", unit: "Centro", role: "Manicure", commission: "6.451", services: "98", rate: "18.7%" },
                                    { name: "Roberto Lima", unit: "Zona Norte", role: "Cabeleireiro", commission: "5.873", services: "85", rate: "17.9%" },
                                    { name: "Lucia Ferreira", unit: "Shopping", role: "Esteticista", commission: "5.629", services: "92", rate: "19.3%" },
                                    { name: "Jorge Santos", unit: "Centro", role: "Barbeiro", commission: "5.284", services: "74", rate: "16.8%" },
                                    { name: "Carla Oliveira", unit: "Zona Norte", role: "Cabeleireira", commission: "4.932", services: "67", rate: "18.1%" },
                                    { name: "Fernando Souza", unit: "Shopping", role: "Barbeiro", commission: "4.657", services: "71", rate: "17.2%" },
                                    { name: "Mariana Alves", unit: "Centro", role: "Colorista", commission: "4.389", services: "59", rate: "20.4%" }
                                ].map((professional, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                                <span className="text-gray-700 font-medium text-sm">{index + 4}</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{professional.name}</p>
                                                <p className="text-sm text-gray-600">{professional.unit} • {professional.role}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-gray-900">R$ {professional.commission}</p>
                                            <p className="text-sm text-gray-600">{professional.services} atend. • {professional.rate}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Commission Structures and Unit Performance */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Commission Structures */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Target className="h-5 w-5 text-purple-600" />
                                Estruturas de Comissão
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Basic Plan */}
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <div className="flex justify-between items-center mb-3">
                                    <h4 className="font-semibold text-blue-900">Plano Básico</h4>
                                    <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">15 profissionais</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-blue-700">R$ 0 - R$ 3.000:</span>
                                        <span className="font-medium text-blue-900">15%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-blue-700">R$ 3.001 - R$ 6.000:</span>
                                        <span className="font-medium text-blue-900">18%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-blue-700">Acima de R$ 6.000:</span>
                                        <span className="font-medium text-blue-900">20%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Professional Plan */}
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                <div className="flex justify-between items-center mb-3">
                                    <h4 className="font-semibold text-green-900">Plano Profissional</h4>
                                    <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">22 profissionais</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-green-700">R$ 0 - R$ 4.000:</span>
                                        <span className="font-medium text-green-900">18%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-green-700">R$ 4.001 - R$ 8.000:</span>
                                        <span className="font-medium text-green-900">22%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-green-700">Acima de R$ 8.000:</span>
                                        <span className="font-medium text-green-900">25%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Premium Plan */}
                            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                                <div className="flex justify-between items-center mb-3">
                                    <h4 className="font-semibold text-purple-900">Plano Premium</h4>
                                    <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">10 profissionais</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-purple-700">R$ 0 - R$ 5.000:</span>
                                        <span className="font-medium text-purple-900">20%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-purple-700">R$ 5.001 - R$ 10.000:</span>
                                        <span className="font-medium text-purple-900">25%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-purple-700">Acima de R$ 10.000:</span>
                                        <span className="font-medium text-purple-900">30%</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Unit Performance */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BarChart3 className="h-5 w-5 text-purple-600" />
                                Performance por Unidade
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {/* Unit 1 */}
                            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                                <div className="flex justify-between items-center mb-3">
                                    <h4 className="font-semibold text-blue-900">Unidade Shopping</h4>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                        <span className="text-sm font-medium text-blue-900">Top Unit</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-blue-700">Comissões Pagas:</p>
                                        <p className="font-bold text-blue-900">R$ 42.8K</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-700">Profissionais:</p>
                                        <p className="font-bold text-blue-900">18</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-700">Média Individual:</p>
                                        <p className="font-bold text-blue-900">R$ 2.378</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-700">Taxa Média:</p>
                                        <p className="font-bold text-blue-900">21.6%</p>
                                    </div>
                                </div>
                            </div>

                            {/* Unit 2 */}
                            <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                                <div className="flex justify-between items-center mb-3">
                                    <h4 className="font-semibold text-green-900">Unidade Centro</h4>
                                    <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">Crescimento</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-green-700">Comissões Pagas:</p>
                                        <p className="font-bold text-green-900">R$ 28.7K</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-green-700">Profissionais:</p>
                                        <p className="font-bold text-green-900">15</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-green-700">Média Individual:</p>
                                        <p className="font-bold text-green-900">R$ 1.913</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-green-700">Taxa Média:</p>
                                        <p className="font-bold text-green-900">18.4%</p>
                                    </div>
                                </div>
                            </div>

                            {/* Unit 3 */}
                            <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                                <div className="flex justify-between items-center mb-3">
                                    <h4 className="font-semibold text-orange-900">Unidade Zona Norte</h4>
                                    <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded-full">Potencial</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-orange-700">Comissões Pagas:</p>
                                        <p className="font-bold text-orange-900">R$ 17.7K</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-orange-700">Profissionais:</p>
                                        <p className="font-bold text-orange-900">14</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-orange-700">Média Individual:</p>
                                        <p className="font-bold text-orange-900">R$ 1.264</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-orange-700">Taxa Média:</p>
                                        <p className="font-bold text-orange-900">15.2%</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Monthly Trends and Incentives */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Monthly Commission Trends */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-purple-600" />
                                Evolução Mensal de Comissões
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center mb-6">
                                <div className="text-center">
                                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                                    <p className="text-gray-500">Gráfico de Evolução de Comissões</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center p-3 bg-blue-50 rounded-lg">
                                    <p className="text-lg font-bold text-blue-600">R$ 89K</p>
                                    <p className="text-xs text-gray-600">Novembro</p>
                                </div>
                                <div className="text-center p-3 bg-green-50 rounded-lg">
                                    <p className="text-lg font-bold text-green-600">R$ 77K</p>
                                    <p className="text-xs text-gray-600">Outubro</p>
                                </div>
                                <div className="text-center p-3 bg-purple-50 rounded-lg">
                                    <p className="text-lg font-bold text-purple-600">+15.8%</p>
                                    <p className="text-xs text-gray-600">Crescimento</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Incentive Programs */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-purple-600" />
                                Programas de Incentivo
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-4">
                                {/* Monthly Goal */}
                                <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-semibold text-green-900">Meta Mensal</h4>
                                        <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">Ativo</span>
                                    </div>
                                    <p className="text-sm text-green-700 mb-3">Bônus de R$ 500 para quem atingir R$ 8.000 em comissões</p>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Elegíveis:</span>
                                            <span className="font-medium">8 profissionais</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Já conquistaram:</span>
                                            <span className="font-medium text-green-600">3 profissionais</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Quarterly Challenge */}
                                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-semibold text-blue-900">Desafio Trimestral</h4>
                                        <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">Q4 2024</span>
                                    </div>
                                    <p className="text-sm text-blue-700 mb-3">Top 5 recebem viagem para capacitação + bônus</p>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Participantes:</span>
                                            <span className="font-medium">47 profissionais</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Líder atual:</span>
                                            <span className="font-medium text-blue-600">Marina Silva</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Team Achievement */}
                                <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-semibold text-purple-900">Meta de Equipe</h4>
                                        <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full">87%</span>
                                    </div>
                                    <p className="text-sm text-purple-700 mb-3">R$ 100K em comissões = festa de confraternização</p>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Meta:</span>
                                            <span className="font-medium">R$ 100.000</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Atual:</span>
                                            <span className="font-medium text-purple-600">R$ 87.200</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Detailed Analytics */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-purple-600" />
                            Análise Detalhada de Performance
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Distribuição por Faixa</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                                        <span className="text-sm font-medium text-red-800">R$ 0 - R$ 2.000</span>
                                        <span className="font-bold text-red-600">12 profissionais</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                                        <span className="text-sm font-medium text-yellow-800">R$ 2.001 - R$ 5.000</span>
                                        <span className="font-bold text-yellow-600">18 profissionais</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                                        <span className="text-sm font-medium text-green-800">R$ 5.001 - R$ 8.000</span>
                                        <span className="font-bold text-green-600">12 profissionais</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                                        <span className="text-sm font-medium text-blue-800">Acima de R$ 8.000</span>
                                        <span className="font-bold text-blue-600">5 profissionais</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Metas e Conquistas</h4>
                                <div className="space-y-3">
                                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                                        <p className="text-sm font-medium text-green-800">Metas Atingidas</p>
                                        <p className="text-2xl font-bold text-green-600">28</p>
                                        <p className="text-xs text-green-600">59.6% dos profissionais</p>
                                    </div>
                                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                        <p className="text-sm font-medium text-blue-800">Em Progresso</p>
                                        <p className="text-2xl font-bold text-blue-600">13</p>
                                        <p className="text-xs text-blue-600">27.7% dos profissionais</p>
                                    </div>
                                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                                        <p className="text-sm font-medium text-orange-800">Necessitam Suporte</p>
                                        <p className="text-2xl font-bold text-orange-600">6</p>
                                        <p className="text-xs text-orange-600">12.7% dos profissionais</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Ações Recomendadas</h4>
                                <div className="space-y-3">
                                    <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                                        <p className="text-sm font-medium text-purple-800">Capacitação Zona Norte</p>
                                        <p className="text-xs text-purple-600">Performance 23% abaixo da média</p>
                                    </div>
                                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                        <p className="text-sm font-medium text-blue-800">Mentoria Novos Profissionais</p>
                                        <p className="text-xs text-blue-600">6 profissionais abaixo de R$ 1.500</p>
                                    </div>
                                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                                        <p className="text-sm font-medium text-green-800">Programa de Reconhecimento</p>
                                        <p className="text-xs text-green-600">Manter motivação dos top performers</p>
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
