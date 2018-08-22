import React from 'react'
import './content.css'

export default ({ bold }) => {
  /* inline-style */
  let style = {}
  if (bold) {
    style = { fontWeight: 'bold' }
  }

  /* add new css classes */
  let titleStyles = ['content__title']
  if (bold) {
    titleStyles.push('content--bold')
  }

  return (
    <div className="content">
      <div className="content__img" />
      <div className="content__info">
        <div className="content__title">Cute Puppy</div>
        <div className="content__description">
          Sed ut voluptatem neque cumque. Qui sed ut itaque est doloribus qui.
          Eos perferendis autem qui fugiat.
        </div>
      </div>
    </div>
  )
}
