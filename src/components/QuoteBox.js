import React from "react"
import QuoteText from "./QuoteText";
import './../css/quote.scss'
import QuoteAuthor from "./QuoteAuthor";
import QuoteButtons from "./QuoteButtons";

const QuoteBox = ({quote, setQuoteSelected, color, opacity}) => {
  const {author, text} = quote

  const style = {
    color: color,
    opacity: opacity ? 1 : 0,
    transition: 'opacity 300ms cubic-bezier(.56,.08,.53,.73)'
  }

  return(
    <div id='quote-box'>
      <QuoteText
        text={text}
        style={style}
      />
      <QuoteAuthor
        author={author}
        style={style}
      />
      <QuoteButtons
        setQuoteSelected={setQuoteSelected}
        color={color}
        text={text}
        author={author}
      />
    </div>
  )
}

export default QuoteBox
