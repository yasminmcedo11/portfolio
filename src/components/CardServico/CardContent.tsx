import styles from "./Card.module.css"

interface CardContentProps {
    title: string
    text: string
    archiveName: string
}

export default function CardContent(props: CardContentProps) {
    const title = props.title
    const text = props.text
    const icon = props.archiveName

    return (
        <div className={styles.info}>
            <div>
                <img src={icon} alt="Icon de Descrição"/>
            </div>
            <h2>
                {title}
            </h2>
            <p className={styles.description}>
                {text}
            </p>
        </div>
    )
}