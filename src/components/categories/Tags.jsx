import styles from "./Tags.module.css";

let { categories__list, category__item } = styles;

const Tags = ({ categories }) => {
  return (
    <>
      {categories.map((category) => (
        <span className={category__item}> {category.name} </span>
      ))}
    </>
  );
};

export default Tags;
