import { Route, Routes, Navigate, Link } from 'react-router-dom';
import React, {Suspense} from 'react';

import Layout from './components/layout/Layout';
import Comments from './components/comments/Comments';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => import('./pages/NewQuote'))
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail')) 
const NotFound = React.lazy(() => import('./pages/NotFound'))
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'))


function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'>
        <LoadingSpinner />
      </div>}>
      <Routes>
        <Route path='/' element={<Navigate replace to='/quotes' />} />
        <Route path='/quotes' element={<AllQuotes />} />
        <Route path='/quotes/:quoteId' element={<QuoteDetail />}>
          <Route
            path=''
            element={
              <div className='centered'>
                <Link className='btn--flat' to={`comments`}>
                  Load Comments
                </Link>
              </div>
            }
          />
          <Route path={`comments`} element={<Comments />} />
        </Route>
        <Route path='/new-quote' element={<NewQuote />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
