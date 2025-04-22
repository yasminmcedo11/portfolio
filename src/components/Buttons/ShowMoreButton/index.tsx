"use client"

import styles from "./styles.module.css"

interface ShowMoreButtonProps {
    onClick: () => void
}

export default function ShowMoreButton(props: ShowMoreButtonProps) {
    return (
        <button className={styles.button} onClick={props.onClick}>
            Ver Tudo
        </button>
    )
}