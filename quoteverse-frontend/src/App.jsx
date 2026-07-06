import { useState } from "react";
import QuoteCard from "./components/QuoteCard";
import { fetchRandomQuote } from "./services/api";
import "./index.css";

function App() {
  const [quote, setQuote] = useState("Click the button to get a quote!");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleNewQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const newQuote = await fetchRandomQuote();
      setQuote(newQuote);
    } catch (err) {
      setError("Failed to fetch quote. Check backend URL/status.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>QuoteVerse</h1>
      <QuoteCard
        quote={quote}
        loading={loading}
        error={error}
        onNewQuote={handleNewQuote}
      />
    </div>
  );
}

export default App;
