import { motion } from 'framer-motion';
import CollectionCard from '../components/CollectionCard';
import { collections } from '../data/collections';

export default function Collections() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            NFT Collections
          </h1>
          <p className="text-slate-400 text-lg">
            Browse through {collections.length} curated collections
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CollectionCard collection={collection} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
