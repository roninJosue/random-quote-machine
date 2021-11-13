import React, {useEffect, useState} from 'react';
import './css/App.scss';
import QuoteBox from "./components/QuoteBox";
import {colors} from "./utils/colors";
import {getQuotes} from "./api/api";
import {indexElement} from "./utils/arrays";

function App() {
  const [quotes, setQuotes] = useState([])
  const [quoteSelected, setQuoteSelected] = useState({author: '', text: ''})
  const [opacity, setOpacity] = useState(false)
  const [color, setColor] = useState(indexElement(colors))

  useEffect(() => {
    getQuotes()
      .then(response => response.json())
      .then(data => {
        setQuotes(data)
      })
  }, [])

  useEffect(() => {
    console.log(`opacity: ${opacity}`)
    const timer = setTimeout(() => {
      setOpacity(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [opacity])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (quotes.length > 0) {
        setQuoteSelected(indexElement(quotes))
      }
    }, 200)

    return () => clearTimeout(timer)
  }, [quotes])

  const handleClick = () => {
    setColor(indexElement(colors))
    setOpacity(false)
    setTimeout(() => {
      if (quotes.length > 0) {
        setQuoteSelected(indexElement(quotes))
      }
    }, 501)

    //setColor(colors[random(0, colors.length - 1)])
  }

  return (
    <div className="App">
      <header style={{
        backgroundColor: color
      }} className="App-header">
        <QuoteBox
          quote={quoteSelected}
          setQuoteSelected={handleClick}
          color={color}
          opacity={opacity}
        />
      </header>
    </div>
  );
}

export default App;
