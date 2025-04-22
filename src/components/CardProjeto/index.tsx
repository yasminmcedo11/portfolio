import Projeto from "@/types/Projeto"
import styles from "./styles.module.css"

export default function CardProjeto(props: Projeto) {
    return (
        <>
            <div className={styles.container}>
                <img src={props.photo} alt="Imagem do Projeto"/>
                <div>
                    <h2>{props.title}</h2>
                    <div className={styles.info}>
                        <p>{props.tecnology}</p>
                        <img src="sendButton.png" alt="Botao de Enviar"/>
                    </div>
                </div>
            </div>
        </>
    )
}