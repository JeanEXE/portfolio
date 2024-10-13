const PROJECT_DESC = `Flores Online is a marketplace app for purchasing flowers and gifts through partners. Users can shop via the app, select a specific date and time for delivery, and also review their orders directly within the app. The app also provides a page where partners can showcase and sell their own products. It was developed using React Native and TypeScript and is available for both Android and iOS.
    I was responsible for technical decisions, working on the frontend from the beginning of the project through to its release in the app stores, and maintaining the CI/CD pipeline using AppCenter (CodePush).`

const CHALLENGE = `My biggest challenge was developing the product filtering feature due to the options/levels of filtering the screen provides to the user.`

const LEARNING = `Through this project, I learned to implement react-forms to facilitate the application and maintenance of multiple inputs on a single screen.
I replaced the use of AsyncStorage for caching with MMKV, which has much faster read speeds and is synchronous, unlike AsyncStorage.
I optimized the use of Redux by adopting the new structure of Redux Toolkit, making implementation and maintenance easier.
I improved my TypeScript skills by using it in 100% of the frontend.`

const TRANSLATION = {
    "prj4.description": PROJECT_DESC,
    "prj4.challenge": CHALLENGE,
    "prj4.learned": LEARNING
}

export default TRANSLATION
