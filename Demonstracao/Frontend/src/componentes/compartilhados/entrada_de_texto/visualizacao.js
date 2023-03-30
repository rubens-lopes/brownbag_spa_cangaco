import Visualização from '&/motor/visualizacao'

export default class Visualização_Entrada_De_Texto extends Visualização {
	obter_visualização({ valor, descrição, nome }) {
		return `
		<label>
			${descrição}
			<input type="text" name="${nome}" value="${valor}">
		</label>
		`
	}
}