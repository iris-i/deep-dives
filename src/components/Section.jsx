const Section = ({children, noTopPadding}) => {
  let sectionStyles = `container max-w-screen-xl mx-auto ${noTopPadding ? 'pt-0 pb-20' : 'py-20'} px-0`

  return (
    <section className={sectionStyles}>
      {children}
    </section>
  )
}

export default Section;
