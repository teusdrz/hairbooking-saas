"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Upload, Eye, Settings, Smartphone, Globe, Download, Share2, ImageIcon, Type, Brush, Monitor } from "lucide-react";

export default function EnterpriseWhiteLabelPage() {
    return (
        <DashboardLayout plan="enterprise">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">White Label</h1>
                        <p className="text-gray-600 mt-2">Personalização completa da marca e identidade visual</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            Publicar Alterações
                        </button>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            Visualizar Preview
                        </button>
                    </div>
                </div>

                {/* Brand Identity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Logo and Branding */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <ImageIcon className="h-5 w-5 text-purple-600" />
                                Identidade Visual
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Logo Principal</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors cursor-pointer">
                                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                                        <p className="text-sm text-gray-600">Clique para fazer upload</p>
                                        <p className="text-xs text-gray-500 mt-1">PNG, JPG ou SVG até 2MB</p>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Logo Secundário (Ícone)</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer">
                                        <Upload className="h-6 w-6 text-gray-400 mx-auto mb-1" />
                                        <p className="text-xs text-gray-600">Upload do ícone</p>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Favicon</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-purple-400 transition-colors cursor-pointer">
                                        <Upload className="h-4 w-4 text-gray-400 mx-auto mb-1" />
                                        <p className="text-xs text-gray-600">32x32 pixels</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Color Palette */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Palette className="h-5 w-5 text-purple-600" />
                                Paleta de Cores
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Cor Primária</label>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-purple-600 rounded-lg border border-gray-200"></div>
                                        <input
                                            type="color"
                                            value="#7C3AED"
                                            className="w-16 h-12 rounded border border-gray-200 cursor-pointer"
                                        />
                                        <input
                                            type="text"
                                            value="#7C3AED"
                                            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Cor Secundária</label>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-blue-500 rounded-lg border border-gray-200"></div>
                                        <input
                                            type="color"
                                            value="#3B82F6"
                                            className="w-16 h-12 rounded border border-gray-200 cursor-pointer"
                                        />
                                        <input
                                            type="text"
                                            value="#3B82F6"
                                            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Cor de Destaque</label>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-green-500 rounded-lg border border-gray-200"></div>
                                        <input
                                            type="color"
                                            value="#10B981"
                                            className="w-16 h-12 rounded border border-gray-200 cursor-pointer"
                                        />
                                        <input
                                            type="text"
                                            value="#10B981"
                                            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Cor de Fundo</label>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-200"></div>
                                        <input
                                            type="color"
                                            value="#F9FAFB"
                                            className="w-16 h-12 rounded border border-gray-200 cursor-pointer"
                                        />
                                        <input
                                            type="text"
                                            value="#F9FAFB"
                                            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Typography and Styling */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Typography */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Type className="h-5 w-5 text-purple-600" />
                                Tipografia
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Fonte Principal</label>
                                    <select className="w-full px-3 py-2 border border-gray-200 rounded-lg">
                                        <option>Inter</option>
                                        <option>Roboto</option>
                                        <option>Open Sans</option>
                                        <option>Lato</option>
                                        <option>Montserrat</option>
                                        <option>Poppins</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Fonte Secundária</label>
                                    <select className="w-full px-3 py-2 border border-gray-200 rounded-lg">
                                        <option>System UI</option>
                                        <option>Georgia</option>
                                        <option>Times New Roman</option>
                                        <option>Arial</option>
                                        <option>Helvetica</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 mb-2 block">Tamanho Base</label>
                                        <select className="w-full px-3 py-2 border border-gray-200 rounded-lg">
                                            <option>14px</option>
                                            <option>16px</option>
                                            <option>18px</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 mb-2 block">Peso da Fonte</label>
                                        <select className="w-full px-3 py-2 border border-gray-200 rounded-lg">
                                            <option>Normal</option>
                                            <option>Medium</option>
                                            <option>Semibold</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Custom Styling */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Brush className="h-5 w-5 text-purple-600" />
                                Estilização Customizada
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Estilo dos Botões</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm">Arredondado</button>
                                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded text-sm">Quadrado</button>
                                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm">Circular</button>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Estilo dos Cards</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm">Com Sombra</button>
                                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm">Flat</button>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Raio de Borda</label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="20"
                                        defaultValue="8"
                                        className="w-full"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                        <span>0px</span>
                                        <span>8px</span>
                                        <span>20px</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Intensidade da Sombra</label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="10"
                                        defaultValue="3"
                                        className="w-full"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                        <span>Nenhuma</span>
                                        <span>Média</span>
                                        <span>Forte</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Application Configuration */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* App Configuration */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Settings className="h-5 w-5 text-purple-600" />
                                Configuração do App
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">Nome da Aplicação</label>
                                <input
                                    type="text"
                                    defaultValue="SalãoPro"
                                    className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">Slogan</label>
                                <input
                                    type="text"
                                    defaultValue="Sua beleza, nossa prioridade"
                                    className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">URL Personalizada</label>
                                <input
                                    type="text"
                                    defaultValue="salaopro.app"
                                    className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">Idioma Padrão</label>
                                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg">
                                    <option>Português (Brasil)</option>
                                    <option>English (US)</option>
                                    <option>Español</option>
                                </select>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Mobile App */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Smartphone className="h-5 w-5 text-purple-600" />
                                App Mobile
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">Ícone do App</label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer">
                                    <Smartphone className="h-6 w-6 text-gray-400 mx-auto mb-1" />
                                    <p className="text-xs text-gray-600">1024x1024</p>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">Splash Screen</label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer">
                                    <Upload className="h-6 w-6 text-gray-400 mx-auto mb-1" />
                                    <p className="text-xs text-gray-600">Upload da tela</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" defaultChecked className="rounded" />
                                    <span className="text-sm">Notificações Push</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" defaultChecked className="rounded" />
                                    <span className="text-sm">Dark Mode</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="rounded" />
                                    <span className="text-sm">Biometria</span>
                                </label>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Web Configuration */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Globe className="h-5 w-5 text-purple-600" />
                                Configuração Web
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">Meta Title</label>
                                <input
                                    type="text"
                                    defaultValue="SalãoPro - Sistema de Gestão"
                                    className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">Meta Description</label>
                                <textarea
                                    defaultValue="Sistema completo para gestão de salões de beleza"
                                    className="w-full px-3 py-2 border border-gray-200 rounded-lg h-20 resize-none"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">Analytics ID</label>
                                <input
                                    type="text"
                                    placeholder="G-XXXXXXXXXX"
                                    className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" defaultChecked className="rounded" />
                                    <span className="text-sm">SSL Forçado</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" defaultChecked className="rounded" />
                                    <span className="text-sm">Compressão GZIP</span>
                                </label>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Preview and Export */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Monitor className="h-5 w-5 text-purple-600" />
                            Preview e Exportação
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Preview em Tempo Real</h4>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 min-h-64">
                                    <div className="bg-white rounded shadow-sm p-4 h-full">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-8 bg-purple-600 rounded"></div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">SalãoPro</h3>
                                                <p className="text-xs text-gray-600">Sua beleza, nossa prioridade</p>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                                            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                                            <div className="h-8 bg-purple-600 rounded w-24 mt-4"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="flex-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                                        <Eye className="h-4 w-4 inline mr-2" />
                                        Preview Desktop
                                    </button>
                                    <button className="flex-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                                        <Smartphone className="h-4 w-4 inline mr-2" />
                                        Preview Mobile
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Opções de Exportação</h4>
                                <div className="space-y-3">
                                    <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <Download className="h-5 w-5 text-purple-600" />
                                            <div className="text-left">
                                                <p className="font-medium">Pacote de Marca</p>
                                                <p className="text-sm text-gray-600">Logos, cores e assets</p>
                                            </div>
                                        </div>
                                        <span className="text-sm text-gray-500">ZIP</span>
                                    </button>

                                    <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <Share2 className="h-5 w-5 text-purple-600" />
                                            <div className="text-left">
                                                <p className="font-medium">Kit de Mídia</p>
                                                <p className="text-sm text-gray-600">Para marketing e divulgação</p>
                                            </div>
                                        </div>
                                        <span className="text-sm text-gray-500">ZIP</span>
                                    </button>

                                    <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <Settings className="h-5 w-5 text-purple-600" />
                                            <div className="text-left">
                                                <p className="font-medium">Configurações CSS</p>
                                                <p className="text-sm text-gray-600">Variáveis e estilos</p>
                                            </div>
                                        </div>
                                        <span className="text-sm text-gray-500">CSS</span>
                                    </button>
                                </div>

                                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                                    <h5 className="font-medium text-purple-900 mb-2">Publicação Automática</h5>
                                    <p className="text-sm text-purple-700 mb-3">
                                        As alterações serão aplicadas automaticamente em todos os pontos de contato.
                                    </p>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm">
                                            Publicar Agora
                                        </button>
                                        <button className="px-3 py-1 border border-purple-300 text-purple-600 rounded text-sm">
                                            Agendar
                                        </button>
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
