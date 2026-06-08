"use client"

import { useState } from "react"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [mostrarSenha, setMostrarSenha] = useState(false)
    const [erro, setErro] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setErro("")
        if (!email || !senha) {
            setErro("Preencha o e-mail e a senha para continuar.")
            return
        }
        console.log("[v0] Login:", { email })
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-amber-50 px-4 py-32">
            <div className="w-full max-w-md rounded-2xl border border-amber-200 bg-white p-8 shadow-sm">
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-bold text-amber-950">Bem-vindo de volta</h1>
                    <p className="mt-2 text-sm text-amber-800/70">
                        Entre na sua conta para gerenciar suas tarefas
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-amber-950">
                            E-mail
                        </label>
                        <div className="relative">
                            <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-amber-600" size={18} />
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="seu@email.com"
                                className="w-full rounded-md border border-amber-300 bg-amber-50/50 py-2.5 pl-10 pr-3 text-sm text-amber-950 outline-none transition-colors focus:border-amber-600 focus:bg-white"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="senha" className="text-sm font-medium text-amber-950">
                            Senha
                        </label>
                        <div className="relative">
                            <Lock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-amber-600" size={18} />
                            <input
                                id="senha"
                                type={mostrarSenha ? "text" : "password"}
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                placeholder="••••••••"
                                className="w-full rounded-md border border-amber-300 bg-amber-50/50 py-2.5 pl-10 pr-10 text-sm text-amber-950 outline-none transition-colors focus:border-amber-600 focus:bg-white"
                            />
                            <button
                                type="button"
                                onClick={() => setMostrarSenha(!mostrarSenha)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-600"
                                aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
                            >
                                {mostrarSenha ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {erro && <p className="text-sm text-red-600">{erro}</p>}

                    <button
                        type="submit"
                        className="mt-2 rounded-md bg-amber-700 py-2.5 text-sm font-semibold text-amber-50 transition-colors hover:bg-amber-800"
                    >
                        Entrar
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-amber-800/70">
                    Ainda não tem conta?{" "}
                    <a href="/paginas/cadastro" className="font-semibold text-amber-700 hover:underline">
                        Cadastre-se
                    </a>
                </p>
            </div>
        </main>
    )
}
