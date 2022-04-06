const listagemPokemon= document.querySelectorAll('.cabeca-pokemon')


listagemPokemon.forEach(pokemon=>{
    pokemon.addEventListener('click', () => {
        const removerAberto = document.querySelector('.aberto')
        removerAberto.classList.remove('aberto')

        const pokemonId = pokemon.attributes.id.value

        const adicionarAberto = 'cartao-' + pokemonId
        const mostrarCartao = document.getElementById(adicionarAberto)
        mostrarCartao.classList.add('aberto')

        const removerAtivo = document.querySelector('.ativo')
        removerAtivo.classList.remove('ativo')

        const adicionarAtivo = document.getElementById(pokemonId)
        adicionarAtivo.classList.add('ativo')
    })
})