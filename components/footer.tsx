import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-amber-950 text-amber-50">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-amber-400">Força Tarefa</h2>
            <p className="mt-3 text-sm leading-relaxed text-amber-100/70">
              Plataforma de gestão de tarefas com calendário e quadro Kanban
              para transformar o trabalho da sua equipe em missões bem
              executadas.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook
                  size={20}
                  className="text-amber-100/70 transition-colors hover:text-amber-400"
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter
                  size={20}
                  className="text-amber-100/70 transition-colors hover:text-amber-400"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram
                  size={20}
                  className="text-amber-100/70 transition-colors hover:text-amber-400"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin
                  size={20}
                  className="text-amber-100/70 transition-colors hover:text-amber-400"
                />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-400">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="/"
                  className="text-amber-100/70 transition-colors hover:text-amber-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/paginas/sobre"
                  className="text-amber-100/70 transition-colors hover:text-amber-400"
                >
                  Sobre a empresa
                </a>
              </li>
              <li>
                <a
                  href="/paginas/contato"
                  className="text-amber-100/70 transition-colors hover:text-amber-400"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-400">
              Recursos
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="text-amber-100/70">Calendário</span>
              </li>
              <li>
                <span className="text-amber-100/70">Quadro Kanban</span>
              </li>
              <li>
                <span className="text-amber-100/70">Dashboard</span>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-400">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2 text-amber-100/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-amber-400" />
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-amber-400"
                >
                  Rua das Missões, 007 — São Paulo - SP, CEP 12345-678
                </a>
              </li>
              <li className="flex items-center gap-2 text-amber-100/70">
                <Phone size={16} className="shrink-0 text-amber-400" />
                (11) 1234-5678
              </li>
              <li className="flex items-center gap-2 text-amber-100/70">
                <Mail size={16} className="shrink-0 text-amber-400" />
                contato@forcatarefa.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-amber-900">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-amber-100/60 sm:flex-row">
          <p>© 2026 Força Tarefa. Todos os direitos reservados.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-amber-400">
              Política de Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-amber-400">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
