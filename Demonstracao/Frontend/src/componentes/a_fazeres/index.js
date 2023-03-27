import Componente from '&/motor/componente'
import Visualização from './visualizacao'
import './estilos.sass'
import Cabeçalho from '&/componentes/cabecalho'
import Formulário from '&/componentes/formulario_tarefa'
import Lista_De_Tarefas from '&/componentes/lista_de_tarefas'

export default class A_Fazeres extends Componente {
	constructor({ tarefas }) {
		super(new Visualização(`[data-a-fazeres-bb]`), { tarefas })
	}

	hidratar({ modelo }) {
		new Cabeçalho({ valor: `A fazeres`})
		new Formulário({ ao_submeter: (a) => console.log(a)})
		new Lista_De_Tarefas({ tarefas: modelo.tarefas})
	}
}