"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, TrendingDown, Building, PieChart, BarChart3, CreditCard, Banknote, Calendar, Download } from "lucide-react";

export default function EnterpriseFinancialPage() {
    return (
        <DashboardLayout plan="enterprise">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Financeiro Avançado</h1>
                        <p className="text-gray-600 mt-2">Gestão financeira consolidada com análise multi-unidades</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            <Download className="h-4 w-4 inline mr-2" />
                            Relatório Executivo
                        </button>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            Configurar Metas
                        </button>
                    </div>
                </div>

                {/* Financial Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Receita Total</p>
                                    <p className="text-2xl font-bold text-gray-900">R$ 485.2K</p>
                                    <div className="flex items-center mt-1">
                                        <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                                        <span className="text-sm text-green-600">+12.5% vs mês anterior</span>
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
                                    <p className="text-sm font-medium text-gray-600">Custos Operacionais</p>
                                    <p className="text-2xl font-bold text-gray-900">R$ 187.8K</p>
                                    <div className="flex items-center mt-1">
                                        <TrendingUp className="h-3 w-3 text-red-500 mr-1" />
                                        <span className="text-sm text-red-600">+3.2% vs mês anterior</span>
                                    </div>
                                </div>
                                <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
                                    <TrendingDown className="h-6 w-6 text-red-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Lucro Líquido</p>
                                    <p className="text-2xl font-bold text-purple-600">R$ 297.4K</p>
                                    <div className="flex items-center mt-1">
                                        <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                                        <span className="text-sm text-green-600">+18.7% vs mês anterior</span>
                                    </div>
                                </div>
                                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <BarChart3 className="h-6 w-6 text-purple-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Margem de Lucro</p>
                                    <p className="text-2xl font-bold text-blue-600">61.3%</p>
                                    <div className="flex items-center mt-1">
                                        <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                                        <span className="text-sm text-green-600">+4.1% vs mês anterior</span>
                                    </div>
                                </div>
                                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <PieChart className="h-6 w-6 text-blue-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Revenue by Unit */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Building className="h-5 w-5 text-purple-600" />
                            Performance Financeira por Unidade
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Unit 1 */}
                            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-blue-900">Unidade Shopping</h3>
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-blue-700">Receita:</span>
                                        <span className="font-semibold text-blue-900">R$ 198.5K</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-blue-700">Custos:</span>
                                        <span className="font-semibold text-blue-900">R$ 67.2K</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-blue-700">Lucro:</span>
                                        <span className="font-semibold text-green-600">R$ 131.3K</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-blue-700">Margem:</span>
                                        <span className="font-semibold text-blue-900">66.1%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Unit 2 */}
                            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-green-900">Unidade Centro</h3>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-green-700">Receita:</span>
                                        <span className="font-semibold text-green-900">R$ 156.3K</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-green-700">Custos:</span>
                                        <span className="font-semibold text-green-900">R$ 62.1K</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-green-700">Lucro:</span>
                                        <span className="font-semibold text-green-600">R$ 94.2K</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-green-700">Margem:</span>
                                        <span className="font-semibold text-green-900">60.3%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Unit 3 */}
                            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-orange-900">Unidade Zona Norte</h3>
                                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-orange-700">Receita:</span>
                                        <span className="font-semibold text-orange-900">R$ 130.4K</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-orange-700">Custos:</span>
                                        <span className="font-semibold text-orange-900">R$ 58.5K</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-orange-700">Lucro:</span>
                                        <span className="font-semibold text-green-600">R$ 71.9K</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-orange-700">Margem:</span>
                                        <span className="font-semibold text-orange-900">55.1%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Financial Charts and Analysis */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Revenue Trend */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BarChart3 className="h-5 w-5 text-purple-600" />
                                Evolução da Receita (6 meses)
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center mb-6">
                                <div className="text-center">
                                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                                    <p className="text-gray-500">Gráfico de Evolução da Receita</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center p-3 bg-blue-50 rounded-lg">
                                    <p className="text-lg font-bold text-blue-600">R$ 485K</p>
                                    <p className="text-xs text-gray-600">Este Mês</p>
                                </div>
                                <div className="text-center p-3 bg-green-50 rounded-lg">
                                    <p className="text-lg font-bold text-green-600">R$ 431K</p>
                                    <p className="text-xs text-gray-600">Mês Anterior</p>
                                </div>
                                <div className="text-center p-3 bg-purple-50 rounded-lg">
                                    <p className="text-lg font-bold text-purple-600">R$ 2.4M</p>
                                    <p className="text-xs text-gray-600">Semestre</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Cost Breakdown */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <PieChart className="h-5 w-5 text-purple-600" />
                                Distribuição de Custos
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center mb-6">
                                <div className="text-center">
                                    <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                                    <p className="text-gray-500">Gráfico de Distribuição</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm">Folha de Pagamento</span>
                                    </div>
                                    <span className="font-medium">42.3%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-sm">Aluguel e Utilities</span>
                                    </div>
                                    <span className="font-medium">28.7%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                        <span className="text-sm">Produtos e Materiais</span>
                                    </div>
                                    <span className="font-medium">18.5%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                        <span className="text-sm">Marketing e Outros</span>
                                    </div>
                                    <span className="font-medium">10.5%</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Payment Methods and Cash Flow */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Payment Methods */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CreditCard className="h-5 w-5 text-purple-600" />
                                Métodos de Pagamento
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <CreditCard className="h-5 w-5 text-blue-600" />
                                        <div>
                                            <p className="font-medium text-blue-900">Cartão de Crédito</p>
                                            <p className="text-sm text-blue-600">45.2% das transações</p>
                                        </div>
                                    </div>
                                    <span className="font-bold text-blue-900">R$ 219.4K</span>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <Banknote className="h-5 w-5 text-green-600" />
                                        <div>
                                            <p className="font-medium text-green-900">PIX</p>
                                            <p className="text-sm text-green-600">32.8% das transações</p>
                                        </div>
                                    </div>
                                    <span className="font-bold text-green-900">R$ 159.1K</span>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <DollarSign className="h-5 w-5 text-purple-600" />
                                        <div>
                                            <p className="font-medium text-purple-900">Cartão de Débito</p>
                                            <p className="text-sm text-purple-600">15.7% das transações</p>
                                        </div>
                                    </div>
                                    <span className="font-bold text-purple-900">R$ 76.2K</span>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <Banknote className="h-5 w-5 text-orange-600" />
                                        <div>
                                            <p className="font-medium text-orange-900">Dinheiro</p>
                                            <p className="text-sm text-orange-600">6.3% das transações</p>
                                        </div>
                                    </div>
                                    <span className="font-bold text-orange-900">R$ 30.5K</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Cash Flow */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-purple-600" />
                                Fluxo de Caixa (Próximos 30 dias)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-green-900">Entradas Previstas</span>
                                        <span className="font-bold text-green-600">R$ 526.8K</span>
                                    </div>
                                    <p className="text-sm text-green-600 mt-1">Receitas confirmadas e estimadas</p>
                                </div>

                                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-red-900">Saídas Previstas</span>
                                        <span className="font-bold text-red-600">R$ 195.3K</span>
                                    </div>
                                    <p className="text-sm text-red-600 mt-1">Folha, aluguel e fornecedores</p>
                                </div>

                                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-blue-900">Saldo Projetado</span>
                                        <span className="font-bold text-blue-600">R$ 331.5K</span>
                                    </div>
                                    <p className="text-sm text-blue-600 mt-1">Resultado líquido projetado</p>
                                </div>

                                <div className="pt-3 border-t border-gray-200">
                                    <h4 className="font-semibold text-gray-900 mb-2">Próximos Vencimentos</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Folha de Pagamento (05/11)</span>
                                            <span className="font-medium">R$ 89.2K</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Aluguel Unidades (10/11)</span>
                                            <span className="font-medium">R$ 45.6K</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Fornecedores (15/11)</span>
                                            <span className="font-medium">R$ 28.4K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Executive Summary */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-purple-600" />
                            Resumo Executivo
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Indicadores Chave</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                        <span className="text-sm font-medium">ROI (Return on Investment)</span>
                                        <span className="font-bold text-green-600">24.7%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                        <span className="text-sm font-medium">EBITDA</span>
                                        <span className="font-bold text-purple-600">R$ 342.1K</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                        <span className="text-sm font-medium">Fluxo de Caixa Operacional</span>
                                        <span className="font-bold text-blue-600">R$ 298.5K</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                        <span className="text-sm font-medium">Crescimento MoM</span>
                                        <span className="font-bold text-green-600">+12.5%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Ações Recomendadas</h4>
                                <div className="space-y-3">
                                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                                        <p className="text-sm font-medium text-green-800">Otimizar Unidade Zona Norte</p>
                                        <p className="text-xs text-green-600">Margem abaixo da média - revisar custos operacionais</p>
                                    </div>
                                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                        <p className="text-sm font-medium text-blue-800">Expandir Horário Unidade Shopping</p>
                                        <p className="text-xs text-blue-600">Alta demanda - potencial +R$ 45K/mês</p>
                                    </div>
                                    <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                                        <p className="text-sm font-medium text-purple-800">Implementar Programa Fidelidade</p>
                                        <p className="text-xs text-purple-600">Aumentar ticket médio e recorrência</p>
                                    </div>
                                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                                        <p className="text-sm font-medium text-orange-800">Renegociar Contratos Fornecedores</p>
                                        <p className="text-xs text-orange-600">Potencial economia de 8-12% nos custos</p>
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
