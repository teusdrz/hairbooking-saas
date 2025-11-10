"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Scissors,
    Clock,
    Calendar,
    Star,
    MapPin,
    Phone,
    Shield,
    ArrowRight,
    Check,
    CreditCard,
    User,
    Plus,
    Minus,
    Trash2
} from "lucide-react";

interface Unit {
    id: number;
    name: string;
    address: string;
    rating: number;
    reviews: number;
    phone: string;
    distance: string;
}

interface Service {
    id: string;
    name: string;
    price: number;
    duration: number;
    quantity?: number;
    category: string;
}

interface Plan {
    id: string;
    name: string;
    frequency: string;
    price: number;
    originalPrice: number;
    savings: number;
    services: string[];
    popular: boolean;
    sessionsPerMonth: number;
}

interface CustomerInfo {
    name: string;
    email: string;
    phone: string;
    observations: string;
}

export default function ClientBookingPage() {
    const [step, setStep] = useState(1);
    const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
    const [selectedService, setSelectedService] = useState("simple");
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
    const [customServices, setCustomServices] = useState<Service[]>([]);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
        name: "",
        email: "",
        phone: "",
        observations: ""
    });

    // Enable smooth scrolling and auto-scroll on step change
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';

        // Auto-scroll to top when step changes
        window.scrollTo({ top: 0, behavior: 'smooth' });

        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, [step]);

    // Helper function for smooth step transition
    const handleStepChange = (nextStep: number) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => setStep(nextStep), 300);
    };

    const units = [
        {
            id: 1,
            name: "Unidade Centro",
            address: "Rua das Flores, 123 - Centro",
            rating: 4.9,
            reviews: 847,
            phone: "(11) 3325-4400",
            distance: "2.3 km"
        },
        {
            id: 2,
            name: "Unidade Zona Sul",
            address: "Av. Paulista, 1000 - Bela Vista",
            rating: 4.8,
            reviews: 623,
            phone: "(11) 2240-5500",
            distance: "5.7 km"
        },
        {
            id: 3,
            name: "Unidade Zona Norte",
            address: "Rua Augusta, 500 - Consolação",
            rating: 4.7,
            reviews: 412,
            phone: "(11) 2596-7800",
            distance: "8.1 km"
        }
    ];

    const services = {
        hair: [
            { id: "cut", name: "Corte de Cabelo", price: 45, duration: 45, category: "hair" },
            { id: "wash", name: "Lavagem + Escova", price: 35, duration: 30, category: "hair" },
            { id: "hydration", name: "Hidratação", price: 65, duration: 60, category: "hair" },
            { id: "straightening", name: "Alisamento", price: 120, duration: 120, category: "hair" },
            { id: "coloring", name: "Coloração", price: 85, duration: 90, category: "hair" }
        ],
        face: [
            { id: "eyebrow", name: "Design de Sobrancelha", price: 25, duration: 30, category: "face" },
            { id: "beard", name: "Barba Completa", price: 30, duration: 30, category: "face" },
            { id: "mustache", name: "Bigode", price: 15, duration: 15, category: "face" }
        ],
        packages: [
            {
                id: "complete",
                name: "Pacote Completo",
                price: 85,
                duration: 90,
                category: "package"
            },
            {
                id: "premium",
                name: "Premium Experience",
                price: 145,
                duration: 150,
                category: "package"
            }
        ]
    };

    const monthlyPlans = [
        {
            id: "basic",
            name: "Plano Básico",
            frequency: "2x por mês",
            price: 75,
            originalPrice: 90,
            savings: 15,
            services: ["Corte de Cabelo", "Lavagem + Escova"],
            popular: false,
            sessionsPerMonth: 2
        },
        {
            id: "premium",
            name: "Plano Premium",
            frequency: "4x por mês",
            price: 140,
            originalPrice: 180,
            savings: 40,
            services: ["Corte de Cabelo", "Lavagem + Escova", "Design de Sobrancelha"],
            popular: true,
            sessionsPerMonth: 4
        }
    ];

    const addCustomService = (service: Service) => {
        if (!customServices.find(s => s.id === service.id)) {
            setCustomServices([...customServices, { ...service, quantity: 1 }]);
        }
    };

    const removeCustomService = (serviceId: string) => {
        setCustomServices(customServices.filter(s => s.id !== serviceId));
    };

    const updateServiceQuantity = (serviceId: string, change: number) => {
        setCustomServices(customServices.map(s =>
            s.id === serviceId
                ? { ...s, quantity: Math.max(1, (s.quantity || 1) + change) }
                : s
        ));
    };

    const calculateTotal = () => {
        if (selectedService === "simple") return 45;
        if (selectedPlan) return selectedPlan.price;
        return customServices.reduce((total, service) => total + (service.price * (service.quantity || 1)), 0);
    };

    const calculateDuration = () => {
        if (selectedService === "simple") return 45;
        if (selectedPlan) return 60;
        return customServices.reduce((total, service) => total + (service.duration * (service.quantity || 1)), 0);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-xl flex items-center justify-center shadow-lg">
                                <Scissors className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl sm:text-2xl font-black text-black tracking-tight">HairBooking</h1>
                                <p className="text-xs sm:text-sm text-gray-500 font-medium hidden sm:block">Sistema de Agendamento Profissional</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 sm:px-4 py-2 rounded-full">
                                <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-black" />
                                <span className="font-medium text-xs sm:text-sm">Pagamento Seguro SSL</span>
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    <span className="hidden sm:inline">Atendimento 24h</span>
                                    <span className="sm:hidden">24h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Progress Bar */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                    {/* Mobile Progress Bar */}
                    <div className="block sm:hidden">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-bold text-black">Etapa {step} de 5</span>
                            <span className="text-xs text-gray-500">{Math.round((step / 5) * 100)}% concluído</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-black h-2 rounded-full transition-all duration-500"
                                style={{ width: `${(step / 5) * 100}%` }}
                            ></div>
                        </div>
                        <div className="mt-2 text-center">
                            <div className="text-sm font-semibold text-black">
                                {[
                                    "Escolha da Unidade",
                                    "Tipo de Serviço",
                                    "Seus Serviços",
                                    "Agendamento",
                                    "Confirmação"
                                ][step - 1]}
                            </div>
                        </div>
                    </div>

                    {/* Desktop Progress Bar */}
                    <div className="hidden sm:block">
                        <div className="flex items-center justify-between mb-4">
                            {[
                                { num: 1, icon: MapPin, label: "Unidade" },
                                { num: 2, icon: Star, label: "Tipo" },
                                { num: 3, icon: Scissors, label: "Serviços" },
                                { num: 4, icon: Calendar, label: "Data/Hora" },
                                { num: 5, icon: CreditCard, label: "Pagamento" }
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.num} className="flex items-center">
                                        <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${step >= item.num
                                            ? 'bg-black border-black text-white shadow-lg scale-110'
                                            : step === item.num
                                                ? 'bg-white border-black text-black shadow-md scale-105'
                                                : 'border-gray-300 text-gray-400 bg-white'
                                            }`}>
                                            {step > item.num ? (
                                                <Check className="h-4 w-4 sm:h-5 sm:w-5" />
                                            ) : step === item.num ? (
                                                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                                            ) : (
                                                <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                                            )}

                                            {/* Active pulse effect */}
                                            {step === item.num && (
                                                <div className="absolute inset-0 rounded-full border-2 border-black animate-ping opacity-20"></div>
                                            )}
                                        </div>
                                        {index < 4 && (
                                            <div className="relative mx-2 sm:mx-4 w-8 sm:w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className={`absolute left-0 top-0 h-full bg-black rounded-full transition-all duration-500 ${step > item.num ? 'w-full' : 'w-0'
                                                        }`}
                                                />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex justify-between">
                            {[
                                { label: "Escolha da Unidade", desc: "Selecione sua localização" },
                                { label: "Tipo de Serviço", desc: "Simples, plano ou personalizado" },
                                { label: "Seus Serviços", desc: "Configure seu atendimento" },
                                { label: "Agendamento", desc: "Data e horário ideais" },
                                { label: "Confirmação", desc: "Dados e pagamento" }
                            ].map((item, index) => (
                                <div key={index} className="text-center flex-1 px-1">
                                    <div className={`text-xs sm:text-sm font-semibold transition-colors ${step >= index + 1 ? 'text-black' : step === index + 1 ? 'text-black' : 'text-gray-400'
                                        }`}>
                                        {item.label}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1 hidden lg:block">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                {/* Step 1: Choose Unit */}
                {step === 1 && (
                    <div className="space-y-6 sm:space-y-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="mb-6 sm:mb-8 text-center sm:text-left">
                                <h2 className="text-2xl sm:text-3xl font-black text-black mb-3 tracking-tight">Localização do Atendimento</h2>
                                <p className="text-gray-600 text-base sm:text-lg">Onde você gostaria de ser atendido?</p>
                            </div>

                            {/* Unit Selection Form */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
                                <div className="space-y-6">
                                    {/* Location Selector */}
                                    <div>
                                        <label className="block text-sm font-bold text-black mb-4">
                                            <MapPin className="h-4 w-4 inline mr-2" />
                                            Escolha a unidade mais próxima:
                                        </label>

                                        <div className="space-y-3">
                                            {units.map((unit) => (
                                                <div
                                                    key={unit.id}
                                                    className={`relative p-4 sm:p-6 border-2 rounded-xl cursor-pointer transition-all duration-200 ${selectedUnit?.id === unit.id
                                                        ? 'border-black bg-gray-50'
                                                        : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                                                        }`}
                                                    onClick={() => setSelectedUnit(unit)}
                                                >
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 sm:gap-4 mb-3">
                                                                <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center ${selectedUnit?.id === unit.id
                                                                    ? 'border-black bg-black'
                                                                    : 'border-gray-300'
                                                                    }`}>
                                                                    {selectedUnit?.id === unit.id && (
                                                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                                                                    )}
                                                                </div>
                                                                <div className="flex-1">
                                                                    <h3 className="text-lg sm:text-xl font-black text-black">{unit.name}</h3>
                                                                    <div className="flex items-center gap-2 mt-1">
                                                                        <div className="flex">
                                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                                <Star key={star} className="h-3 w-3 fill-black text-black" />
                                                                            ))}
                                                                        </div>
                                                                        <span className="text-sm font-semibold">{unit.rating}</span>
                                                                        <span className="text-xs text-gray-500">({unit.reviews})</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="ml-8 sm:ml-10 space-y-2">
                                                                <div className="flex items-center gap-2 text-gray-700">
                                                                    <MapPin className="h-4 w-4 text-gray-400" />
                                                                    <span className="text-sm">{unit.address}</span>
                                                                </div>
                                                                <div className="flex items-center gap-2 text-gray-700">
                                                                    <Phone className="h-4 w-4 text-gray-400" />
                                                                    <span className="text-sm">{unit.phone}</span>
                                                                </div>

                                                                <div className="flex items-center gap-6 mt-3 text-xs">
                                                                    <div className="flex items-center gap-1">
                                                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                                        <span className="text-gray-600">Estacionamento gratuito</span>
                                                                    </div>
                                                                    <div className="flex items-center gap-1">
                                                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                                        <span className="text-gray-600">WiFi disponível</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="text-right">
                                                            <div className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                                                                {unit.distance}
                                                            </div>
                                                            {selectedUnit?.id === unit.id && (
                                                                <div className="text-black">
                                                                    <Check className="h-5 w-5" />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Additional Options */}
                                    <div className="pt-6 border-t border-gray-200">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="font-bold text-black mb-1">Precisa de transporte?</h4>
                                                <p className="text-sm text-gray-600">Oferecemos serviço de busca e entrega (taxa adicional)</p>
                                            </div>
                                            <button className="text-black hover:bg-gray-100 px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium transition-colors">
                                                Solicitar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Continue Button */}
                            <div className="mt-6 sm:mt-8 flex justify-center sm:justify-end">
                                <button
                                    onClick={() => selectedUnit && handleStepChange(2)}
                                    disabled={!selectedUnit}
                                    className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 ${selectedUnit
                                        ? 'bg-black text-white hover:bg-gray-800 shadow-lg'
                                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                        }`}
                                >
                                    Continuar
                                    <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2: Choose Service Type */}
                {step === 2 && (
                    <div className="space-y-6 sm:space-y-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="mb-6 sm:mb-8 text-center sm:text-left">
                                <h2 className="text-2xl sm:text-3xl font-black text-black mb-3 tracking-tight">Tipo de Atendimento</h2>
                                <p className="text-gray-600 text-base sm:text-lg">Qual modalidade você prefere?</p>
                            </div>

                            {/* Service Type Selection */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-black mb-4">
                                            <Scissors className="h-4 w-4 inline mr-2" />
                                            Selecione o tipo de serviço:
                                        </label>

                                        <div className="space-y-4">
                                            {/* Simple Service */}
                                            <div
                                                className={`relative p-6 border-2 rounded-xl cursor-pointer transition-all duration-200 ${selectedService === "simple"
                                                    ? 'border-black bg-gray-50'
                                                    : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                                                    }`}
                                                onClick={() => setSelectedService("simple")}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedService === "simple"
                                                            ? 'border-black bg-black'
                                                            : 'border-gray-300'
                                                            }`}>
                                                            {selectedService === "simple" && (
                                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <h3 className="text-lg font-black text-black">Atendimento Avulso</h3>
                                                            <p className="text-sm text-gray-600 mt-1">Corte profissional com lavagem e finalização</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-2xl font-black text-black">R$ 45</div>
                                                        <div className="text-xs text-gray-500 flex items-center gap-1">
                                                            <Clock className="h-3 w-3" />
                                                            <span>45 min</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Monthly Plan */}
                                            <div
                                                className={`relative p-6 border-2 rounded-xl cursor-pointer transition-all duration-200 ${selectedService === "plan"
                                                    ? 'border-black bg-gray-50'
                                                    : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                                                    }`}
                                                onClick={() => setSelectedService("plan")}
                                            >
                                                {/* Discount Badge */}
                                                <div className="absolute -top-2 left-6">
                                                    <div className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold">
                                                        Economize até 40%
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between pt-2">
                                                    <div className="flex items-center gap-4">
                                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedService === "plan"
                                                            ? 'border-black bg-black'
                                                            : 'border-gray-300'
                                                            }`}>
                                                            {selectedService === "plan" && (
                                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <h3 className="text-lg font-black text-black">Plano Mensal</h3>
                                                            <p className="text-sm text-gray-600 mt-1">2x ou 4x por mês com desconto progressivo</p>
                                                            <div className="flex items-center gap-3 mt-2 text-xs">
                                                                <span className="text-gray-600">✓ Prioridade no agendamento</span>
                                                                <span className="text-gray-600">✓ Transferência entre unidades</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-2xl font-black text-black">R$ 75<span className="text-sm text-gray-500">/mês</span></div>
                                                        <div className="text-xs text-gray-500 line-through">R$ 120</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Custom Service */}
                                            <div
                                                className={`relative p-6 border-2 rounded-xl cursor-pointer transition-all duration-200 ${selectedService === "custom"
                                                    ? 'border-black bg-gray-50'
                                                    : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                                                    }`}
                                                onClick={() => setSelectedService("custom")}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedService === "custom"
                                                            ? 'border-black bg-black'
                                                            : 'border-gray-300'
                                                            }`}>
                                                            {selectedService === "custom" && (
                                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <h3 className="text-lg font-black text-black">Atendimento Personalizado</h3>
                                                            <p className="text-sm text-gray-600 mt-1">Monte seu combo com múltiplos serviços</p>
                                                            <div className="flex items-center gap-3 mt-2 text-xs">
                                                                <span className="text-gray-600">✓ Corte + Barba + Sobrancelha</span>
                                                                <span className="text-gray-600">✓ Duração flexível</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-lg font-black text-black">Personalizar</div>
                                                        <div className="text-xs text-gray-500">A partir de R$ 60</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Professional Preference */}
                                    <div className="pt-6 border-t border-gray-200">
                                        <h4 className="font-bold text-black mb-3">Preferência de Profissional</h4>
                                        <div className="flex gap-4">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="professional" className="text-black" defaultChecked />
                                                <span className="text-sm">Qualquer profissional disponível</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="professional" className="text-black" />
                                                <span className="text-sm">Escolher profissional específico</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
                                <button
                                    onClick={() => handleStepChange(1)}
                                    className="order-2 sm:order-1 w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2"
                                >
                                    <ArrowRight className="h-4 w-4 rotate-180" />
                                    Voltar
                                </button>
                                <button
                                    onClick={() => handleStepChange(3)}
                                    className="order-1 sm:order-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-3"
                                >
                                    Continuar
                                    <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Service Details */}
                {step === 3 && (
                    <div className="space-y-6 sm:space-y-8">
                        {selectedService === "plan" && (
                            <div className="max-w-4xl mx-auto">
                                <div className="mb-6 sm:mb-8 text-center sm:text-left">
                                    <h2 className="text-2xl sm:text-3xl font-black text-black mb-3 tracking-tight">Escolha seu Plano</h2>
                                    <p className="text-gray-600 text-base sm:text-lg">Economia garantida com nossos planos mensais</p>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-bold text-black mb-4">
                                                <Calendar className="h-4 w-4 inline mr-2" />
                                                Selecione a frequência mensal:
                                            </label>

                                            <div className="space-y-4">
                                                {monthlyPlans.map((plan) => (
                                                    <div
                                                        key={plan.id}
                                                        className={`relative p-6 border-2 rounded-xl cursor-pointer transition-all duration-200 ${selectedPlan?.id === plan.id
                                                            ? 'border-black bg-gray-50'
                                                            : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                                                            } ${plan.popular ? 'ring-1 ring-black ring-opacity-20' : ''}`}
                                                        onClick={() => setSelectedPlan(plan)}
                                                    >
                                                        {/* Popular Badge */}
                                                        {plan.popular && (
                                                            <div className="absolute -top-2 left-6">
                                                                <div className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold">
                                                                    Mais Popular
                                                                </div>
                                                            </div>
                                                        )}

                                                        <div className="flex items-start justify-between">
                                                            <div className="flex items-center gap-4">
                                                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedPlan?.id === plan.id
                                                                    ? 'border-black bg-black'
                                                                    : 'border-gray-300'
                                                                    }`}>
                                                                    {selectedPlan?.id === plan.id && (
                                                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                                                    )}
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="flex items-baseline gap-3 mb-2">
                                                                        <h3 className="text-xl font-black text-black">{plan.name}</h3>
                                                                        <span className="text-sm text-gray-500">({plan.frequency})</span>
                                                                    </div>

                                                                    <div className="flex items-center gap-3 mb-3">
                                                                        <div className="text-3xl font-black text-black">R$ {plan.price}</div>
                                                                        <div className="text-sm text-gray-500 line-through">R$ {plan.originalPrice}</div>
                                                                        <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                                                                            Economize R$ {plan.savings}
                                                                        </div>
                                                                    </div>

                                                                    <div className="grid grid-cols-3 gap-4 text-sm">
                                                                        {plan.services.map((service, index) => (
                                                                            <div key={index} className="flex items-center gap-2 text-gray-700">
                                                                                <div className="w-2 h-2 bg-black rounded-full"></div>
                                                                                <span>{service}</span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="text-right">
                                                                <div className="text-sm text-gray-500 mb-1">{plan.sessionsPerMonth}x por mês</div>
                                                                {selectedPlan?.id === plan.id && (
                                                                    <div className="text-black">
                                                                        <Check className="h-5 w-5" />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Additional Benefits */}
                                        <div className="pt-6 border-t border-gray-200">
                                            <h4 className="font-bold text-black mb-4">Benefícios dos Planos Mensais:</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                                <div className="flex items-center gap-2 text-gray-700">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span>Prioridade no agendamento</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-700">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                    <span>Transferência gratuita entre unidades</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-700">
                                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                    <span>Reagendamento sem taxa</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-700">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <span>Desconto em serviços extras</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {selectedService === "custom" && (
                            <div className="max-w-6xl mx-auto">
                                <div className="mb-6 sm:mb-8 text-center sm:text-left">
                                    <h2 className="text-2xl sm:text-3xl font-black text-black mb-3 tracking-tight">Monte seu Atendimento</h2>
                                    <p className="text-gray-600 text-base sm:text-lg">Selecione os serviços que deseja incluir</p>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                                    {/* Services Selection */}
                                    <div className="lg:col-span-2 order-2 lg:order-1">
                                        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
                                            {/* Hair Services */}
                                            <div className="mb-8">
                                                <h3 className="text-xl font-black text-black mb-6 flex items-center gap-2">
                                                    <Scissors className="h-5 w-5" />
                                                    Serviços de Cabelo
                                                </h3>
                                                <div className="space-y-3">
                                                    {services.hair.map((service) => (
                                                        <div key={service.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
                                                            <div className="flex-1">
                                                                <h4 className="font-semibold text-black">{service.name}</h4>
                                                                <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                                                                    <span className="font-medium">R$ {service.price}</span>
                                                                    <span>•</span>
                                                                    <span>{service.duration} minutos</span>
                                                                </div>
                                                            </div>
                                                            <button
                                                                onClick={() => addCustomService(service)}
                                                                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium flex items-center gap-2"
                                                            >
                                                                <Plus className="h-4 w-4" />
                                                                Adicionar
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Face Services */}
                                            <div className="mb-8">
                                                <h3 className="text-xl font-black text-black mb-6 flex items-center gap-2">
                                                    <User className="h-5 w-5" />
                                                    Serviços de Rosto
                                                </h3>
                                                <div className="space-y-3">
                                                    {services.face.map((service) => (
                                                        <div key={service.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
                                                            <div className="flex-1">
                                                                <h4 className="font-semibold text-black">{service.name}</h4>
                                                                <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                                                                    <span className="font-medium">R$ {service.price}</span>
                                                                    <span>•</span>
                                                                    <span>{service.duration} minutos</span>
                                                                </div>
                                                            </div>
                                                            <button
                                                                onClick={() => addCustomService(service)}
                                                                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium flex items-center gap-2"
                                                            >
                                                                <Plus className="h-4 w-4" />
                                                                Adicionar
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Package Deals */}
                                            <div>
                                                <h3 className="text-xl font-black text-black mb-6 flex items-center gap-2">
                                                    <Star className="h-5 w-5" />
                                                    Pacotes Promocionais
                                                </h3>
                                                <div className="space-y-3">
                                                    {services.packages.map((pkg) => (
                                                        <div key={pkg.id} className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-black transition-colors bg-gray-50">
                                                            <div className="flex items-center justify-between">
                                                                <div className="flex-1">
                                                                    <div className="flex items-center gap-2 mb-2">
                                                                        <h4 className="font-black text-lg text-black">{pkg.name}</h4>
                                                                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-bold">PROMO</span>
                                                                    </div>
                                                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                                                        <span className="text-xl font-black text-black">R$ {pkg.price}</span>
                                                                        <span>•</span>
                                                                        <span>{pkg.duration} minutos</span>
                                                                    </div>
                                                                </div>
                                                                <button
                                                                    onClick={() => addCustomService(pkg)}
                                                                    className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-bold flex items-center gap-2"
                                                                >
                                                                    <Plus className="h-4 w-4" />
                                                                    Adicionar Pacote
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Selected Services Sidebar */}
                                    <div className="lg:col-span-1">
                                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">
                                            <h3 className="text-xl font-black text-black mb-6 flex items-center gap-2">
                                                <Star className="h-5 w-5" />
                                                Seu Combo
                                            </h3>

                                            {customServices.length === 0 ? (
                                                <div className="text-center py-12 text-gray-500">
                                                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                        <Star className="h-8 w-8 text-gray-400" />
                                                    </div>
                                                    <p className="text-sm">Adicione serviços ao seu combo</p>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="space-y-4 mb-6">
                                                        {customServices.map((service) => (
                                                            <div key={service.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                                                <div className="flex items-start justify-between mb-3">
                                                                    <h4 className="font-semibold text-black text-sm">{service.name}</h4>
                                                                    <button
                                                                        onClick={() => removeCustomService(service.id)}
                                                                        className="text-gray-400 hover:text-red-600 transition-colors"
                                                                    >
                                                                        <Trash2 className="h-4 w-4" />
                                                                    </button>
                                                                </div>
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex items-center gap-3">
                                                                        <button
                                                                            onClick={() => updateServiceQuantity(service.id, -1)}
                                                                            className="w-8 h-8 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                                                                        >
                                                                            <Minus className="h-3 w-3" />
                                                                        </button>
                                                                        <span className="w-8 text-center font-bold">{service.quantity}</span>
                                                                        <button
                                                                            onClick={() => updateServiceQuantity(service.id, 1)}
                                                                            className="w-8 h-8 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                                                                        >
                                                                            <Plus className="h-3 w-3" />
                                                                        </button>
                                                                    </div>
                                                                    <span className="font-bold text-black">R$ {service.price * (service.quantity || 1)}</span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Summary */}
                                                    <div className="border-t border-gray-200 pt-4">
                                                        <div className="flex justify-between items-center mb-3">
                                                            <span className="text-sm font-medium text-gray-600">Subtotal:</span>
                                                            <span className="font-bold text-black">R$ {calculateTotal()}</span>
                                                        </div>
                                                        <div className="flex justify-between items-center mb-4">
                                                            <span className="text-sm font-medium text-gray-600 flex items-center gap-1">
                                                                <Clock className="h-3 w-3" />
                                                                Duração total:
                                                            </span>
                                                            <span className="font-bold text-black">{calculateDuration()} min</span>
                                                        </div>
                                                        <div className="bg-black text-white p-3 rounded-lg text-center">
                                                            <div className="text-sm mb-1">Total do Combo</div>
                                                            <div className="text-2xl font-black">R$ {calculateTotal()}</div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                            <button
                                onClick={() => handleStepChange(2)}
                                className="order-2 sm:order-1 w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                <ArrowRight className="h-4 w-4 rotate-180" />
                                Voltar
                            </button>
                            <button
                                onClick={() => handleStepChange(4)}
                                disabled={selectedService === "plan" && !selectedPlan || selectedService === "custom" && customServices.length === 0}
                                className="order-1 sm:order-2 w-full sm:w-auto px-6 sm:px-8 py-3 bg-black text-white rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                Continuar
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 4: Date & Time */}
                {step === 4 && (
                    <div className="space-y-6 sm:space-y-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="mb-6 sm:mb-8 text-center sm:text-left">
                                <h2 className="text-2xl sm:text-3xl font-black text-black mb-3 tracking-tight">Agendamento</h2>
                                <p className="text-gray-600 text-base sm:text-lg">Quando você gostaria de ser atendido?</p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                                {/* Calendar Section */}
                                <div className="lg:col-span-2 order-2 lg:order-1">
                                    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
                                        <h3 className="text-xl font-black text-black mb-6 flex items-center gap-2">
                                            <Calendar className="h-5 w-5" />
                                            Selecione a Data
                                        </h3>

                                        {/* Calendar Grid */}
                                        <div className="mb-8">
                                            <div className="grid grid-cols-7 gap-2 mb-4">
                                                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
                                                    <div key={day} className="text-center text-sm font-bold text-gray-500 py-3">
                                                        {day}
                                                    </div>
                                                ))}
                                                {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                                                    <button
                                                        key={day}
                                                        onClick={() => setSelectedDate(`2025-11-${day.toString().padStart(2, '0')}`)}
                                                        className={`aspect-square rounded-xl text-sm font-bold transition-all duration-200 ${selectedDate === `2025-11-${day.toString().padStart(2, '0')}`
                                                            ? 'bg-black text-white shadow-lg scale-105'
                                                            : day < 8
                                                                ? 'text-gray-300 cursor-not-allowed bg-gray-50'
                                                                : 'hover:bg-gray-100 text-gray-700 border border-gray-200 hover:border-gray-400'
                                                            }`}
                                                        disabled={day < 8}
                                                    >
                                                        {day}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Time Slots */}
                                        <div>
                                            <h3 className="text-xl font-black text-black mb-6 flex items-center gap-2">
                                                <Clock className="h-5 w-5" />
                                                Horários Disponíveis
                                            </h3>

                                            {!selectedDate ? (
                                                <div className="text-center py-12 text-gray-500">
                                                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                        <Calendar className="h-8 w-8 text-gray-400" />
                                                    </div>
                                                    <p>Primeiro selecione uma data acima</p>
                                                </div>
                                            ) : (
                                                <div>
                                                    {/* Morning */}
                                                    <div className="mb-6">
                                                        <h4 className="text-sm font-bold text-gray-700 mb-3">Manhã</h4>
                                                        <div className="grid grid-cols-4 gap-3">
                                                            {['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'].map((time) => (
                                                                <button
                                                                    key={time}
                                                                    onClick={() => setSelectedTime(time)}
                                                                    className={`py-3 px-4 rounded-xl text-sm font-bold transition-all duration-200 ${selectedTime === time
                                                                        ? 'bg-black text-white shadow-lg'
                                                                        : ['10:30'].includes(time)
                                                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                                            : 'border-2 border-gray-200 hover:border-black hover:bg-gray-50'
                                                                        }`}
                                                                    disabled={['10:30'].includes(time)}
                                                                >
                                                                    {time}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Afternoon */}
                                                    <div>
                                                        <h4 className="text-sm font-bold text-gray-700 mb-3">Tarde</h4>
                                                        <div className="grid grid-cols-4 gap-3">
                                                            {['14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'].map((time) => (
                                                                <button
                                                                    key={time}
                                                                    onClick={() => setSelectedTime(time)}
                                                                    className={`py-3 px-4 rounded-xl text-sm font-bold transition-all duration-200 ${selectedTime === time
                                                                        ? 'bg-black text-white shadow-lg'
                                                                        : ['15:30', '17:30'].includes(time)
                                                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                                            : 'border-2 border-gray-200 hover:border-black hover:bg-gray-50'
                                                                        }`}
                                                                    disabled={['15:30', '17:30'].includes(time)}
                                                                >
                                                                    {time}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Booking Summary Sidebar */}
                                <div className="lg:col-span-1">
                                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">
                                        <h3 className="text-xl font-black text-black mb-6">Resumo do Agendamento</h3>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                                <span className="text-gray-600">Unidade:</span>
                                                <span className="font-semibold text-black text-right">{selectedUnit?.name}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                                <span className="text-gray-600">Data:</span>
                                                <span className="font-semibold text-black">
                                                    {selectedDate ? new Date(selectedDate).toLocaleDateString('pt-BR', {
                                                        weekday: 'long',
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    }) : 'Não selecionada'}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                                <span className="text-gray-600">Horário:</span>
                                                <span className="font-semibold text-black">
                                                    {selectedTime || 'Não selecionado'}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                                <span className="text-gray-600">Duração estimada:</span>
                                                <span className="font-semibold text-black">{calculateDuration()} min</span>
                                            </div>
                                        </div>

                                        {/* Service Summary */}
                                        <div className="mb-6">
                                            <h4 className="font-bold text-black mb-3">Serviços:</h4>
                                            {selectedService === "simple" && (
                                                <div className="text-sm text-gray-600">
                                                    • Corte de cabelo profissional
                                                </div>
                                            )}
                                            {selectedService === "plan" && selectedPlan && (
                                                <div className="text-sm text-gray-600">
                                                    • {selectedPlan.name}
                                                </div>
                                            )}
                                            {selectedService === "custom" && customServices.length > 0 && (
                                                <div className="space-y-1">
                                                    {customServices.map((service) => (
                                                        <div key={service.id} className="text-sm text-gray-600">
                                                            • {service.name} {service.quantity && service.quantity > 1 ? `(${service.quantity}x)` : ''}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Total */}
                                        <div className="bg-black text-white p-4 rounded-xl text-center">
                                            <div className="text-sm mb-1">Valor Total</div>
                                            <div className="text-3xl font-black">R$ {calculateTotal()}</div>
                                        </div>

                                        {/* Additional Info */}
                                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                                            <div className="text-xs text-gray-600 text-center">
                                                ✓ Confirmação por WhatsApp<br />
                                                ✓ Lembrete 1 hora antes<br />
                                                ✓ Reagendamento gratuito
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
                                <button
                                    onClick={() => handleStepChange(3)}
                                    className="order-2 sm:order-1 w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2"
                                >
                                    <ArrowRight className="h-4 w-4 rotate-180" />
                                    Voltar
                                </button>
                                <button
                                    onClick={() => handleStepChange(5)}
                                    disabled={!selectedDate || !selectedTime}
                                    className={`order-1 sm:order-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 ${(!selectedDate || !selectedTime)
                                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                        : 'bg-black text-white hover:bg-gray-800 shadow-lg'
                                        }`}
                                >
                                    Finalizar Agendamento
                                    <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 5: Customer Info & Payment */}
                {step === 5 && (
                    <div className="space-y-6 sm:space-y-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="mb-6 sm:mb-8 text-center sm:text-left">
                                <h2 className="text-2xl sm:text-3xl font-black text-black mb-3 tracking-tight">Finalizar Agendamento</h2>
                                <p className="text-gray-600 text-base sm:text-lg">Confirme seus dados e forma de pagamento</p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                                {/* Customer Information */}
                                <div className="lg:col-span-2 order-2 lg:order-1">
                                    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm mb-6 sm:mb-8">
                                        <h3 className="text-xl font-black text-black mb-6 flex items-center gap-2">
                                            <User className="h-5 w-5" />
                                            Dados Pessoais
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-bold text-black mb-2">Nome Completo *</label>
                                                <input
                                                    type="text"
                                                    value={customerInfo.name}
                                                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black transition-colors"
                                                    placeholder="Seu nome completo"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-black mb-2">Telefone/WhatsApp *</label>
                                                <input
                                                    type="tel"
                                                    value={customerInfo.phone}
                                                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black transition-colors"
                                                    placeholder="(11) 99999-9999"
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-bold text-black mb-2">E-mail *</label>
                                                <input
                                                    type="email"
                                                    value={customerInfo.email}
                                                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black transition-colors"
                                                    placeholder="seu@email.com"
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-bold text-black mb-2">Observações (opcional)</label>
                                                <textarea
                                                    value={customerInfo.observations}
                                                    onChange={(e) => setCustomerInfo({ ...customerInfo, observations: e.target.value })}
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black transition-colors"
                                                    placeholder="Alguma preferência, tipo de corte ou observação especial..."
                                                    rows={3}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Payment Section */}
                                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                                        <h3 className="text-xl font-black text-black mb-6 flex items-center gap-2">
                                            <CreditCard className="h-5 w-5" />
                                            Forma de Pagamento
                                        </h3>

                                        {/* Payment Methods */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="p-4 border-2 border-black rounded-xl bg-gray-50">
                                                <div className="flex items-center gap-3">
                                                    <input type="radio" name="payment" defaultChecked className="w-5 h-5" />
                                                    <div>
                                                        <h4 className="font-bold text-black">PIX</h4>
                                                        <p className="text-sm text-gray-600">Pagamento instantâneo</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-gray-400 transition-colors cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <input type="radio" name="payment" className="w-5 h-5" />
                                                    <div>
                                                        <h4 className="font-bold text-black">Cartão</h4>
                                                        <p className="text-sm text-gray-600">Crédito ou débito</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Payment Notice */}
                                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                                            <div className="flex items-start gap-3">
                                                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                                                    <span className="text-white text-xs font-bold">i</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-blue-900 mb-1">Como funciona o pagamento</h4>
                                                    <p className="text-sm text-blue-800">
                                                        • Você paga apenas <strong>R$ 5,00 como taxa de agendamento</strong><br />
                                                        • O restante (R$ {calculateTotal() - 5}) será pago diretamente na unidade<br />
                                                        • Se cancelar com mais de 24h, devolvemos a taxa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Terms */}
                                        <div className="flex items-start gap-3">
                                            <input type="checkbox" className="w-5 h-5 mt-0.5" />
                                            <p className="text-sm text-gray-700">
                                                Aceito os <a href="#" className="text-black font-bold underline">termos de uso</a> e
                                                <a href="#" className="text-black font-bold underline ml-1">política de privacidade</a>.
                                                Confirmo que os dados informados estão corretos.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Summary Sidebar */}
                                <div className="lg:col-span-1">
                                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">
                                        <h3 className="text-xl font-black text-black mb-6">Resumo Final</h3>

                                        {/* Booking Details */}
                                        <div className="space-y-4 mb-6">
                                            <div className="pb-3 border-b border-gray-100">
                                                <div className="text-sm text-gray-600 mb-1">Unidade</div>
                                                <div className="font-semibold text-black">{selectedUnit?.name}</div>
                                            </div>
                                            <div className="pb-3 border-b border-gray-100">
                                                <div className="text-sm text-gray-600 mb-1">Data e Horário</div>
                                                <div className="font-semibold text-black">
                                                    {selectedDate && new Date(selectedDate).toLocaleDateString('pt-BR', {
                                                        weekday: 'short',
                                                        day: '2-digit',
                                                        month: 'short'
                                                    })}, {selectedTime}
                                                </div>
                                            </div>
                                            <div className="pb-3 border-b border-gray-100">
                                                <div className="text-sm text-gray-600 mb-1">Serviços</div>
                                                {selectedService === "simple" && (
                                                    <div className="font-semibold text-black text-sm">
                                                        • Corte Profissional
                                                    </div>
                                                )}
                                                {selectedService === "plan" && selectedPlan && (
                                                    <div className="font-semibold text-black text-sm">
                                                        • {selectedPlan.name}
                                                    </div>
                                                )}
                                                {selectedService === "custom" && customServices.length > 0 && (
                                                    <div className="space-y-1">
                                                        {customServices.map((service) => (
                                                            <div key={service.id} className="font-semibold text-black text-sm">
                                                                • {service.name} {service.quantity && service.quantity > 1 ? `(${service.quantity}x)` : ''}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Payment Breakdown */}
                                        <div className="bg-gray-50 p-4 rounded-xl mb-6">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm text-gray-600">Valor total do serviço:</span>
                                                <span className="font-semibold">R$ {calculateTotal()}</span>
                                            </div>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm text-gray-600">Taxa de agendamento:</span>
                                                <span className="font-semibold">R$ 5,00</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-600">Pagamento na unidade:</span>
                                                <span className="font-semibold">R$ {calculateTotal() - 5}</span>
                                            </div>
                                        </div>

                                        {/* Total to Pay Now */}
                                        <div className="bg-black text-white p-4 rounded-xl text-center mb-6">
                                            <div className="text-sm mb-1">Pagar Agora</div>
                                            <div className="text-3xl font-black">R$ 5,00</div>
                                            <div className="text-xs mt-1 opacity-75">Taxa de agendamento</div>
                                        </div>

                                        {/* Security */}
                                        <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-3 rounded-lg">
                                            <Shield className="h-4 w-4 text-green-600" />
                                            <span>Pagamento seguro e criptografado</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
                                <button
                                    onClick={() => setStep(4)}
                                    className="order-2 sm:order-1 w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2"
                                >
                                    <ArrowRight className="h-4 w-4 rotate-180" />
                                    Voltar
                                </button>
                                <button
                                    onClick={() => window.location.href = '/client/success'}
                                    disabled={!customerInfo.name || !customerInfo.email || !customerInfo.phone}
                                    className={`order-1 sm:order-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 ${(!customerInfo.name || !customerInfo.email || !customerInfo.phone)
                                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                        : 'bg-black text-white hover:bg-gray-800 shadow-lg'
                                        }`}
                                >
                                    <Shield className="h-4 sm:h-5 w-4 sm:w-5" />
                                    <span className="hidden sm:inline">Confirmar e Pagar R$ 5,00</span>
                                    <span className="sm:hidden">Pagar R$ 5,00</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
            <footer className="bg-gradient-to-t from-gray-100 to-gray-50 border-t border-gray-200 mt-12 sm:mt-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                    <div className="text-center">
                        {/* Brand */}
                        <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-lg flex items-center justify-center">
                                <Scissors className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                            </div>
                            <span className="text-lg sm:text-xl font-black text-black">HairBooking</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-4 sm:px-0">
                            A plataforma completa para agendamento de serviços de beleza.
                            <br className="hidden sm:block" />
                            <span className="sm:hidden"> </span>Conectamos você aos melhores profissionais com a praticidade que você merece.
                        </p>

                        {/* Links */}
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm mb-6 sm:mb-8">
                            <a href="#" className="text-gray-600 hover:text-black transition-colors font-medium hover:underline">
                                Termos de Uso
                            </a>
                            <a href="#" className="text-gray-600 hover:text-black transition-colors font-medium hover:underline">
                                Política de Privacidade
                            </a>
                            <a href="#" className="text-gray-600 hover:text-black transition-colors font-medium hover:underline">
                                Suporte 24h
                            </a>
                            <a href="#" className="text-gray-600 hover:text-black transition-colors font-medium hover:underline">
                                Central de Ajuda
                            </a>
                        </div>

                        {/* Security & Contact */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <Shield className="h-4 w-4" />
                                <span>Pagamentos Seguros</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>(11) 4000-0000</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>Atendimento 24h</span>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="border-t border-gray-200 pt-4 sm:pt-6">
                            <p className="text-gray-500 text-xs sm:text-sm text-center">
                                © 2024 HairBooking SaaS. Todos os direitos reservados.
                                <span className="block sm:inline mx-0 sm:mx-2 mt-1 sm:mt-0">
                                    <span className="hidden sm:inline">•</span>
                                    CNPJ: 12.345.678/0001-90
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
