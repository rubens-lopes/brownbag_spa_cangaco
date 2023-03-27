import Componente from '&/motor/componente'
import Visualização from './visualizacao'
import Tarefa_Lista from '&/componentes/tarefa_lista'
import './estilos.sass'

export default class Lista_De_Tarefas extends Componente {
	constructor({ tarefas }) {
		super(new Visualização(`[data-lista-de-tarefas-bb]`), { tarefas })
	}

	hidratar({ modelo }) {
		modelo.tarefas.forEach((tarefa, id) => {
			new Tarefa_Lista({ tarefa, id })
		})
	}
}