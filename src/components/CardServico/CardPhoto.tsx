import styles from "./Card.module.css"

interface CardPhotoProps {
    photo: string
}

export default function CardPhoto(props: CardPhotoProps) {
    const foto = props.photo

    return (
        <img className={styles.foto} src={foto} alt="Foto de Perfil"/>
    )
}