import Componente from '&/motor/componente'
import Visualização from './visualizacao'
import Tarefa_Lista from '&/componentes/tarefa_lista'
import './estilos.sass'

export default class Lista_De_Tarefas extends Componente {
	constructor({ tarefas, ao_marcar_como_feita }) {
		super(new Visualização(`[data-lista-de-tarefas-bb]`), { tarefas, ao_marcar_como_feita })
	}

	hidratar({ modelo }) {
		modelo.tarefas.forEach((tarefa, id) => {
			new Tarefa_Lista({ tarefa, id, ao_marcar_como_feita: modelo.ao_marcar_como_feita })
		})
	}
}