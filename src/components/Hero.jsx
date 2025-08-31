import { useState, useEffect } from 'react'
import { Play, ArrowRight } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="px-6 py-50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Machine Learning
            </span>
            <br />
            Employee Performance
            <br />
            <span className="text-4xl md:text-6xl text-purple-300">Prediction</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            A comprehensive system designed to analyze various data points related to employees' work performance 
            and use machine learning algorithms to predict and evaluate their future performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full cursor-pointer text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
            <button className="border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full cursor-pointer text-lg font-semibold transition-all duration-300 flex items-center justify-center">
              Start Prediction
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero