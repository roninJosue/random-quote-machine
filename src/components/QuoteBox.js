import React from "react"
import QuoteText from "./QuoteText";
import './../css/quote.scss'
import QuoteAuthor from "./QuoteAuthor";
import QuoteButtons from "./QuoteButtons";

const QuoteBox = ({quote, setQuoteSelected, color}) => {
  const {author, text} = quote

  return(
    <div id='quote-box'>
      <QuoteText color={color} text={text}/>
      <QuoteAuthor color={color} author={author}/>
      <QuoteButtons
        setQuoteSelected={setQuoteSelected}
        color={color}
      />
    </div>
  )
}

export default QuoteBox
