import { useState } from 'react'
import { Comment } from '../Comment/Comment'
import styles from './CommentForm.module.css'


export const CommentForm = () => {  

  const [comments, setComments] =  useState([
    'Eder! Venha aqui para uma reunião'
  ])
  const [newCommentText, setNewCommentText] = useState('')
  
  function handleNewCommentChange(event) {
    setNewCommentText(event.target.value)
  }


 function handleCreateNewComment(event) {
    event.preventDefault()
    setComments( [...comments, newCommentText])
    
    setNewCommentText('')
 }

  return (
    <form  onSubmit={handleCreateNewComment} className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>
      <textarea
        value={newCommentText}
        onChange={handleNewCommentChange}
        placeholder='Deixe um comentário'
      />
      <footer>
        <button type='submit'>Publicar</button>
      </footer>
      <div className={styles.commentList}>
        {comments.map((item) => {
          return <Comment content={item} />
        })}
      </div>
    </form>
  )
}