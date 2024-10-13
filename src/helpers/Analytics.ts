import ReactGA from "react-ga4"

export const insertEvent = (action: string) => {
    ReactGA.event({
        category: "User",
        action: action
    })
}
