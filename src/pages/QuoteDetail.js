import { Fragment } from "react";
import { useParams, Route, Routes, Link } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning react is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Routes>
        <Route
          path={""}
          element={
            <div className="centered">
              <Link to={"comments"} className="btn--flat">
                A link to Comments
              </Link>
            </div>
          }
        />
        <Route path={"/comments"} element={<Comments />} />
      </Routes>
    </Fragment>
  );
};

export default QuoteDetail;
