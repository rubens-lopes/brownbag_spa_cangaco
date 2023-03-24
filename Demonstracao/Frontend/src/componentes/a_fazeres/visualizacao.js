import Visualização from '&/motor/visualizacao'

export default class Visualização_A_Fazeres extends Visualização {
	obter_visualização({ lista }) {
		return `
			<div data-cabeçalho-bb></div>
		`
	}
}