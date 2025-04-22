"use client"

import Link from "next/link";
import styles from "./styles.module.css"
import ContactButton from "../Buttons/ContactButtons";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Header() {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <header className={`${styles.header} ${openMenu ? styles.expanded : ''}`}>
            <nav  className={styles.container}>
                <h2 className={styles.nome}>Yasmin Macedo</h2>
                <div className={`${styles.links} ${openMenu ? styles.ativo : ''}`}>
                    <Link href="#">Home</Link>
                    <Link href="#">Sobre Mim</Link>
                    <Link href="#" >Serviços</Link>
                    <Link href="#" >Projetos</Link> 
                </div>
                <ContactButton className={styles.button}/>
                <button className={styles.modo}>
                    <img src="iconModoEscuro.png" alt="Botão de Modo Escuro/Claro"/>
                </button>
                <button className={styles.hamburger} onClick={() => setOpenMenu(!openMenu)}>
                    {openMenu? <FaXmark/>: <FaBars/>}
                </button>
            </nav>
        </header>
    )
}