import { Brain } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative z-10 px-6 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="w-6 h-6 text-purple-400" />
              <span className="text-lg font-bold text-white">Performance Prediction</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Transforming workforce analytics with AI-powered performance prediction 
              for better talent management and organizational success.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              {/* <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li> */}
              <li><a href="#home" className="hover:text-white transition-colors">Demo</a></li>
              {/* <li><a href="#" className="hover:text-white transition-colors">API</a></li> */}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="https://github.com/vishalprajapati15" target='_blank' className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="https://github.com/vishalprajapati15" target='_blank' className="hover:text-white transition-colors">Support</a></li>
              {/* <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li> */}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer