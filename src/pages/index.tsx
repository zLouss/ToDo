import Formulario from "@/components/formulario/Formulario"
import Lista from "@/components/lista/Lista"
import Cabecalho from "@/components/template/Cabecalho"
import Conteudo from "@/components/template/Conteudo"
import tarefasInicias from "@/data/mock"
import ListaTarefa from "@/model/ListaTarefa"
import Tarefa from "@/model/Tarefa"
import { useState } from "react"

export default function Home() {
    
    const [tarefas, setTarefas] = useState(tarefasInicias)
    
    function mudou(novasTarefas: ListaTarefa) {
        setTarefas(novasTarefas)
    }
    
    function novaTarefaCriada(novaTarefa: Tarefa) {
        setTarefas(tarefas.adicionarTarefa(novaTarefa))
    }
    
    return (
        <div className={`
			flex flex-col h-screen bg-gray-300
		`}>
            <Cabecalho>
                <Formulario novaTarefaCriada={novaTarefaCriada} />
            </Cabecalho>
            <Conteudo>
                <Lista tarefas={tarefas} mudou={(novasTarefas) => {
                    setTarefas(novasTarefas)
                }} />
            </Conteudo>
        </div>
    )
}
