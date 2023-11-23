import styles from "../styles.module.css"

function Header() {
    return (
        <div className={styles["header-wrapper"]}>
            <div className={styles.logo}>
                <img src="./logo.svg" alt="" />
                <h1>FITTEST</h1>
            </div>
            <h1>EVENTOS</h1>
        </div>
    )
}

export default Header