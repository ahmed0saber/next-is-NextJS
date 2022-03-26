import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Navbar() {
    return(
        <div className={styles.footer}>
            <p>Created by : <Link href="/">ahmed0saber</Link></p>
        </div>
    )
}