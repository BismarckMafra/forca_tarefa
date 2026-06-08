import { CalendarDays, KanbanSquare, ArrowRight, Target } from "lucide-react";

export default function HeroCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-amber-50 px-6 pt-40 pb-24">
      {/* Detalhe de fundo sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber-200/50 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-700/30 bg-amber-200/60 px-4 py-1.5 text-sm font-medium text-amber-950">
          <Target size={16} />
          Gestão de tarefas para missões impossíveis
        </span>

        <h1 className="text-balance text-4xl font-bold leading-tight text-amber-950 sm:text-5xl md:text-6xl">
          Organize suas tarefas, cumpra cada missão
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-amber-900/80">
          Acompanhe o progresso da sua equipe com um calendário integrado e um
          quadro Kanban intuitivo. Tudo em um só lugar para que nenhuma missão
          fique para trás.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="/sistema"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-8 py-3.5 font-semibold text-amber-950 shadow-md transition-colors hover:bg-amber-600"
          >
            Começar agora
            <ArrowRight size={18} />
          </a>
          <a
            href="/paginas/sobre"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-amber-700/40 bg-white px-8 py-3.5 font-semibold text-amber-950 transition-colors hover:bg-amber-100"
          >
            Saiba mais
          </a>
        </div>

        {/* Mini destaques de recursos */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-amber-900">
          <div className="flex items-center gap-2">
            <CalendarDays size={20} className="text-amber-600" />
            <span className="font-medium">Calendário integrado</span>
          </div>
          <div className="h-4 w-px bg-amber-700/30" />
          <div className="flex items-center gap-2">
            <KanbanSquare size={20} className="text-amber-600" />
            <span className="font-medium">Kanban Board</span>
          </div>
        </div>
      </div>
    </section>
  );
}
