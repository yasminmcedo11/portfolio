'use client'

import useScroll from "@/hooks/useScroll"
import styles from "./styles.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

export default function ContactButton(props: ButtonProps) {
    const contato = useScroll<HTMLElement>() 

    return (
        <button 
            {...props} className={`${styles.contato} ${props.className}`}
            onClick={contato.scrollTo}
        >
            Contato
        </button>
    )
}