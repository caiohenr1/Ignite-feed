import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'

export const Comment = ({ content, onDeleteComment}) => {

function handleDelete () {
  event.preventDefault()
  onDeleteComment(content)
}

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/frostt1.png"  />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alei Antonio</strong>
              <time title='25 de Abril as 23:09h'>Cerca de 2h atrás</time>
            </div>
            <button onClick={handleDelete}  title='Deletar comentário' >
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>
          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>
      </div>
    </div>
  )
}