import React from 'react'

const TwoColumns = ({title,description,button,image}) => {
  return (
<section className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12 py-12 px-4">
  <img
    src={image}
    alt=""
    className="w-58 md:w-1/3 rounded-lg object-cover"
  />
  <div className="text-center md:text-left md:w-1/2">
    <h2 className="headline-2 text-neutral-d-grey mb-4">{title}</h2>
    <p className="text-neutral-grey body-3-regular mb-8">
      {description}
    </p>
    <a
      href={button.url}
      className="inline-block bg-[#376FC8] text-white px-6 py-3 rounded-lg shadow hover:bg-[#2856a5] transition"
    >
      {button.label}
    </a>
  </div>
</section>

  )
}

export default TwoColumns;
