# Boas vindas ao repositório do Futebol Clube!

<details>
<summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br />

  O `TFC` é um site informativo sobre partidas e classificações de futebol! ⚽️

  No time de desenvolvimento do `TFC`, seu *squad* ficou responsável por desenvolver uma API (utilizando o método `TDD`) e também integrar *- através do docker-compose -* as aplicações para que elas funcionem consumindo um banco de dados.

  Nesse projeto, você vai construir **um back-end dockerizado utilizando modelagem de dados através do Sequelize**. Seu desenvolvimento deve **respeitar regras de negócio** providas no projeto e **sua API deve ser capaz de ser consumida por um front-end já provido nesse projeto**.

  Para adicionar uma partida é necessário ter um _token_, portanto a pessoa deverá estar logada para fazer as alterações. Teremos um relacionamento entre as tabelas `teams` e `matches` para fazer as atualizações das partidas.

  O seu back-end deverá implementar regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

</details>

<details>
<summary><strong> Estrutura do projeto</strong></summary><br />

1️⃣ **Banco de dados:**
  - Será um container docker MySQL já configurado no docker-compose através de um serviço definido como `db`.

2️⃣ **Back-end:**
 - Será o ambiente que você realizará a maior parte das implementações exigidas.

3️⃣ **Front-end:**
  - O front já está concluído pela @Trybe, não é necessário realizar modificações no mesmo. A única exceção será seu Dockerfile que precisará ser configurado.


</details>

<details>
<summary><strong> 🔰 Fazendo o clone do projeto na sua máquina</strong></summary><br />

  1. Clone o repositório `Usar link SSH`

- Entre na pasta do repositório que você acabou de clonar:
  * `cd pasta-do-repositório`

  2. Instale as dependências [**Caso existam**]
  *`npm install`

  3. Crie uma branch a partir da branch `main`
 - Verifique se você está na branch `main`
  * Exemplo: `git branch`
- Se não estiver, mude para a branch `main`
  * Exemplo: `git checkout main`
- Agora crie uma branch à qual você vai submeter os `commits` do seu projeto

</details>

<details>
<summary><strong> ⚠️ Configurações mínimas para execução do projeto</strong></summary><br />

Na sua máquina você deve ter:

 - Sistema Operacional Distribuição Unix
 - Node versão 16
 - Docker
 - Docker-compose versão >=1.29.2

➡️ O `node` deve ter versão igual ou superior à `16.15.0 LTS`:

➡️ O`docker-compose` deve ter versão igual ou superior à`ˆ1.29.2`:

</details>

<details id='Criptografia-de-senhas'>
<summary><strong>🔐 Criptografia de senhas </strong></summary><br />

⚠️ A biblioteca utilizada para criptografar a senha no banco de dados é a `bcryptjs` [bcryptjs npm](https://www.npmjs.com/package/bcryptjs)⚠️

</details>

<details id='sequelize'>
  <summary><strong>🎲 Sequelize</strong></summary>
  <br/>

  Para o desenvolvimento, o time da Trybe disponibilizou um *Diagrama de Entidade-Relacionamento (DER)* para construir a modelagem do banco de dados.

</details>


<details id='testes-de-cobertura'>
  <summary><strong> Testes de cobertura </strong></summary><br/>

  A construção de testes de cobertura no back-end foi feita em *TypeScript*, utilizando `mocha`, `chai` e `sinon`, na pasta `app/backend/src/tests/`

</details>

</details>

# Sobre a Estrutura Desenvolvida

Esse projeto é composto de 4 seções principais:
1. Users e Login
2. Times
3. Partidas
4. Placar


</details>
