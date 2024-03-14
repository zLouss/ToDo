import ListaTarefa from "@/model/ListaTarefa";
import Tarefa from "@/model/Tarefa";
import TipoFiltro from "@/model/TipoFiltro";


const tarefasInicias: Tarefa[] = [
    Tarefa.criarAtiva(1, 'Estudar Next'),
    Tarefa.criarConcluida(2, 'Limpar carro'),
    Tarefa.criarAtiva(3, 'Comprar livro do mês')
]

export default new ListaTarefa(tarefasInicias, TipoFiltro.NENHUM)