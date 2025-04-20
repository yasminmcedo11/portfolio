import ProjectButtons from "../Buttons/ProjectButtons"
import ShowMoreButton from "../Buttons/ShowMoreButton"
import CardProjeto from "../CardProjeto"
import styles from "./styles.module.css"

export default function Projetos() {
    return (
        <section className={styles.section}>
            <div className={styles.titulo}>
                <h2>Projetos</h2>
                <h3>Um pouco do meu trabalho</h3>
            </div>
            <div className={styles.buttons}>
                <ProjectButtons text="Machine learning"/>
                <ProjectButtons text="Sql"/>
                <ProjectButtons text="Power BI"/>
                <ProjectButtons text="Python"/>
                <ProjectButtons text="TypeScript"/>
            </div>
            <div className={styles.cards}>
                <CardProjeto/>
                <CardProjeto/>
                <CardProjeto/>
                <CardProjeto/>
                <CardProjeto/>
                <CardProjeto/>
            </div>
            <ShowMoreButton/>
        </section>
    )
}