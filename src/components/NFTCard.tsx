import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { NFT } from '../data/nfts';
import { Zap } from 'lucide-react';

interface NFTCardProps {
  nft: NFT;
  isListView?: boolean;
}

const rarityColors = {
  common: 'from-slate-500 to-slate-600',
  uncommon: 'from-teal-500 to-slate-600',
  rare: 'from-blue-500 to-blue-600',
  epic: 'from-purple-500 to-purple-600',
  legendary: 'from-amber-500 to-amber-600',
};

export default function NFTCard({ nft, isListView = false }: NFTCardProps) {
  if (isListView) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all"
      >
        <Link to={`/nft/${nft.id}`} className="flex flex-col sm:flex-row">
          <div className="sm:w-48 h-48 relative overflow-hidden">
            <img
              src={nft.image_url}
              alt={nft.name}
              className="w-full h-full object-cover"
            />
            <div className={`absolute top-2 right-2 px-2 py-1 rounded-full bg-gradient-to-r ${rarityColors[nft.trait_type]} text-white text-xs font-semibold flex items-center space-x-1`}>
              <Zap className="w-3 h-3" />
              <span className="capitalize">{nft.trait_type}</span>
            </div>
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">{nft.name}</h3>
              <p className="text-slate-400 text-sm mb-2 line-clamp-2">{nft.description}</p>
              <span className="inline-block px-2 py-1 bg-slate-700 rounded text-xs text-slate-300 capitalize">
                {nft.category}
              </span>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="text-slate-400 text-xs">Price</p>
                <p className="text-white font-bold flex items-center gap-1">
                  {nft.price}
                  <img 
                    src="/assets/ton.png" 
                    alt="TON" 
                    className="w-4 h-4"
                  />
                </p>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                View
              </button>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link to={`/nft/${nft.id}`}>
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all hover:shadow-xl hover:shadow-purple-500/20">
          <div className="relative overflow-hidden aspect-square">
            <img
              src={nft.image_url}
              alt={nft.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className={`absolute top-2 right-2 px-3 py-1 rounded-full bg-gradient-to-r ${rarityColors[nft.trait_type]} text-white text-xs font-semibold flex items-center space-x-1`}>
              <Zap className="w-3 h-3" />
              <span className="capitalize">{nft.trait_type}</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-white mb-1 truncate">{nft.name}</h3>
            <p className="text-slate-400 text-sm mb-3 line-clamp-2">{nft.description}</p>
            <div className="flex items-center justify-between">
  {/* Price Section */}
  <div className="flex flex-col">
    <p className="text-slate-400 text-xs">Price</p>
    <p className="text-white font-bold flex items-center gap-1">
      {nft.price}
      <img
        src="/assets/ton.png"
        alt="TON"
        className="w-4 h-4 object-contain"
      />
    </p>
  </div>

    {/* Category Badge */}
    <span className="px-2 py-1 mt-4 bg-slate-700 rounded text-xs text-slate-300 capitalize">
      {nft.category}
    </span>
  </div>

          </div>
        </div>
      </Link>
    </motion.div>
  );
}
