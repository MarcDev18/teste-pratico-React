// Post.js
import { Comment } from '../Comment/Comment'; // Importe o componente Comment
import styles from './Post.module.css';
import Avatar from '../Avatar/Avatar'; // Importe o componente Avatar sem desestruturação

export function Post(){
    return(
        <article className={styles.post}>
            {/* Conteúdo do post */}
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/Matheus1415.png" />
                    <div className={styles.authorInfo}>
                        <strong>mark arise</strong>
                        <span>web developer</span>
                    </div> 
                </div>
                <time title='publicado em 13 de maio' dateTime="2022-05-11 08:13">ha uma hora</time>
            </header>
            <div className={styles.content}>
                <p>Fala galera </p>
                <p>Acabou de sair mais um projeto para o portifolio, é um projeto que fiz em NLW Return</p>
                <p><a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea placeholder='Deixe um comentario'/>
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}
