import styles from "../styles/Home.module.css";

export default function TabButton(props){

    return(
        <button onClick={props.onClick} className={styles.button}>
      <span className='p-1'>
        {props.icon}
      </span>
            <span className='hidden md:block'>
        {props.text}
      </span>
        </button>
    )
}