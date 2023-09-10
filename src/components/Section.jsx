const Section = ({children}) => {
  let sectionStyles = `container max-w-screen-xl mx-auto py-20 px-0`

  return (
    <section className={sectionStyles}>
      {children}
    </section>
  )
}

export default Section;
