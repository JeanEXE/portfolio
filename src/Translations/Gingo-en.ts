const DESC_PROJETO = `Gingo is a real-time delivery and chat application, where users can chat at any time with establishments or with each other.
    The app was developed in React Native, the backend of the marketplace in Magento(PHP) and the chat in Node.js. I worked on this project from its beginning until its publication in stores (Android/iOS).
    I worked on the development of the marketplace's screens and functionalities on the frontend, from the registration/login to the checkout, but my main focus was on the development of the chat, where I worked on the backend (Node.js) using express and Socket.io and across the frontend (React Native).
`

const DESAFIO = `My biggest challenge was with the construction of the chat, both in the back and in the frontend, due to its offline first construction in the frontend and its system of ensuring that no messages are lost due to internet oscillation.
    On the backend, we use Socket.io to perform sending and receiving in real time, with a pending system saved in MongoDB.
    In the app we use the SQLite database to save messages locally and a p2p encryption system using RSA and AES.
`

const APRENDIZADO = `With this project I learned to use express and socket on the backend with Node.
    I learned how the entire lifecycle of React Native works, its componentization in both a class component and a function component.
    After having problems with performance, I tried to better understand how react's architecture and state management works. With that I learned to manage states in a more controlled way to avoid memory leaks, and to use React MEMO to avoid unnecessary rendering.
-Redux
-Hooks
-CI/CD using codepush    
`

const TRANSLATION = {
    "prj1.description": DESC_PROJETO,
    "prj1.challenge": DESAFIO,
    "prj1.learned": APRENDIZADO,
    "prj1.feature1.description": `I participated in the development of the entire push mechanism, from the development on the node server where the sending is made to the receiving part of the application, on Android Firebase was used and on iOS, APNS was used.
    The Receiving System in the iOS application was a very challenging part to do, as there was a need to perform functions of the application while it is closed, such as decrypting the message that arrived via notification.
    It was at that moment that I needed to learn to develop in Swift, creating functions to insert/delete data in SQLite, REST requests, encryption/decryption, etc...
On android these functions were developed in javascript.
`,
    "prj1.feature2.description": `I developed the image preview component in React Native, and the entire upload/download process using Socket.io, Amazon s3 and SQLite.`,
    "prj1.feature3.description": `I developed the audio recording and playback component in React Native using "react-native-audio-recorder-player", and the entire upload/download process using Socket.io, Amazon s3 and SQLite.`,
    "prj1.feature4.description": `I developed the video viewing component in React Native using "react-native-create-thumbnail" and "react-native-file-viewer", and the entire upload/download process using Socket.io, Amazon s3 and SQLite.`,
    "prj1.feature5.description": `I developed the file upload component in React Native using "react-native-file-viewer", and the entire upload/download process using Socket.io, Amazon s3 and SQLite.`
}

export default TRANSLATION
