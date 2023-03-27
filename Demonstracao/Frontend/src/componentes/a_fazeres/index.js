import Componente from '&/motor/componente'
import Visualização from './visualizacao'
import './estilos.sass'
import Cabeçalho from '&/componentes/cabecalho'
import Formulário from '&/componentes/formulario_tarefa'
import Lista_De_Tarefas from '&/componentes/lista_de_tarefas'
import Modelo from './modelo'

export default class A_Fazeres extends Componente {
	constructor({ tarefas }) {
		super(new Visualização(`[data-a-fazeres-bb]`), new Modelo({ tarefas }), `criar`, `marcar_como_feita`)
	}

	hidratar({ modelo }) {
		new Cabeçalho({ valor: `A fazeres`})
		new Formulário({ ao_submeter: modelo.criar })
		new Lista_De_Tarefas({ 
			tarefas: modelo.tarefas, 
			ao_marcar_como_feita: modelo.marcar_como_feita
		})
	}
}