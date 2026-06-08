export default function Nav(){
    return(
        <div aria-label=" Navegação principal" className=" text-amber-950 hidden md:flex items-center position-right">
            <a className="mr-4" href='/'> Home </a>
            <a className="mr-4" href='/paginas/contato'> Contatos </a>
            <a className="mr-4" href='/paginas/sobre'> Sobre a empresa </a>
             <a className="mr-4" href='/sistema/paginas/tarefas/nova'> Cadastrar Tarefas </a>
            <a className="mr-4" href='/sistema/paginas/tarefas'> Lista de Tarefas </a>
            <a className="mr-4" href='/sistema/paginas/tarefas/buscar'> Tarefa </a>
        </div>
    )
}