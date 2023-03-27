import Componente from '&/motor/componente'
import Visualização from './visualizacao'
import './estilos.sass'

export default class Botão extends Componente {
	constructor({ tipo, texto }) {
		super(new Visualização(`[data-botão-bb]`), { tipo, texto })
	}

	hidratar() {}
}