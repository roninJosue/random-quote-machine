import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons/faQuoteLeft";
import {library} from "@fortawesome/fontawesome-svg-core";

library.add(faQuoteLeft)

const QuoteText = (
  {
    text = 'My quote ada ada da ada asda asd asdasd',
    color,
    opacity
  }) => {

  return (
    <div id='text' style={
      {
        color: color,
        opacity: opacity ? 1 : 0,
        transition: 'opacity 200ms ease-in'
      }
    }>
      <FontAwesomeIcon size='lg' icon={faQuoteLeft}/>
      <p id='text-p'>
        {text}
      </p>
    </div>
  )
}

export default QuoteText
