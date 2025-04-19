import Link from "next/link";
import styles from "./styles.module.css"
import ContactButton from "../Buttons/ContactButtons";

export default function Header() {
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
                <ContactButton/>
                <button className={styles.modo}>
                    <img src="iconModoEscuro.png" alt="Botaõ de Modo Escuro/Claro"/>
                </button>
            </nav>
        </header>
    )
}