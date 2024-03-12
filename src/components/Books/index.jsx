import React from 'react'
import Card from '../Card'
import './index.css'
function Books(props) {
const {books} = props;
  return (
    <>
      <div className="wrapper">
      {
       books.map((book, index) => {
        return (
          <Card key={index} book = {book}></Card>
        )
       })
       
      }
      </div>
    </>
  )
}

export default Books
