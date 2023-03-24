import Componente from '&/motor/componente'
import Visualização from './visualizacao'
import './estilos.sass'

export default class A_Fazeres extends Componente {
	constructor() {
		super(new Visualização(`[data-a-fazeres-bb]`), {})
	}

	hidratar({ modelo, visualização }) {
		console.log(`hidratado`);
	}
}