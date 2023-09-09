
const SnippetsList = ({data}) => {
  console.log(data)
  let snippetsList = data?.map((snippet) => {
    return (
      <li key={snippet.id}>
        <h4>{snippet.title}</h4>
        <p>{snippet.description}</p>
      </li>
    )
  })

  return (
    <ul>{snippetsList}</ul>
  )

}
export default SnippetsList;
