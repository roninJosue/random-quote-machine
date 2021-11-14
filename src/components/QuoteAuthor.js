import React from "react"

const QuoteAuthor = ({author = '', style}) => {
  return (
    <>
      {author && (
        <span
          id='author'
          style={style}
        >
          -{author}
        </span>
      )}
    </>
  )
}

export default QuoteAuthor
