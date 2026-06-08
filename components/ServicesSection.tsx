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

export default function ServicesSection() {
  return (
    <section className="w-full bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
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
