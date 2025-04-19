import ContactButton from "../Buttons/ContactButtons";
import styles from "./styles.module.css"


export default function Home() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <img src="fotoPerfil.png" alt="Foto de Perfil"/>
                <h2>Yasmin Macedo</h2>
            </div>
            <div className={styles.container}>
                <h3>Desenvolvedora Frontend</h3>
                <p>
                    As a passionate data scientist, with expertise in machine learning, AI, and data analytics, I thrive 
                    on the challenges of exploring complex data landscapes and uncovering meaningful patterns that drive 
                    innovation
                </p>
            </div>
            <ContactButton className={styles.button}/>
        </section>
    )
}