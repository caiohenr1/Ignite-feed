import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'
import { useState } from 'react'

export const Comment = ({ content, onDeleteComment}) => {
  const [likeCount, setLikeCount] = useState(0)

  // deleta comentários
function handleDelete () {
  event.preventDefault()
  onDeleteComment(content)
}
function handleLikeComment () {
  event.preventDefault()
  setLikeCount(likeCount + 1)
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
            <button onClick={handleLikeComment}>
              <ThumbsUp />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
      </div>
    </div>
  )
}