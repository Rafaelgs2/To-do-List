const botaoAdcionar = document.querySelector('.main-btn')
const inputTarefa = document.querySelector('.input-bar')
const listaTarefa = document.querySelector('#todo-list')

botaoAdcionar.addEventListener('click', () => {
    let textoTarefa = inputTarefa.value

    if (textoTarefa !== '') {
            let novaTarefa = document.createElement('li')
            let textoSpan = document.createElement('span')
            textoSpan.classList.add('task-text')
            textoSpan.innerText = textoTarefa

            let botaoExcluir = document.createElement('button')
            botaoExcluir.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
            botaoExcluir.classList.add('btn-exclude')

            novaTarefa.appendChild(textoSpan)
            novaTarefa.appendChild(botaoExcluir)
            listaTarefa.appendChild(novaTarefa)

            novaTarefa.addEventListener('click', () => {
                novaTarefa.classList.toggle('task_concluida')
            })

            botaoExcluir.addEventListener('click', (evento) => {
                evento.stopPropagation()
                novaTarefa.remove()
            })
    }
    inputTarefa.value = ''
})


inputTarefa.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
        
        let textoTarefa = inputTarefa.value

        if (textoTarefa !== '') {
            let novaTarefa = document.createElement('li')
            let textoSpan = document.createElement('span')
            textoSpan.classList.add('task-text')
            textoSpan.innerText = textoTarefa

            let botaoExcluir = document.createElement('button')
            botaoExcluir.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
            botaoExcluir.classList.add('btn-exclude')
            

            novaTarefa.appendChild(textoSpan)
            novaTarefa.appendChild(botaoExcluir)
            listaTarefa.appendChild(novaTarefa)

            novaTarefa.addEventListener('click', () => {
                novaTarefa.classList.toggle('task_concluida')
            })

            botaoExcluir.addEventListener('click', (evento) => {
                evento.stopPropagation()
                novaTarefa.remove()
            })

        }
        inputTarefa.value = ''
    }
})