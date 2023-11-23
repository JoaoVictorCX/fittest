import Header from "./components/header"
import styles from "./styles.module.css"
import NewEventButton from "./components/new-event-button"

function EventListPage() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main>
                <NewEventButton />
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