import PageHero from '../components/PageHero'
import BlogCard from '../components/BlogCard'
import blogBanner from '../assets/Banner (1).jpg'

const blogPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1622205313162-be1d5712a43f?w=600&auto=format&fit=crop&q=60',
    author: 'Rachi Card',
    date: '25',
    month: 'Nov',
    title: 'The Benefits of Vitamin D & How to Get It',
    description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1561136594-7f68413baa99?w=600&auto=format&fit=crop&q=60',
    author: 'Rachi Card',
    date: '18',
    month: 'Oct',
    title: 'Our Favorite Summertime Tomato',
    description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&auto=format&fit=crop&q=60',
    author: 'Rachi Card',
    date: '12',
    month: 'Sep',
    title: 'Benefits of Vitamin C & How to Get It',
    description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&auto=format&fit=crop&q=60',
    author: 'Rachi Card',
    date: '05',
    month: 'Aug',
    title: 'Research More Organic Foods',
    description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=60',
    author: 'Rachi Card',
    date: '30',
    month: 'Jul',
    title: 'Everyday Fresh Fruites',
    description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1599598425947-5202edd56bdb?w=600&auto=format&fit=crop&q=60',
    author: 'Rachi Card',
    date: '22',
    month: 'Jun',
    title: "Don't Use Plastic Product: It's 100% Nature",
    description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
]

const Blog = () => {
  return (
    <div className="bg-[#f5fbf9]">
      <PageHero image={blogBanner} title="Recent News" />

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
