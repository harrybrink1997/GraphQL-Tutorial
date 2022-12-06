import React, { useEffect } from 'react'
import { gql, useQuery } from '@apollo/client';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      name
      id
    }
  }
`

const BookList = (props) => {

  const { loading, data, error } = useQuery(GET_BOOKS)
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Errors...</p>

  return (
    <div>
      Book List
      <ul id="book-list">
        {
            data.books.map(({name, id}) => {
              return <li>{ name }</li>
            })
        }
      </ul>
    </div>
  );
}

export default BookList;
