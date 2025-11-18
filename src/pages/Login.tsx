import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, LogIn, UserPlus, Crown, Sparkles, Award } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-md w-full relative z-10">
        {/* Premium Brand Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6 rounded-3xl inline-block mb-6 shadow-2xl">
            <Crown className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-light text-white mb-2 tracking-tight">
            <span className="font-extralight">Smart</span>
            <span className="font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">FoodieHub</span>
          </h1>
          <div className="inline-flex items-center bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-4 py-2 mb-4">
            <Sparkles className="h-4 w-4 text-amber-400 mr-2" />
            <span className="text-amber-200 font-medium text-sm tracking-wide">PREMIUM CULINARY EXPERIENCE</span>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            {isLogin ? 'Welcome back to culinary excellence' : 'Join our exclusive community of gastronomy connoisseurs'}
          </p>
        </div>

        {/* Premium Login/Signup Form */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/20">
          <div className="flex mb-8 bg-gray-100 rounded-2xl p-2">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-6 text-center font-bold transition-all duration-300 rounded-xl ${
                isLogin
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-6 text-center font-bold transition-all duration-300 rounded-xl ${
                !isLogin
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Join Elite
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">
                Email Address
              </label>
              <div className="relative">
                <User className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-14 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg transition-all duration-300"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg transition-all duration-300"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-amber-600 shadow-sm focus:ring-amber-500 w-5 h-5" />
                  <span className="ml-3 text-gray-700 font-medium">Remember me</span>
                </label>
                <a href="#" className="text-amber-600 hover:text-amber-700 font-bold transition-colors">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 text-white py-5 px-6 rounded-xl font-bold text-lg hover:from-amber-600 hover:via-orange-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-1"
            >
              {isLogin ? (
                <>
                  <LogIn className="mr-3 h-6 w-6" />
                  Access Premium Experience
                </>
              ) : (
                <>
                  <UserPlus className="mr-3 h-6 w-6" />
                  Join Elite Community
                </>
              )}
            </button>
          </form>

          {/* Premium Social Login */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">Or continue with premium access</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="w-full inline-flex justify-center py-4 px-6 border-2 border-gray-200 rounded-xl shadow-sm text-sm font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
                <svg className="h-6 w-6" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="ml-3">Google</span>
              </button>

              <button className="w-full inline-flex justify-center py-4 px-6 border-2 border-gray-200 rounded-xl shadow-sm text-sm font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="ml-3">Facebook</span>
              </button>
            </div>
          </div>

          {/* Premium Benefits */}
          {!isLogin && (
            <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
              <div className="flex items-center mb-4">
                <Award className="h-5 w-5 text-amber-600 mr-2" />
                <span className="font-bold text-amber-800">Elite Membership Benefits</span>
              </div>
              <div className="space-y-2 text-sm text-amber-700">
                <div className="flex items-center">
                  <Crown className="h-3 w-3 mr-2 text-amber-600" />
                  <span>Access to exclusive Michelin-starred recipes</span>
                </div>
                <div className="flex items-center">
                  <Crown className="h-3 w-3 mr-2 text-amber-600" />
                  <span>Personal chef consultations</span>
                </div>
                <div className="flex items-center">
                  <Crown className="h-3 w-3 mr-2 text-amber-600" />
                  <span>VIP restaurant reservations</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Terms */}
        <div className="text-center mt-8 text-sm text-gray-400">
          By {isLogin ? 'signing in' : 'joining'}, you agree to our{' '}
          <a href="#" className="text-amber-400 hover:text-amber-300 font-medium">Terms of Service</a> and{' '}
          <a href="#" className="text-amber-400 hover:text-amber-300 font-medium">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Login;