import Visualização from '&/motor/visualizacao'

export default class Visualização_Tarefa_Lista extends Visualização {
	obter_visualização({ tarefa, id }) {
		return `
			<li class="${(id + 1) % 2 === 0 ? `par` : ``}">
				${tarefa}
				<form>
					<input type="hidden" name="campo_texto" value="${id}">
					<button type="submit">Marcar como feita</button>
				</form>
			</li>
		`
	}

	get formulário() {
		return this.elemento.querySelector(`form`)
	}
}