export default function QuoteCard({ quote, loading, error, onNewQuote }) {
  return (
    <div className="card">
      <p className="quote-text">
        {loading ? "Loading..." : error ? error : quote}
      </p>
      <button onClick={onNewQuote}>New Quote</button>
    </div>
  );
}
