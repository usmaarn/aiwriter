import PlagiarismChecker from "../components/PlagiarismChecker";
import GrammarChecker from "../components/GrammarChecker";
import ArticleRewriter from "../components/ArticleRewriter";
import TextArea from "../components/Textarea";
import styles from '../styles/Home.module.css';

export default function Home() {

  return (

   <div className={styles.wrapper}>

      <main className={styles.main}>
        
        <div className={styles.mainWrapper}>

            <div className={styles.tabs}>

              <GrammarChecker />
              <PlagiarismChecker />
              <ArticleRewriter />

            </div>

            <TextArea />

        </div>
       
      </main>
      
    </div>  
  )
}