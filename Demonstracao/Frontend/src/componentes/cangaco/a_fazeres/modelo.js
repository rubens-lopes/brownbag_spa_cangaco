import PubSub from 'pubsub-js'
import { TAREFAS } from '&/componentes/compartilhados/lista_de_tarefas'

export default class Modelo_A_Fazeres {
	constructor({ tarefas }) {
		this._tarefas = tarefas
	}

	marcar_como_feita = (id) => {
		this.tarefas = this._tarefas 
			.filter((_, índice) => id !== índice)
	}

	criar = (tarefa) => {
		this.tarefas = [tarefa, ...this._tarefas] 
	}

	get tarefas() {
		return this._tarefas.concat()
	}

	set tarefas(tarefas) {
		this._tarefas = tarefas
		PubSub.publishSync(TAREFAS, this._tarefas)
	}
}