"use client"

import useProjeto from "@/stores/useProjeto"
import ProjectButtons from "../Buttons/ProjectButtons"
import ShowMoreButton from "../Buttons/ShowMoreButton"
import CardProjeto from "../CardProjeto"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"

type Tecnologia = "Machine learning" | "Sql" | "Power BI" | "TypeScript" | "TypeScript" | "Python"

export default function Projetos() {
    const { projetos, getProjetos, filterByTecnology } = useProjeto()
    const [tecnology, setTecnology] = useState<Tecnologia | string>("Machine learning")
    const [isActive, setIsActive] = useState<string>("Machine learning")

    useEffect(() => {
        getProjetos()
    }, [])


    useEffect(() => {
        if (tecnology) {
          filterByTecnology(tecnology)
        }
    }, [tecnology])

    function handleClick(tech: Tecnologia | string) {
        setTecnology(tech)
        setIsActive(tech)
    }


    return (
        <section className={styles.section}>
            <div className={styles.titulo}>
                <h2>Projetos</h2>
                <h3>Um pouco do meu trabalho</h3>
            </div>
            <div className={styles.buttons}>
                <div> 
                    <ProjectButtons 
                        text="Machine learning" 
                        selectTech={handleClick} 
                        onActive={isActive === "Machine learning"}
                    />
                    <ProjectButtons 
                        text="Sql" 
                        selectTech={handleClick} 
                        onActive={isActive === "Sql"}
                    />
                    <ProjectButtons 
                        text="React" 
                        selectTech={handleClick} 
                        onActive={isActive === "React"}
                    />
                </div>
                <div>
                    <ProjectButtons 
                        text="Excel" 
                        selectTech={handleClick} 
                        onActive={isActive === "Excel"}
                    />
                    <ProjectButtons 
                        text="Next" 
                        selectTech={handleClick} 
                        onActive={isActive === "Next"}
                    />
                </div>
            </div>
            <div className={styles.cards}>
                {projetos.map((projeto, index) => (
                    <CardProjeto 
                        key={index}
                        id={projeto.id} 
                        title={projeto.title}
                        tecnology={projeto.tecnology}
                        photo={projeto.photo} />
                ))}
            </div>
            <ShowMoreButton/>
        </section>
    )
}