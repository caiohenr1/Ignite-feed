import { CommentForm } from '../Form/CommentForm'
import styles from './Post.module.css'

export const Post = () => {
  return (
    <article className={styles.post} >
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/fhaze.png" />
          <div className={styles.authorInfo}>
            <strong>Eder Matumoto</strong>
            <span>Tech Lead</span>
          </div>
        </div>
        <time title='25 de Abril as 23:09h'>Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais uma versão do GSS. É mais uma das ideias geniais do Arlei! 🚀</p>
        <p><a href=''>👉 jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>
          <a href=""> #nlw</a>
          <a href="">    #rocketseat</a>
        </p>
      </div>
      <CommentForm />
    </article>
  )
}