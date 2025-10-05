import { motion } from 'framer-motion';
import { Rocket, Target, Users, Shield } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'Leading the NFT revolution with cutting-edge technology and user-centric design.',
      color: 'cyan',
    },
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize digital ownership and empower creators worldwide through blockchain technology.',
      color: 'blue',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Building a vibrant ecosystem where collectors and creators thrive together.',
      color: 'purple',
    },
    {
      icon: Shield,
      title: 'Secure & Trustworthy',
      description: 'Enterprise-grade security ensuring your digital assets are always protected.',
      color: 'green',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About YKA NFT Garden
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            YKA NFT Garden is the premier destination for discovering, collecting, and trading extraordinary digital assets.
            We're building the future of digital ownership, one NFT at a time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden mb-20"
        >
          <img
            src="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="NFT Galaxy"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent flex items-end">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-2">Our Story</h2>
              <p className="text-slate-300 max-w-2xl">
                Founded in 2024, NFT Galaxy emerged from a vision to create the most accessible and secure NFT marketplace
                in the world. We've grown into a thriving community of creators and collectors.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all group"
            >
              <div className={`p-3 bg-${feature.color}-500/20 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-8 h-8 text-${feature.color}-400`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Join the Revolution
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Whether you're a creator looking to showcase your work or a collector searching for unique digital assets,
              NFT Galaxy provides the tools and community you need to succeed in the Web3 ecosystem.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  50K+
                </p>
                <p className="text-slate-400">Active Users</p>
              </div>
              <div>
                <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  100K+
                </p>
                <p className="text-slate-400">NFTs Listed</p>
              </div>
              <div>
                <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  $50M+
                </p>
                <p className="text-slate-400">Trading Volume</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
