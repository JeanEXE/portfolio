import * as React from "react"
import { useRef } from "react"
import { useTranslation } from "react-i18next"
import { IProjectPage } from "../../types/Types"
import ProjectPage from "../../components/ProjectPage"
import gingo from "../../assets/img/g_business.png"
import ging1 from "../../assets/GingoBusiness/gingo1.jfif"
import ging2 from "../../assets/GingoBusiness/gingo2.jfif"
import ging3 from "../../assets/GingoBusiness/gingo3.jfif"
import ging4 from "../../assets/GingoBusiness/gingo4.jfif"
import ging5 from "../../assets/GingoBusiness/gingo5.jfif"
import ging6 from "../../assets/GingoBusiness/gingo6.jfif"
import ging7 from "../../assets/GingoBusiness/gingo7.jfif"
import ging8 from "../../assets/GingoBusiness/gingo8.jfif"
import ging9 from "../../assets/GingoBusiness/gingo9.jfif"
import ging10 from "../../assets/GingoBusiness/gingo10.jfif"
import ging11 from "../../assets/GingoBusiness/gingo11.jfif"
import ging12 from "../../assets/GingoBusiness/gingo12.jfif"
import ging13 from "../../assets/GingoBusiness/gingo13.jfif"
import ging14 from "../../assets/GingoBusiness/gingo14.jfif"
import ging15 from "../../assets/GingoBusiness/gingo15.jfif"

const GingoBusiness = () => {
    const { t } = useTranslation()

    const props = useRef<IProjectPage>({
        name: "Gingo Business",
        logo: gingo,
        tags: ["React Native", "Node.js"],
        images: [ging1, ging2, ging3, ging4, ging5, ging6, ging7, ging8, ging9, ging10, ging11, ging12, ging13, ging14, ging15],
        description: t("prj2.description")
    }).current

    return <ProjectPage {...props} />
}

export default GingoBusiness
