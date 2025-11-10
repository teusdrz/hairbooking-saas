"use client";

import { useState } from "react";
import { Phone, Mail, MessageSquare, Send, CheckCircle } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        business: "",
        plan: "",
        message: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui seria implementada a lógica de envio do formulário
        setIsSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const plans = [
        { id: "starter", name: "Starter - R$ 97/mês" },
        { id: "professional", name: "Professional - R$ 197/mês" },
        { id: "enterprise", name: "Enterprise - R$ 397/mês" },
        { id: "custom", name: "Plano Personalizado" }
    ];

    const contactMethods = [
        {
            icon: Phone,
            title: "Telefone",
            description: "Fale diretamente com nossa equipe",
            value: "(11) 93204-9040",
            action: "Ligar Agora"
        },
        {
            icon: MessageSquare,
            title: "WhatsApp",
            description: "Tire suas dúvidas rapidamente",
            value: "(11) 93204-9040",
            action: "Chamar no WhatsApp"
        },
        {
            icon: Mail,
            title: "E-mail",
            description: "Envie sua mensagem detalhada",
            value: "matheusviniciusdrs5555@gmail.com",
            action: "Enviar E-mail"
        }
    ];

    if (isSubmitted) {
        return (
            <section id="contato" className="py-24 bg-gray-50">
                <div className="container-width section-padding">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-green-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Mensagem Enviada com Sucesso!
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Obrigado pelo seu interesse! Nossa equipe entrará em contato com você
                            em até 24 horas para agendar uma demonstração personalizada.
                        </p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="btn-secondary"
                        >
                            Enviar Nova Mensagem
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contato" className="py-24 bg-gray-50">
            <div className="container-width section-padding overflow-hidden">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-600 mb-4">
                        <MessageSquare className="w-4 h-4 mr-2 text-blue-500" />
                        Entre em Contato
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 break-words">
                        Pronto para
                        <span className="gradient-text"> transformar seu salão?</span>
                    </h2>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        Fale com nossa equipe e descubra como nossa plataforma pode
                        aumentar seu faturamento e melhorar a experiência dos seus clientes.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-full overflow-hidden">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 max-w-full">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                            Solicite uma Demonstração
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-full overflow-hidden">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nome Completo *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm sm:text-base"
                                        placeholder="Seu nome"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Telefone *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm sm:text-base"
                                        placeholder="(11) 99999-9999"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    E-mail *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm sm:text-base"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nome do Salão/Empresa
                                </label>
                                <input
                                    type="text"
                                    name="business"
                                    value={formData.business}
                                    onChange={handleChange}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm sm:text-base"
                                    placeholder="Nome do seu salão"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Plano de Interesse
                                </label>
                                <select
                                    name="plan"
                                    value={formData.plan}
                                    onChange={handleChange}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm sm:text-base"
                                >
                                    <option value="">Selecione um plano</option>
                                    {plans.map((plan) => (
                                        <option key={plan.id} value={plan.id}>
                                            {plan.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Mensagem
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm sm:text-base"
                                    placeholder="Conte-nos sobre seu salão e suas necessidades..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary"
                            >
                                <Send className="w-5 h-5 mr-2" />
                                Solicitar Demonstração
                            </button>
                        </form>
                    </div>

                    {/* Contact Methods */}
                    <div className="space-y-6 lg:space-y-8">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
                                Outras Formas de Contato
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 mb-6 lg:mb-8">
                                Prefere falar diretamente? Use um dos canais abaixo
                                para entrar em contato com nossa equipe especializada.
                            </p>
                        </div>

                        <div className="space-y-4 lg:space-y-6">
                            {contactMethods.map((method, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-start space-x-3 sm:space-x-4">
                                        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex-shrink-0">
                                            <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                                                {method.title}
                                            </h4>
                                            <p className="text-gray-600 text-xs sm:text-sm mb-2">
                                                {method.description}
                                            </p>
                                            <p className="font-medium text-gray-900 mb-3 text-sm sm:text-base">
                                                {method.value}
                                            </p>
                                            <button className="text-xs sm:text-sm text-gray-700 hover:text-gray-900 font-medium">
                                                {method.action} →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                                Horário de Atendimento
                            </h4>
                            <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                                <div className="flex justify-between">
                                    <span>Segunda a Sexta:</span>
                                    <span>8h às 18h</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sábado:</span>
                                    <span>9h às 13h</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Domingo:</span>
                                    <span>Fechado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
