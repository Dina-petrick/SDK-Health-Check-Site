import React from 'react';
import { Calendar, User, Clock, ArrowRight, Tag, Crown, Sparkles, Award } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Molecular Gastronomy: A Master's Guide",
      excerpt: "Explore the sophisticated world of molecular gastronomy with techniques used by Michelin-starred chefs to transform ordinary ingredients into extraordinary experiences.",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Chef Auguste Beaumont",
      date: "January 15, 2025",
      readTime: "12 min read",
      category: "Culinary Arts",
      tags: ["Molecular", "Techniques", "Fine Dining"],
      premium: true,
      featured: true
    },
    {
      id: 2,
      title: "Sourcing Excellence: The Philosophy of Premium Ingredients",
      excerpt: "Discover how world-renowned chefs select and source the finest ingredients, from rare truffles to heritage grains, and why quality matters in culinary excellence.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Isabella Romano",
      date: "January 12, 2025",
      readTime: "10 min read",
      category: "Ingredients",
      tags: ["Premium", "Sourcing", "Quality"],
      premium: true,
      featured: false
    },
    {
      id: 3,
      title: "Wine Pairing Mastery: Elevating Your Dining Experience",
      excerpt: "Master the sophisticated art of wine pairing with expert guidance from renowned sommeliers, featuring rare vintages and perfect flavor harmonies.",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Sommelier Marcus Laurent",
      date: "January 10, 2025",
      readTime: "15 min read",
      category: "Wine & Spirits",
      tags: ["Wine", "Pairing", "Sommelier"],
      premium: true,
      featured: false
    },
    {
      id: 4,
      title: "Seasonal Luxury: Winter's Finest Culinary Treasures",
      excerpt: "Embrace winter's bounty with sophisticated recipes featuring seasonal delicacies, from winter truffles to aged cheeses, crafted for the discerning palate.",
      image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Chef Emma Greenfield",
      date: "January 8, 2025",
      readTime: "8 min read",
      category: "Seasonal",
      tags: ["Winter", "Luxury", "Seasonal"],
      premium: false,
      featured: false
    },
    {
      id: 5,
      title: "The Heritage of French Patisserie: Timeless Elegance",
      excerpt: "Journey through the refined world of French patisserie, exploring traditional techniques and contemporary innovations that define culinary artistry.",
      image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Pâtissier Laurent Moreau",
      date: "January 5, 2025",
      readTime: "11 min read",
      category: "Patisserie",
      tags: ["French", "Pastry", "Heritage"],
      premium: true,
      featured: false
    },
    {
      id: 6,
      title: "Culinary Innovation: The Future of Fine Dining",
      excerpt: "Explore cutting-edge culinary innovations and emerging trends that are reshaping the landscape of fine dining and gastronomic experiences.",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Chef Victoria Sterling",
      date: "January 3, 2025",
      readTime: "9 min read",
      category: "Innovation",
      tags: ["Innovation", "Future", "Trends"],
      premium: false,
      featured: false
    }
  ];

  const categories = [
    { name: "Culinary Arts", count: 15, color: "bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800" },
    { name: "Ingredients", count: 12, color: "bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800" },
    { name: "Wine & Spirits", count: 8, color: "bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800" },
    { name: "Seasonal", count: 10, color: "bg-gradient-to-r from-rose-100 to-pink-100 text-rose-800" },
    { name: "Patisserie", count: 6, color: "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800" },
    { name: "Innovation", count: 9, color: "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800" }
  ];

  const getCategoryColor = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      "Culinary Arts": "bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border border-amber-200",
      "Ingredients": "bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border border-emerald-200",
      "Wine & Spirits": "bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 border border-purple-200",
      "Seasonal": "bg-gradient-to-r from-rose-100 to-pink-100 text-rose-800 border border-rose-200",
      "Patisserie": "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border border-blue-200",
      "Innovation": "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 border border-gray-200"
    };
    return categoryMap[category] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="overflow-hidden">
      {/* Premium Header */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-2 mb-8">
              <Sparkles className="h-5 w-5 text-emerald-400 mr-2" />
              <span className="text-emerald-200 font-medium tracking-wide">CULINARY INSIGHTS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              <span className="block font-extralight text-gray-100">Gastronomic</span>
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-500 to-green-500 bg-clip-text text-transparent font-bold">Journal</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Immerse yourself in the world of culinary excellence with insights from master chefs, innovative techniques, and gastronomic discoveries.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="lg:flex gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="space-y-12">
                {blogPosts.map((post, index) => (
                  <article key={post.id} className={`${post.featured ? 'lg:col-span-2' : ''} group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100`}>
                    <div className={`${post.featured ? 'lg:flex' : ''}`}>
                      <div className={`${post.featured ? 'lg:w-1/2' : ''} relative overflow-hidden`}>
                        <img
                          src={post.image}
                          alt={post.title}
                          className={`w-full ${post.featured ? 'h-80 lg:h-full' : 'h-64'} object-cover group-hover:scale-110 transition-transform duration-700`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Premium Badge */}
                        {post.premium && (
                          <div className="absolute top-6 left-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1 rounded-full flex items-center text-sm font-semibold">
                            <Crown className="h-3 w-3 mr-1" />
                            Premium
                          </div>
                        )}
                        
                        {/* Featured Badge */}
                        {post.featured && (
                          <div className="absolute top-6 right-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full flex items-center text-sm font-semibold">
                            <Award className="h-3 w-3 mr-1" />
                            Featured
                          </div>
                        )}
                        
                        {/* Category */}
                        <div className="absolute bottom-6 left-6">
                          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(post.category)}`}>
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className={`${post.featured ? 'lg:w-1/2' : ''} p-8`}>
                        <h2 className={`${post.featured ? 'text-3xl lg:text-4xl' : 'text-2xl'} font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors leading-tight`}>
                          <a href="#" className="block">{post.title}</a>
                        </h2>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">{post.excerpt}</p>
                        
                        <div className="flex items-center text-sm text-gray-500 mb-6 gap-6">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2" />
                            <span className="font-medium">{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.tags.map((tag) => (
                            <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <a
                          href="#"
                          className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 group/btn"
                        >
                          Continue Reading
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-16">
                <div className="bg-white rounded-2xl shadow-lg p-2 flex space-x-2">
                  <button className="px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                    Previous
                  </button>
                  <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-medium">1</button>
                  <button className="px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium">2</button>
                  <button className="px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium">3</button>
                  <button className="px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                    Next
                  </button>
                </div>
              </div>
            </div>

            {/* Premium Sidebar */}
            <div className="lg:w-1/3 mt-12 lg:mt-0">
              <div className="space-y-8">
                {/* Categories */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Tag className="mr-3 h-6 w-6 text-emerald-600" />
                    Categories
                  </h3>
                  <div className="space-y-4">
                    {categories.map((category) => (
                      <a
                        key={category.name}
                        href="#"
                        className="flex justify-between items-center p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group border border-gray-100 hover:border-emerald-200 hover:shadow-md"
                      >
                        <span className="text-gray-800 group-hover:text-emerald-700 font-medium">{category.name}</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${category.color}`}>
                          {category.count}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Premium Newsletter */}
                <div className="bg-gradient-to-br from-emerald-500 via-teal-600 to-green-600 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <Crown className="h-6 w-6 mr-2 text-amber-300" />
                      <h3 className="text-2xl font-bold">Exclusive Access</h3>
                    </div>
                    <p className="text-emerald-100 mb-6 leading-relaxed">
                      Join our exclusive community of culinary connoisseurs and receive premium content, chef interviews, and early access to masterclasses.
                    </p>
                    <div className="space-y-4">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-3 rounded-xl text-gray-800 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
                      />
                      <button className="w-full bg-white text-emerald-700 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                        Join Elite Circle
                      </button>
                    </div>
                  </div>
                </div>

                {/* Featured Articles */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h3>
                  <div className="space-y-6">
                    {blogPosts.slice(0, 3).map((post) => (
                      <a key={post.id} href="#" className="flex gap-4 group">
                        <div className="relative overflow-hidden rounded-xl flex-shrink-0">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-20 h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          {post.premium && (
                            <div className="absolute top-1 right-1 bg-amber-500 text-white p-1 rounded-full">
                              <Crown className="h-2 w-2" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-tight mb-2">
                            {post.title.length > 60 ? post.title.substring(0, 60) + '...' : post.title}
                          </h4>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;