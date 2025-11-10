"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Users, Bell, Shield, Globe, Palette, Database, Mail, Smartphone, Key, Lock, Eye } from "lucide-react";

export default function EnterpriseSettingsPage() {
    return (
        <DashboardLayout plan="enterprise">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Configurações Enterprise</h1>
                        <p className="text-gray-600 mt-2">Configurações avançadas para administração multi-unidades</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            Salvar Todas as Configurações
                        </button>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            Exportar Configurações
                        </button>
                    </div>
                </div>

                {/* Configuration Categories */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* General Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Settings className="h-5 w-5 text-purple-600" />
                                Configurações Gerais
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome da Empresa</label>
                                    <input type="text" value="HairBooking Enterprise" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                                </div>

                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">CNPJ</label>
                                    <input type="text" value="00.000.000/0001-00" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                                </div>

                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Fuso Horário</label>
                                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                                        <option>America/Sao_Paulo</option>
                                        <option>America/Brasilia</option>
                                        <option>America/Recife</option>
                                    </select>
                                </div>

                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Moeda Padrão</label>
                                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                                        <option>BRL - Real Brasileiro</option>
                                        <option>USD - Dólar Americano</option>
                                        <option>EUR - Euro</option>
                                    </select>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* User Management */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-blue-600" />
                                Gestão de Usuários
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium text-blue-900">Administradores</span>
                                        <span className="text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded">5 usuários</span>
                                    </div>
                                    <button className="text-sm text-blue-600 hover:text-blue-800">Gerenciar administradores</button>
                                </div>

                                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium text-green-900">Gerentes de Unidade</span>
                                        <span className="text-sm bg-green-200 text-green-800 px-2 py-1 rounded">12 usuários</span>
                                    </div>
                                    <button className="text-sm text-green-600 hover:text-green-800">Gerenciar gerentes</button>
                                </div>

                                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium text-purple-900">Profissionais</span>
                                        <span className="text-sm bg-purple-200 text-purple-800 px-2 py-1 rounded">47 usuários</span>
                                    </div>
                                    <button className="text-sm text-purple-600 hover:text-purple-800">Gerenciar profissionais</button>
                                </div>

                                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium text-orange-900">Atendentes</span>
                                        <span className="text-sm bg-orange-200 text-orange-800 px-2 py-1 rounded">18 usuários</span>
                                    </div>
                                    <button className="text-sm text-orange-600 hover:text-orange-800">Gerenciar atendentes</button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Security Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Shield className="h-5 w-5 text-red-600" />
                                Segurança
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <Lock className="h-4 w-4 text-red-600" />
                                        <span className="text-sm font-medium text-red-900">Autenticação 2FA</span>
                                    </div>
                                    <button className="bg-red-600 text-white px-3 py-1 rounded text-sm">Ativado</button>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <Key className="h-4 w-4 text-yellow-600" />
                                        <span className="text-sm font-medium text-yellow-900">Políticas de Senha</span>
                                    </div>
                                    <button className="bg-yellow-600 text-white px-3 py-1 rounded text-sm">Configurar</button>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <Eye className="h-4 w-4 text-green-600" />
                                        <span className="text-sm font-medium text-green-900">Auditoria de Acesso</span>
                                    </div>
                                    <button className="bg-green-600 text-white px-3 py-1 rounded text-sm">Ativo</button>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <Database className="h-4 w-4 text-blue-600" />
                                        <span className="text-sm font-medium text-blue-900">Backup Automático</span>
                                    </div>
                                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Diário</button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Notification Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Bell className="h-5 w-5 text-purple-600" />
                            Configurações de Notificação
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Notificações por Email</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                                        <div>
                                            <p className="font-medium text-green-900">Relatórios Diários</p>
                                            <p className="text-sm text-green-700">Resumo de atividades diárias</p>
                                        </div>
                                        <button className="w-12 h-6 bg-green-500 rounded-full relative">
                                            <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                        <div>
                                            <p className="font-medium text-blue-900">Alertas de Sistema</p>
                                            <p className="text-sm text-blue-700">Notificações importantes</p>
                                        </div>
                                        <button className="w-12 h-6 bg-blue-500 rounded-full relative">
                                            <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div>
                                            <p className="font-medium text-gray-900">Marketing</p>
                                            <p className="text-sm text-gray-700">Campanhas e promoções</p>
                                        </div>
                                        <button className="w-12 h-6 bg-gray-300 rounded-full relative">
                                            <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Notificações Push</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                                        <div>
                                            <p className="font-medium text-purple-900">Novos Agendamentos</p>
                                            <p className="text-sm text-purple-700">Em tempo real</p>
                                        </div>
                                        <button className="w-12 h-6 bg-purple-500 rounded-full relative">
                                            <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                                        <div>
                                            <p className="font-medium text-orange-900">Cancelamentos</p>
                                            <p className="text-sm text-orange-700">Imediatos</p>
                                        </div>
                                        <button className="w-12 h-6 bg-orange-500 rounded-full relative">
                                            <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                                        <div>
                                            <p className="font-medium text-red-900">Emergências</p>
                                            <p className="text-sm text-red-700">Alertas críticos</p>
                                        </div>
                                        <button className="w-12 h-6 bg-red-500 rounded-full relative">
                                            <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Integration Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Globe className="h-5 w-5 text-purple-600" />
                            Integrações e APIs
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Integrações Ativas</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                                <span className="text-white text-sm font-bold">$</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-green-900">Stripe Payment</p>
                                                <p className="text-sm text-green-700">Processamento de pagamentos</p>
                                            </div>
                                        </div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                                <Mail className="h-4 w-4 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-blue-900">SendGrid</p>
                                                <p className="text-sm text-blue-700">Envio de emails transacionais</p>
                                            </div>
                                        </div>
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-purple-50 border border-purple-200 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                                <Smartphone className="h-4 w-4 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-purple-900">Twilio SMS</p>
                                                <p className="text-sm text-purple-700">Notificações por SMS</p>
                                            </div>
                                        </div>
                                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">APIs Disponíveis</h4>
                                <div className="space-y-3">
                                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-gray-900">API REST v2</span>
                                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Ativa</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-2">Acesso completo aos dados</p>
                                        <button className="text-sm text-blue-600 hover:text-blue-800">Ver documentação</button>
                                    </div>

                                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-gray-900">Webhooks</span>
                                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Configurado</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-2">Eventos em tempo real</p>
                                        <button className="text-sm text-blue-600 hover:text-blue-800">Configurar endpoints</button>
                                    </div>

                                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-gray-900">GraphQL</span>
                                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Beta</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-2">Consultas flexíveis</p>
                                        <button className="text-sm text-blue-600 hover:text-blue-800">Solicitar acesso</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Branding and Customization */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Palette className="h-5 w-5 text-purple-600" />
                            Personalização da Marca
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Aparência</h4>
                                <div className="space-y-3">
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Logo Principal</label>
                                        <div className="w-32 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                                            <span className="text-purple-600 text-sm">Logo Atual</span>
                                        </div>
                                        <button className="text-sm text-purple-600 hover:text-purple-800">Alterar logo</button>
                                    </div>

                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Cor Primária</label>
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-purple-600 rounded-full border-2 border-gray-300"></div>
                                            <input type="text" value="#9333EA" className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm" />
                                        </div>
                                    </div>

                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Cor Secundária</label>
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-blue-600 rounded-full border-2 border-gray-300"></div>
                                            <input type="text" value="#2563EB" className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">White Label</h4>
                                <div className="space-y-3">
                                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-blue-900">Domínio Personalizado</span>
                                            <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Ativo</span>
                                        </div>
                                        <p className="text-sm text-blue-700">booking.suasalao.com.br</p>
                                        <button className="text-sm text-blue-600 hover:text-blue-800 mt-1">Alterar domínio</button>
                                    </div>

                                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-green-900">Certificado SSL</span>
                                            <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">Válido</span>
                                        </div>
                                        <p className="text-sm text-green-700">Expira em 12/03/2025</p>
                                    </div>

                                    <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-purple-900">App Mobile</span>
                                            <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded">Disponível</span>
                                        </div>
                                        <p className="text-sm text-purple-700">iOS & Android customizados</p>
                                        <button className="text-sm text-purple-600 hover:text-purple-800 mt-1">Configurar apps</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Backup and Recovery */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Database className="h-5 w-5 text-purple-600" />
                            Backup e Recuperação
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900">Backup Automático</h4>
                                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                                    <p className="text-sm font-medium text-green-900 mb-1">Frequência: Diário</p>
                                    <p className="text-sm text-green-700 mb-1">Hora: 02:00 AM</p>
                                    <p className="text-sm text-green-700">Último backup: Hoje, 02:15</p>
                                </div>
                                <button className="w-full px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
                                    Configurar Backup
                                </button>
                            </div>

                            <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900">Retenção de Dados</h4>
                                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                    <p className="text-sm font-medium text-blue-900 mb-1">Backups locais: 30 dias</p>
                                    <p className="text-sm text-blue-700 mb-1">Cloud backup: 1 ano</p>
                                    <p className="text-sm text-blue-700">Arquivos: 2 anos</p>
                                </div>
                                <button className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                                    Alterar Política
                                </button>
                            </div>

                            <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900">Recuperação</h4>
                                <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                                    <p className="text-sm font-medium text-purple-900 mb-1">RTO: &lt; 1 hora</p>
                                    <p className="text-sm text-purple-700 mb-1">RPO: &lt; 15 minutos</p>
                                    <p className="text-sm text-purple-700">Última recuperação: N/A</p>
                                </div>
                                <button className="w-full px-3 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700">
                                    Teste de Recuperação
                                </button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
