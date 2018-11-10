# POC | MVP: Aplicação em Electron de Identificador de Portas USB v.2: 

[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](https://github.com/glaucia86/poc-electron-serial-port-v2/blob/master/LICENSE.md)
[![Last version](https://img.shields.io/badge/version-v1.0.0-blue.svg?style=for-the-badge)](https://github.com/glaucia86/poc-electron-serial-port-v2/blob/master/CHANGELOG.md)
![Dependecies](https://david-dm.org/glaucia86/poc-electron-serial-port-v2.svg)
[![HitCount](http://hits.dwyl.io/glaucia86/poc-electron-serial-port-v2.svg)](http://hits.dwyl.io/glaucia86/poc-electron-serial-port-v2)



<br />

<p align="center">
  <img src="https://i.imgsafe.org/f5/f5d45ccbe7.jpeg"/>  
</p>

Desenvolvimento de uma aplicação POC em Electron & VueJs que permita o uso de serial port. Essa aplicação tem como objetivo final ser aplicado num ambiente Windows e ser usado em plataformas de Totem (auto atendimento).
A aplicação também precisa permitir listar as portas:

* USB;
* RS232;
* WebCam;
* Impressora;


## Recursos Utilizados no Desenvolvimento: :mega: 

Para realizar as demos dessa série, se faz necessário instalar os seguintes programas:

* Visual Studio Code - [DOWNLOAD AQUI](https://code.visualstudio.com/);
* Node.JS v.8.x - [DOWNLOAD AQUI](https://nodejs.org/en/);
* VueJs v. 3.x; - [DOWNLOAD AQUI](https://cli.vuejs.org/)
* Yarn - [DOWNLOAD AQUI](https://yarnpkg.com/pt-BR/);
* Electron v. 1.x - [DOWNLOAD AQUI](https://electronjs.org/);
* Uso da Biblioteca: [serial Port](https://www.npmjs.com/package/serialport);
* Uso da Biblioteca v.1.x: [node-usb](https://www.npmjs.com/package/node-usb);
* Uso da Biblioteca: [electron-packager](https://github.com/electron-userland/electron-packager);
* Uso da Biblioteca: [electron-builder](https://github.com/electron-userland/electron-builder);
* ESlint;
* ES5;
* Webpack;
* WebcamJS

## Executando Código Localmente: :bulb: 

Caso desejam testar a aplicação de maneira local bastam seguir os passos abaixo:

### Começando: :rocket:

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

### Pré-Requisitos

Antes de instalar as dependências no projeto, você precisa seguir os seguintes passos:

Passo: 1) **Node.Js**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)


Passo: 2) **Instalar Globalmente o Electron**: bastam digitar o comando abaixo:

```
> npm install -g add electron
```

Passo: 3) **Instalar Globalmente o electron-packager**: bastam digitar o comando abaixo:

```
> npm install -g electron-packager 
```

Passo: 5) **Instalar Globalmente o node-pre-gyp**: bastam digitar o comando abaixo: 

```
> npm install -g node-pre-gyp 
```

Passo: 6) **Instalar Globalmente o electron-builder**: bastam digitar o comando abaixo:

```
> npm install -g electron-builder 
```

Passo: 7) **Instalar Globalmente o electron-installer-debian**: bastam digitar o comando abaixo: (Usuários Linux)

```
> npm install -g electron-installer-debian 
```

Passo: 8) **Instalar Globalmente o node-gyp**: bastam digitar o comando abaixo:

```
> npm install -g node-gyp 
```

Passo: 8.1) Já para usuários Windows, para realizar a instalação do **node-gyp** se faz necessário seguir os passos abaixo:

 - **8.1.1)** Instalar o Python 2.x: [DOWNLOAD AQUI](https://www.python.org/downloads/)

- **8.1.2)** Instalar globalmente o node-gyp: [DOCUMENTAÇÃO PARA INSTALAÇÃO DE MANEIRA CORRETA AQUI](https://github.com/nodejs/node-gyp)

- **8.1.3)** Criar manualmente o arquivo **binding.gyp** dentro do diretório do node_modules do **AppData**, conforme o exemplo abaixo:

```
> C:\users\UserName\appdata\roaming\npm\node_modules\node-gyp
```

- **8.1.4)** Incluir no arquivo **binding.gyp** o seguinte bloco de código e salve:

```
{
    "targets": [{
    "target_name": "binding",
    "sources": [ "build/Release/binding.node" ]
    }]
}
```

- **8.1.5)** Feito isso, agora execute os seguintes comandos abaixo dentro do mesmo diretório do appData:

```
> node-gyp configure
```

```
> node-gyp configure --msvs_version=2015
```

```
> node-gyp build
```

Passo: 9) Instalar globalmente os pacotes abaixo:

```
> npm install -g webpack webpack-cli webpack-bundle-analyzer webpack-bundle-analyzer cross-env
```

Seguindo todos esses passos, vocês estará para prono para instalar as depedências do projeto na pasta do projeto! ;)


### Instalando as Dependências (via Windows):

Abre o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\..."
```

Depois, quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução: **(dentro do src)**

```
yarn install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas e definidas no arquivo package.json:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.


## Executando a Aplicação: :zap: 

Para a execução da aplicação se faz necessário ir até o **'src'** do projeto e executar o seguinte comando abaixo:

```
yarn run start
```

Ao executar o comando acima, apresentará a seguinte janela da aplicação no Electron:

<p align="center">
  <img src="https://i.imgsafe.org/f5/f5d45ccbe7.jpeg"/>  
</p>

É porque foi executado com sucesso! :smiley:

## Criando o Executável da Aplicação Electron em Diferentes Distros:


#### Linux:

Para distros Linux, bastam digitar o comando abaixo:

```
> yarn run package-linux
```

Criará uma pasta 'release-builds'. Após criado, digitar o comando abaixo: **o script abaixo deve ser executado via 'npm'**

```
> npm run create-debian-installer
```

E... vòilá! Bastam entrar na pasta **'package'** e encontrar a extensão .deb para fazer a instalação da aplicação no seu Linux! :smiley:

#### Windows:

Para distros Windows, bastam digitar o comando abaixo:

```
> build -w
```

#### MAC:

Para distros MAC, bastam digitar os comandos abaixo:

**Primeiro**: deve executar o comando abaixo para poder gerar o build & pacotes para o MAC

```
> build -m
```

## Desejam Propor Melhorias no Código? Façam Pull Request!!!  :triangular_flag_on_post:

Caso queiram que eu implemente algo no código, abram uma issue nesse repositório. Assim, todos poderão colaborar para o melhor desenvolvimento desse repositório. E sintam-se à vontade em fazer Pull Requests!!

Não esqueçam de dar uma :star: no repositório e claro: Apreciem sem moderação!! :heart: :heart: :heart:

<p align="center">
  <img src="https://i.imgsafe.org/e2/e2243b8f92.gif"/>  
</p>

**(documentação em desenvolvimento)**


