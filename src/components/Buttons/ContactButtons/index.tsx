'use client'
import styles from "./styles.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

export default function ContactButton({ className, ...props }: ButtonProps) {
    function scrollToContato() {
        const section = document.getElementById("contato")
        section?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <button 
            {...props} className={`${styles.contato} ${className}`}
            onClick={scrollToContato}
        >
            Contato
        </button>
    )
}