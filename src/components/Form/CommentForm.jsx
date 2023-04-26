import { Comment } from '../Comment/Comment'
import styles from './CommentForm.module.css'
export const CommentForm = () => {
  return (
    <form className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>
      <textarea
        placeholder='Deixe um comentário'
      />
      <footer>
        <button type='submit'>Publicar</button>
      </footer>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </form>
  )
}