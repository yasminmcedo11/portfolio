import { CardServico } from "../CardServico"
import styles from "./styles.module.css"

export default function Servicos() {
    return (
        <section className={styles.section} id="servicos">
            <div className={styles.titulo}>
                <h2>O que faço</h2>
                <h3>Meus serviços</h3>
            </div>
            <div className={styles.container}>
                <div>
                    <CardServico.Root>
                        <CardServico.Content 
                            title="React" 
                            archiveName="iconIdeia.png"
                            text="Transformo ideias em interfaces dinâmicas e responsivas utilizando o React.
                            Com foco na experiência do usuário, construo aplicações web eficientes, escaláveis e visualmente envolventes."
                        />
                    </CardServico.Root>
                    <CardServico.Root>
                        <CardServico.Content 
                            title="TypeScript" 
                            archiveName="iconIdeia.png"
                            text="Utilizando o TypeScript, trago mais segurança, confiabilidade e clareza ao 
                            desenvolvimento frontend. Ao tipar cada parte da aplicação, reduzo erros e melhoro a produtividade."
                            />
                    </CardServico.Root>
                    <CardServico.Root>
                        <CardServico.Content 
                            title="CSS" 
                            archiveName="iconIdeia.png"
                            text="Com domínio de CSS, dou vida às interfaces com layouts responsivos, animações sutis 
                            e uma estética que valoriza a identidade visual de cada projeto. "
                        />
                    </CardServico.Root>
                </div>
                <div>
                    <CardServico.Root hasPhoto={true}>
                        <CardServico.Content 
                            title="Ciência de Dados" 
                            archiveName="iconRobo.png"
                            text="Exploro dados com um olhar analítico e estratégico, transformando números em narrativas 
                            claras e relevantes. Da coleta à visualização, aplico técnicas de ciência de dados para extrair 
                            padrões, gerar insights e apoiar decisões inteligentes."
                        />
                        <CardServico.Photo photo="dadosIcone.png"/>
                    </CardServico.Root>
                    <CardServico.Root>
                        <CardServico.Content 
                            title="Python" 
                            archiveName="iconRobo.png"
                            text="Utilizo o Python como ferramenta para automatizar processos e analisar dados com eficiência, 
                            desde scripts simples até o tratamento de grandes volumes de informação."
                        />
                    </CardServico.Root>
                </div>
            </div>
        </section>
    )
}