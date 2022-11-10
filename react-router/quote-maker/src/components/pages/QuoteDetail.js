import React, { Fragment, useEffect } from 'react'
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'

import HighlightedQuote from '../quotes/HighlightedQuote'
import Comments from '../comments/Comments'
import { getSingleQuote } from '../../lib/api'
import LoadingSpinner from '../UI/LoadingSpinner'
import useHttp from '../../hooks/use-http'

// const DUMMY_QUOTES = [{ id: 'q1', author: 'Max', text: 'Learning react is fun!' },
// { id: 'q2', author: 'Ray', text: 'Learning Javascript is fun!' }]


function QuoteDetail() {
    const match = useRouteMatch()
    const params = useParams()

    const { quoteId } = params;

    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)

    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId])

    if(status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }

    if(error) {
        return <p className='centered'>{error}</p>
    }

    // const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

    if (!loadedQuote.text) {
        return <p>No Quote Found!</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Route path={match.path} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`/quotes/${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
}

// quoteId in the line 10 is the exact name in the App.js '<Route path='/quotes/:quoteId'>'
export default QuoteDetail