import { ao_carregar_dom } from "&/auxiliares/ao_carregar_dom"

const obter_html = (tarefas) => {
	return tarefas.map((tarefa, índice) => {
		return `
		<li class="flex justify-between items-center even:bg-slate-100">
			${tarefa}
			<form id="apagar_tarefa_${índice}">
				<input type="hidden" name="tarefa" value="${índice}">
				<button class="text-sm" type="submit">Marcar como feita</button>
			</form>
		</li>
		`
	})
	.join(``)
}

ao_carregar_dom(() => {
	const tarefas_iniciais = [
		`tirar o lixo`,
		`alimentar o gato`,
		`passear com o cachorro`,
	]

	let tarefas = tarefas_iniciais.concat()

	const adicionar = document.querySelector(`#adicionar`)
	const lista = document.querySelector(`ul`)
	const botão_restaurar = document.querySelector(`button#restaurar`)

	botão_restaurar.addEventListener(`click`, (event) => {
		event.preventDefault()
		tarefas = tarefas_iniciais.concat()
		desenhar_lista()
		hidratar_lista()
	})

	adicionar.addEventListener(`submit`, (event) => {
		event.preventDefault()

		const entrada = event.target.tarefa

		tarefas.unshift(entrada.value)
		desenhar_lista()
		hidratar_lista()

		entrada.focus()
		adicionar.reset()
	})

	const desenhar_lista = () => { lista.innerHTML = obter_html(tarefas) }
	const hidratar_lista = () => {
		document.querySelectorAll(`[id^=apagar_tarefa]`)
			.forEach((formulário) => {
				formulário.addEventListener(`submit`, (event) => {
					event.preventDefault()

					tarefas.splice(event.target.tarefa.value, 1)

					desenhar_lista()
					hidratar_lista()
				})
			})
	}

	desenhar_lista()
	hidratar_lista()
})