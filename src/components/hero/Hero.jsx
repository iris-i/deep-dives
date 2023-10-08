
const Hero = ({title, subtitle, description, large}) => {
  return (
    <div className={`hero max-w-screen-lg m-y-0 mx-auto border p-20 text-center ${large ? 'p-20' : 'p-10'}`}>
      <h1 className={`${large ? 'text-8xl': 'text-6xl'} font-light`}>{title}</h1>
      <h2 className="text-2xl font-extralight font-headerlight py-3">{subtitle}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Hero;
