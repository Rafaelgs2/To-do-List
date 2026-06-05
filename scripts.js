const botaoAdcionar = document.querySelector('.main-btn')
const inputTarefa = document.querySelector('#input-tarefa')
const listaTarefa = document.querySelector('#todo-list')
const emptyState = document.querySelector('#empty-state')

let tarefasSalvas = JSON.parse(localStorage.getItem('itensSalvos')) || []


tarefasSalvas.forEach(tarefa => {
    adicionarTarefaTela(tarefa)
})
atualizarEmptyState()


botaoAdcionar.addEventListener('click', () => {
    adicionarTarefa(inputTarefa.value)
})

inputTarefa.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
        adicionarTarefa(inputTarefa.value)
    }
})

function adicionarTarefa(texto) {
    if (!texto.trim()) return

    let novoObjeto = {
        tarefa: texto,
        status: false
    }
    adicionarTarefaTela(novoObjeto)
    tarefasSalvas.push(novoObjeto)
    salvarTarefas()
    atualizarEmptyState()
}

function adicionarTarefaTela(dadoDaTarefa) {
    if (dadoDaTarefa.tarefa !== '') {
        let novaTarefa = document.createElement('li')
        novaTarefa.setAttribute('role', 'listitem')
        novaTarefa.setAttribute('tabindex', '0')
        novaTarefa.setAttribute('aria-label', `Tarefa: ${dadoDaTarefa.tarefa}. Pressione Enter ou Espaço para marcar como concluída.`)

        let textoSpan = document.createElement('span')
        textoSpan.classList.add('task-text')
        textoSpan.innerText = dadoDaTarefa.tarefa

        if (dadoDaTarefa.status == true) {
            novaTarefa.classList.add('task_concluida')
            novaTarefa.setAttribute('aria-label', `Tarefa concluída: ${dadoDaTarefa.tarefa}. Pressione Enter ou Espaço para desmarcar.`)
        }

        let botaoExcluir = document.createElement('button')
        botaoExcluir.innerHTML = '<i class="fa-solid fa-trash-can" aria-hidden="true"></i>'
        botaoExcluir.classList.add('btn-exclude')
        botaoExcluir.setAttribute('aria-label', `Excluir tarefa: ${dadoDaTarefa.tarefa}`)

        novaTarefa.appendChild(textoSpan)
        novaTarefa.appendChild(botaoExcluir)
        listaTarefa.appendChild(novaTarefa)

        const toggleConcluir = () => {
            novaTarefa.classList.toggle('task_concluida')
            dadoDaTarefa.status = !dadoDaTarefa.status

            const estado = dadoDaTarefa.status ? 'concluída' : ''
            novaTarefa.setAttribute('aria-label', `Tarefa ${estado}: ${dadoDaTarefa.tarefa}. Pressione Enter ou Espaço para ${dadoDaTarefa.status ? 'desmarcar' : 'marcar como concluída'}.`)

            salvarTarefas()
        }

        novaTarefa.addEventListener('click', toggleConcluir)

        novaTarefa.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleConcluir()
            }
        })

        botaoExcluir.addEventListener('click', (evento) => {
            evento.stopPropagation()
            removerTarefa(novaTarefa, dadoDaTarefa)
        })
    }

    inputTarefa.value = ''
}

function removerTarefa(elementoLi, dadoDaTarefa) {
    elementoLi.classList.add('task-saindo')

    elementoLi.addEventListener('animationend', () => {
        elementoLi.remove()

        let posicao = tarefasSalvas.indexOf(dadoDaTarefa)
        if (posicao !== -1) {
            tarefasSalvas.splice(posicao, 1)
        }

        salvarTarefas()
        atualizarEmptyState()
    }, { once: true })
}

function salvarTarefas() {
    localStorage.setItem('itensSalvos', JSON.stringify(tarefasSalvas))
}

function atualizarEmptyState() {
    if (tarefasSalvas.length === 0) {
        emptyState.classList.add('visivel')
    } else {
        emptyState.classList.remove('visivel')
    }
}