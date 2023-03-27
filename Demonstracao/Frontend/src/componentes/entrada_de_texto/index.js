import Componente from '&/motor/componente'
import Visualização from './visualizacao'
import './estilos.sass'

export default class Entrada_De_Texto extends Componente {
	constructor({ valor = ``, descrição, nome } = {}) {
		super(new Visualização(`[data-entrada-de-texto-bb]`), { valor, descrição, nome })
	}

	hidratar() {}
}