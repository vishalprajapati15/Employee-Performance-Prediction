import { SCENARIOS_DATA } from '../data/constants'

const About = () => {
  return (
    <section id="about" className="px-6 py-20 bg-black bg-opacity-20">
      <div className="max-w-7xl mx-auto">
        {/* About Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-6">About</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              The Machine Learning Approach for Employee Performance Prediction with a comprehensive system designed to analyze various data points related to employees' work performance and use machine learning algorithms, leveraging ML technology stack, to predict and evaluate their future performance.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              By incorporating factors such as past performance metrics, training data, feedback, and external factors, the system aims to provide insights that can aid in talent management, resource allocation, and workforce optimization strategies.
            </p>
          </div>
        </div>

        {/* Scenarios Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Key Scenarios</h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {SCENARIOS_DATA.map((scenario, index) => {
              const Icon = scenario.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-400/40"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl mb-6 mx-auto">
                    {/* <Icon className="w-8 h-8 text-white" /> */}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 text-center">
                    Scenario {index + 1}: {scenario.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-center">
                    {scenario.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-slate-800/30 to-purple-900/30 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our ML System?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-slate-700/30 rounded-xl">
                <div className="text-3xl font-bold text-purple-400 mb-2">94%</div>
                <div className="text-gray-300 text-sm">Prediction Accuracy</div>
              </div>
              <div className="p-4 bg-slate-700/30 rounded-xl">
                <div className="text-3xl font-bold text-blue-400 mb-2">67%</div>
                <div className="text-gray-300 text-sm">Performance Improvement</div>
              </div>
              <div className="p-4 bg-slate-700/30 rounded-xl">
                <div className="text-3xl font-bold text-green-400 mb-2">12K+</div>
                <div className="text-gray-300 text-sm">Employees Analyzed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About