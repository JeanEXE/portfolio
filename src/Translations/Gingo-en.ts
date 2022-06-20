const DESC_PROJETO = `Gingo é um aplicativo de delivery e chat em tempo real, onde os usuários podem conversar a qualquer momento com estabelecimentos ou entre sí.
     O app foi desenvolvido em React Native, o backend do marketplace em Magento(PHP) e do chat em Node.js. Trabalhei neste projeto desde seu início até a publicação nas stores (Android/iOS).
     Atuei no desenvolvimento das telas e funcionalidades do marketplace no frontend, desde o cadastro/login até a finalização de um pedido, mas meu maior foco foi no desenvolvimento do chat, onde atuei no backend (Node.js) utilizando express e Socket.io e em todo o frontend (React Native).
`

const DESAFIO = `Meu maior desafio foi com a construção do chat, tanto no back quanto no frontend, devido a sua construção offline first no frontend e seu sistema de garantir que nenhuma mensagem seja perdida devido a oscilação de internet.
     No backend utilizamos Socket.io pra executar envio e recebimento em tempo real, com sistema de pendencias salvos no MongoDB. 
     No app utilizamos o banco de dados SQLite pra salvar as mensagens localmente e um sistema de criptografia p2p utilizando RSA e AES.
`

const APRENDIZADO = `Com esse projeto aprendi a usar express e socket no backend com Node. 
    Aprendi como funciona todo o ciclo de vida do React Native, sua componentização tanto em componente de classe quanto em componente de função.
    Após ter problemas com performance, procurei entender melhor como a arquitetura e gerenciamento de estados do react funciona. Com isso aprendi a gerenciar estados de forma mais controlada pra evitar vazamentos de memória, e a utilizar o React MEMO para evitar renderizações desnecessárias.
-Redux
-Hooks
-CI/CD utilizando codepush    
`

const FEATURE_1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum
t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum`

const FEATURE_2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum
t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum`

const TRANSLATION = {
    'prj1.description': DESC_PROJETO,
    'prj1.challenge': DESAFIO,
    'prj1.learned': APRENDIZADO,
    'prj1.feature1.description': FEATURE_1,
    'prj1.feature2.description': FEATURE_2
}

export default TRANSLATION
