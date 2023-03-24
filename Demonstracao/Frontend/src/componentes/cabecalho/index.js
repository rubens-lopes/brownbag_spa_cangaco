import Componente from '&/motor/componente'
import Visualização from './visualizacao'
import './estilos.sass'

export default class Cabeçalho extends Componente {
	constructor({ valor }) {
		super(new Visualização(`[data-cabeçalho-bb]`), { valor })
	}

	hidratar() {}
}