"use client";

import Link from "next/link";
import {
    Scissors,
    MapPin,
    Phone,
    Mail,
    Instagram,
    Facebook,
    Twitter,
    Clock,
    Heart
} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        plataforma: [
            { name: "Como funciona", href: "#como-funciona" },
            { name: "Nossos serviços", href: "#servicos" },
            { name: "Planos e preços", href: "#planos" },
            { name: "Localização", href: "#localizacao" }
        ],
        suporte: [
            { name: "Central de ajuda", href: "#ajuda" },
            { name: "Fale conosco", href: "#contato" },
            { name: "WhatsApp", href: "#whatsapp" },
            { name: "Status da plataforma", href: "#status" }
        ],
        empresa: [
            { name: "Sobre nós", href: "#sobre" },
            { name: "Carreiras", href: "#carreiras" },
            { name: "Parceiros", href: "#parceiros" },
            { name: "Imprensa", href: "#imprensa" }
        ],
        legal: [
            { name: "Termos de uso", href: "#termos" },
            { name: "Política de privacidade", href: "#privacidade" },
            { name: "Cookies", href: "#cookies" },
            { name: "LGPD", href: "#lgpd" }
        ]
    };

    const socialLinks = [
        { name: "Instagram", icon: Instagram, href: "#instagram" },
        { name: "Facebook", icon: Facebook, href: "#facebook" },
        { name: "Twitter", icon: Twitter, href: "#twitter" }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="container-width section-padding py-16">
                <div className="grid lg:grid-cols-6 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <div className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
                                <Scissors className="w-4 h-4 text-gray-900" />
                            </div>
                            <span className="text-xl font-bold text-white">HairBooking</span>
                        </Link>

                        <p className="text-gray-300 leading-relaxed mb-6">
                            A plataforma que revoluciona a experiência em salões de beleza,
                            conectando você aos melhores profissionais com tecnologia de ponta
                            e atendimento personalizado.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center text-gray-300">
                                <Phone className="w-4 h-4 mr-3" />
                                <span className="text-sm">(11) 4000-0000</span>
                            </div>

                            <div className="flex items-center text-gray-300">
                                <Mail className="w-4 h-4 mr-3" />
                                <span className="text-sm">contato@hairbooking.com</span>
                            </div>

                            <div className="flex items-start text-gray-300">
                                <MapPin className="w-4 h-4 mr-3 mt-0.5" />
                                <span className="text-sm">
                                    Rua Augusta, 123 - Centro<br />
                                    São Paulo, SP - 01305-000
                                </span>
                            </div>

                            <div className="flex items-start text-gray-300">
                                <Clock className="w-4 h-4 mr-3 mt-0.5" />
                                <span className="text-sm">
                                    Atendimento: Seg-Sex 8h às 18h<br />
                                    Suporte 24/7 via WhatsApp
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Plataforma</h3>
                        <ul className="space-y-3">
                            {footerLinks.plataforma.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Suporte</h3>
                        <ul className="space-y-3">
                            {footerLinks.suporte.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Empresa</h3>
                        <ul className="space-y-3">
                            {footerLinks.empresa.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Fique por dentro das novidades
                            </h3>
                            <p className="text-gray-300">
                                Receba dicas de beleza, promoções exclusivas e novidades da plataforma
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Seu melhor e-mail"
                                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none"
                            />
                            <button className="btn-primary whitespace-nowrap">
                                Inscrever-se
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="container-width section-padding py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <div className="text-sm text-gray-400">
                            © {currentYear} HairBooking. Todos os direitos reservados.
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-400 mr-2">Siga-nos:</span>
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-4 h-4 text-gray-300" />
                                </Link>
                            ))}
                        </div>

                        {/* Made with love */}
                        <div className="flex items-center text-sm text-gray-400">
                            <span>Feito com</span>
                            <Heart className="w-4 h-4 mx-1 text-red-500" />
                            <span>em São Paulo</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
