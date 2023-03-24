export function vincular({
	visualização,
	modelo,
	hidratar,
	propriedades,
}){
  const montar = function(modelo) {
    visualização.desenhar(modelo)
    hidratar({ visualização, modelo })
  }
debugger
  const representante = new Proxy(modelo, {
    get(alvo, propriedade) {
      const valorEsperado = alvo[propriedade]

      if (typeof valorEsperado !== typeof Function || propriedades?.includes(propriedade) === false)
        return valorEsperado
        
      return function(...argumentos) {
        valorEsperado(...argumentos)
        montar(representante)
      }
    },
    set(alvo, propriedade, novoValor) {
      const valorAtualizado = Reflect.set(alvo, propriedade, novoValor)

      if (propriedades?.includes(propriedade))
        montar(representante)
      
      return valorAtualizado
    },
  })

  montar(representante)

  return representante
}