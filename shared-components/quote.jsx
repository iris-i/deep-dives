import styles from './quote.module.css';

const Quote = ({ attribution, content }) => {
  let {quote_text, author, quote} = styles
  console.log(attribution)
  return (
  <figure className = {quote} >
          <blockquote className = {quote_text}>{content}</blockquote>
          {attribution &&
          <figcaption className = {author}> 
            {attribution}
          </figcaption>
          }
        </figure>
)};

export default Quote;

