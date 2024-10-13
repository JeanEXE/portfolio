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

const TRANSLATION = {
    "prj1.description": DESC_PROJETO,
    "prj1.challenge": DESAFIO,
    "prj1.learned": APRENDIZADO,
    "prj1.feature1.description": `Participei do desenvolvimento de todo o mecanismo de push, desde o desenvolvimendo no servidor node onde é efetuado o envio até a parte do recebimento no aplicativo, no Android foi utilizado o Firebase e no iOS utilizado o APNS.
    O Sistema de recebimento no aplicativo iOS foi uma parte bem desafiadora de ser feita, pois havia a necessidade de executar funções do aplicativo enquanto ele está fechado, como por exemplo, descriptografar a mensagem que chegou via notificação. 
    Foi nesse momento que precisei aprender a desenvolver em Swift, criando funções de inserir/deletar dados no SQLite, requisições REST, criptografia/descriptografia, etc...
No android essas funções foram desenvolvidas em javascript.
`,
    "prj1.feature2.description": `Desenvolvi o componente de visualização de imagem em React Native, e todo o processo de envio/download utilizando Socket.io, Amazon s3 e SQLite.`,
    "prj1.feature3.description": `Desenvolvi o componente de gravação e reprodução de áudio em React Native utilizando "react-native-audio-recorder-player", e todo o processo de envio/download utilizando Socket.io, Amazon s3 e SQLite.`,
    "prj1.feature4.description": `Desenvolvi o componente de visualização de vídeo em React Native utilizando "react-native-create-thumbnail" e "react-native-file-viewer", e todo o processo de envio/download utilizando Socket.io, Amazon s3 e SQLite.`,
    "prj1.feature5.description": `Desenvolvi o componente de envio de arquivos em React Native utilizando "react-native-file-viewer", e todo o processo de envio/download utilizando Socket.io, Amazon s3 e SQLite.`
}

export default TRANSLATION
