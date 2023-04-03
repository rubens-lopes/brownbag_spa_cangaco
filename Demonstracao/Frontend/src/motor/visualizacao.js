export default class Visualização {
  constructor(seletor) {
		this.seletor = seletor
	}

  desenhar(modelo) {
    this.elemento = document.querySelector(this.seletor)

    if (!this.elemento) return

    this.elemento.innerHTML = this.obter_visualização(modelo)
  }

	obter_visualização(modelo) { throw new Error(`obter visualização não foi implementado`) }
}