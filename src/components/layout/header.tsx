"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Scissors } from "lucide-react";

const navigation = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Funcionalidades", href: "#servicos" },
  { name: "Planos", href: "#planos" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "FAQ", href: "#faq" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 max-w-full overflow-hidden">
      <nav className="container-width section-padding overflow-hidden">
        <div className="flex items-center justify-between h-16 max-w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-black rounded-lg">
              <Scissors className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">HairBooking</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="btn-secondary">
              Entrar
            </Link>
            <a
              href="#planos"
              onClick={(e) => handleSmoothScroll(e, "#planos")}
              className="btn-secondary cursor-pointer"
            >
              Ver Planos
            </a>
            <a
              href="#contato"
              onClick={(e) => handleSmoothScroll(e, "#contato")}
              className="btn-primary cursor-pointer"
            >
              Começar Agora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-600" />
            ) : (
              <Menu className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                <Link href="/login" className="btn-secondary">
                  Entrar
                </Link>
                <a
                  href="#planos"
                  onClick={(e) => handleSmoothScroll(e, "#planos")}
                  className="btn-secondary cursor-pointer"
                >
                  Ver Planos
                </a>
                <a
                  href="#contato"
                  onClick={(e) => handleSmoothScroll(e, "#contato")}
                  className="btn-primary cursor-pointer"
                >
                  Começar Agora
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
