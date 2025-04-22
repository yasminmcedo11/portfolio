"use client"

import useProjeto from "@/stores/useProjeto"
import ProjectButtons from "../Buttons/ProjectButtons"
import ShowMoreButton from "../Buttons/ShowMoreButton"
import CardProjeto from "../CardProjeto"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"


export default function Projetos() {
    const { projetos, getProjetos, filterByTecnology } = useProjeto()
    const [tecnology, setTecnology] = useState<string>("Machine learning")
    const [isActive, setIsActive] = useState<string>("Machine learning")
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