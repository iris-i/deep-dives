import styles from "./Tags.module.css";

let { category__item } = styles;

const Tags = ({ categories }) => {
  return (
    <>
      {categories.map((category) => (
        <span key={category.id} className={category__item}> {category.name} </span>
      ))}
    </>
  );
};

export default Tags;
