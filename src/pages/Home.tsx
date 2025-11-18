import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Clock, Users, Star, ArrowRight, Award, Sparkles, Crown } from 'lucide-react';

const Home: React.FC = () => {
  const featuredRecipes = [
    {
      id: 1,
      name: 'Truffle Risotto Milanese',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
      time: '45 mins',
      difficulty: 'Sophisticated',
      rating: 4.9,
      chef: 'Chef Isabella Romano'
    },
    {
      id: 2,
      name: 'Seared Duck Breast à l\'Orange',
      image: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800',
      time: '60 mins',
      difficulty: 'Masterful',
      rating: 4.8,
      chef: 'Chef Marcus Laurent'
    },
    {
      id: 3,
      name: 'Artisanal Berry Tart',
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
      time: '90 mins',
      difficulty: 'Refined',
      rating: 4.9,
      chef: 'Chef Amélie Dubois'
    }
  ];

  const luxuryFeatures = [
    {
      icon: <Crown className="h-10 w-10 text-amber-600" />,
      title: 'Michelin-Inspired Recipes',
      description: 'Curated collection of restaurant-quality dishes crafted by world-renowned chefs and culinary masters.'
    },
    {
      icon: <Sparkles className="h-10 w-10 text-purple-600" />,
      title: 'Artisanal Techniques',
      description: 'Master sophisticated cooking methods with detailed guidance from culinary professionals.'
    },
    {
      icon: <Award className="h-10 w-10 text-emerald-600" />,
      title: 'Exclusive Community',
      description: 'Join an elite network of passionate food connoisseurs and culinary enthusiasts.'
    }
  ];

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
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-screen flex items-center">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Premium badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-2 mb-8">
              <Crown className="h-5 w-5 text-amber-400 mr-2" />
              <span className="text-amber-200 font-medium tracking-wide">PREMIUM CULINARY EXPERIENCE</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
              <span className="block font-extralight text-gray-100">Smart</span>
              <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-bold">FoodieHub</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Elevate your culinary journey with sophisticated recipes, exclusive dining experiences, 
              and masterful techniques from world-class chefs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/recipes"
                className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-1"
              >
                Explore Masterpieces
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/restaurants"
                className="group border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center backdrop-blur-sm"
              >
                Discover Venues
                <Sparkles className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Luxury Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-2 mb-6">
              <Award className="h-5 w-5 text-purple-600 mr-2" />
              <span className="text-purple-800 font-medium tracking-wide">EXCEPTIONAL QUALITY</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Culinary <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the pinnacle of gastronomy with our carefully curated collection of premium recipes, 
              expert techniques, and exclusive culinary insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {luxuryFeatures.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                    {feature.icon}
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Masterpieces */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-amber-100 to-orange-100 rounded-full px-6 py-2 mb-6">
              <ChefHat className="h-5 w-5 text-amber-600 mr-2" />
              <span className="text-amber-800 font-medium tracking-wide">SIGNATURE COLLECTION</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Featured <span className="font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Masterpieces</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our most celebrated recipes, crafted by renowned chefs and perfected through generations of culinary artistry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredRecipes.map((recipe, index) => (
              <div key={recipe.id} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Rating badge */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center shadow-lg">
                    <Star className="h-4 w-4 text-amber-500 mr-1 fill-current" />
                    <span className="text-sm font-bold text-gray-900">{recipe.rating}</span>
                  </div>
                  
                  {/* Difficulty badge */}
                  <div className="absolute top-6 left-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getDifficultyStyle(recipe.difficulty)}`}>
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                    {recipe.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 italic">by {recipe.chef}</p>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="mr-6">{recipe.time}</span>
                    <Users className="h-4 w-4 mr-2" />
                    <span>4 servings</span>
                  </div>
                  
                  <Link
                    to="/recipes"
                    className="group/btn w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 px-6 rounded-2xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <ChefHat className="mr-3 h-5 w-5" />
                    Master This Recipe
                    <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/recipes"
              className="group inline-flex items-center text-amber-700 hover:text-amber-800 font-bold text-lg"
            >
              Explore Complete Collection
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Call to Action */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-2 mb-8">
            <Sparkles className="h-5 w-5 text-amber-400 mr-2" />
            <span className="text-amber-200 font-medium tracking-wide">JOIN THE ELITE</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Begin Your <span className="font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Culinary Journey</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of culinary enthusiasts who have elevated their cooking to an art form. 
            Access exclusive recipes, masterclasses, and connect with fellow gastronomy connoisseurs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/login"
              className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-12 py-5 rounded-full font-bold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-1 text-lg"
            >
              <Crown className="mr-3 h-6 w-6" />
              Start Your Journey
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <div className="text-gray-400 text-sm">
              <span className="block">Join 50,000+ culinary enthusiasts</span>
              <span className="block">✨ Premium access • No commitment</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;