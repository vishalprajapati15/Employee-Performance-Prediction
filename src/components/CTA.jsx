const CTA = () => {
  return (
    <section className="px-6 py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Workforce Analytics?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join leading organizations using AI-powered performance prediction for better talent management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Start Free Trial
          </button>
          <button className="border border-gray-400 text-gray-300 hover:bg-gray-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA