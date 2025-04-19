import styles from "./styles.module.css"

export default function SobreMim() {
    return (
        <section className={styles.section}>
            <div>
                <h2>Sobre Mim</h2>
                <h3>Conheça mais sobre mim</h3>
            </div>
            <p>
                Hi there! I'm [Your Name], a data scientist specializing in data analytics, predictive modeling, 
                natural language processing, machine learning, and AI chatbots. With a passion for unraveling insights
                from complex datasets, I'm dedicated to helping businesses make informed decisions and stay ahead in
                today's data-driven world.

                I bring a blend of technical expertise, hands-on experience, and a commitment to clear communication 
                to every project. Whether it's uncovering hidden patterns, predicting future trends, or automating 
                processes with AI, I'm here to help you harness the full potential of your data.

                Let's work together to transform your data into actionable insights that drive real results. 
                Get in touch, and let's start unlocking the power of your data today!
            </p>
        </section>
    )
}