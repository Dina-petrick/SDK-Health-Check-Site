import React, { useState } from 'react';
import { MapPin, Clock, Phone, Star, ExternalLink, Search, Filter, Crown, Award, Sparkles } from 'lucide-react';

const Restaurants: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');

  const cuisines = ['All', 'Fine Dining', 'Michelin Star', 'Contemporary', 'Heritage', 'Artisanal', 'Exclusive'];

  const restaurants = [
    {
      id: 1,
      name: "Le Jardin Étoilé",
      cuisine: "Fine Dining",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      reviews: 342,
      address: "123 Boulevard Saint-Germain, Mayfair District",
      phone: "+1 (555) 123-STAR",
      hours: "Tuesday - Saturday: 6:00 PM - 11:00 PM",
      priceRange: "$$$$",
      chef: "Chef Auguste Beaumont",
      description: "An intimate fine dining experience featuring contemporary French cuisine with seasonal ingredients sourced from our private gardens.",
      michelin: true,
      awards: ["Michelin Star", "James Beard Award"]
    },
    {
      id: 2,
      name: "Sakura Omakase",
      cuisine: "Michelin Star",
      image: "https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      reviews: 256,
      address: "456 Zen Garden Way, Cultural Quarter",
      phone: "+1 (555) 234-SAKI",
      hours: "Wednesday - Sunday: 5:30 PM - 10:00 PM",
      priceRange: "$$$$",
      chef: "Master Hiroshi Tanaka",
      description: "Authentic kaiseki experience with the finest seasonal ingredients, featuring a 16-course tasting menu that changes monthly.",
      michelin: true,
      awards: ["Michelin Star", "World's 50 Best"]
    },
    {
      id: 3,
      name: "Terra Madre",
      cuisine: "Contemporary",
      image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      reviews: 189,
      address: "789 Artisan Row, Garden District",
      phone: "+1 (555) 345-TERRA",
      hours: "Monday - Saturday: 5:00 PM - 10:30 PM",
      priceRange: "$$$",
      chef: "Chef Isabella Verde",
      description: "Farm-to-table excellence featuring locally sourced ingredients transformed into contemporary Mediterranean masterpieces.",
      michelin: false,
      awards: ["Green Star", "Sustainable Dining"]
    },
    {
      id: 4,
      name: "The Heritage Table",
      cuisine: "Heritage",
      image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.6,
      reviews: 423,
      address: "321 Historic Lane, Old Town",
      phone: "+1 (555) 456-HERITAGE",
      hours: "Daily: 11:00 AM - 10:00 PM",
      priceRange: "$$$",
      chef: "Chef Margaret Thornton",
      description: "Celebrating culinary traditions with recipes passed down through generations, served in a beautifully restored Victorian mansion.",
      michelin: false,
      awards: ["Heritage Award", "Local Favorite"]
    },
    {
      id: 5,
      name: "Atelier Noir",
      cuisine: "Artisanal",
      image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      reviews: 567,
      address: "654 Innovation Street, Design District",
      phone: "+1 (555) 567-NOIR",
      hours: "Tuesday - Saturday: 6:00 PM - 12:00 AM",
      priceRange: "$$$$",
      chef: "Chef Alexandre Dubois",
      description: "Avant-garde culinary artistry where molecular gastronomy meets traditional techniques in an intimate 20-seat setting.",
      michelin: false,
      awards: ["Innovation Award", "Rising Star"]
    },
    {
      id: 6,
      name: "The Golden Spoon",
      cuisine: "Exclusive",
      image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      reviews: 198,
      address: "987 Platinum Avenue, Elite Quarter",
      phone: "+1 (555) 678-GOLD",
      hours: "By Reservation Only",
      priceRange: "$$$$",
      chef: "Chef Victoria Sterling",
      description: "Ultra-exclusive dining experience limited to 12 guests per evening, featuring personalized menus and rare ingredients.",
      michelin: true,
      awards: ["Exclusive Dining", "Luxury Experience"]
    }
  ];

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.chef.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = selectedCuisine === 'All' || restaurant.cuisine === selectedCuisine;
    return matchesSearch && matchesCuisine;
  });

  const getPriceColor = (price: string) => {
    switch (price) {
      case '$$$': return 'text-amber-600';
      case '$$$$': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Premium Header */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-8">
              <Award className="h-5 w-5 text-purple-400 mr-2" />
              <span className="text-purple-200 font-medium tracking-wide">EXCEPTIONAL DINING</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              <span className="block font-extralight text-gray-100">Elite</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold">Establishments</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Discover extraordinary dining destinations where culinary artistry meets impeccable service and sophisticated ambiance.
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
                      placeholder="Search establishments, cuisine, or chefs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                    />
                  </div>
                  
                  {/* Cuisine Filter */}
                  <div className="flex items-center gap-3">
                    <Filter className="h-5 w-5 text-gray-500" />
                    <select
                      value={selectedCuisine}
                      onChange={(e) => setSelectedCuisine(e.target.value)}
                      className="px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg font-medium"
                    >
                      {cuisines.map((cuisine) => (
                        <option key={cuisine} value={cuisine}>{cuisine}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center mt-8">
              <p className="text-gray-600 text-lg">
                <span className="font-semibold text-purple-700">{filteredRestaurants.length}</span> exceptional establishment{filteredRestaurants.length !== 1 ? 's' : ''}
                {searchTerm && ` matching "${searchTerm}"`}
                {selectedCuisine !== 'All' && ` in ${selectedCuisine} category`}
              </p>
            </div>
          </div>

          {/* Premium Restaurants Grid */}
          <div className="grid xl:grid-cols-2 gap-10">
            {filteredRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100">
                <div className="lg:flex">
                  <div className="lg:w-2/5 relative overflow-hidden">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Michelin Badge */}
                    {restaurant.michelin && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full flex items-center text-sm font-semibold">
                        <Crown className="h-3 w-3 mr-1" />
                        Michelin
                      </div>
                    )}
                    
                    {/* Rating */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center shadow-lg">
                      <Star className="h-4 w-4 text-amber-500 mr-1 fill-current" />
                      <span className="font-bold text-gray-900">{restaurant.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">({restaurant.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="lg:w-3/5 p-8">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-600 text-sm font-medium tracking-wide uppercase">{restaurant.cuisine}</span>
                        <span className={`font-bold text-xl ${getPriceColor(restaurant.priceRange)}`}>
                          {restaurant.priceRange}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">
                        {restaurant.name}
                      </h3>
                      <p className="text-gray-600 italic">by {restaurant.chef}</p>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{restaurant.description}</p>
                    
                    {/* Awards */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {restaurant.awards.map((award) => (
                        <span key={award} className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium border border-amber-200">
                          {award}
                        </span>
                      ))}
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600 mb-6">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
                        <span>{restaurant.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
                        <span>{restaurant.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
                        <span>{restaurant.hours}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-4 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Reserve Table
                      </button>
                      <button className="px-4 py-3 border-2 border-purple-500 text-purple-600 rounded-xl hover:bg-purple-50 transition-colors font-semibold">
                        <MapPin className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredRestaurants.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-white rounded-3xl shadow-xl p-12 max-w-md mx-auto">
                <MapPin className="h-20 w-20 text-gray-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-600 mb-4">No Establishments Found</h3>
                <p className="text-gray-500 leading-relaxed">
                  Refine your search to discover exceptional dining destinations that match your preferences.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;