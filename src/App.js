import React, {useEffect, useState} from 'react';
import './App.css';
import QuoteBox from "./components/QuoteBox";
import {colors} from "./utils/colors";
import {getQuotes} from "./api/api";
import {indexElement} from "./utils/arrays";

function App() {
  const [quotes, setQuotes] = useState([])
  const [quoteSelected, setQuoteSelected] = useState({author: '', text: ''})
  const [color, setColor] = useState(indexElement(colors))

  useEffect(() => {
    getQuotes()
      .then(response => response.json())
      .then(data => {
        setQuotes(data)
      })
  }, [])

  useEffect(() => {
    if (quotes.length > 0) {
      setQuoteSelected(indexElement(quotes))
    }
  }, [quotes])

  const handleClick = () => {
    setColor(indexElement(colors))
    if (quotes.length > 0) {
      setQuoteSelected(indexElement(quotes))
    }
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
        />
      </header>
    </div>
  );
}

export default App;
