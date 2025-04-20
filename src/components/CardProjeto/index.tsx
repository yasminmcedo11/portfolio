import styles from "./styles.module.css"

export default function CardProjeto() {
    return (
        <>
            <div className={styles.container}>
                <img src="imageExample.png" alt="Imagem do Projeto"/>
                <div>
                    <h2>Project Name/description</h2>
                    <div className={styles.info}>
                        <p>Technology used</p>
                        <img src="sendButton.png" alt="Botao de Enviar"/>
                    </div>
                </div>
            </div>
        </>
    )
}