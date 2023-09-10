
const Tag = ({categories}) => {
  let tags = categories?.map((category) => {
    return <li className = "py-2 px-4 m-1 text-white bg-highlight1 rounded-full inline-block">{category.name}</li>
  })

  return (
    <ul className="tags">
      {tags}
    </ul>
  );
};

export default Tag;
