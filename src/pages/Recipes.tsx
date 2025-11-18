import React, { useState } from 'react';
import { Clock, Users, Star, ChefHat, ArrowRight, Search, Crown, Sparkles, Award } from 'lucide-react';

const Recipes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Signature', 'Artisanal', 'Masterclass', 'Seasonal', 'Exclusive', 'Heritage'];

  const recipes = [
    {
      id: 1,
      name: 'Truffle Risotto Milanese',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Signature',
      time: '45 mins',
      servings: 4,
      rating: 4.9,
      difficulty: 'Sophisticated',
      chef: 'Chef Isabella Romano',
      description: 'An exquisite interpretation of the classic Milanese risotto, elevated with premium black truffle and aged Parmigiano-Reggiano.',
      premium: true
    },
    {
      id: 2,
      name: 'Seared Wagyu with Miso Glaze',
      image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Masterclass',
      time: '35 mins',
      servings: 2,
      rating: 4.8,
      difficulty: 'Masterful',
      chef: 'Chef Hiroshi Tanaka',
      description: 'Premium Wagyu beef perfectly seared and glazed with artisanal miso, accompanied by seasonal vegetables.',
      premium: true
    },
    {
      id: 3,
      name: 'Heritage Sourdough Artisan Loaf',
      image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Heritage',
      time: '24 hours',
      servings: 8,
      rating: 4.7,
      difficulty: 'Refined',
      chef: 'Master Baker Pierre Dubois',
      description: 'Traditional French sourdough crafted using century-old techniques and heritage grains for exceptional flavor depth.',
      premium: false
    },
    {
      id: 4,
      name: 'Lobster Thermidor Royale',
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Exclusive',
      time: '50 mins',
      servings: 2,
      rating: 4.9,
      difficulty: 'Masterful',
      chef: 'Chef Auguste Beaumont',
      description: 'Classic French luxury featuring fresh lobster in a rich cognac cream sauce, gratinéed to perfection.',
      premium: true
    },
    {
      id: 5,
      name: 'Seasonal Tasting Garden',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Seasonal',
      time: '60 mins',
      servings: 6,
      rating: 4.8,
      difficulty: 'Sophisticated',
      chef: 'Chef Emma Greenfield',
      description: 'A curated selection of seasonal vegetables prepared using modern techniques to highlight natural flavors.',
      premium: false
    },
    {
      id: 6,
      name: 'Artisanal Chocolate Soufflé',
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Artisanal',
      time: '40 mins',
      servings: 4,
      rating: 4.9,
      difficulty: 'Refined',
      chef: 'Pâtissier Laurent Moreau',
      description: 'Decadent chocolate soufflé crafted with single-origin cacao and finished with gold leaf.',
      premium: true
    }
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.chef.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyStyle = (difficulty: string) => {
    switch (difficulty) {
      case 'Sophisticated': return 'bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 border border-purple-200';
      case 'Masterful': return 'bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border border-amber-200';
      case 'Refined': return 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border border-emerald-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Premium Header */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-2 mb-8">
              <Crown className="h-5 w-5 text-amber-400 mr-2" />
              <span className="text-amber-200 font-medium tracking-wide">CULINARY MASTERPIECES</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              <span className="block font-extralight text-gray-100">Signature</span>
              <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-bold">Recipes</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Discover extraordinary recipes crafted by world-renowned chefs, featuring premium ingredients and sophisticated techniques.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          {/* Premium Search and Filter */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Search */}
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search masterpieces or chefs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg"
                    />
                  </div>
                  
                  {/* Category Filter */}
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-3 rounded-xl whitespace-nowrap font-medium transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center mt-8">
              <p className="text-gray-600 text-lg">
                <span className="font-semibold text-amber-700">{filteredRecipes.length}</span> culinary masterpiece{filteredRecipes.length !== 1 ? 's' : ''}
                {searchTerm && ` matching "${searchTerm}"`}
                {selectedCategory !== 'All' && ` in ${selectedCategory} collection`}
              </p>
            </div>
          </div>

          {/* Premium Recipes Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {filteredRecipes.map((recipe) => (
              <div key={recipe.id} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Premium Badge */}
                  {recipe.premium && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1 rounded-full flex items-center text-sm font-semibold">
                      <Crown className="h-3 w-3 mr-1" />
                      Premium
                    </div>
                  )}
                  
                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center shadow-lg">
                    <Star className="h-4 w-4 text-amber-500 mr-1 fill-current" />
                    <span className="text-sm font-bold text-gray-900">{recipe.rating}</span>
                  </div>
                  
                  {/* Difficulty */}
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyStyle(recipe.difficulty)}`}>
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-amber-600 text-sm font-medium tracking-wide uppercase">{recipe.category}</span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-2 group-hover:text-amber-700 transition-colors">
                      {recipe.name}
                    </h3>
                    <p className="text-gray-600 italic">by {recipe.chef}</p>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{recipe.description}</p>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-6 gap-6">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{recipe.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{recipe.servings} serving{recipe.servings !== 1 ? 's' : ''}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 px-6 rounded-2xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 group/btn">
                    <ChefHat className="mr-3 h-5 w-5" />
                    Master This Recipe
                    <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredRecipes.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-white rounded-3xl shadow-xl p-12 max-w-md mx-auto">
                <ChefHat className="h-20 w-20 text-gray-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-600 mb-4">No Masterpieces Found</h3>
                <p className="text-gray-500 leading-relaxed">
                  Refine your search to discover the perfect culinary creation for your next dining experience.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipes;