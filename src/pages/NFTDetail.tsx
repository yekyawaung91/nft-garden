import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, Zap, ArrowLeft, Maximize2, Shield, Sword, Target, Sparkles } from 'lucide-react';
import ImageModal from '../components/ImageModal';
import { collections } from '../data/collections';
import { nfts } from '../data/nfts';
import type { LucideIcon } from 'lucide-react';

const rarityColors = {
  common: 'from-slate-500 to-slate-600',
  uncommon: 'from-green-500 to-green-600',
  rare: 'from-blue-500 to-blue-600',
  epic: 'from-purple-500 to-purple-600',
  legendary: 'from-amber-500 to-amber-600',
};

interface AttributeIcons {
  [key: string]: LucideIcon;
}

const attributeIcons : AttributeIcons= {
  'Damage': Sword,
  'Defense': Shield,
  'Game Effect': Sparkles,
  'Rarity': Zap,
  'Blockchain': Target,
  'Item Type': Tag,
  'Collection': Tag,
  'Attack Speed': Zap,
  'Range': Target,
  'Element': Sparkles,
  'Special Ability': Sparkles,
  'Mining Power': Zap,
  'Validator Bonus': Shield,
  'Intelligence': Sparkles,
  'Cast Speed': Zap,
  'Mana Efficiency': Sparkles,
  'Automation': Target,
};

export default function NFTDetail() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const nft = nfts.find((n) => n.id === id);
  const collection = nft ? collections.find((c) => c.id === nft.collection_id) : null;

  if (!nft) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">NFT not found</h2>
          <p className="text-slate-400">The NFT you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const getAttributeIcon = (traitType: string) => {
    const IconComponent = attributeIcons[traitType] || Tag;
    return <IconComponent className="w-4 h-4" />;
  };

  const getRarityFromAttributes = () => {
    const rarityAttr = nft.attributes?.find(attr => attr.trait_type === 'Rarity');
    return rarityAttr ? rarityAttr.value.toLowerCase() : 'common';
  };

  const currentRarity = nft.trait_type || getRarityFromAttributes();

  return (
    <>
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/explore"
              className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Explore</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-slate-700 hover:border-purple-500 transition-colors">
                    <img
                      src={nft.image_url}
                      alt={nft.name}
                      className="w-full h-auto"
                    />
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    >
                      <div className="p-4 bg-slate-800 rounded-full">
                        <Maximize2 className="w-8 h-8 text-white" />
                      </div>
                    </button>
                  </div>
                  <div className={`absolute top-4 right-4 px-4 py-2 rounded-full bg-gradient-to-r ${rarityColors[currentRarity]} text-white font-semibold flex items-center space-x-2 shadow-lg`}>
                    <Zap className="w-4 h-4" />
                    <span className="capitalize">{currentRarity}</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 my-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div>
                  <p className="text-slate-400 text-sm mb-2">Current Price</p>
                  <p className="text-2xl font-bold text-white">
                    <p className="text-white font-bold flex items-center gap-1">
                      {nft.price}
                      <img
                        src="/assets/ton.png"
                        alt="TON"
                        className="w-6 h-6 object-contain"
                      />
                    </p>
                  </p>
</div>
<div>
                  <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                    Buy Now
                  </button>
                  </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
                    <div className="flex items-start space-x-3">
                      <User className="w-5 h-5 text-white mt-1" />
                      <div className="flex-1">
                        <p className="text-slate-400 text-sm mb-1">Creator</p>
                        <p className="text-purple-400 font-semibold">{nft.creator}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
                    <div className="flex items-start space-x-3">
                      <User className="w-5 h-5 text-white mt-1" />
                      <div className="flex-1">
                        <p className="text-slate-400 text-sm mb-1">Owner</p>
                        <p className="text-purple-400 font-mono text-sm break-all">{nft.owner}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-white mt-1" />
                      <div className="flex-1">
                        <p className="text-slate-400 text-sm mb-1">Minted</p>
                        <p className="text-purple-400 font-semibold">
                          {new Date(nft.created_at).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>

              <div>
                <div className="mb-6">
                  {collection && (
                    <Link
                      to={`/collection/${collection.id}`}
                      className="inline-block text-purple-400 hover:text-purple-300 transition-colors mb-3"
                    >
                      {collection.name}
                    </Link>
                  )}
                  <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">
                    {nft.name}
                  </h1>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {nft.description}
                  </p>
                </div>

                {/* Attributes Section */}
                {nft.attributes && nft.attributes.length > 0 && (
                  <div className="mt-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
                    <h3 className="text-white font-semibold mb-4 flex items-center">
                      <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
                      Attributes
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {nft.attributes.map((attribute, index) => (
                        <div 
                          key={index}
                          className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700/70 transition-colors"
                        >
                          <div className="flex items-center text-slate-200 space-x-2 mb-1">
                            {getAttributeIcon(attribute.trait_type)}
                              <p className="text-slate-400 text-xs font-medium capitalize">
                              {attribute.trait_type.replace(/([A-Z])/g, ' $1').trim()}
                            </p>
                          </div>
                          <p className="text-purple-400 font-semibold text-sm">
                            {attribute.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-white font-semibold mb-4 flex items-center">
                    <Tag className="w-5 h-5 mr-2 text-purple-400" />
                    Properties
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <p className="text-slate-400 text-sm mb-1">Category</p>
                      <p className="text-white font-semibold capitalize">{nft.category}</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <p className="text-slate-400 text-sm mb-1">Rarity</p>
                      <p className="text-white font-semibold capitalize">{currentRarity}</p>
                    </div>
                    {nft.attributes && (
                      <>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                          <p className="text-slate-400 text-sm mb-1">Item Type</p>
                          <p className="text-white font-semibold capitalize">
                            {nft.attributes.find(attr => attr.trait_type === 'Item Type')?.value || 'Weapon'}
                          </p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                          <p className="text-slate-400 text-sm mb-1">Blockchain</p>
                          <p className="text-white font-semibold">
                            {nft.attributes.find(attr => attr.trait_type === 'Blockchain')?.value || 'TON'}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                

                
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={nft.image_url}
        title={nft.name}
      />
    </>
  );
}