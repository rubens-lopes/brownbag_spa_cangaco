import Componente from '&/motor/componente'
import Visualização from './visualizacao'
import './estilos.sass'

export default class Tarefa_Lista extends Componente {
	constructor({ tarefa, id }) {
		super(new Visualização(`[data-tarefa-lista-bb="${id}"]`), { tarefa, id })
	}

	hidratar({ modelo, visualização }) {
		visualização
			.formulário
			?.addEventListener(`submit`, (event) => {
				event.preventDefault()

				console.log(modelo.id)
			})
	}
}