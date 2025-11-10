"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Users, AlertTriangle, Key, FileText, Clock, Globe, UserCheck, Settings, Activity } from "lucide-react";

export default function EnterpriseSecurityPage() {
    return (
        <DashboardLayout plan="enterprise">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Segurança Avançada</h1>
                        <p className="text-gray-600 mt-2">Monitoramento e controle de segurança empresarial</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                            Relatório de Segurança
                        </button>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            Configurações
                        </button>
                    </div>
                </div>

                {/* Security Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Status de Segurança</p>
                                    <p className="text-2xl font-bold text-green-600">Seguro</p>
                                    <p className="text-sm text-gray-500 mt-1">98.5% Score</p>
                                </div>
                                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <Shield className="h-6 w-6 text-green-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Tentativas Bloqueadas</p>
                                    <p className="text-2xl font-bold text-red-600">47</p>
                                    <p className="text-sm text-gray-500 mt-1">Últimas 24h</p>
                                </div>
                                <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
                                    <AlertTriangle className="h-6 w-6 text-red-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Sessões Ativas</p>
                                    <p className="text-2xl font-bold text-blue-600">284</p>
                                    <p className="text-sm text-gray-500 mt-1">Multi-dispositivo</p>
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
                                    <p className="text-sm font-medium text-gray-600">Último Audit</p>
                                    <p className="text-2xl font-bold text-purple-600">Hoje</p>
                                    <p className="text-sm text-gray-500 mt-1">09:30</p>
                                </div>
                                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <Eye className="h-6 w-6 text-purple-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Access Control */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* User Access Management */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <UserCheck className="h-5 w-5 text-purple-600" />
                                Gestão de Acesso
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                            <Users className="h-5 w-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Administradores</p>
                                            <p className="text-sm text-gray-600">Acesso total ao sistema</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-gray-900">12</p>
                                        <p className="text-xs text-gray-500">usuários</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <Settings className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Gerentes</p>
                                            <p className="text-sm text-gray-600">Gestão de unidades</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-gray-900">28</p>
                                        <p className="text-xs text-gray-500">usuários</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                            <UserCheck className="h-5 w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Funcionários</p>
                                            <p className="text-sm text-gray-600">Acesso operacional</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-gray-900">156</p>
                                        <p className="text-xs text-gray-500">usuários</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t">
                                <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                                    Gerenciar Permissões
                                </button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Authentication Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Key className="h-5 w-5 text-purple-600" />
                                Autenticação
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">Autenticação de Dois Fatores</p>
                                        <p className="text-sm text-gray-600">Proteção adicional para login</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-11 h-6 bg-green-500 rounded-full p-1 flex items-center">
                                            <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">Login por Biometria</p>
                                        <p className="text-sm text-gray-600">Autenticação biométrica mobile</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-11 h-6 bg-green-500 rounded-full p-1 flex items-center">
                                            <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">Single Sign-On (SSO)</p>
                                        <p className="text-sm text-gray-600">Integração com Active Directory</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-11 h-6 bg-green-500 rounded-full p-1 flex items-center">
                                            <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">Bloqueio por Tentativas</p>
                                        <p className="text-sm text-gray-600">5 tentativas incorretas</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-11 h-6 bg-green-500 rounded-full p-1 flex items-center">
                                            <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t">
                                <button className="w-full px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    Configurar Autenticação
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Security Monitoring */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Activity Monitoring */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Activity className="h-5 w-5 text-purple-600" />
                                Monitoramento
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-sm font-medium">Login Admin</span>
                                    </div>
                                    <span className="text-xs text-gray-500">há 2min</span>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm font-medium">Backup Automático</span>
                                    </div>
                                    <span className="text-xs text-gray-500">há 1h</span>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                        <span className="text-sm font-medium">Acesso Negado</span>
                                    </div>
                                    <span className="text-xs text-gray-500">há 3h</span>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        <span className="text-sm font-medium">Tentativa Invasão</span>
                                    </div>
                                    <span className="text-xs text-gray-500">há 6h</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Data Protection */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Lock className="h-5 w-5 text-purple-600" />
                                Proteção de Dados
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">Criptografia</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">AES-256</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm">Backup</span>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Diário</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm">LGPD</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Conforme</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm">SSL/TLS</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">1.3</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm">Firewall</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Ativo</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm">DDoS Protection</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">CloudFlare</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Compliance */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <FileText className="h-5 w-5 text-purple-600" />
                                Conformidade
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="p-3 bg-green-50 rounded-lg">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Shield className="h-4 w-4 text-green-600" />
                                        <span className="text-sm font-medium text-green-800">LGPD</span>
                                    </div>
                                    <p className="text-xs text-green-600">Lei Geral de Proteção de Dados</p>
                                </div>

                                <div className="p-3 bg-blue-50 rounded-lg">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Globe className="h-4 w-4 text-blue-600" />
                                        <span className="text-sm font-medium text-blue-800">ISO 27001</span>
                                    </div>
                                    <p className="text-xs text-blue-600">Gestão de Segurança da Informação</p>
                                </div>

                                <div className="p-3 bg-purple-50 rounded-lg">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Lock className="h-4 w-4 text-purple-600" />
                                        <span className="text-sm font-medium text-purple-800">PCI DSS</span>
                                    </div>
                                    <p className="text-xs text-purple-600">Segurança de Dados de Cartão</p>
                                </div>

                                <div className="p-3 bg-yellow-50 rounded-lg">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Clock className="h-4 w-4 text-yellow-600" />
                                        <span className="text-sm font-medium text-yellow-800">SOX</span>
                                    </div>
                                    <p className="text-xs text-yellow-600">Controles Financeiros</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Security Logs */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-purple-600" />
                            Logs de Segurança
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <AlertTriangle className="h-5 w-5 text-red-600" />
                                    <div>
                                        <p className="font-medium text-red-800">Tentativa de acesso não autorizado</p>
                                        <p className="text-sm text-red-600">IP: 192.168.1.100 - Usuário: admin</p>
                                    </div>
                                </div>
                                <div className="text-right text-sm text-red-600">
                                    <p>10:45</p>
                                    <p>Hoje</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <Eye className="h-5 w-5 text-yellow-600" />
                                    <div>
                                        <p className="font-medium text-yellow-800">Múltiplos logins simultâneos</p>
                                        <p className="text-sm text-yellow-600">Usuário: maria.silva@empresa.com</p>
                                    </div>
                                </div>
                                <div className="text-right text-sm text-yellow-600">
                                    <p>09:30</p>
                                    <p>Hoje</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <Shield className="h-5 w-5 text-blue-600" />
                                    <div>
                                        <p className="font-medium text-blue-800">Backup de segurança concluído</p>
                                        <p className="text-sm text-blue-600">Todos os dados protegidos com sucesso</p>
                                    </div>
                                </div>
                                <div className="text-right text-sm text-blue-600">
                                    <p>03:00</p>
                                    <p>Hoje</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <UserCheck className="h-5 w-5 text-green-600" />
                                    <div>
                                        <p className="font-medium text-green-800">Certificado SSL renovado</p>
                                        <p className="text-sm text-green-600">Válido até 15/03/2025</p>
                                    </div>
                                </div>
                                <div className="text-right text-sm text-green-600">
                                    <p>00:15</p>
                                    <p>Hoje</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-purple-50 border border-purple-200 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <Settings className="h-5 w-5 text-purple-600" />
                                    <div>
                                        <p className="font-medium text-purple-800">Política de senha atualizada</p>
                                        <p className="text-sm text-purple-600">Complexidade mínima aumentada</p>
                                    </div>
                                </div>
                                <div className="text-right text-sm text-purple-600">
                                    <p>16:20</p>
                                    <p>Ontem</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <button className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                Ver Todos os Logs
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
