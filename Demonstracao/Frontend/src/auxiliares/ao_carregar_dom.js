export const ao_carregar_dom = (função) => {
	document.addEventListener(`DOMContentLoaded`, () => {
		função()
	})
}