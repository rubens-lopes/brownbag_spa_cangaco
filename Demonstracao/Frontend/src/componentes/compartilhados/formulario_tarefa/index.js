import PubSub from 'pubsub-js'
import Componente from '&/motor/componente'
import Visualização from './visualizacao'
import Botão from '&/componentes/compartilhados/botao'
import Entrada_De_Texto from '&/componentes/compartilhados/entrada_de_texto'
import './estilos.sass'

export const NOVA_TAREFA = `7709f861-cb47-47f8-9211-1070dbd33d65`
const NOME_CAMPO = `campo_texto`

export default class Formulário_Tarefa extends Componente {
	constructor() {
		super(new Visualização(`[data-formulário-tarefa-bb]`), {})
	}

	hidratar({ visualização }) {
		new Entrada_De_Texto({ nome: NOME_CAMPO, descrição: `Tarefa` })
		new Botão({ id: `formulário_tarefa`, texto: `Criar`, tipo: `submit` })

		visualização
			.formulário
			?.addEventListener(`submit`, (event) => {
				event.preventDefault()

				const campo = event.target[NOME_CAMPO]
				PubSub.publishSync(NOVA_TAREFA, campo.value)
				event.target.reset()
				campo.focus()
		})
	}
}