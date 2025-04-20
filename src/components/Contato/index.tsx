import Forms from "../Forms"
import styles from "./styles.module.css"

export default function Contato() {
    return (
        <section className={styles.section}>
            <h2>Vamos trabalhar juntos?</h2>
            <div>
                <div className={styles.container}>
                    <div className={styles.titulo}>
                        <h3>Entre em Contato</h3>
                        <img src="chatIcon.png" alt="Icon do Mensagem"/>
                    </div>
                    <div className={styles.redesContainer}>
                        <div className={styles.contato}>
                            <h3>Contato</h3>
                            <div>
                                <img src="gmailIcon.png" alt="Icon do Gmail"/>
                                <p>yasminmacedo_11@outlook.com</p> 
                            </div>
                        </div>
                        <div className={styles.redes}>
                            <h3>Redes Sociais</h3>
                            <div>
                                <a href="#" target="_blank"> 
                                    <img src="facebookIcon.png" alt="Icon do Facebook"/>
                                </a>
                                <a href="https://www.instagram.com/yasminmcedo_/" target="_blank"> 
                                    <img src="instaIcon.png" alt="Icon do Instagram"/>
                                </a>
                                <a href="https://github.com/yasminmcedo11" target="_blank">
                                    <img src="githubIcon.png" alt="Icon do GitHub"/>
                                </a>
                                <a href="https://www.linkedin.com/in/yasmin-macedo-3ab01625a/" target="_blank">
                                    <img src="linkedinIcon.png" alt="Icon do Linkedin"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Forms/>
                </div>
            </div>
        </section>
    )
}