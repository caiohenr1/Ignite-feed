import { useState } from 'react'
import { Comment } from '../Comment/Comment'
import styles from './CommentForm.module.css'


export const CommentForm = () => {
  const [comments, setComments] = useState([
    'Eder! Sobe aqui um pouquinho'
  ])
  const [newComment, setNewComment] = useState('')

  function handleCommentChange(event) {
    event.target.setCustomValidity('')
    setNewComment(event.target.value)
  }

  function handleAddNewComment(event) {
    event.preventDefault()
    setComments([...comments, newComment])

    setNewComment('')
  }

  function deleteComment(deletedComment) {
    const commentWithoutDeletedOne = comments.filter((comment) => {
      return comment !== deletedComment
    })

    setComments(commentWithoutDeletedOne)
  }

  // validation
  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }
  const inputCommentEmpty = newComment.length === 0

  return (
    <form
      onSubmit={handleAddNewComment}
      className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>
      <textarea
        value={newComment}
        onChange={handleCommentChange}
        placeholder='Deixe um comentário'
        onInvalid={handleNewCommentInvalid}
        required
      />
      <footer className={styles.btn}>
        <button type='submit' disabled={inputCommentEmpty}>
          Publicar
        </button>
      </footer>
      <div className={styles.commentList}>
        {comments.map((item) => {
          return <Comment key={item} content={item} onDeleteComment={deleteComment} />
        })}
      </div>
    </form>
  )
}