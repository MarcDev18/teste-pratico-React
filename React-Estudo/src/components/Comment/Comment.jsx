// Comment.js
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import Avatar from '../Avatar/Avatar';

export function Comment(){
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/MarcDev18.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Antonio Marcos</strong>
                            <time title="24 de maio as 09:40:31" dateTime="2024-05-24 08:13:30">ha uma hora atrás</time>
                        </div>
                        <button title='Deletar'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito Bom Marc, Parabens!!</p>
                   
                </div>
                <footer> {/* Mover o footer aqui para estar dentro do content */}
                        <button>
                            <ThumbsUp />
                            Aplaudir <span>20</span>
                        </button>
                    </footer>
            </div>
        </div>
    )
}
