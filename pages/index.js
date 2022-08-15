import styles from '../styles/Home.module.css'
import toast from 'react-hot-toast';


export default function Home() {
  return (
    <div className={styles.container}>
      <button onClick={() => toast.success('hello toast!')}>
        Toast Me
      </button>
    </div>
  )
}
