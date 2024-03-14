import Lista from "@/components/lista/Lista"
import tarefasInicias from "@/data/mock"
import { useState } from "react"

export default function Home() {
	const [tarefas, setTarefas] = useState(tarefasInicias)	
	return (
		<div className={`
			flex flex-col justify-center items-center h-screen
			bg-gray-300
		`}>
			<Lista tarefas={tarefas} mudou={(novasTarefas) => {
				setTarefas(novasTarefas)
			}} />
		</div>
	)
}
