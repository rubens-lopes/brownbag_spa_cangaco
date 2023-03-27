export default class Modelo_A_Fazeres {
	constructor({ tarefas }) {
		this._tarefas = tarefas
	}

	marcar_como_feita = (id) => {
		this._tarefas.splice(id, 1)
	}

	criar = (tarefa) => {
		this._tarefas.unshift(tarefa)
	}

	get tarefas() {
		return this._tarefas.concat()
	}
}