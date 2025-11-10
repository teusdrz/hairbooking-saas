"use client";

import { Star } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Marina Silva",
            business: "Bella Hair Studio",
            text: "Sistema prático que organizou nossa agenda. Clientes gostaram do agendamento online."
        },
        {
            name: "Carlos Montenegro",
            business: "Barbearia Montenegro",
            text: "App personalizado trouxe profissionalismo. Recomendo."
        },
        {
            name: "Ana Paula Ribeiro",
            business: "Studio Ana Paula",
            text: "Faturamento aumentou 40%. Relatórios ajudam muito."
        }
    ];

    return (
        <section id="depoimentos" className="py-20 bg-white">
            <div className="container-width section-padding">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        O que <span className="text-gray-600">nossos clientes dizem</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6">
                            <div className="flex items-center mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>

                            <div>
                                <div className="font-medium text-gray-900 text-sm">
                                    {testimonial.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                    {testimonial.business}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
