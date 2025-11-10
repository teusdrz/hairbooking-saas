"use client";

import { Check } from "lucide-react";
import Link from "next/link";

export default function Plans() {
    const plans = [
        {
            name: "Starter",
            price: 89,
            features: ["Agendamento online", "Site personalizado", "1 profissional", "Suporte básico"]
        },
        {
            name: "Professional",
            price: 149,
            popular: true,
            features: ["Tudo do Starter", "App mobile", "3 profissionais", "Relatórios", "Suporte prioritário"]
        },
        {
            name: "Enterprise",
            price: 299,
            features: ["Tudo do Professional", "Profissionais ilimitados", "Multi-unidades", "API personalizada"]
        }
    ];

    return (
        <section id="planos" className="py-20 bg-gray-50">
            <div className="container-width section-padding">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Planos <span className="text-gray-600">simples</span>
                    </h2>
                    <p className="text-gray-600">Escolha o que faz sentido para seu negócio</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl p-6 border ${plan.popular
                                    ? 'border-gray-900 shadow-lg'
                                    : 'border-gray-200'
                                }`}
                        >
                            {plan.popular && (
                                <div className="text-center mb-4">
                                    <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm">
                                        Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {plan.name}
                                </h3>
                                <div className="text-2xl font-bold text-gray-900">
                                    R$ {plan.price}<span className="text-sm text-gray-500">/mês</span>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-700">
                                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/booking"
                                className={`block w-full text-center py-3 rounded-lg font-medium transition-colors ${plan.popular
                                        ? 'bg-gray-900 text-white hover:bg-gray-800'
                                        : 'border border-gray-300 text-gray-700 hover:border-gray-900'
                                    }`}
                            >
                                Começar
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
