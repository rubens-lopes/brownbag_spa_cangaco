import PubSub from 'pubsub-js'
import Componente from '&/motor/componente'
import Visualização from './visualizacao'
import './estilos.sass'

export const MARCAR_COMO_FEITA = `9cc474dd-61e8-449c-98a6-a225a060f2b9`

export default class Tarefa_Lista extends Componente {
	constructor({ tarefa, id }) {
		super(new Visualização(`[data-tarefa-lista-bb="${id}"]`), { tarefa, id })
	}

	hidratar({ modelo, visualização }) {
		visualização
			.formulário
			?.addEventListener(`submit`, (event) => {
				event.preventDefault()

				PubSub.publishSync(MARCAR_COMO_FEITA, modelo.id)
			})
	}
}