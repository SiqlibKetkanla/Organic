const PageHero = ({ image, title }) => {
  return (
    <div
      className="relative w-full h-[220px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <h1 className="relative z-10 text-4xl font-extrabold text-white drop-shadow-lg">
        {title}
      </h1>
    </div>
  )
}

export default PageHero
