export interface NFT {
  id: string;
  slug: string;
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
  price: number;
  getgem_url: string;
  attributes: {
    trait_type: string;
    value: string;
  }[];
  trait_type: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  category: 'weapon' | 'armor pieces' | 'artwork' | 'character' | 'item' | 'collectible';
  owner: string;
  creator: string;
  is_featured: boolean;
  created_at: string;
}

export const nfts: NFT[] = [
  {
    id: '1',
    slug: 'ton-blade-of-velocity',
    collection_id: '1',
    name: 'TON Blade of Velocity',
    description: 'Forged in the TON blockchain, this blade cuts through network congestion with lightning speed. Wield it to gain +25% transaction speed in TON Arena.',
    image_url: '/assets/nfts/ton-blade-of-velocity.JPG',
    price: 10,
    getgem_url:'https://getgems.io/collection/EQAlmz5yCENcwYmJecorQ4ADdwzFQjvmwHky4x_7hX_4lnBH/EQCiuOLpiCQfHFYiBMbOFSOVkFDPlaHv__pqtvP3mIlzwGa_',
    attributes: [
      {"trait_type": "Rarity", "value": "Rare"},
      {"trait_type": "Damage", "value": "45-55"},
      {"trait_type": "Game Effect", "value": "+25% Speed Boost"},
      {"trait_type": "Blockchain", "value": "TON"},
      {"trait_type": "Item Type", "value": "Sword"},
      {"trait_type": "Collection", "value": "TON Legends: Crypto Chronicles"}
    ],
    trait_type: 'rare',
    category: 'weapon',
    owner: 'UQDLn6vpLqvZ3TpLs9fLvDnLUHMecpmycsw9VK_obSFou7Ak',
    creator: '@yekyawaung',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    slug: 'getgems-dagger-of-trade',
    collection_id: '1',
    name: 'Getgems Dagger of Trade',
    description: 'A swift dagger infused with marketplace energy, granting its wielder enhanced trading abilities and lightning-fast transaction speeds in the TON ecosystem.',
    image_url: '/assets/nfts/getgems-dagger-of-trade.JPG',
    price: 5,
    getgem_url:'https://getgems.io/collection/EQAlmz5yCENcwYmJecorQ4ADdwzFQjvmwHky4x_7hX_4lnBH/EQCogj_bHD91qDR1PAOeD8_aOpyamW4AyQvqK8DbUpKw954h',
    attributes: [
      {"trait_type": "Rarity", "value": "Uncommon"},
      {"trait_type": "Damage", "value": "30-40"},
      {"trait_type": "Game Effect", "value": "+15% Trading Speed"},
      {"trait_type": "Blockchain", "value": "TON"},
      {"trait_type": "Item Type", "value": "Dagger"},
      {"trait_type": "Collection", "value": "TON Legends: Crypto Chronicles"}
    ],
    trait_type: 'uncommon',
    category: 'weapon',
    owner: 'UQDLn6vpLqvZ3TpLs9fLvDnLUHMecpmycsw9VK_obSFou7Ak',
    creator: '@yekyawaung',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '3',
    slug: 'staking-hammer-of-rewards',
    collection_id: '1',
    name: 'Staking Hammer Of Rewards',
    description: 'This heavy hammer grows stronger the longer you hold it, mirroring staking rewards in the TON network. Perfect for patient warriors who understand the power of long-term value accumulation.',
    image_url: '/assets/nfts/staking-hammer-of-rewards.JPG',
    price: 20,
    getgem_url:'https://getgems.io/collection/EQAlmz5yCENcwYmJecorQ4ADdwzFQjvmwHky4x_7hX_4lnBH/EQCCVNnPPxbT9Bhb2Hg0MLL_aX0sXXsqP0pfikcYJDguc0_B',
    attributes: [
      {"trait_type": "Rarity", "value": "Epic"},
      {"trait_type": "Damage", "value": "50-70"},
      {"trait_type": "Game Effect", "value": "Scaling Damage Over Time"},
      {"trait_type": "Blockchain", "value": "TON"},
      {"trait_type": "Item Type", "value": "Two-Handed Hammer"},
      {"trait_type": "Collection", "value": "TON Legends: Crypto Chronicles"}
    ],
    trait_type: 'epic',
    category: 'weapon',
    owner: 'UQDLn6vpLqvZ3TpLs9fLvDnLUHMecpmycsw9VK_obSFou7Ak',
    creator: '@yekyawaung',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '4',
    slug: 'liquidity-spear-of-flow',
    collection_id: '1',
    name: 'Liquidity Spear of Flow',
    description: 'A fluid spear that moves like water through liquidity pools, representing seamless asset movement in the TON ecosystem. Its crystalline tip channels the power of decentralized exchanges.',
    image_url: '/assets/nfts/liquidity-spear-of-flow.JPG',
    price: 10,
    getgem_url:'https://getgems.io/collection/EQAlmz5yCENcwYmJecorQ4ADdwzFQjvmwHky4x_7hX_4lnBH/EQCo1WRji5LTzhl8-kHL-8QQB9cDq1-XU4QIPgBqSb3skNU8',
    attributes: [
      {"trait_type": "Rarity", "value": "Rare"},
      {"trait_type": "Damage", "value": "40-50"},
      {"trait_type": "Game Effect", "value": "Pierces Multiple Targets"},
      {"trait_type": "Attack Speed", "value": "Fast"},
      {"trait_type": "Range", "value": "Long"},
      {"trait_type": "Special Ability", "value": "Liquidity Pool Strike"},
      {"trait_type": "Blockchain", "value": "TON"},
      {"trait_type": "Item Type", "value": "Spear"},
      {"trait_type": "Collection", "value": "TON Legends: Crypto Chronicles"}
    ],
    trait_type: 'rare',
    category: 'weapon',
    owner: 'UQDLn6vpLqvZ3TpLs9fLvDnLUHMecpmycsw9VK_obSFou7Ak',
    creator: '@yekyawaung',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '5',
    slug: 'miners-axe-of-proof',
    collection_id: '1',
    name: 'Miner\'s Axe of Proof',
    description: 'Used by TON validators to mine blocks and secure the network with proof-of-stake power. This massive axe channels the energy of blockchain consensus, growing more powerful with each validated transaction.',
    image_url: '/assets/nfts/miners-axe-of-proof.JPG',
    price: 50,
    getgem_url:'',
    attributes: [
      {"trait_type": "Rarity", "value": "Epic"},
      {"trait_type": "Damage", "value": "55-65"},
      {"trait_type": "Game Effect", "value": "Bonus Damage to Structures"},
      {"trait_type": "Attack Speed", "value": "Slow"},
      {"trait_type": "Mining Power", "value": "+40%"},
      {"trait_type": "Validator Bonus", "value": "Block Reward Boost"},
      {"trait_type": "Special Ability", "value": "Consensus Strike"},
      {"trait_type": "Element", "value": "Earth"},
      {"trait_type": "Blockchain", "value": "TON"},
      {"trait_type": "Item Type", "value": "Two-Handed Axe"},
      {"trait_type": "Collection", "value": "TON Legends"}
    ],
    trait_type: 'epic',
    category: 'weapon',
    owner: 'UQDLn6vpLqvZ3TpLs9fLvDnLUHMecpmycsw9VK_obSFou7Ak',
    creator: '@yekyawaung',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '6',
    slug: 'smart-contract-wand',
    collection_id: '1',
    name: 'Smart Contract Wand',
    description: 'A magical wand that executes complex spells automatically once conditions are met. This elegant wand contains living smart contract code within its core, blending ancient magic with modern blockchain technology for precise, conditional spellcasting.',
    image_url: '/assets/nfts/smart-contract-wand.JPG',
    price: 50,
    getgem_url:'https://getgems.io/collection/EQAlmz5yCENcwYmJecorQ4ADdwzFQjvmwHky4x_7hX_4lnBH/EQA0g2S4AV9lS90Nhe_soddh1pix3QvnGcy7DeaYzDAlJnPM',
    attributes: [
      {"trait_type": "Rarity", "value": "Legendary"},
      {"trait_type": "Damage", "value": "35-45"},
      {"trait_type": "Game Effect", "value": "Auto-cast Spells"},
      {"trait_type": "Intelligence", "value": "+30"},
      {"trait_type": "Cast Speed", "value": "Instant"},
      {"trait_type": "Mana Efficiency", "value": "+25%"},
      {"trait_type": "Special Ability", "value": "Conditional Execution"},
      {"trait_type": "Automation", "value": "Auto-targeting"},
      {"trait_type": "Element", "value": "Arcane"},
      {"trait_type": "Blockchain", "value": "TON"},
      {"trait_type": "Item Type", "value": "Wand"},
      {"trait_type": "Collection", "value": "TON Legends: Crypto Chronicles"}
    ],
    trait_type: 'legendary',
    category: 'weapon',
    owner: 'UQDLn6vpLqvZ3TpLs9fLvDnLUHMecpmycsw9VK_obSFou7Ak',
    creator: '@yekyawaung',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '7',
    slug: 'blockchain-shield',
    collection_id: '1',
    name: 'Blockchain Shield',
    description: 'Forged from interconnected blockchain segments, this shield represents the unbreakable security of decentralized networks. Each glowing link strengthens the whole, creating an immutable defense that grows more powerful with every connection to the TON ecosystem.',
    image_url: '/assets/nfts/blockchain-shield.JPG',
    price: 20,
    getgem_url:'',
    attributes: [
      {"trait_type": "Rarity", "value": "Rare"},
      {"trait_type": "Defense", "value": "28"},
      {"trait_type": "Durability", "value": "90"},
      {"trait_type": "Game Effect", "value": "Immune to Critical Hits"},
      {"trait_type": "Special", "value": "Network Defense Boost"},
      {"trait_type": "Blockchain", "value": "TON"},
      {"trait_type": "Item Type", "value": "Tower Shield"},
      {"trait_type": "Element", "value": "Cyber-Magical"}
    ],
    trait_type: 'rare',
    category: 'armor pieces',
    owner: 'UQDLn6vpLqvZ3TpLs9fLvDnLUHMecpmycsw9VK_obSFou7Ak',
    creator: '@yekyawaung',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '8',
    slug: 'validators-full-plate-armor',
    collection_id: '1',
    name: 'Validator\'s Full Plate Armor',
    description: 'Worn by TON network validators, this full plate armor pulses with the energy of blockchain consensus. Each glowing mark represents an active validator node, creating an impenetrable defense that grows stronger with network participation.',
    image_url: '/assets/nfts/validators-full-plate-armor.JPG',
    price: 50,
    getgem_url:'',
    attributes: [
      {"trait_type": "Rarity", "value": "Epic"},
      {"trait_type": "Defense", "value": "40"},
      {"trait_type": "Durability", "value": "85"},
      {"trait_type": "Game Effect", "value": "Damage Reflection 15%"},
      {"trait_type": "Special", "value": "Network Health Scaling"},
      {"trait_type": "Blockchain", "value": "TON"},
      {"trait_type": "Item Type", "value": "Full Body Armor"},
      {"trait_type": "Set Bonus", "value": "With Blockchain Shield"}
    ],
    trait_type: 'epic',
    category: 'armor pieces',
    owner: 'UQDLn6vpLqvZ3TpLs9fLvDnLUHMecpmycsw9VK_obSFou7Ak',
    creator: '@yekyawaung',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '9',
    slug: 'dex-traders-cloak',
    collection_id: '1',
    name: 'DEX Trader\'s Cloak',
    description: 'A shadowy cloak that lets its wearer move undetected through decentralized exchanges. The semi-transparent fabric displays live trading data and market movements, granting its wearer enhanced evasion and market insight.',
    image_url: '/assets/nfts/dex-traders-cloak.JPG',
    price: 10,
    getgem_url:'',
    attributes: [
      {"trait_type": "Rarity", "value": "Rare"},
      {"trait_type": "Defense", "value": "15"},
      {"trait_type": "Game Effect", "value": "+20% Evasion"},
      {"trait_type": "Special", "value": "Market Prediction"},
      {"trait_type": "Blockchain", "value": "TON"},
      {"trait_type": "Item Type", "value": "Cloak"},
      {"trait_type": "Collection", "value": "TON Legends"}
    ],
    trait_type: 'rare',
    category: 'armor pieces',
    owner: 'UQDLn6vpLqvZ3TpLs9fLvDnLUHMecpmycsw9VK_obSFou7Ak',
    creator: '@yekyawaung',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '10',
    slug: 'nft-collectors-helm',
    collection_id: '1',
    name: 'NFT Collector\'s Helm',
    description: 'An ornate fantasy helmet forged with celestial metals and embedded with blockchain-enchanted gemstones. The visor displays a real-time feed of rare digital assets across the metaverse, granting the wearer mystical vision to identify undervalued NFTs and hidden gem collections before anyone else.',
    image_url: '/assets/nfts/nft-collectors-helm.JPG',
    price: 10,
    getgem_url:'',
    attributes: [
      {"trait_type": "Rarity", "value": "Epic"},
      {"trait_type": "Defense", "value": "25"},
      {"trait_type": "Game Effect", "value": "+30% Discovery Chance"},
      {"trait_type": "Special", "value": "Gemstone Vision"},
      {"trait_type": "Blockchain", "value": "TON"}, 
      {"trait_type": "Item Type", "value": "Helmet"},
      {"trait_type": "Collection", "value": "TON Legends"},
      {"trait_type": "Vision Range", "value": "Cross-Chain"},
      {"trait_type": "Material", "value": "Celestial Mithril"}
    ],
    trait_type: 'epic',
    category: 'armor pieces',
    owner: 'UQDLn6vpLqvZ3TpLs9fLvDnLUHMecpmycsw9VK_obSFou7Ak',
    creator: '@yekyawaung',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '11',
    slug: 'gas-fee-breastplate',
    collection_id: '1',
    name: 'Gas Fee Breastplate',
    description: 'A shadowy cloak that lets its wearer move undetected through decentralized exchanges. The semi-transparent fabric displays live trading data and market movements, granting its wearer enhanced evasion and market insight.',
    image_url: '/assets/nfts/gas-fee-breastplate.JPG',
    price: 10,
    getgem_url:'',
    attributes: [
      {"trait_type": "Rarity", "value": "Uncommon"},
      {"trait_type": "Defense", "value": "18"},
      {"trait_type": "Game Effect", "value": "-15% Upgrade Cost"},
      {"trait_type": "Special Effect", "value": "Progressive Efficiency"},
      {"trait_type": "Maintenance Cost", "value": "Decreases 5% Weekly"},
      {"trait_type": "Blockchain", "value": "TON"},
      {"trait_type": "Item Type", "value": "Breastplate"},
      {"trait_type": "Material", "value": "Time-Weaving Mithril"},
      {"trait_type": "Weight", "value": "Light"},
      {"trait_type": "Collection", "value": "Econ Mage Armory"},
      {"trait_type": "Efficiency Tier", "value": "Scaling"},
      {"trait_type": "Max Discount", "value": "60%"}
    ],
    trait_type: 'uncommon',
    category: 'armor pieces',
    owner: 'UQDLn6vpLqvZ3TpLs9fLvDnLUHMecpmycsw9VK_obSFou7Ak',
    creator: '@yekyawaung',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '12',
    slug: 'notcoin-amulet',
    collection_id: '1',
    name: 'Notcoin Amulet',
    description: 'A shadowy cloak that lets its wearer move undetected through decentralized exchanges. The semi-transparent fabric displays live trading data and market movements, granting its wearer enhanced evasion and market insight.',
    image_url: '/assets/nfts/smart-contract-wand.JPG',
    price: 10,
    getgem_url:'',
    attributes: [
      
    ],
    trait_type: 'uncommon',
    category: 'armor pieces',
    owner: 'UQDLn6vpLqvZ3TpLs9fLvDnLUHMecpmycsw9VK_obSFou7Ak',
    creator: '@yekyawaung',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '13',
    slug: 'telegram-mage-orb',
    collection_id: '1',
    name: 'Telegram Mage Orb',
    description: 'A shadowy cloak that lets its wearer move undetected through decentralized exchanges. The semi-transparent fabric displays live trading data and market movements, granting its wearer enhanced evasion and market insight.',
    image_url: '/assets/nfts/smart-contract-wand.JPG',
    price: 10,
    getgem_url:'',
    attributes: [
      
    ],
    trait_type: 'uncommon',
    category: 'armor pieces',
    owner: 'UQDLn6vpLqvZ3TpLs9fLvDnLUHMecpmycsw9VK_obSFou7Ak',
    creator: '@yekyawaung',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '14',
    slug: 'gem-of-staking',
    collection_id: '1',
    name: 'Gem of Staking',
    description: 'A shadowy cloak that lets its wearer move undetected through decentralized exchanges. The semi-transparent fabric displays live trading data and market movements, granting its wearer enhanced evasion and market insight.',
    image_url: '/assets/nfts/smart-contract-wand.JPG',
    price: 10,
    getgem_url:'',
    attributes: [
      
    ],
    trait_type: 'uncommon',
    category: 'armor pieces',
    owner: 'UQDLn6vpLqvZ3TpLs9fLvDnLUHMecpmycsw9VK_obSFou7Ak',
    creator: '@yekyawaung',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '15',
    slug: 'wallet-soul-stone',
    collection_id: '1',
    name: 'Wallet Soul Stone',
    description: 'A shadowy cloak that lets its wearer move undetected through decentralized exchanges. The semi-transparent fabric displays live trading data and market movements, granting its wearer enhanced evasion and market insight.',
    image_url: '/assets/nfts/smart-contract-wand.JPG',
    price: 10,
    getgem_url:'',
    attributes: [
      
    ],
    trait_type: 'uncommon',
    category: 'armor pieces',
    owner: 'UQDLn6vpLqvZ3TpLs9fLvDnLUHMecpmycsw9VK_obSFou7Ak',
    creator: '@yekyawaung',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '16',
    slug: 'bridge-runestone',
    collection_id: '1',
    name: 'Bridge Runestone',
    description: 'A shadowy cloak that lets its wearer move undetected through decentralized exchanges. The semi-transparent fabric displays live trading data and market movements, granting its wearer enhanced evasion and market insight.',
    image_url: '/assets/nfts/smart-contract-wand.JPG',
    price: 10,
    getgem_url:'',
    attributes: [
      
    ],
    trait_type: 'uncommon',
    category: 'armor pieces',
    owner: 'UQDLn6vpLqvZ3TpLs9fLvDnLUHMecpmycsw9VK_obSFou7Ak',
    creator: '@yekyawaung',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '17',
    slug: 'health-potion-of-recovery',
    collection_id: '1',
    name: 'Health Potion of Recovery',
    description: 'A shadowy cloak that lets its wearer move undetected through decentralized exchanges. The semi-transparent fabric displays live trading data and market movements, granting its wearer enhanced evasion and market insight.',
    image_url: '/assets/nfts/smart-contract-wand.JPG',
    price: 10,
    getgem_url:'',
    attributes: [
      
    ],
    trait_type: 'uncommon',
    category: 'armor pieces',
    owner: 'UQDLn6vpLqvZ3TpLs9fLvDnLUHMecpmycsw9VK_obSFou7Ak',
    creator: '@yekyawaung',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '18',
    slug: 'mana-elixir-of-scalability',
    collection_id: '1',
    name: 'Mana Elixir of Scalability',
    description: 'A shadowy cloak that lets its wearer move undetected through decentralized exchanges. The semi-transparent fabric displays live trading data and market movements, granting its wearer enhanced evasion and market insight.',
    image_url: '/assets/nfts/smart-contract-wand.JPG',
    price: 10,
    getgem_url:'',
    attributes: [
      
    ],
    trait_type: 'uncommon',
    category: 'armor pieces',
    owner: 'UQDLn6vpLqvZ3TpLs9fLvDnLUHMecpmycsw9VK_obSFou7Ak',
    creator: '@yekyawaung',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '19',
    slug: 'scroll-of-instant-transaction',
    collection_id: '1',
    name: 'Scroll of Instant Transaction',
    description: 'A shadowy cloak that lets its wearer move undetected through decentralized exchanges. The semi-transparent fabric displays live trading data and market movements, granting its wearer enhanced evasion and market insight.',
    image_url: '/assets/nfts/smart-contract-wand.JPG',
    price: 10,
    getgem_url:'',
    attributes: [
      
    ],
    trait_type: 'uncommon',
    category: 'armor pieces',
    owner: 'UQDLn6vpLqvZ3TpLs9fLvDnLUHMecpmycsw9VK_obSFou7Ak',
    creator: '@yekyawaung',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
];