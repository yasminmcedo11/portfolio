"use client"

import styles from "./styles.module.css"

interface ButtonProps {
    text: string
    onActive: boolean
    selectTech: (tech: string) => void
}

export default function ProjectButtons(props: ButtonProps) {
    const buttonText = props.text
    const buttonClass = props.onActive ? `${styles.button} ${styles.active}` : styles.button

    return (
        <button className={buttonClass} onClick={() => props.selectTech(buttonText)}>
            {buttonText}
        </button>
    )
}