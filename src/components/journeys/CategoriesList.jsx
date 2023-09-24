const CategoriesList = ({categories}) => {
  let tags = categories.map((category) => {
    let {name, id} = category
    return (
        <li key={id} className=" w-[50%] text-center px-5 py-2 border-r-2 first:border-l-2 bg-highlight2 dark:border-background_body group-odd:bg-primary">{name}</li>
    )
  })
  return (
    <ul className = "mx-auto max-w-screen-xl flex justify-center">
      {tags}
    </ul>
  )
}
export default CategoriesList
