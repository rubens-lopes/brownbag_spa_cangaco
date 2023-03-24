import Componente from '&/motor/componente'
import Visualização from './visualizacao'
import './estilos.sass'
import Cabeçalho from '../cabecalho'

export default class A_Fazeres extends Componente {
	constructor() {
		super(new Visualização(`[data-a-fazeres-bb]`), {})
	}

	hidratar({ modelo, visualização }) {
		new Cabeçalho({ valor: `A fazeres`})
	}
}