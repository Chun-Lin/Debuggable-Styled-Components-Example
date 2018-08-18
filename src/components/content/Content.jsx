import React from 'react'
import './content.css'

export default ({ bold }) => {
  /* inline-style */
  let style = {}
  if (bold) {
    style = { fontWeight: 'bold' }
  }

  /* add new css classes */
  let titleStyles = ['content__info--title']
  if (bold) {
    titleStyles.push('content__info--bold')
  }

  return (
    <div className="content">
      <div className="content__img" />
      <div className="content__info">
        <div className={titleStyles.join(' ')}>Beautiful Photo</div>
        <div className="content__info--description">
          Sed ut voluptatem neque cumque. Qui sed ut itaque est doloribus qui.
          Eos perferendis autem qui fugiat.
        </div>
      </div>
    </div>
  )
}
