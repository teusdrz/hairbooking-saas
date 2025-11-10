"use client";

import { Calendar, CheckCircle, Star } from "lucide-react";
import MouseFollowText from "../ui/MouseFollowText";

export default function Hero() {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <section id="inicio" className="pt-16 bg-white">
            <div className="container-width section-padding">
                <div className="flex items-center justify-center min-h-[80vh] py-12 lg:py-20">
                    {/* Centered Content */}
                    <div className="max-w-4xl mx-auto text-center space-y-8 lg:space-y-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
                                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                                Sistema Completo para Salões
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
                                <span className="animate-title-word">Modernize</span>{' '}
                                <span className="animate-title-word">seu</span>{' '}
                                <span className="animate-title-word gradient-word bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">salão</span>{' '}
                                <span className="animate-title-word">com</span>{' '}
                                <span className="animate-title-word">nossa</span>{' '}
                                <span className="animate-title-word gradient-word bg-gradient-to-r from-gray-700 via-black to-gray-700 bg-clip-text text-transparent">plataforma</span>
                            </h1>

                            <MouseFollowText
                                text="Sistema completo de agendamentos online, gestão de clientes e crescimento do seu negócio. Tudo que você precisa em uma plataforma."
                                className="text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-3xl mx-auto"
                            />
                        </div>

                        {/* Benefits */}
                        <div className="grid grid-cols-3 gap-6 lg:gap-12 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-gray-900">24/7</div>
                                <div className="text-sm lg:text-base text-gray-600">Agendamentos Online</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-gray-900">+40%</div>
                                <div className="text-sm lg:text-base text-gray-600">Mais Receita</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-gray-900">Zero</div>
                                <div className="text-sm lg:text-base text-gray-600">Agenda de Papel</div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <a
                                href="#planos"
                                onClick={(e) => handleSmoothScroll(e, "#planos")}
                                className="btn-primary text-center cursor-pointer"
                            >
                                <Calendar className="w-5 h-5 mr-2" />
                                Começar Agora
                            </a>
                            <a
                                href="#servicos"
                                onClick={(e) => handleSmoothScroll(e, "#servicos")}
                                className="btn-secondary text-center cursor-pointer"
                            >
                                Ver Funcionalidades
                            </a>
                        </div>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 max-w-3xl mx-auto">
                            <div className="flex items-center justify-center sm:justify-start text-sm lg:text-base text-gray-600">
                                <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                                <span>Agendamentos automáticos 24/7</span>
                            </div>
                            <div className="flex items-center justify-center sm:justify-start text-sm lg:text-base text-gray-600">
                                <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                                <span>Gestão completa de clientes</span>
                            </div>
                            <div className="flex items-center justify-center sm:justify-start text-sm lg:text-base text-gray-600">
                                <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                                <span>Relatórios de vendas e performance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
