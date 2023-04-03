import { ao_carregar_dom } from "./auxiliares/ao_carregar_dom"
import A_Fazeres from "./componentes/cangaco/a_fazeres"
import Botão from "./componentes/compartilhados/botao"

const tarefas = [
	`tirar o lixo`,
	`alimentar o gato`,
	`passear com o cachorro`,
]

ao_carregar_dom(() => {
	const a_fazeres = new A_Fazeres({ tarefas })
	new Botão({
		id: `restaurar`,
		texto: `Restaurar`,
		ao_clicar: () => { a_fazeres.tarefas = tarefas }
	})
})