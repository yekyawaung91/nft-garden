import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Collection } from '../data/collections';
import { TrendingUp, Image } from 'lucide-react';

interface CollectionCardProps {
  collection: Collection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link to={`/collection/${collection.id}`}>
        <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all hover:shadow-xl hover:shadow-cyan-500/20">
          <div className="relative overflow-hidden h-48">
            <img
              src={collection.image_url}
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          </div>
          <div className="p-5">
            <h3 className="text-xl font-bold text-white mb-2">{collection.name}</h3>
            <p className="text-slate-400 text-sm mb-4 line-clamp-2">{collection.description}</p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-1 text-slate-300">
                <Image className="w-4 h-4" />
                <span>{collection.total_items.toLocaleString()} items</span>
              </div>
              <div className="flex items-center space-x-1 text-cyan-400">
                <TrendingUp className="w-4 h-4" />
                <span className="font-semibold">
                  <span className="text-white font-bold flex items-center gap-1">
                    {collection.floor_price}
                    <img
                      src="/assets/ton.png"
                      alt="TON"
                      className="w-4 h-4 object-contain"
                    />
                  </span>
                </span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-700 flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-xs">Created by</p>
                <p className="text-white font-medium">{collection.creator}</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs">Marketplace</p>
                <p className="text-white font-medium">{collection.marketplace}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
