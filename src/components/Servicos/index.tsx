import { CardServico } from "../CardServico"
import styles from "./styles.module.css"

export default function Servicos() {
    return (
        <section className={styles.section}>
            <div className={styles.titulo}>
                <h2>O que eu faço</h2>
                <h3>Meus serviços</h3>
            </div>
            <div className={styles.container}>
                <div>
                    <CardServico.Root>
                        <CardServico.Content 
                            title=" Data Analytics & Visualization" 
                            archiveName="iconIdeia.png"
                            text="From data inception to actionable insights, I design compelling 
                            analytics and visualization solutions that illuminate trends, empower decision-making, and 
                            drive your business forward."
                        />
                    </CardServico.Root>
                    <CardServico.Root>
                        <CardServico.Content 
                            title=" Data Analytics & Visualization" 
                            archiveName="iconIdeia.png"
                            text="From data inception to actionable insights, I design compelling 
                            analytics and visualization solutions that illuminate trends, empower decision-making, and 
                            drive your business forward."
                            />
                    </CardServico.Root>
                    <CardServico.Root>
                        <CardServico.Content 
                            title=" Data Analytics & Visualization" 
                            archiveName="iconIdeia.png"
                            text="From data inception to actionable insights, I design compelling 
                            analytics and visualization solutions that illuminate trends, empower decision-making, and 
                            drive your business forward."
                        />
                    </CardServico.Root>
                </div>
                <div>
                    <CardServico.Root hasPhoto={true}>
                        <CardServico.Content 
                            title=" Data Analytics & Visualization" 
                            archiveName="iconRobo.png"
                            text="From data inception to actionable insights, I design compelling 
                            analytics and visualization solutions that illuminate trends, empower decision-making, and 
                            drive your business forward."
                        />
                        <CardServico.Photo photo="fotoPerfil.png"/>
                    </CardServico.Root>
                    <CardServico.Root>
                        <CardServico.Content 
                            title=" Data Analytics & Visualization" 
                            archiveName="iconRobo.png"
                            text="From data inception to actionable insights, I design compelling 
                            analytics and visualization solutions that illuminate trends, empower decision-making, and 
                            drive your business forward."
                        />
                    </CardServico.Root>
                </div>
            </div>
        </section>
    )
}