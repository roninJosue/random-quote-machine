import React from "react"

const QuoteAuthor = ({author = 'Reynaldo Cano', color}) => {
  return (
    <>
      {author && (
        <span
          id='author'
          style={{color: color}}
        >
          -{author}
        </span>
      )}
    </>
  )
}

export default QuoteAuthor
