"use client"

import styles from "./styles.module.css"

export default function Forms() {
    return (
        <form className={styles.container}>
            <h3>Nome</h3>
            <input 
                type="name"
                placeholder="Nome Completo"
            />
            <h3>E-mail</h3>
            <input 
                type="email"
                placeholder="example@email.com"
            />
            <h3>Serviço</h3>
            <select>
                <option value="" disabled selected>Selecione um Serviço</option>
                <option value="maça" className={styles.option}>Maçã</option>
                <option value="banana" className={styles.option}>Banana</option>
                <option value="laranja" className={styles.option}>Laranja</option>
            </select>
            <h3>Mensagem</h3>
            <textarea></textarea>
            <button>
                Entrar em Contato
            </button>
        </form>
    )
}