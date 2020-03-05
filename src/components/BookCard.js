import React from 'react';
import { useSpring, animated } from 'react-spring'
import './../BookCardStyle.css'

// const calc = (x, y) => [(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 50, 1.1]
// const trans = (x, y, s) => `perspective(600px) rotateX(1deg) rotateY(1deg) scale(${s})`

const BookCard = (props) => {
  // const [properties, set] = useSpring(() => ({ xys: [0, 0, 0.8], config: { mass: 50, tension: 300, friction: 150 } }))
  console.log('bookcard props: ', props)
  return (
    <animated.div
      class="book-card"
    // onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
    // onMouseLeave={() => set({ xys: [0, 0, 0.8] })}
    // style={{ transform: properties.xys.interpolate(trans) }}
    >
      <div>
        <div>
          <img src={props.image} alt="book cover thumbnail"></img>
          <h2>{props.title}</h2>
          <h4>Author: {props.author}</h4>
          <p>{props.publisher}</p>
          <p>Published Date: {props.publishedDate === '0000' ? 'Not available' : props.publishedDate.substring(0, 4)}</p>
          <p>ISBN: {props.ISBN}</p>
          <p>Preview: <a href={props.previewLink} target="_blank" className="preview-link">{props.title}</a></p>
        </div>
      </div>
    </animated.div>
  )
}

export default BookCard;