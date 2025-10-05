import { Link } from 'react-router-dom';
import { Rocket, Twitter, Github, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                YKA NFT Garden
              </span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Discover, collect, and sell extraordinary NFTs on the world's first and largest NFT marketplace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Twitter className="w-5 h-5 text-slate-300" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Github className="w-5 h-5 text-slate-300" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <MessageCircle className="w-5 h-5 text-slate-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Marketplace</h3>
            <ul className="space-y-2">
              <li>
                <Link to="https://getgems.io/yekyawaung" className="text-slate-400 hover:text-cyan-400 transition-colors" target="_blank">
                  getgems.io
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 YKA NFT Garden. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
