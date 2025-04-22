"use client"

import useProjeto from "@/stores/useProjeto"
import ProjectButtons from "../Buttons/ProjectButtons"
import ShowMoreButton from "../Buttons/ShowMoreButton"
import CardProjeto from "../CardProjeto"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"


export default function Projetos() {
    const { projetos, getProjetos, filterByTecnology } = useProjeto()
    const [tecnology, setTecnology] = useState<string>("React")
    const [isActive, setIsActive] = useState<string>("React")
    const [visibleProjects, setVisibleProjects] = useState<number>(6)

    useEffect(() => {
        getProjetos()
    }, [])


    useEffect(() => {
        if (tecnology) {
          filterByTecnology(tecnology)
          setVisibleProjects(6)
        }
    }, [tecnology])

    function handleClick(tech: string) {
        setTecnology(tech)
        setIsActive(tech)
        setVisibleProjects(6)
    }

    function handleShowMore() {
        setVisibleProjects(projetos.length)
    }

    return (
        <section className={styles.section} id="projetos">
            <div className={styles.titulo}>
                <h2>Projetos</h2>
                <h3>Um pouco do meu trabalho</h3>
            </div>
            <div className={styles.buttons}>
                <div> 
                    <ProjectButtons 
                        text="React" 
                        selectTech={handleClick} 
                        onActive={isActive === "React"}
                    />
                    <ProjectButtons 
                        text="CSS" 
                        selectTech={handleClick} 
                        onActive={isActive === "CSS"}
                    />
                    <ProjectButtons 
                        text="Next" 
                        selectTech={handleClick} 
                        onActive={isActive === "Next"}
                    />
                </div>
                <div>
                    <ProjectButtons 
                        text="Python" 
                        selectTech={handleClick} 
                        onActive={isActive === "Python"}
                    />
                    <ProjectButtons 
                        text="Power BI" 
                        selectTech={handleClick} 
                        onActive={isActive === "Power BI"}
                    />
                </div>
            </div>
            <div className={styles.cards}>
                {projetos.slice(0, visibleProjects).map((projeto, index) => (
                    <CardProjeto 
                        key={index}
                        id={projeto.id} 
                        title={projeto.title}
                        tecnology={projeto.tecnology}
                        photo={projeto.photo} />
                ))}
            </div>
            {visibleProjects < projetos.length && ( 
                <ShowMoreButton onClick={handleShowMore} />
            )}
        </section>
    )
}