import Componente from '&/motor/componente'
import Visualização from './visualizacao'
import './estilos.sass'

export default class Botão extends Componente {
	constructor({ id = ``, tipo = `button`, texto, ao_clicar } = {}) {
		super(new Visualização(`[data-botão-bb="${id}"]`), { tipo, texto })

		this.ao_clicar = ao_clicar
	}

	hidratar({ visualização }) {
		visualização.botão.addEventListener(`click`, (event) => {
			if(!this.ao_clicar) return
			
			event.preventDefault()
			this.ao_clicar()
		})
	}
}