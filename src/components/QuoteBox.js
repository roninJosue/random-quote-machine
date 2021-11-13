import React from "react"
import QuoteText from "./QuoteText";
import './../css/quote.scss'
import QuoteAuthor from "./QuoteAuthor";
import QuoteButtons from "./QuoteButtons";

const QuoteBox = ({quote, setQuoteSelected, color, opacity}) => {
  const {author, text} = quote

  return(
    <div id='quote-box'>
      <QuoteText
        color={color}
        text={text}
        opacity={opacity}
      />
      <QuoteAuthor
        color={color}
        author={author}
        opacity={opacity}
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
