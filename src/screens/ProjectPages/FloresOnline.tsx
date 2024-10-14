import * as React from "react"
import { useRef } from "react"
import { useTranslation } from "react-i18next"
import { IProjectPage } from "../../types/Types"
import ProjectPage from "../../components/ProjectPage"
import floresLogo from "../../assets/FloresOnline/floresLogo.png"
import fol1 from "../../assets/FloresOnline/fol1.jpeg"
import fol2 from "../../assets/FloresOnline/fol2.jpeg"
import fol3 from "../../assets/FloresOnline/fol3.jpg"
import fol4 from "../../assets/FloresOnline/fol4.jpeg"
import fol5 from "../../assets/FloresOnline/fol5.jpeg"
import fol6 from "../../assets/FloresOnline/fol6.jpeg"
import fol7 from "../../assets/FloresOnline/fol7.jpeg"
import fol9 from "../../assets/FloresOnline/fol9.jpeg"
import fol10 from "../../assets/FloresOnline/fol10.jpeg"
import fol11 from "../../assets/FloresOnline/fol11.jpeg"
import fol12 from "../../assets/FloresOnline/fol12.jpeg"
import fol13 from "../../assets/FloresOnline/fol13.jpeg"
import fol14 from "../../assets/FloresOnline/fol14.jpeg"
import fol15 from "../../assets/FloresOnline/fol15.jpg"
import fol16 from "../../assets/FloresOnline/fol16.jpg"
import fol17 from "../../assets/FloresOnline/fol17.jpeg"
import fol19 from "../../assets/FloresOnline/fol19.jpeg"
import fol20 from "../../assets/FloresOnline/fol20.jpeg"
import fol21 from "../../assets/FloresOnline/fol21.jpeg"
import fol22 from "../../assets/FloresOnline/fol22.jpg"
import fol23 from "../../assets/FloresOnline/fol23.jpg"

const IsabelaFlores = () => {
    const { t } = useTranslation()

    const props = useRef<IProjectPage>({
        name: "Flores Online",
        logo: floresLogo,
        tags: ["React Native", "TypeScript"],
        images: [
            fol1,
            fol2,
            fol3,
            fol4,
            fol5,
            fol6,
            fol7,
            fol9,
            fol10,
            fol11,
            fol12,
            fol13,
            fol14,
            fol15,
            fol16,
            fol17,
            fol19,
            fol20,
            fol21,
            fol22,
            fol23
        ],
        description: t("prj4.description"),
        challenge: t("prj4.challenge"),
        learned: t("prj4.learned")
    }).current

    return <ProjectPage {...props} />
}

export default IsabelaFlores
