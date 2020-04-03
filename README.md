1 Cria o projeto no Visual Studio e no terminal executa o comando abaixo para cirar o arquivo package.json:
```
yarn init
```

2 Adicionar a dependencia do express
```
yarn add express
```

3 Iniciar o arquivo que instancia o servidor
```
node src/server.js
```

4 Para utilizar a sintaxe import:
```
yarn add sucrase nodemon -D
```

5 comando para executar apos as alteracoes de da palavra 'const' para 'import'
```
yarn sucrase-node src/app.js
```

6 No arquivo package.json acrescente:
```
 "scripts": {
    "dev": "nodemon src/server.js",
  },

```

7 cria um arquivo "nodemon.json" e arruma o codigo abaixo:
```
{
  "execMap": {
    "js": "node -r sucrase/register"
  }
}
```

8 No arquivo package.json acrescente em scripts:
```
"dev:debug": "nodemon --inspect src/server.js"
```

9 Roda no terminal:
```
yarn dev:debug
```

10 Vai na aba de debug, abre o add configuration (create launch.json) e edite:
```
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [

  {
      "type": "node",
      "request": "attach",
      "name": "Launch Program",
      "restart": true,
      "protocol": "inspector",
    }
  ]
}
```

11 instalar o docker: acesse o site (https://docs.docker.com/install/) e faca a instalacao conforme sistema usado.

12 verificar a versao do docker
```
docker -v
```

13 verificar os comandos disponiveis no docker
```
docker help
```
14 instalar o Postgres: acesse o site (https://hub.docker.com/_/postgres) e faca a instalacao conforme sistema usado.

15 configurando os POSTGRES
```
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

16 verificar o container que estao executando
```
docker ps
```
17 Parar as maquinas que estao ativas
```
docker stop ('names' que deseja parar). EX.: docker stop database
```

18 Instalar o PostBird: https://www.electronjs.org/apps/postbird e faca a instalacao conforme sistema usado. Depois abre o PostBird e faz a conexao.


19 verifica todos os containers que estao na maquina mesmo aqueles que nao estao rodando
```
docker ps -a
```

20 Reiniciar um container:
```
docker start ('names' que deseja reiniciar). EX.: docker start database
```

21 Se der algum erro, verifique o container atraves do comando:
```
docker logs ('names' que deseja reiniciar). EX.: docker logs database
```

22 Adicionar o ESLINT: configura padrao de programacao, ou seja dependencia de desevolvimento (devdependencies, depois de rodar o comando
verificar se ele esta nessa classe no arquivo package.json) (antes instale o eslint na opcao de extensoes do vscode)
```
yarn add eslint
```

23 Iniciar o arquivo de configuracao
```
yarn eslint --init
```

24 Seleciona conforme descrito abaixo:
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Does your project use TypeScript? No
? Where does your code run? Node
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in? JavaScript

25 deleta a pasta gerada (package-lock.json) e executa:
```
yarn
```

26 abra os arquivos de configuracao (ctrl+P) (settings.js) e adicione:
```
"[javascript]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },

    "[javascriptreact]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
```

26 no arquivo eslintrc.js, adicione:
```
  rules: {
    "prettier/prettier": "error", / quando achar um erro retornar uma mensagem
    "class-methods-use-this":"off", / a palavra this nao sera obrigatorio
    "no-param-reassign": "off", / permite que receba um parametro e faça alteraçao
    "camelcase": "off", /desabilita a funçao que fala que tem que escrever nomeVariavel e permite que seja nome_variavel
    "no-unused-vars": ["error", {"argsIgnorePattern": "next" }] / ignorar quando uma variavel que nao esteja sendo usada ( ex.: next)
  },
```
27 Adicionar o prettier para deixar o codigo configurado (mais bonito)
```
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

28 acrescenta no arquivo eslintrc.js:
```
extends: [ 'airbnb-base', 'prettier' ], / somente a palavra 'prettier' e trasnforma para array
plugins: [ 'prettier' ],
```

29 cria um arquivo .prettierrc (escolhe a liguagem JSON), e escreve:
```
{
  "singleQuote": true, / vai permitir o uso de aspas simples
  "trailingComma": "es5" / definindo as virgulas como es5
}
```
30 atualiza automaticamente os arquivos com erro ( a palavra src se refere a pasta que quero corrigir)
```
yarn eslint --fix src --ext .js
```

31 caso tenha outros desenvolvedores e estes utilizem outras ferramentas de desenvolvimento adicione a extensao 'EditorConfig for VS Code`,
volte ao explorer (menu de pastas) e clique com o botao direito do mouse e add 'Generate .editorconfig', e altere as linhas:
```
trim_trailing_whitespace = true / antes estava false
insert_final_newline = true / antes estava false
```

32 Adicionar o Sequelize (facilita a cricao de migrations)
```
yarn add sequelize
```
```
yarn add sequelize-cli -D
```

33 cria um arquivo .sequelizerc (escolhe a linguagem JAVASCRITP) e escreve:
```
const { resolve } = require('path');

module.exports = {
  config: resolve(__dirname, 'src', 'config', 'database.js'),
  'models-path': resolve(__dirname, 'src', 'app', 'models'),
  'migrations-path': resolve(__dirname, 'src', 'database', 'migrations'),
  'seeders-path': resolve(__dirname, 'src', 'database', 'seeds'),
}
```

34 Dependencia para usar o postgres
```
yarn add pg pg-hstore
```

```
35 Criar o arquivo dentro da pasta migration do projeto
```
yarn sequelize migration:create --name=create-users
```

36 Rodar a migration (pega o arquivo e cria dentro da base de dados)
```
yarn sequelize db:migrate
```

```
37 Desfaz a ultima migration
```
yarn sequelize db:migrate:undo
```

38 Desfaz todas as migration
```
yarn sequelize db:migrate:undo:all
```

39 Adiciona a dependencia de encriptografar
```
yarn add bcryptjs
```

40 extensao que gera o token JWT
```
 yarn add jsonwebtoken
```

41 biblioteca de validacao
```
yarn add yup
```

42 Povoar com o seed
```
yarn sequelize db:seed:all
```

43 Rodar o servidor
```
yarn dev
```

44 Biblioteca de data
```
yarn add date-fns@next
```

Resumo Geral
```
***Migrations: controle de versao para base de dados (cricao, alteracao ou remocao de tabelas e colunas).
***Seeds: arquivos que populam a base de dados para desenvolvimento.
***MVC: estrutura o sistema (pasta e arquivos);
        Model: manipula os dados contidos nas tabelas do banco
        Controller: regra de negocio, entrada de requicoes, rotas (index(){}: listagem de usuarios
                                                                    show(){}: exibir um unico usuario
                                                                    store(){}: cadastrar usuario
                                                                    update(){}: alterar usuario
                                                                    delete(){}: deletar usuario)
        View: é o retorno ao cliente

JWT (json web token):  metodologia (forma) de fazer autenticacao.
```

Ordem que os arquivos foram criados:
```
1 routes.js
2 server.js
3 app.js
4 database.js
5 migration => create user
6 User.js
7 index.js
8 UserController.js
9 SessionController.js
10 config => auth.js
11 middlewares => auth.js
12 multer.js
13 FileController.js
14 File.js
15 migration => create files
16 migration => add avatar field to users
17 migration => create appointmente
18 Appointmente.js
19 AppointmenteController.js

```

44 Biblioteca lidar com 'multi part form data' e formato json
```
yarn add multer
```

