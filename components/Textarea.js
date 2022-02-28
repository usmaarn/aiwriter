import {useContext} from "react";
import {AppContext} from "../utils/app-context";
import styles from "../styles/Home.module.css";

export default function TextArea(props) {

    const {text, setText} = useContext(AppContext);

    return(
        <div className="">
            <textarea
                className={styles.textarea}
                value={text}
                onChange={ (e) => setText(e.target.value)}
            />
            <p className="text-4xl absolute text-black font-medium">{text.length} / 1,500</p>
        </div>
    )
}