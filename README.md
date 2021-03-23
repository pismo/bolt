<div align='center'>
  <img
    src='https://raw.githubusercontent.com/pismo/bolt/develop/boltLogo.svg?sanitize=true'
    alt='Bolt'
    width='300'
  />
</div>

## Bolt é um conjunto de estilos e componentes para aplicações front-end que faz parte do design system da Pismo.
<br/><br/>
# Instalação

`npm install @pismo/bolt`

# Uso

```typescript
import '@pismo/bolt/dist/css/bolt-css.css'
import {Sidebar} from '@pismo/bolt'
```

> Acesse a documentação para mais detalhes da utilização de cada componente

<br/>

# Desenvolvimento

Após clonar o projeto, crie uma branch à partir da master e faça checkout.

Após certificar que está na branch de trabalho execute o comando a seguir para baixar as dependencias do projeto:

`yarn`

O componentes estão separados por pastas dentro da pasta **src**. Cada pasta de componente deve conter: ou um arquivo **.css**, ou um arquivo **.ts**, ou ambos e um arquivo **.mdx** para a documentação.

O processo de desenvolvimento é feito sobre a documentação com **docz**. Para executar a documentação em modo de desenvolvimento rode o comando no terminal: 

`yarn docz:dev`

Para iniciar o desenvolvimento, vamos rodar o build do css e do typescript em modo watch. Para isso execute o comando a seguir em outro terminal:

`yarn dev`

<br/>

# Documentação

Após a conclusão do desenvolvimento, o componente deve ser totalmente documentado. A documentação é feita utilizando mdx com base em React.

<br/>

# Testes

Os testes são no formato **e2e**, e é executado em cima do **docz** e **cypress**. Para rodar um teste, monte o componente no formato mdx na pasta *\_\_test\_\_*. Escreva o teste na pasta *cypress/integration*.
Para executar em modo de desenvolvimento rode o comando em um terminal:

`yarn docz:test`

Em outro terminal rode o comando:

`yarn cy:open`

<br/>

# Commit

Para criar um commit execute o comando:

`git commit`

Esse comando vai:
- buildar o projeto
- formatar todos os arquivos
- adicionar todos os arquivos adicionais ao stage
- rodar os testes

Se os testes estiverem passando, em seguida será apresentado um menu para guiar no conventional commit.

<br/>

# Release

O release deve ser feito na branch **master** após a aprovação da PR.
Para gerar o release rode o comando:

`yarn release`

Este comando vai mostrar um menu com opções para subir a versão do projeto, após a escolha serão executadas as tarefas a seguir de forma automatizada:

- sobe a versão no package.json
- cria o changelog de forma automatizada
- cria o commit
- cria a tag da versão

> Obs.: o push deve ser feito de forma manual

<br/>

# Publish

Após usbir a tag, deve ser criado a release no github e a plublicação no npm.