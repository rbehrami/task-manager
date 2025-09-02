import React from 'react'
import BlogPost from '../blog/BlogPost'

const blogpost1thumbnail = 'https://png.pngtree.com/recommend-works/png-clipart/20240716/ourmid/pngtree-efficient-task-management-the-checklist-approach-png-image_13090979.png';
import blogpost2thumbnail from '../../../assets/quicklymanage.png'
import blogpost3thumbnail from '../../../assets/taskcompleted.jpg'

const blog_post = [
  {
     title: 'Daily Tasks',
     url: '#',
     image: blogpost1thumbnail,
     description: 'Efficiently manage your daily tasks with our intuitive system.'
  },
   {
     title: 'Quickly create tasks & set due dates',
     url: '#',
     image: blogpost3thumbnail,
     description: 'Create tasks in seconds and set deadlines to stay organized.'
  },
   {
     title: 'View insights on task completion',
     url: '#',
     image: blogpost2thumbnail,
     description: 'Track your progress with detailed completion analytics.'
  }
]

const Blog = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
            📊 Productivity Features
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Streamline Your Workflow
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Discover powerful features designed to enhance your productivity and task management experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blog_post.map((blogPostItem, index) => (
            <div key={index} className="group">
              <BlogPost 
                title={blogPostItem.title}
                url={blogPostItem.url}
                image={blogPostItem.image}
                description={blogPostItem.description}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 sm:mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
            Explore All Features
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog;