import React from "react"

const QuoteButtons = ({setQuoteSelected, color}) => {

  const back = {
    backgroundColor: color
  }
  return(
    <div id='quote-buttons'>
      <div className='btn-social-media'>
        <span style={back} className='btn-brand'>A</span>
        <span style={back} className='btn-brand'>B</span>
      </div>
      <button
        onClick={setQuoteSelected}
        id='new-quote'
        style={back}
      >
        New Quote
      </button>
    </div>
  )
}

export default QuoteButtons
