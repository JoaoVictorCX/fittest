import Header from "./components/header"
import styles from "./styles.module.css"

function EventListPage() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main>
                <div className="new-event">BOTAO</div>
                <div className="event-list">
                    <ul>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>

                    </ul>
                </div>
            </main>
        </div>
    )
}

export default EventListPage