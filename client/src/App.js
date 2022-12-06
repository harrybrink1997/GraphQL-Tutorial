import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import BookList from './BookList';
import AuthorList from './AuthorList';

function App() {

  // apollo client setup
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Book List</h1>
        <BookList />
        <AuthorList />
      </div>
    </ApolloProvider>
  );
}

export default App;
