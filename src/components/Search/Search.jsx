import styles from "./styles.module.css"

export const Search = ({ keywords, setkeywords }) => {

    return (
        <div className={styles.search}>
            <input
                type="text"
                value={keywords}
                className={styles.input}
                onChange={(e) => setkeywords(e.target.value)}
                placeholder="Search..."
            />
        </div>
    )
}