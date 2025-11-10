"use client";

import { Award, Clock, Heart, Shield, Users, TrendingUp, DollarSign } from "lucide-react";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);

    const features = [
        {
            icon: Clock,
            title: "Agendamentos 24/7",
            description: "Seus clientes podem agendar a qualquer hora, mesmo quando você está dormindo."
        },
        {
            icon: DollarSign,
            title: "Aumente sua Receita",
            description: "Sistema inteligente que otimiza sua agenda e aumenta o faturamento."
        },
        {
            icon: Users,
            title: "Gestão de Clientes",
            description: "Histórico completo e lembretes automáticos para fidelizar clientes."
        },
        {
            icon: Shield,
            title: "Dados Seguros",
            description: "Proteção bancária e backup automático dos seus dados."
        },
        {
            icon: TrendingUp,
            title: "Relatórios de Vendas",
            description: "Acompanhe faturamento e performance em tempo real."
        },
        {
            icon: Award,
            title: "Suporte Dedicado",
            description: "Equipe especializada e treinamento gratuito para sua equipe."
        }
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;

        if (!section) return;

        const cards = gsap.utils.toArray(".horizontal-card");
        const totalCards = cards.length;

        // Cálculos precisos para movimento horizontal
        const cardWidth = 350;
        const cardGap = 50;
        const totalWidth = (cardWidth + cardGap) * totalCards;
        const maxScroll = totalWidth - window.innerWidth;

        // Setup inicial dos cards
        gsap.set(cards, {
            x: (index: number) => index * (cardWidth + cardGap),
            opacity: 1
        });

        // ScrollTrigger principal
        ScrollTrigger.create({
            trigger: section,
            start: "top 20%",
            end: () => `+=${maxScroll + window.innerHeight}`,
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
            snap: {
                snapTo: 1 / (totalCards - 1),
                duration: 0.6,
                delay: 0.1,
                ease: "power2.inOut"
            },
            toggleActions: "restart pause resume reverse",
            onUpdate: (self) => {
                const progress = self.progress;

                gsap.set(cards, {
                    x: (index: number) => {
                        const baseX = index * (cardWidth + cardGap);
                        return baseX - (progress * maxScroll);
                    },
                    rotationY: (index: number) => {
                        const cardCenter = index / (totalCards - 1);
                        const distance = Math.abs(progress - cardCenter);
                        return distance * 25;
                    },
                    scale: (index: number) => {
                        const cardCenter = index / (totalCards - 1);
                        const distance = Math.abs(progress - cardCenter);
                        return 1 - (distance * 0.2);
                    },
                    opacity: (index: number) => {
                        const cardCenter = index / (totalCards - 1);
                        const distance = Math.abs(progress - cardCenter);
                        return 1 - (distance * 0.4);
                    }
                });

                // Background gradient
                const hue = progress * 60;
                gsap.set(section, {
                    background: `linear-gradient(135deg, 
                        hsl(${200 + hue}, 20%, 97%) 0%, 
                        hsl(${220 + hue}, 25%, 95%) 100%)`
                });

                // Header movement
                const header = section.querySelector('.section-header');
                if (header) {
                    gsap.set(header, {
                        y: -progress * 150,
                        opacity: 1 - progress * 0.8
                    });
                }
            },
            onEnter: () => {
                gsap.fromTo(cards, {
                    rotationX: 90,
                    opacity: 0,
                    y: 100
                }, {
                    rotationX: 0,
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: "back.out(1.4)"
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="sobre"
            className="relative overflow-hidden bg-gray-50"
            style={{
                minHeight: "100vh",
                perspective: "1000px"
            }}
        >
            <div className="container-width section-padding">
                <div className="section-header text-center max-w-3xl mx-auto pt-20 pb-16">
                    <div className="inline-flex items-center px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-600 mb-4">
                        <Heart className="w-4 h-4 mr-2 text-red-500" />
                        Por que escolher a HairBooking
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Transforme seu salão em um
                        <span className="gradient-text"> negócio digital</span>
                    </h2>

                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                        Nossa plataforma oferece todas as ferramentas que você precisa para
                        modernizar seu salão e aumentar a receita.
                    </p>
                </div>

                <div
                    ref={cardsContainerRef}
                    className="relative h-96 flex items-center justify-center overflow-hidden"
                    style={{ perspective: "1000px" }}
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="horizontal-card absolute bg-white rounded-2xl p-8 border border-gray-200 shadow-lg cursor-pointer"
                            style={{
                                width: "320px",
                                height: "280px",
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%, -50%)",
                                willChange: "transform, opacity"
                            }}
                        >
                            <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl mb-6 mx-auto">
                                <feature.icon className="w-8 h-8 text-gray-700" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                {feature.title}
                            </h3>

                            <p className="text-sm text-gray-600 leading-relaxed text-center">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-32">
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">+40%</div>
                        <div className="text-xs sm:text-sm lg:text-base text-gray-600">Aumento na Receita</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">-60%</div>
                        <div className="text-xs sm:text-sm lg:text-base text-gray-600">Menos Cancelamentos</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">24/7</div>
                        <div className="text-xs sm:text-sm lg:text-base text-gray-600">Agendamentos Online</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">100%</div>
                        <div className="text-xs sm:text-sm lg:text-base text-gray-600">Agenda Organizada</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
