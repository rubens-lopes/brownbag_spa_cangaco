import { vincular } from './vincular'

export default class Componente {
	constructor(visualização, modelo, ...propriedades) {
		this.modelo = vincular({
			visualização,
			modelo,
			hidratar: this.hidratar.bind(this),
			propriedades,
		})
	}

	hidratar({ modelo, visualização }) { throw new Error(`hidratar não foi implementado`) }
}