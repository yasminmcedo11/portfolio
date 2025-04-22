import ContactButton from "../Buttons/ContactButtons";
import styles from "./styles.module.css"


export default function Home() {
    return (
        <section className={styles.section} id="home">
            <div className={styles.container}>
                <img src="fotoPerfil.png" alt="Foto de Perfil"/>
                <h2>Yasmin Macedo</h2>
            </div>
            <div className={styles.container}>
                <h3>Desenvolvedora Frontend</h3>
                <p>
                    Sou uma desenvolvedora frontend dedicada a criar experiências digitais modernas, funcionais 
                    e intuitivas. Ao longo da minha trajetória, desenvolvi habilidades em tecnologias como 
                    CSS, React, Next.js e outras ferramentas essenciais do desenvolvimento web. Além disso, sou uma 
                    grande entusiasta da área de dados — gosto de explorar visualizações, insights e como a informação
                    pode contar histórias de forma inteligente.


                </p>
            </div>
            <ContactButton className={styles.button}/>
        </section>
    )
}