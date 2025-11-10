"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
    Check,
    Calendar,
    Clock,
    MapPin,
    Phone,
    Mail,
    ArrowRight,
    Download,
    Share2
} from "lucide-react";

export default function BookingSuccessPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                            <Check className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-black">HairBooking</h1>
                            <p className="text-sm text-gray-600">Agendamento Confirmado</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Success Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="h-10 w-10 text-green-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-black mb-4">Agendamento Confirmado!</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Seu agendamento foi realizado com sucesso. Você receberá um email de confirmação em breve.
                    </p>
                </div>

                {/* Booking Details */}
                <Card className="max-w-2xl mx-auto mb-8 border-gray-200">
                    <CardContent className="p-8">
                        <h2 className="text-2xl font-bold text-black mb-6">Detalhes do Agendamento</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Calendar className="h-5 w-5 text-black" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-black">Data e Horário</h3>
                                    <p className="text-gray-600">Terça-feira, 12 de Novembro de 2024</p>
                                    <p className="text-gray-600">14:30 - 15:15</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="h-5 w-5 text-black" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-black">Local</h3>
                                    <p className="text-gray-600">Unidade Centro</p>
                                    <p className="text-gray-600">Rua das Flores, 123 - Centro</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Clock className="h-5 w-5 text-black" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-black">Serviços</h3>
                                    <p className="text-gray-600">Corte de Cabelo</p>
                                    <p className="text-gray-600">Duração: 45 minutos</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="h-5 w-5 text-black" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-black">Contato da Unidade</h3>
                                    <p className="text-gray-600">(11) 3325-4400</p>
                                </div>
                            </div>

                            <div className="border-t pt-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-medium text-black">Total Pago</span>
                                    <span className="text-2xl font-bold text-black">R$ 47,50</span>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">Pagamento processado com sucesso</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="max-w-2xl mx-auto space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200">
                            <Download className="h-4 w-4" />
                            Baixar Comprovante
                        </button>
                        <button className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200">
                            <Share2 className="h-4 w-4" />
                            Compartilhar
                        </button>
                    </div>

                    <button
                        onClick={() => window.location.href = '/client'}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-black rounded-lg font-medium hover:bg-gray-200 transition-all duration-200"
                    >
                        Fazer Novo Agendamento
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>

                {/* Important Information */}
                <Card className="max-w-2xl mx-auto mt-8 border-gray-200">
                    <CardContent className="p-6">
                        <h3 className="font-semibold text-black mb-4">Informações Importantes</h3>
                        <div className="space-y-3 text-sm text-gray-600">
                            <div className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>Chegue com 10 minutos de antecedência</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>Cancelamentos devem ser feitos com até 2 horas de antecedência</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>Em caso de dúvidas, entre em contato com a unidade</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Mail className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span>Você receberá um lembrete por email 1 dia antes do agendamento</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Footer */}
            <footer className="bg-gray-50 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="text-center text-gray-600">
                        <p className="mb-4">© 2024 HairBooking. Todos os direitos reservados.</p>
                        <div className="flex items-center justify-center gap-8 text-sm">
                            <a href="#" className="hover:text-black transition-colors font-medium">Termos de Uso</a>
                            <a href="#" className="hover:text-black transition-colors font-medium">Política de Privacidade</a>
                            <a href="#" className="hover:text-black transition-colors font-medium">Suporte</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
