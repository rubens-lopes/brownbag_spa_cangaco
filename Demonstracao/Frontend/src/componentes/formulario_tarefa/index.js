import Componente from '&/motor/componente'
import Visualização from './visualizacao'
import Botão from '&/componentes/botao'
import Entrada_De_Texto from '&/componentes/entrada_de_texto'
import './estilos.sass'

const NOME_CAMPO_TAREFA = `tarefa`

export default class Formulário_Tarefa extends Componente {
	constructor({ ao_submeter }) {
		super(new Visualização(`[data-formulário-tarefa-bb]`), { ao_submeter })
	}

	hidratar({ visualização, modelo }) {
		new Entrada_De_Texto({ nome: NOME_CAMPO_TAREFA, descrição: `Tarefa` })
		new Botão({ texto: `Criar`, tipo: `submit` })

		visualização
			.formulário
			?.addEventListener(`submit`, (event) => {
				event.preventDefault()
				modelo.ao_submeter && modelo.ao_submeter(event.target[NOME_CAMPO_TAREFA].value)
		})
	}
}