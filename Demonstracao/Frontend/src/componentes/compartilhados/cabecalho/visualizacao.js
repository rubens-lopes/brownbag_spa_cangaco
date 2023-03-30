import Visualização from '&/motor/visualizacao'

export default class Visualização_Cabeçalho extends Visualização {
	obter_visualização({ valor }) {
		return `
			<h1>${valor}</h1>
		`
	}
}