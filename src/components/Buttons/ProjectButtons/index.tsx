"use client"

import styles from "./styles.module.css"

type Tecnologia = "Machine learning" | "Sql" | "Power BI" | "TypeScript" | "TypeScript" | "Python"

interface ButtonProps {
    text: string
    onActive: boolean
    selectTech: (tech: Tecnologia | string) => void
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