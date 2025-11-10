"use client";

import { MapPin, Smartphone, Globe, Monitor, CheckCircle, Users } from "lucide-react";
import Link from "next/link";

export default function Location() {
    const platformFeatures = [
        {
            icon: Globe,
            title: "Presença Online",
            description: "Site personalizado para seu salão",
            benefits: ["Domínio próprio", "Design exclusivo", "SEO otimizado", "Responsivo"]
        },
        {
            icon: Smartphone,
            title: "App Mobile",
            description: "Aplicativo com sua marca",
            benefits: ["Logo personalizado", "Cores da marca", "Notificações push", "Offline"]
        },
        {
            icon: Monitor,
            title: "Painel Administrativo",
            description: "Gestão completa do negócio",
            benefits: ["Dashboard em tempo real", "Relatórios detalhados", "Controle de equipe", "Histórico completo"]
        }
    ];

    const supportAreas = [
        {
            title: "Implementação",
            description: "Configuramos toda a plataforma com os dados do seu salão",
            items: ["Cadastro de serviços", "Configuração de horários", "Upload de fotos", "Treino da equipe"]
        },
        {
            title: "Suporte Técnico",
            description: "Equipe especializada para resolver qualquer problema",
            items: ["Suporte via WhatsApp", "Videoconferência", "Acesso remoto", "Disponível 6 dias/semana"]
        },
        {
            title: "Marketing Digital",
            description: "Ajudamos a divulgar seu salão online",
            items: ["Configuração Google Meu Negócio", "Integração redes sociais", "Templates de posts", "Campanhas de e-mail"]
        }
    ];

    const coverage = [
        { state: "São Paulo", regions: "Capital, Interior, Litoral", status: "active" },
        { state: "Rio de Janeiro", regions: "Capital, Região Metropolitana", status: "active" },
        { state: "Minas Gerais", regions: "Belo Horizonte, Região Metropolitana", status: "active" },
        { state: "Paraná", regions: "Curitiba, Maringá, Londrina", status: "active" },
        { state: "Rio Grande do Sul", regions: "Porto Alegre, Região Metropolitana", status: "active" },
        { state: "Santa Catarina", regions: "Florianópolis, Blumenau", status: "active" },
        { state: "Bahia", regions: "Salvador e Região", status: "coming-soon" },
        { state: "Pernambuco", regions: "Recife e Região", status: "coming-soon" }
    ];

    return (
        <section id="cobertura" className="py-24 bg-gray-50">
            <div className="container-width section-padding overflow-hidden">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-600 mb-4">
                        <Globe className="w-4 h-4 mr-2 text-blue-500" />
                        Cobertura Nacional
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Seu salão
                        <span className="gradient-text"> em qualquer lugar</span>
                    </h2>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        Nossa plataforma funciona em todo o Brasil. Independente da localização
                        do seu salão, você terá acesso completo a todas as funcionalidades.
                    </p>
                </div>

                {/* Platform Features */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 max-w-full overflow-hidden">
                    {platformFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all"
                        >
                            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl mb-6">
                                <feature.icon className="w-6 h-6 text-gray-700" />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {feature.description}
                            </p>

                            <ul className="space-y-2">
                                {feature.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-600">
                                        <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Support Areas */}
                <div className="bg-white rounded-2xl p-12 mb-16">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Suporte e Acompanhamento
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Não deixamos você sozinho. Nossa equipe acompanha desde a implementação
                            até o crescimento do seu negócio.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-full overflow-hidden">
                        {supportAreas.map((area, index) => (
                            <div key={index} className="text-center">
                                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-6">
                                    <Users className="w-8 h-8 text-gray-700" />
                                </div>

                                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                                    {area.title}
                                </h4>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {area.description}
                                </p>

                                <ul className="space-y-2 text-left">
                                    {area.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Coverage Map */}
                <div className="bg-white rounded-2xl p-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Disponível em Todo o Brasil
                        </h3>
                        <p className="text-gray-600">
                            Expandindo constantemente para atender salões em todas as regiões
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full overflow-hidden">
                        {coverage.map((location, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-xl border ${location.status === 'active'
                                    ? 'bg-green-50 border-green-200'
                                    : 'bg-yellow-50 border-yellow-200'
                                    }`}
                            >
                                <div className="flex items-center mb-2">
                                    <MapPin className={`w-4 h-4 mr-2 ${location.status === 'active' ? 'text-green-500' : 'text-yellow-500'
                                        }`} />
                                    <div className={`font-semibold ${location.status === 'active' ? 'text-green-900' : 'text-yellow-900'
                                        }`}>
                                        {location.state}
                                    </div>
                                </div>
                                <div className={`text-sm mb-2 ${location.status === 'active' ? 'text-green-700' : 'text-yellow-700'
                                    }`}>
                                    {location.regions}
                                </div>
                                <div className={`text-xs font-medium ${location.status === 'active' ? 'text-green-600' : 'text-yellow-600'
                                    }`}>
                                    {location.status === 'active' ? 'Disponível' : 'Em breve'}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-sm text-gray-600 mb-4">
                            Quer ser pioneiro na sua região? Entre em contato!
                        </p>
                        <Link href="#planos" className="btn-primary">
                            <Smartphone className="w-5 h-5 mr-2" />
                            Começar Agora
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
