"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenItems(prev =>
            prev.includes(index)
                ? prev.filter(item => item !== index)
                : [...prev, index]
        );
    };

    const faqs = [
        {
            question: "Como funciona a implementação da plataforma no meu salão?",
            answer: "O processo é simples e rápido. Nossa equipe técnica configura toda a plataforma com os dados do seu salão, cadastra serviços e preços, treina sua equipe e migra dados de clientes (se necessário). A implementação completa leva em média 2-3 dias úteis."
        },
        {
            question: "Preciso de conhecimento técnico para usar a plataforma?",
            answer: "Não! Nossa plataforma foi desenvolvida para ser intuitiva e fácil de usar. Oferecemos treinamento completo para você e sua equipe, além de suporte contínuo. A maioria dos salões consegue usar todas as funcionalidades no primeiro dia."
        },
        {
            question: "Meus dados e dos clientes ficam seguros?",
            answer: "Sim! Utilizamos as melhores práticas de segurança, incluindo criptografia de dados, backup automático e servidores seguros. Todos os dados ficam protegidos e acessíveis apenas por você e sua equipe autorizada."
        },
        {
            question: "Posso cancelar a assinatura a qualquer momento?",
            answer: "Sim! Não temos contrato de fidelidade. Você pode cancelar quando quiser e continuará tendo acesso à plataforma até o final do período pago. Oferecemos backup completo dos seus dados para download."
        },
        {
            question: "Como a plataforma vai aumentar meu faturamento?",
            answer: "A plataforma reduz cancelamentos em até 70%, permite agendamentos 24/7, automatiza lembretes, organiza sua agenda, facilita reagendamentos e oferece relatórios para você tomar decisões estratégicas baseadas em dados."
        },
        {
            question: "Preciso ter um computador específico ou tablet?",
            answer: "Não! Nossa plataforma funciona em qualquer dispositivo: computador, tablet, smartphone ou notebook. Tudo que você precisa é de uma conexão com internet. Também oferecemos suporte para uso offline básico."
        },
        {
            question: "E se minha internet cair durante o atendimento?",
            answer: "A plataforma possui funcionalidades offline que permitem continuar agendamentos e atendimentos mesmo sem internet. Quando a conexão voltar, tudo é sincronizado automaticamente."
        },
        {
            question: "Posso personalizar a plataforma com minha marca?",
            answer: "Sim! No plano Professional e Enterprise, você pode personalizar cores, logo, nome do salão no app e site. Seus clientes verão sua marca em todas as interações, criando uma experiência consistente."
        },
        {
            question: "Como funciona o suporte técnico?",
            answer: "Oferecemos suporte via WhatsApp (Professional), telefone e videoconferência (Enterprise). Nossa equipe está disponível de segunda a sábado para resolver qualquer dúvida ou problema rapidamente."
        },
        {
            question: "Posso integrar com meu sistema atual de pagamentos?",
            answer: "Sim! Nossa plataforma se integra com os principais gateways de pagamento do mercado, incluindo Mercado Pago, PagSeguro, Stripe e outros. Também suportamos cartões, PIX e dinheiro."
        },
        {
            question: "Quantos profissionais podem usar a plataforma?",
            answer: "Depende do plano: Starter (até 3 profissionais), Professional (até 10 profissionais) e Enterprise (ilimitado). Você pode fazer upgrade do plano a qualquer momento conforme seu salão cresce."
        },
        {
            question: "A plataforma gera relatórios financeiros?",
            answer: "Sim! Geramos relatórios completos de faturamento, comissões, serviços mais vendidos, performance por profissional, fluxo de caixa e muito mais. Tudo em tempo real para você acompanhar seu negócio."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container-width section-padding">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-4">
                        <HelpCircle className="w-4 h-4 mr-2 text-gray-700" />
                        Dúvidas Frequentes
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Tire suas
                        <span className="gradient-text"> dúvidas</span>
                    </h2>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        Respostas para as principais questões sobre nossa plataforma,
                        implementação e como ela pode transformar seu salão.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900 pr-4">
                                        {faq.question}
                                    </span>
                                    <div className="flex-shrink-0">
                                        {openItems.includes(index) ? (
                                            <ChevronUp className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-500" />
                                        )}
                                    </div>
                                </button>

                                {openItems.includes(index) && (
                                    <div className="px-8 pb-6">
                                        <div className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center bg-gray-50 rounded-2xl p-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Ainda tem dúvidas?
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Nossa equipe está pronta para esclarecer qualquer questão e
                        ajudar você a entender como nossa plataforma pode transformar seu salão.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="btn-primary">
                            <HelpCircle className="w-5 h-5 mr-2" />
                            Falar com Especialista
                        </button>
                        <button className="btn-secondary">
                            Agendar Demonstração
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
