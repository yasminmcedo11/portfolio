"use client"
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import styles from "./styles.module.css"

export default function Header() {
    const contato = useScroll<HTMLElement>() 

    return (
        <header className={styles.header}>
            <nav  className={styles.container}>
                <h2 className={styles.nome}>Yasmin Macedo</h2>
                <div>
                    <Link href="#" >
                        Home
                    </Link>
                    <Link href="#" >
                        Sobre Mim
                    </Link>
                    <Link href="#" >
                        Serviços
                    </Link>
                    <Link href="#" >
                        Projetos
                    </Link> 
                </div>
                <button onClick={contato.scrollTo} className={styles.contato}>
                    Contato
                </button>
                <button className={styles.modo}>
                    <img src="iconModoEscuro.png" alt="Botaõ de Modo Escuro/Claro"/>
                </button>
            </nav>
        </header>
    )
}