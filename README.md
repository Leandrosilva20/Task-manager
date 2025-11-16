Sistema Simplificado de Gerenciamento de Tarefas

Autor: Leandro Bragança da Silva
Tecnologias: Node.js • Express • Programação Assíncrona

Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de praticar e demonstrar conhecimentos essenciais de backend utilizando Node.js, Express e os principais conceitos de programação assíncrona (callbacks, Promises e async/await).

A ideia aqui é simples e poderosa: construir uma API capaz de criar, listar, atualizar e deletar tarefas, tudo de forma clara, organizada e acessível — ideal para quem está começando no desenvolvimento backend, mas já quer aplicar boas práticas.

Esse trabalho representa um passo importante no aprendizado do desenvolvimento de APIs e marca o início de uma jornada mais madura no mundo do Node.js.

Objetivo da Aplicação

Criar um sistema básico que permita:

Criar uma nova tarefa

Listar todas as tarefas

Atualizar uma tarefa existente

Excluir uma tarefa

As tarefas são armazenadas em memória, seguindo a proposta do projeto: foco no código, na lógica e na estrutura do backend.

Conceitos Praticados

Estruturação de uma aplicação Express

Criação de rotas REST

Uso de métodos HTTP (GET, POST, PUT, DELETE)

Manipulação de dados em memória

Aplicação real de programação assíncrona

Organização de controllers e lógica de negócio

Tratamento simples de erros

Como Executar o Projeto

1️⃣ Instale o Node.js

Baixe em: https://nodejs.org/

2️⃣ Clone ou baixe o repositório
git clone https://github.com/Leandrosilva20/sistema-gerenciamento-tarefas

3️⃣ Instale as dependências
npm install

4️Inicie o servidor
npm start


O servidor iniciará em:

(http://localhost:3000/tasks)

Rotas Disponíveis
1. Listar todas as tarefas
GET /tasks

2. Criar uma nova tarefa
POST /tasks


Exemplo de JSON:

{
  "title": "Enviar relatório",
  "status": "pendente"
}

3. Atualizar uma tarefa existente
PUT /tasks/:id


Exemplo de JSON:

{
  "title": "Relatório enviado",
  "status": "concluída"
}

4. Deletar uma tarefa
DELETE /tasks/:id

Considerações Finais

Este projeto foi construído com dedicação para consolidar conhecimentos e demonstrar domínio inicial sobre o desenvolvimento backend. Cada rota, cada função e cada trecho de código contribuiu para um aprendizado prático e real — indo muito além da teoria.

Agradeço a todos que acompanham essa caminhada e, principalmente, aos professores que incentivam a explorar, errar, corrigir e evoluir.

“Aprender a programar é aprender a pensar. Cada pequeno projeto é uma porta aberta para um mundo maior.”
