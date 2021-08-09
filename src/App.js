import { Route, Switch, Redirect } from "react-router-dom";

import AllQuotes from "./pages/AllQoutes";
import NewQuote from "./pages/NewQoute";
import QuoteDetail from "./pages/QouteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
//quotes
//quotes/quotedId
// new-qoute
