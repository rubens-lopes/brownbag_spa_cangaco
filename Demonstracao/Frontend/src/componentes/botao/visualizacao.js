import Visualização from '&/motor/visualizacao'

export default class Visualização_Botão extends Visualização {
	obter_visualização({ tipo, texto }) {
		return `
			<button type="${tipo}">${texto}</button>
		`
	}
}