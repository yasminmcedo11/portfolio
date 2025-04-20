"use client"

import styles from "./styles.module.css"

interface ButtonProps {
    text: string
}

export default function ProjectButtons(props: ButtonProps) {
    const buttonText = props.text

    return (
        <button className={styles.button}>
            {buttonText}
        </button>
    )
}