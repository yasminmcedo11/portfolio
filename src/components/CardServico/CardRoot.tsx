import { ReactNode } from "react"
import styles from "./Card.module.css"

interface CardRootProps {
    children: ReactNode
    hasPhoto?: boolean
}

export default function CardRoot({children, hasPhoto = false} : CardRootProps) {
    return (
        <div className={`${styles.container} ${hasPhoto ? styles.comFoto : styles.semFoto}`}>
            {children}
        </div>
    )
}