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
            <select defaultValue="">
                <option value="" disabled>Selecione um Serviço</option>
                <option value="Desenvolvimento Frontend">Desenvolvimento Frontend</option>
                <option value="Ciência de Dados">Ciência de Dados</option>
                <option value="Automação de Tarefas">Automação de Tarefas</option>
            </select>
            <h3>Mensagem</h3>
            <textarea></textarea>
            <button>
                Entrar em Contato
            </button>
        </form>
    )
}