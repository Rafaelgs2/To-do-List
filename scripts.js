const botaoAdcionar = document.querySelector('.main-btn')
const inputTarefa = document.querySelector('.input-bar')
const listaTarefa = document.querySelector('#todo-list')
let tarefasSalvas = JSON.parse(localStorage.getItem('itensSalvos')) || []

tarefasSalvas.forEach(tarefa => {
    adicionarTarefaTela(tarefa)
});


botaoAdcionar.addEventListener('click', () => {
    adicionarTarefa(inputTarefa.value)
})

inputTarefa.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
        adicionarTarefa(inputTarefa.value)
    }
})

function adicionarTarefa(texto){
    let novoObjeto = {
        tarefa: texto,
        status: false
    }
    adicionarTarefaTela(novoObjeto)
    tarefasSalvas.push(novoObjeto)
    salvarTarefas()
}


function adicionarTarefaTela(dadoDaTarefa){
    if (dadoDaTarefa.tarefa !== ''){
        let novaTarefa = document.createElement('li')
            let textoSpan = document.createElement('span')
            textoSpan.classList.add('task-text')
            textoSpan.innerText = dadoDaTarefa.tarefa

            if (dadoDaTarefa.status == true){
                novaTarefa.classList.add('task_concluida')
            }

            let botaoExcluir = document.createElement('button')
            botaoExcluir.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
            botaoExcluir.classList.add('btn-exclude')

            novaTarefa.appendChild(textoSpan)
            novaTarefa.appendChild(botaoExcluir)
            listaTarefa.appendChild(novaTarefa)

            novaTarefa.addEventListener('click', () => {
                novaTarefa.classList.toggle('task_concluida')
                dadoDaTarefa.status = !dadoDaTarefa.status
                salvarTarefas()
            })

            botaoExcluir.addEventListener('click', (evento) => {
                evento.stopPropagation()
                removerTarefa(novaTarefa)
            })

            
    }
    inputTarefa.value = ''
    
}

function removerTarefa(tarefa){
    tarefa.remove()
    let textoDaTarefa = tarefa.querySelector('.task-text').innerText
    let posicao = tarefasSalvas.indexOf(textoDaTarefa)
    tarefasSalvas.splice(posicao, 1)
    salvarTarefas()
}

function salvarTarefas(){
    localStorage.setItem('itensSalvos', JSON.stringify(tarefasSalvas))
}

