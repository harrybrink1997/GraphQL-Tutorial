import React from 'react'
import { gql, useQuery } from '@apollo/client';

const GET_AUTHORS_AND_BOOKS = gql`
  query GetAuthorsAndBooks {
    authors {
      name
      age
      books {
        name,
        genre
      }
    }
  }
`

const AuthorList = (props) => {

  const { loading, data, error } = useQuery(GET_AUTHORS_AND_BOOKS)
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Errors...</p>

  return (
    <div>
      Author List
      <ul id="author-list">
        {
            data.authors.map(({name, age, books}) => {
              return (
                <li>
                  {name},
                  age: {age},
                  books:
                  {books.map(({ name, genre }) => { return (<span>{ name }: { genre }</span>)})}
                </li>
              )
            })
        }
      </ul>
    </div>
  );
}

export default AuthorList;
