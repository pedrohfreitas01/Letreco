import { Letra } from "../Letra";
import styles from "./styles.module.css";




export function LettersUsed() {
    return (
        <div className={styles.letterUsed}>
            <h5>Letras utilizadas</h5>

            <div>
                <Letra value="R" size="small" color="correct"/>
                <Letra value="A" size="small" color="wrong"/>
            </div>
        </div>
    )
}