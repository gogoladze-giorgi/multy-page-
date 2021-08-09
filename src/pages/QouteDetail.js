import { Fragment } from "react";
import { useParams, Route, NavLink } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
const DUMMY_DATE = [
  { id: "p1", author: "giorgi gogoladze", text: "react is great" },
  { id: "p2", author: "max", text: "learning react is great" },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_DATE.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>no quote found</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <NavLink
            className="btn--flat"
            to={`/quotes/${params.quoteId}/comments`}
          >
            Load Comments
          </NavLink>
        </div>
      </Route>

      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
