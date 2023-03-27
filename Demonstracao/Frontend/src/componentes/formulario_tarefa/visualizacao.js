import Visualização from '&/motor/visualizacao'

export default class Visualização_Formulário_Tarefa extends Visualização {
	obter_visualização() {
		return `
		<form>
			<div data-entrada-de-texto-bb></div>
			<div data-botão-bb></div>
		</form>
		`
	}

	get formulário() {
		return this.elemento.querySelector(`form`)
	}
}