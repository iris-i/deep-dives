const Section = ({children, noTopPadding, noBottomPadding}) => {

  let paddingOptions = 
    noTopPadding ? 'pt-0 pb-20'
    : noBottomPadding ? 'pt-20 pb-0'
    : 'py-20';

  let sectionStyles = `container max-w-screen-xl mx-auto ${paddingOptions} px-0`

  return (
    <section className={sectionStyles}>
      {children}
    </section>
  )
}

export default Section;
