import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-amber-500 text-amber-950 mt-auto py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">

        {/* Direitos e ano */}  
        <p className="text-sm text-center md:text-left">
          © 2026 - Todos os direitos reservados
        </p>

        {/* Endereço com ícone */}
        <p className="text-sm flex items-center gap-1 justify-center md:justify-start">
          <MapPin size={16} />
          Rua das Missões, 007 - São Paulo - SP - CEP 12345-678
        </p>

        {/* Contato */}
        <p className="text-sm flex flex-col md:flex-row items-center gap-2 justify-center md:justify-start">
          Telefone: (11) 1234-5678 | Email: forca_tarefa@email.com
        </p>

        {/* Redes sociais */}
        <div className="flex items-center gap-4 justify-center md:justify-end">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} className="hover:text-black transition-colors" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} className="hover:text-black transition-colors" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} className="hover:text-black transition-colors" />
          </a>
        </div>

        {/* Link para o Google Maps */}
        <div className="flex items-center gap-1 justify-center md:justify-end">
          <MapPin size={16} />
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-black transition-colors text-sm"
          >
            Veja no Google Maps
          </a>
        </div>

      </div>
    </footer>
  )
} 