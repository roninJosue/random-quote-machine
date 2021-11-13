import React from "react"

const QuoteAuthor = ({author = 'Reynaldo Cano', color, opacity}) => {
  return (
    <>
      {author && (
        <span
          id='author'
          style={{color: color,opacity: opacity ? 1 : 0,
            transition: 'opacity 200ms ease-in'}}

        >
          -{author}
        </span>
      )}
    </>
  )
}

export default QuoteAuthor
