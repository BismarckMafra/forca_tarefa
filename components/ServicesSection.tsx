import {
  CalendarDays,
  KanbanSquare,
  BarChart3,
  Users,
  Bell,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: KanbanSquare,
    title: "Quadro Kanban",
    description:
      "Visualize o fluxo de trabalho em colunas e arraste tarefas entre etapas para acompanhar cada missão em tempo real.",
  },
  {
    icon: CalendarDays,
    title: "Calendário",
    description:
      "Planeje prazos e visualize todas as tarefas agendadas em uma visão mensal clara e organizada.",
  },
  {
    icon: BarChart3,
    title: "Dashboard de Indicadores",
    description:
      "Acompanhe gráficos de desempenho e métricas de produtividade da equipe em um painel intuitivo.",
  },
  {
    icon: Users,
    title: "Colaboração em Equipe",
    description:
      "Atribua tarefas aos agentes certos e mantenha todos alinhados em torno dos mesmos objetivos.",
  },
  {
    icon: Bell,
    title: "Notificações",
    description:
      "Receba alertas de prazos e atualizações para nunca perder uma entrega importante.",
  },
  {
    icon: ShieldCheck,
    title: "Acesso Seguro",
    description:
      "Autenticação protegida para garantir que apenas os agentes autorizados acessem cada missão.",
  },
];

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
// dia 12 possui uma tarefa agendada
const calendarDays = Array.from({ length: 35 }, (_, i) => i - 2); // offset para iniciar o mês

function CalendarPreview() {
  return (
    <div className="rounded-xl border border-amber-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 text-amber-950">
        <CalendarDays size={20} className="text-amber-600" />
        <h3 className="text-lg font-semibold">Calendário</h3>
      </div>
      <p className="mt-1 text-sm text-amber-900/60">Junho de 2026</p>

      <div className="mt-4 grid grid-cols-7 gap-1 text-center">
        {weekDays.map((day, i) => (
          <span
            key={i}
            className="text-xs font-medium text-amber-900/50"
          >
            {day}
          </span>
        ))}
        {calendarDays.map((day) => {
          const isValid = day >= 1 && day <= 30;
          const hasTask = day === 12;
          return (
            <div
              key={day}
              className={`flex aspect-square items-center justify-center rounded-md text-xs ${
                !isValid
                  ? "text-transparent"
                  : hasTask
                    ? "bg-amber-500 font-bold text-amber-950"
                    : "text-amber-900/70"
              }`}
            >
              {isValid ? day : "."}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-amber-500 text-xs font-bold text-amber-950">
          12
        </span>
        <div>
          <p className="text-sm font-semibold text-amber-950">
            Reunião de planejamento
          </p>
          <p className="text-xs text-amber-900/60">14:00 — Sala de missões</p>
        </div>
      </div>
    </div>
  );
}

function KanbanPreview() {
  const columns = [
    { title: "A Fazer", accent: "bg-amber-500" },
    { title: "Em Progresso", accent: "bg-amber-300" },
    { title: "Concluído", accent: "bg-amber-700" },
  ];

  return (
    <div className="rounded-xl border border-amber-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 text-amber-950">
        <KanbanSquare size={20} className="text-amber-600" />
        <h3 className="text-lg font-semibold">Quadro Kanban</h3>
      </div>
      <p className="mt-1 text-sm text-amber-900/60">Acompanhe cada etapa</p>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {columns.map((col) => (
          <div
            key={col.title}
            className="rounded-lg border border-amber-200 bg-amber-50 p-2"
          >
            <div className="flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${col.accent}`} />
              <span className="text-xs font-semibold text-amber-950">
                {col.title}
              </span>
            </div>

            {col.title === "A Fazer" && (
              <div className="mt-2 rounded-md border border-amber-200 bg-white p-2 shadow-sm">
                <p className="text-xs font-semibold text-amber-950">
                  Revisar relatório
                </p>
                <p className="mt-1 text-[10px] text-amber-900/60">
                  Prioridade alta
                </p>
                <div className="mt-2 flex items-center gap-1">
                  <span className="rounded bg-amber-500 px-1.5 py-0.5 text-[10px] font-medium text-amber-950">
                    Agente A
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="w-full bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-amber-950 sm:text-4xl">
            Veja a plataforma em ação
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-amber-900/70">
            Um calendário para organizar prazos e um quadro Kanban para
            acompanhar cada tarefa — tudo em um só lugar.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <CalendarPreview />
          <KanbanPreview />
        </div>

        <div className="mx-auto mt-20 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-amber-950 sm:text-4xl">
            Tudo que sua equipe precisa
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-amber-900/70">
            Recursos pensados para transformar o caos das tarefas em missões
            bem executadas.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="flex flex-col rounded-xl border border-amber-200 bg-amber-50 p-6 transition-colors hover:border-amber-400"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500 text-amber-950">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-amber-950">
                  {service.title}
                </h3>
                <p className="mt-2 leading-relaxed text-amber-900/70">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
