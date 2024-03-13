import Tarefa from "@/model/Tarefa"

export default function Home() {
	let tarefa: Tarefa = new Tarefa(1, 'Exemplo')
	tarefa = tarefa.concluir()
	return (
    <div className="flex flex-col justify-center items-center h-screen
		text-white bg-gradient-to-tr from-purple-500 to-yellow-600">
			<span>{tarefa.id}</span>
			<span>{tarefa.descricao}</span>
			<span>{tarefa.concluida ? 'Concluida' : 'Ativa'}</span>
	</div>
  )
}
