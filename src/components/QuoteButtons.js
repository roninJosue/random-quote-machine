import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faTumblr} from "@fortawesome/free-brands-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";

library.add(faTwitter, faTumblr)

const QuoteButtons = (
  {
    setQuoteSelected,
    color,
    text,
    author
  }
) => {

  const back = {
    backgroundColor: color
  }
  return(
    <div id='quote-buttons'>
      <div className='btn-social-media'>
        <Link
          back={back}
          icon={faTwitter}
          href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${text}"\n\r -${author}`}
        />
        <Link
          back={back}
          icon={faTumblr}
          href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${author}&content=${text}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
        />
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

const Link = ({back, icon, href}) => {
  return (
    <a
      style={back}
      className='btn-brand'
      href={href}
      target='_blank'
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  )
}

export default QuoteButtons
