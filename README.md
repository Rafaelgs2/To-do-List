# 📝 To-Do List Profissional

> Um aplicativo de gerenciamento de tarefas focado em Experiência do Usuário (UX), Acessibilidade e Clean Code, construído inteiramente com JavaScript.

**[Link para o projeto ao vivo (Deploy) - https://to-do-list-mu-ashy.vercel.app/]**

<br>

## 🎯 O Projeto
Mais do que uma simples To-Do List, este projeto foi desenvolvido para demonstrar o domínio de fundamentos essenciais do Front-end moderno. O foco principal foi criar uma interface limpa, moderna, com interações responsivas e um código robusto que lida com persistência de dados e regras de negócio inteligentes.

---

## ✨ Funcionalidades e Diferenciais

* **CRUD Completo:** Criação, leitura, atualização (conclusão) e exclusão de tarefas.
* **Persistência de Dados:** Integração com `localStorage` para garantir que o usuário não perca suas anotações ao recarregar ou fechar a página.
* **Filtro Anti-Clone (Regras de Negócio):** Validação de dados usando métodos de array (`.some()`) para impedir a criação de tarefas duplicadas.
* **UX e Micro-interações:**
    * Efeito "Sanfona" suave para a exibição de notificações de erro (alertas não-intrusivos).
    * Delay interativo, animação de deslizamento (*transform*) e *fade-out* ao concluir e remover uma tarefa da lista.
    * Scrollbar customizada.
* **Acessibilidade (A11y):** Uso estruturado de `aria-labels` e `sr-only` para suporte a leitores de tela e usabilidade inclusiva.
* **Design Responsivo:** Layout fluido e adaptável para dispositivos móveis e desktops.

---

## 💻 Tecnologias Utilizadas

* **HTML5:** Semântica estrutural focada em acessibilidade.
* **CSS3:** Flexbox, transições (`transition`), propriedades de `transform`, gerenciamento de estados (`:focus`, `:hover`) e harmonização de Grid.
* **JavaScript (ES6+):** Vanilla JS com manipulação avançada de DOM, Arrow Functions, High-Order Functions para iteração de listas e controle de eventos.

---

## 🧠 Destaques Técnicos e Aprendizados

Durante a arquitetura e desenvolvimento deste projeto, destaco as seguintes soluções técnicas:
1. **Sincronicidade de Interface:** Uso estratégico de Web APIs como `setTimeout` para coordenar a remoção de elementos no DOM (DOM Flow) em sincronia com o fim das animações CSS.
2. **Gerenciamento de Estado Nativo:** Estruturação das tarefas como arrays de objetos para facilitar a leitura e atualização assíncrona do `localStorage` via `JSON.stringify` e `JSON.parse`.
3. **Refatoração Visual:** Controle de *max-height* em elementos flutuantes para não quebrar a simetria do layout quando interações dinâmicas ocorrem na tela.

---

## 🚀 Como executar o projeto localmente

1. Clone este repositório no seu terminal:
```bash
git clone [https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git)


