import PubSub from 'pubsub-js'
import Componente from '&/motor/componente'
import Visualização from './visualizacao'
import Tarefa_Lista from '&/componentes/compartilhados/tarefa_lista'
import './estilos.sass'

export const TAREFAS = `d30e1cc3-f98b-4527-87d2-a0e7313d7715`

export default class Lista_De_Tarefas extends Componente {
	constructor({ tarefas }) {
		super(new Visualização(`[data-lista-de-tarefas-bb]`), { tarefas }, `tarefas`)

		PubSub.subscribe(TAREFAS, (_, tarefas) => this.modelo.tarefas = tarefas)
	}

	hidratar({ modelo }) {
		modelo.tarefas.forEach((tarefa, id) => {
			new Tarefa_Lista({ tarefa, id })
		})
	}
}