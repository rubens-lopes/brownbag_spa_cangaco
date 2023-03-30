import Visualização from '&/motor/visualizacao'

export default class Visualização_A_Fazeres extends Visualização {
	obter_visualização() {
		return `
			<div data-cabeçalho-bb></div>

			<div data-formulário-tarefa-bb></div>

			<div data-lista-de-tarefas-bb></div>
		`
	}
}