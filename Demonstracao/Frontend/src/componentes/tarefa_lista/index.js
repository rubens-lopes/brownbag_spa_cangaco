import Componente from '&/motor/componente'
import Visualização from './visualizacao'
import './estilos.sass'

export default class Tarefa_Lista extends Componente {
	constructor({ tarefa, id, ao_marcar_como_feita }) {
		super(new Visualização(`[data-tarefa-lista-bb="${id}"]`), { tarefa, id, ao_marcar_como_feita })
	}

	hidratar({ modelo, visualização }) {
		visualização
			.formulário
			?.addEventListener(`submit`, (event) => {
				event.preventDefault()

				modelo.ao_marcar_como_feita && modelo.ao_marcar_como_feita(modelo.id)
			})
	}
}