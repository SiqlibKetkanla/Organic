const BlogCard = ({ image, author, date, month, title, description }) => {
  return (
    <div className="relative rounded-[20px] overflow-hidden shadow-sm h-[320px]">
      <img src={image} alt={title} className="w-full h-full object-cover" />

      <div className="absolute top-3 left-3 bg-white rounded-full w-12 h-12 flex flex-col items-center justify-center shadow">
        <span className="text-sm font-extrabold text-[#274c5b] leading-none">{date}</span>
        <span className="text-[10px] text-[#7eb693] font-semibold leading-none mt-0.5">{month}</span>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-white rounded-[16px] px-4 py-4 shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#7eb693]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-xs text-[#525c60]">By {author}</span>
        </div>
        <h3 className="text-sm font-extrabold text-[#274c5b] mb-1 leading-snug">{title}</h3>
        <p className="text-xs text-[#525c60] leading-relaxed mb-3 line-clamp-2">{description}</p>
        <a href="#" className="flex items-center gap-2 text-xs font-bold text-[#274c5b] hover:text-[#7eb693] transition-colors">
          Read More
          <span className="w-5 h-5 rounded-full bg-[#7eb693] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  )
}

export default BlogCard
