import Card from './components/UI/Card'
import { Route, Switch, Redirect } from 'react-router-dom'
import AllQuotes from './components/pages/AllQuotes';
import QuoteDetail from './components/pages/QuoteDetail';
import NewQuote from './components/pages/NewQuote';
import Layout from './components/layout/Layout';
import NoFound from './components/pages/NoFound';
/* 17:33 */
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
        <Route path='*'>
          <NoFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
