import { useState, useEffect } from "react";
import quotesData from "../quotes.json";
import "./headerQuotes.style.css";

const HeaderQuotes = () => {
  const [quote, setQuote] = useState({ quote: "", author: "" });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[randomIndex]);
  }, []);

  return (
    <div className="header-blockquote">
      <h1 className="header-quote">"{quote.quote}"</h1>
      <div className="header-cite">- {quote.author}</div>
    </div>
  );
};

export default HeaderQuotes;
