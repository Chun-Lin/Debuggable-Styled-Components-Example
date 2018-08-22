import React from 'react'
import './content.css'

export default ({ skyblue }) => {
  /* inline-style */
  let style = {}
  if (skyblue) {
    style = { color: 'skyblue' }
  }

  /* add new css classes */
  let titleStyles = ['content__title']
  if (skyblue) {
    titleStyles.push('content--skyblue')
  }

  return (
    <div className="content">
      <div className="content__img" />
      <div className="content__info">
        <div className={titleStyles.join(' ')}>Cute Puppy</div>
        <div className="content__description">
          Sed ut voluptatem neque cumque. Qui sed ut itaque est doloribus qui.
          Eos perferendis autem qui fugiat.
        </div>
      </div>
    </div>
  )
}
