# mars-photos
 
PROJETO ALÉM DE MARTE - FRONT-END

1. Visão Geral

    O projeto Além de Marte é um sistema que mostra as fotos recentes de Marte em que o usuário pode dar um like e visualizar a quantidade de like das mesmas. Este projeto tem o intuito de mostrar minhas habilidades em projetos Full Stack (Front-end e Back-end), e nesse repositório contém a parte Front-end.

2. Parte Técnica

    O Front-end foi realizado em React JS com JavaScript e TypeScript além do HTML e CSS. Na configuração foi utilizado a biblioteca “Eslint” com o padrão standard para a padronização de código para o projeto.

    Foi adicionado duas bibliotecas para o sistema, o primeiro foi o “react-router-dom” utilizado para fazer as rotas do sistema seguindo o padrão SPA (Single Page Application). E o segundo foi a biblioteca "Axios" para conectar o Front-end com o Backend.

3. Páginas e Funcionalidades

    O projeto consiste de três páginas, a primeira é “Login” em que o usuário fornece um nome e clica na opção de “entrar” para o sistema armazena-lo e mostrar a página inicial “Dashboard”. Essa tela contém imagens de Marte contidos em “cards” distribuídos em grade, além disso foi criado um Header que contém o nome do usuário e um botão de ação “Sair” para o usuário retirar o nome armazenado e voltar para a tela de “Login”.

    E por último é a tela de “Photo” que é acessada quando o usuário clica em algum card. Nessa página é mostrado a identificação da imagem, logo abaixo a foto de Marte e depois o botão de like e o número de likes. O like é a opção em que o usuário dá um like ou retira seu like da foto, e ao lado é mostrado automaticamente o número de likes sendo alterado pelo usuário. Além disso, é mostrado o Header com uma opção de retorno para que o usuário possa voltar para tela anterior.

4. Extras

    Para acessar esse projeto entre pelo link abaixo,

    https://alem-de-marte-eduardoarad.netlify.app

    ou baixar este mesmo repositório e fazer seguintes comandos:

    npm install , se quiser utilizar o npm ou 
    yarn , se quiser utilizar o yarn,

    e assim que terminar de baixar as bibliotecas utilize o comando:

    npm start  ou  yarn start

    E por fim, para acessar o repositório do Back-end do projeto entre no link abaixo.

    https://github.com/EduardoAraD/Backend-mars-photos
