"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, User, Scissors, ChevronRight } from "lucide-react";

export default function BookingForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        service: "",
        location: "",
        professional: "",
        date: "",
        time: "",
        name: "",
        phone: "",
        email: ""
    });

    const services = [
        { id: "classic", name: "Corte Clássico", price: 45, duration: "45 min" },
        { id: "custom", name: "Corte Personalizado com IA", price: 85, duration: "60 min" },
        { id: "color", name: "Coloração", price: 120, duration: "120 min" },
        { id: "treatment", name: "Tratamento Capilar", price: 80, duration: "90 min" }
    ];

    const locations = [
        { id: "centro", name: "HairBooking Centro", address: "Rua Augusta, 123" },
        { id: "vila", name: "HairBooking Vila Madalena", address: "Rua Harmonia, 456" },
        { id: "moema", name: "HairBooking Moema", address: "Av. Ibirapuera, 789" }
    ];

    const professionals = [
        { id: "ana", name: "Ana Silva", rating: 4.9, specialty: "Cortes Femininos", image: "ana" },
        { id: "carlos", name: "Carlos Santos", rating: 4.8, specialty: "Barbas e Cortes", image: "carlos" },
        { id: "maria", name: "Maria Costa", rating: 5.0, specialty: "Coloração", image: "maria" }
    ];

    const timeSlots = [
        "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
        "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
        "17:00", "17:30", "18:00", "18:30"
    ];

    const handleNext = () => {
        if (step < 4) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Booking data:", formData);
    };

    return (
        <section id="agendar" className="py-24 bg-gray-50">
            <div className="container-width section-padding">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Agende seu
                            <span className="gradient-text"> horário</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Processo simples e rápido para garantir seu atendimento
                        </p>
                    </div>

                    {/* Progress Steps */}
                    <div className="flex items-center justify-center mb-12">
                        {[1, 2, 3, 4].map((stepNumber) => (
                            <div key={stepNumber} className="flex items-center">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${step >= stepNumber
                                            ? 'bg-gray-900 text-white'
                                            : 'bg-gray-200 text-gray-500'
                                        }`}
                                >
                                    {stepNumber}
                                </div>
                                {stepNumber < 4 && (
                                    <div
                                        className={`w-16 h-1 mx-4 ${step > stepNumber ? 'bg-gray-900' : 'bg-gray-200'
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Form Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                        <form onSubmit={handleSubmit}>
                            {/* Step 1: Service Selection */}
                            {step === 1 && (
                                <div className="space-y-6">
                                    <div className="flex items-center mb-6">
                                        <Scissors className="w-6 h-6 text-gray-600 mr-3" />
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            Escolha seu serviço
                                        </h3>
                                    </div>

                                    <div className="grid gap-4">
                                        {services.map((service) => (
                                            <label
                                                key={service.id}
                                                className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${formData.service === service.id
                                                        ? 'border-gray-900 bg-gray-50'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="service"
                                                    value={service.id}
                                                    checked={formData.service === service.id}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, service: e.target.value })
                                                    }
                                                    className="sr-only"
                                                />
                                                <div className="flex-1">
                                                    <div className="font-medium text-gray-900">
                                                        {service.name}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {service.duration}
                                                    </div>
                                                </div>
                                                <div className="text-lg font-bold text-gray-900">
                                                    R$ {service.price}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Location & Professional */}
                            {step === 2 && (
                                <div className="space-y-8">
                                    <div>
                                        <div className="flex items-center mb-6">
                                            <MapPin className="w-6 h-6 text-gray-600 mr-3" />
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                Escolha a unidade
                                            </h3>
                                        </div>

                                        <div className="grid gap-4 mb-8">
                                            {locations.map((location) => (
                                                <label
                                                    key={location.id}
                                                    className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${formData.location === location.id
                                                            ? 'border-gray-900 bg-gray-50'
                                                            : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="location"
                                                        value={location.id}
                                                        checked={formData.location === location.id}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, location: e.target.value })
                                                        }
                                                        className="sr-only"
                                                    />
                                                    <div>
                                                        <div className="font-medium text-gray-900">
                                                            {location.name}
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            {location.address}
                                                        </div>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center mb-6">
                                            <User className="w-6 h-6 text-gray-600 mr-3" />
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                Escolha o profissional
                                            </h3>
                                        </div>

                                        <div className="grid gap-4">
                                            {professionals.map((professional) => (
                                                <label
                                                    key={professional.id}
                                                    className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${formData.professional === professional.id
                                                            ? 'border-gray-900 bg-gray-50'
                                                            : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="professional"
                                                        value={professional.id}
                                                        checked={formData.professional === professional.id}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, professional: e.target.value })
                                                        }
                                                        className="sr-only"
                                                    />
                                                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                                                    <div className="flex-1">
                                                        <div className="font-medium text-gray-900">
                                                            {professional.name}
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            {professional.specialty} • ⭐ {professional.rating}
                                                        </div>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Date & Time */}
                            {step === 3 && (
                                <div className="space-y-8">
                                    <div>
                                        <div className="flex items-center mb-6">
                                            <Calendar className="w-6 h-6 text-gray-600 mr-3" />
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                Escolha a data
                                            </h3>
                                        </div>

                                        <input
                                            type="date"
                                            value={formData.date}
                                            onChange={(e) =>
                                                setFormData({ ...formData, date: e.target.value })
                                            }
                                            min={new Date().toISOString().split('T')[0]}
                                            className="w-full p-4 border border-gray-200 rounded-xl focus:border-gray-900 focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <div className="flex items-center mb-6">
                                            <Clock className="w-6 h-6 text-gray-600 mr-3" />
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                Escolha o horário
                                            </h3>
                                        </div>

                                        <div className="grid grid-cols-3 gap-3">
                                            {timeSlots.map((time) => (
                                                <label
                                                    key={time}
                                                    className={`p-3 border rounded-lg text-center cursor-pointer transition-all ${formData.time === time
                                                            ? 'border-gray-900 bg-gray-50'
                                                            : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="time"
                                                        value={time}
                                                        checked={formData.time === time}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, time: e.target.value })
                                                        }
                                                        className="sr-only"
                                                    />
                                                    {time}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Contact Info */}
                            {step === 4 && (
                                <div className="space-y-6">
                                    <div className="flex items-center mb-6">
                                        <User className="w-6 h-6 text-gray-600 mr-3" />
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            Seus dados
                                        </h3>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Nome completo
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                                className="w-full p-4 border border-gray-200 rounded-xl focus:border-gray-900 focus:outline-none"
                                                placeholder="Digite seu nome completo"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Telefone
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, phone: e.target.value })
                                                }
                                                className="w-full p-4 border border-gray-200 rounded-xl focus:border-gray-900 focus:outline-none"
                                                placeholder="(11) 99999-9999"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                E-mail
                                            </label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                }
                                                className="w-full p-4 border border-gray-200 rounded-xl focus:border-gray-900 focus:outline-none"
                                                placeholder="seu@email.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Summary */}
                                    <div className="bg-gray-50 rounded-xl p-6 mt-8">
                                        <h4 className="font-semibold text-gray-900 mb-4">
                                            Resumo do agendamento
                                        </h4>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Serviço:</span>
                                                <span className="font-medium">
                                                    {services.find(s => s.id === formData.service)?.name}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Local:</span>
                                                <span className="font-medium">
                                                    {locations.find(l => l.id === formData.location)?.name}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Profissional:</span>
                                                <span className="font-medium">
                                                    {professionals.find(p => p.id === formData.professional)?.name}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Data e hora:</span>
                                                <span className="font-medium">
                                                    {formData.date} às {formData.time}
                                                </span>
                                            </div>
                                            <div className="flex justify-between pt-2 border-t border-gray-200">
                                                <span className="font-semibold">Total:</span>
                                                <span className="font-semibold">
                                                    R$ {services.find(s => s.id === formData.service)?.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-8">
                                {step > 1 && (
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className="btn-secondary"
                                    >
                                        Voltar
                                    </button>
                                )}

                                <div className={step === 1 ? 'ml-auto' : ''}>
                                    {step < 4 ? (
                                        <button
                                            type="button"
                                            onClick={handleNext}
                                            className="btn-primary"
                                            disabled={
                                                (step === 1 && !formData.service) ||
                                                (step === 2 && (!formData.location || !formData.professional)) ||
                                                (step === 3 && (!formData.date || !formData.time))
                                            }
                                        >
                                            Continuar
                                            <ChevronRight className="w-5 h-5 ml-2" />
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="btn-primary"
                                        >
                                            Confirmar Agendamento
                                        </button>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
