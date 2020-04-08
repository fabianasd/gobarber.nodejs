1 Criar o arquivo package.json:
```
yarn init
```

2 Adicionar a dependência do express
```
yarn add express
```

3 Iniciar o arquivo que instancia o servidor
```
node src/server.js
```

4 Utilizar a sintaxe import:
```
yarn add sucrase nodemon -D
```

5 Permitir a substituição da palavra 'const' para 'import'
```
yarn sucrase-node src/app.js
```

6 No arquivo package.json acrescentar:
```
"scripts": {
   "dev": "nodemon src/server.js",
 },

```

7 Criar um arquivo "nodemon.json" e arrumar o código abaixo:
```
{
 "execMap": {
   "js": "node -r sucrase/register"
 }
}
```

8 No arquivo package.json acrescentar em scripts:
```
"dev:debug": "nodemon --inspect src/server.js"
```

9 Rodar no terminal:
```
yarn dev:debug
```

10 Na aba de debug, abre o add configuration (create launch.json) e edite:
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

11 Instalar o docker pelo site e fazer a instalacao conforme sistema usado.
```
https://docs.docker.com/install/)
```

12 Verificar a versão do docker
```
docker -v
```

13 Verificar os comandos disponíveis no docker
```
docker help
```

14 Instalar o Postgres pelo site abaixo e fazer a instalacao conforme sistema usado.
```
https://hub.docker.com/_/postgres
```

15 Configurar os POSTGRES
```
docker run --name database -e POSTGRES_PASSWORD=xxxxxx -p 0000:0000 -d postgres
```

16 verificar os containers que estão executando
```
docker ps
```

17 Parar as máquinas que estão ativas
```
docker stop ('names' que deseja parar). EX.: docker stop database
```

18 Instalar o Postbird pelo link abaixo e fazer a instalação conforme sistema usado. Depois abrir o Postbird e faz a conexão.
```
https://www.electronjs.org/apps/postbird
```

19 Verificar todos os containers que estão na máquina mesmo aqueles que não estão rodando
```
docker ps -a
```

20 Reiniciar um container:
```
docker start ('names' que deseja reiniciar). EX.: docker start database
```

21 Se der algum erro, verificar o container através do comando:
```
docker logs ('names' que deseja reiniciar). EX.: docker logs database
```

22 Adicionar o ESLINT: configura padrão de programação, ou seja dependência de desenvolvimento (devdependencies, depois de rodar o comando
verificar se ele está nessa classe no arquivo package.json) (antes instale o eslint na opção de extensões do vscode)
```
yarn add eslint
```

23 Iniciar o arquivo de configuração
```
yarn eslint --init
```

24 Para configurar o eslint
```
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Does your project use TypeScript? No
? Where does your code run? Node
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in? JavaScript
```

25 Deletar a pasta gerada (package-lock.json) e executar:
```
yarn
```

26 Abrir os arquivos de configuração (ctrl+P) (settings.js) e adicionar:
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

26 No arquivo eslintrc.js, adicionar:
```
 rules: {
   "prettier/prettier": "error", / quando achar um erro retornar uma mensagem
   "class-methods-use-this":"off", / a palavra this nao sera obrigatorio
   "no-param-reassign": "off", / permite que receba um parâmetro e faça alteração
   "camelcase": "off", /desabilita a função que fala que tem que escrever nomeVariavel e permite que seja nome_variavel
   "no-unused-vars": ["error", {"argsIgnorePattern": "next" }] / ignorar quando uma variável que não esteja sendo usada ( ex.: next)
 },
```

27 Adicionar o prettier para deixar o código configurado (mais bonito)
```
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

28 Acrescentar no arquivo eslintrc.js:
```
extends: [ 'airbnb-base', 'prettier' ], / somente a palavra 'prettier' e transforma para array
plugins: [ 'prettier' ],
```

29 Criar um arquivo .prettierrc (escolhe a linguagem JSON), e escrever:
```
{
 "singleQuote": true, / vai permitir o uso de aspas simples
 "trailingComma": "es5" / definindo as vírgulas como es5
}
```

30 Atualizar automaticamente os arquivos com erro ( a palavra src se refere a pasta que quero corrigir)
```
yarn eslint --fix src --ext .js
```

31 Caso tenha outros desenvolvedores e estes utilizem outras ferramentas de desenvolvimento adicione a extensão 'EditorConfig for VS Code`,
volte ao explorer (menu de pastas) e clique com o botão direito do mouse e add 'Generate .editorconfig', e altere as linhas:
```
trim_trailing_whitespace = true / antes estava false
insert_final_newline = true / antes estava false
```

32 Adicionar o Sequelize (facilita a criação de migrations)
```
yarn add sequelize
```
```
yarn add sequelize-cli -D
```

33 Criar um arquivo .sequelizerc (escolhe a linguagem JAVASCRITP) e escrever:
```
const { resolve } = require('path');

module.exports = {
 config: resolve(__dirname, 'src', 'config', 'database.js'),
 'models-path': resolve(__dirname, 'src', 'app', 'models'),
 'migrations-path': resolve(__dirname, 'src', 'database', 'migrations'),
 'seeders-path': resolve(__dirname, 'src', 'database', 'seeds'),
}
```

34 Dependência para usar o postgres
```
yarn add pg pg-hstore
```

35 Criar o arquivo dentro da pasta migration do projeto
```
yarn sequelize migration:create --name=create-users
```

36 Rodar a migration (pega o arquivo e cria dentro da base de dados)
```
yarn sequelize db:migrate
```

37 Desfaz a última migration
```
yarn sequelize db:migrate:undo
```

38 Desfaz todas as migrations
```
yarn sequelize db:migrate:undo:all
```

39 Adicionar a dependência de criptografia
```
yarn add bcryptjs
```

40 Extensão que gera o token JWT
```
yarn add jsonwebtoken
```

41 Biblioteca de validação
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

44 Biblioteca para lidar com 'multi part form data' e formato json
```
yarn add multer
```

45 Biblioteca de data
```
yarn add date-fns@next
```

46 Subir um container rodando a imagem do mongodb
```
docker run --name mongobarber -p 27017:27017 -d -t mongo
```

47 Banco de Dados para o mongodb
```
yarn add mongoose
```

48 Baixar o mongodb
```
https://www.mongodb.com/products/compass
```

49 Biblioteca utilizada para envio de email
```
yarn add nodemailer
```

50 Link para acessar e saber mais sobre handlebars
```
https://handlebarsjs.com/
```

51 Extensão que permite utilizar um template engine
```
yarn add express-handlebars nodemailer-express-handlebars
```

52 Criar o Redis
```
docker run --name redisbarber -p 6379:6379 -d -t redis:alpine
```

53 Instalar o bee-queue (ferramenta de fila dentro do node)
```
yarn add bee-queue
```
54 Para rodar a fila
```
node src/queue.js
```
```
no arquivo package.json: "queue": "nodemon src/queue.js"
```
```
yarn queue
```


