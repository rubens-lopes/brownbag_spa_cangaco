import { ao_carregar_dom } from "./auxiliares/ao_carregar_dom"
import A_Fazeres from "./componentes/a_fazeres"

ao_carregar_dom(() => {
	new A_Fazeres({
		tarefas: [
			`tirar o lixo`,
			`alimentar o gato`,
			`passear com o cachorro`,
		]
	})
})