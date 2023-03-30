import PubSub from 'pubsub-js'
import Componente from '&/motor/componente'
import Visualização from './visualizacao'
import './estilos.sass'
import Cabeçalho from '&/componentes/compartilhados/cabecalho'
import Formulário, { NOVA_TAREFA } from '&/componentes/compartilhados/formulario_tarefa'
import { MARCAR_COMO_FEITA } from '&/componentes/compartilhados/tarefa_lista'
import Lista_De_Tarefas from '&/componentes/compartilhados/lista_de_tarefas'
import Modelo from './modelo'

export default class A_Fazeres extends Componente {
	constructor({ tarefas }) {
		super(new Visualização(`[data-a-fazeres-bb]`), new Modelo({ tarefas }), `tarefas`)

		PubSub.subscribe(NOVA_TAREFA, (_, tarefa) => { this.modelo.criar(tarefa) })
		PubSub.subscribe(MARCAR_COMO_FEITA, (_, id) => { this.modelo.marcar_como_feita(id) })
	}

	hidratar({ modelo }) {
		new Cabeçalho({ valor: `A fazeres` })
		new Formulário()
		new Lista_De_Tarefas({ tarefas: modelo.tarefas })
	}

	/**
	 * @param {string[]} tarefas
	 */
	set tarefas(tarefas) {
		this.modelo.tarefas = tarefas
	}
}