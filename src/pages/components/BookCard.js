import React from 'react';
import './../../BookCardStyle.css';

const BookCard = (props) => {
  const { image, title, author, publisher, publishedDate, ISBN, previewLink } = props;

  return (
    <div
      class="book-card">
      <div>
        <div>
          <img src={image} alt="book cover thumbnail"></img>
          <h2>{title}</h2>
          <h4>Author: {author}</h4>
          <p>{publisher}</p>
          <p>Published Date: {publishedDate === '0000' ? 'Not available' : publishedDate.substring(0, 4)}</p>
          <p>ISBN: {ISBN}</p>
          <p>Preview: <a href={previewLink} target="_blank" className="preview-link">{title}</a></p>
        </div>
      </div>
    </div>
  )
}

export default BookCard;
