import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Image as ImageIcon, Calendar } from 'lucide-react';
import NFTCard from '../components/NFTCard';
import { collections } from '../data/collections';
import { nfts } from '../data/nfts';

export default function CollectionDetail() {
  const { id } = useParams();
  const collection = collections.find((c) => c.id === id);
  const collectionNFTs = nfts.filter((nft) => nft.collection_id === id);

  if (!collection) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Collection not found</h2>
          <p className="text-slate-400">The collection you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
            <img
              src={collection.image_url}
              alt={collection.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {collection.name}
              </h1>
              <p className="text-slate-400 text-lg mb-6">
                {collection.description}
              </p>
              <div className="flex items-center space-x-2 text-slate-400 mb-4">
                <span>Created by</span>
                <span className="text-white font-semibold">{collection.creator}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm">Floor Price</span>
                </div>
                <p className="text-2xl font-bold flex items-center gap-1 text-white">
                  {collection.floor_price}
                  <img
                        src="/assets/ton.png"
                        alt="TON"
                        className="w-6 h-6 object-contain"
                  />
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center space-x-2 text-blue-400 mb-2">
                  <ImageIcon className="w-5 h-5" />
                  <span className="text-sm">Total Items</span>
                </div>
                <p className="text-2xl font-bold text-white">{collection.total_items.toLocaleString()}</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-2 text-purple-400 mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm">Created</span>
                </div>
                <p className="text-lg font-bold text-white">
                  {new Date(collection.created_at).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Items ({collectionNFTs.length})
          </h2>
          <p className="text-slate-400">
            Browse all NFTs from this collection
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collectionNFTs.map((nft, index) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <NFTCard nft={nft} />
            </motion.div>
          ))}
        </div>

        {collectionNFTs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No NFTs in this collection yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
