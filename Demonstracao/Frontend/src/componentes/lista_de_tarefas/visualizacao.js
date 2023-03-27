import Visualização from '&/motor/visualizacao'

export default class Visualização_Lista_De_Tarefas extends Visualização {
	obter_visualização({ tarefas }) {
		return `
			<ul>
				${
					tarefas.map((_, índice) => `<span data-tarefa-lista-bb="${índice}"></span>`)
						.join(``)
				}
			</ul>
		`
	}
}