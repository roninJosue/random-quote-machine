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
    const timer = setTimeout(() => {
      setOpacity(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [opacity])

  useEffect(() => {
    const timer = setTimeout(() => {
      getQuoteIndex()
    }, 200)

    return () => clearTimeout(timer)
  }, [quotes])

  const handleClick = () => {
    setColor(indexElement(colors))
    setOpacity(false)
    setTimeout(() => {
      getQuoteIndex()
    }, 300)
  }

  const getQuoteIndex = () => {
    if (quotes.length > 0) {
      setQuoteSelected(indexElement(quotes))
    }
  }

  return (
    <div className="App">
      <main style={{
        backgroundColor: color
      }} className="App-header">
        <QuoteBox
          quote={quoteSelected}
          setQuoteSelected={handleClick}
          color={color}
          opacity={opacity}
        />
      </main>
    </div>
  );
}

export default App;
