import React from 'react'
import BlogHome from '../blog/BlogHome'

const BlogPost = ({title,description,image}) => {
  return (
    <>
      <article>
  <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 transform">
    <div className="relative">
      <img 
        src={image} 
        alt={title} 
        className='w-full h-40 sm:h-48 md:h-56 object-cover'
      />
      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
        New
      </div>
    </div>
    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">{description}</p>
      <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm sm:text-base">
        Read More
      </button>
    </div>
  </div>
</article>
    </>

  )
}

export default BlogPost;
