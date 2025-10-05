export interface NFT {
  id: string;
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
  price: number;
  trait_type: 'common' | 'rare' | 'epic' | 'legendary';
  category: 'artwork' | 'character' | 'item' | 'collectible';
  owner: string;
  creator: string;
  is_featured: boolean;
  created_at: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  creator: string;
  image_url: string;
  floor_price: number;
  total_items: number;
  created_at: string;
}

export const collections: Collection[] = [
  {
    id: '1',
    name: 'Cyber Punks Elite',
    description: 'A collection of 10,000 unique cyberpunk characters living on the blockchain',
    creator: 'CyberStudio',
    image_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800',
    floor_price: 2.5,
    total_items: 10000,
    created_at: '2024-01-15T00:00:00Z'
  },
  {
    id: '2',
    name: 'Abstract Dreams',
    description: 'Mesmerizing abstract art pieces that transcend reality',
    creator: 'DreamWeaver',
    image_url: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800',
    floor_price: 1.8,
    total_items: 5000,
    created_at: '2024-02-20T00:00:00Z'
  },
  {
    id: '3',
    name: 'Galactic Warriors',
    description: 'Epic space warriors ready for intergalactic battles',
    creator: 'SpaceArt',
    image_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800',
    floor_price: 3.2,
    total_items: 8000,
    created_at: '2024-03-10T00:00:00Z'
  },
  {
    id: '4',
    name: 'Neon Nights',
    description: 'Vibrant neon-lit cityscapes from a futuristic world',
    creator: 'NeonVision',
    image_url: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=800',
    floor_price: 1.5,
    total_items: 6000,
    created_at: '2024-04-05T00:00:00Z'
  }
];

export const nfts: NFT[] = [
  {
    id: '1',
    collection_id: '1',
    name: 'Cyber Punk #1234',
    description: 'A rare cyberpunk character with unique holographic visor and neon jacket',
    image_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 2.8,
    trait_type: 'rare',
    category: 'character',
    owner: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    creator: 'CyberStudio',
    is_featured: true,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    collection_id: '2',
    name: 'Abstract Dream #567',
    description: 'A mesmerizing swirl of colors and emotions captured in digital form',
    image_url: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1.9,
    trait_type: 'common',
    category: 'artwork',
    owner: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    creator: 'DreamWeaver',
    is_featured: true,
    created_at: '2024-02-20T14:20:00Z'
  },
  {
    id: '3',
    collection_id: '1',
    name: 'Cyber Punk #5678',
    description: 'Legendary character with rare traits and exclusive accessories',
    image_url: 'https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 5.5,
    trait_type: 'legendary',
    category: 'character',
    owner: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
    creator: 'CyberStudio',
    is_featured: true,
    created_at: '2024-01-16T09:15:00Z'
  },
  {
    id: '4',
    collection_id: '3',
    name: 'Galactic Warrior #890',
    description: 'Elite space warrior equipped with plasma cannon and energy shield',
    image_url: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 3.5,
    trait_type: 'epic',
    category: 'character',
    owner: '0x1111111254fb6c44bAC0beD2854e76F90643097d',
    creator: 'SpaceArt',
    is_featured: true,
    created_at: '2024-03-10T16:45:00Z'
  },
  {
    id: '5',
    collection_id: '2',
    name: 'Abstract Dream #891',
    description: 'Ethereal composition of light and shadow',
    image_url: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=800',
    price: 2.1,
    trait_type: 'rare',
    category: 'artwork',
    owner: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    creator: 'DreamWeaver',
    is_featured: false,
    created_at: '2024-02-21T11:30:00Z'
  },
  {
    id: '6',
    collection_id: '4',
    name: 'Neon Night #123',
    description: 'Stunning cityscape bathed in neon lights',
    image_url: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1.6,
    trait_type: 'common',
    category: 'artwork',
    owner: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
    creator: 'NeonVision',
    is_featured: false,
    created_at: '2024-04-05T08:00:00Z'
  },
  {
    id: '7',
    collection_id: '1',
    name: 'Cyber Punk #2345',
    description: 'Common tier character with standard cybernetic enhancements',
    image_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 2.5,
    trait_type: 'common',
    category: 'character',
    owner: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
    creator: 'CyberStudio',
    is_featured: false,
    created_at: '2024-01-17T13:20:00Z'
  },
  {
    id: '8',
    collection_id: '3',
    name: 'Galactic Warrior #234',
    description: 'Battle-hardened warrior with legendary armor set',
    image_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 4.2,
    trait_type: 'legendary',
    category: 'character',
    owner: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
    creator: 'SpaceArt',
    is_featured: false,
    created_at: '2024-03-11T10:00:00Z'
  },
  {
    id: '9',
    collection_id: '4',
    name: 'Neon Night #456',
    description: 'Epic neon artwork with rare color palette',
    image_url: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 2.0,
    trait_type: 'epic',
    category: 'artwork',
    owner: '0x11111112542D85B3EF69AE05771c2dCCff4fAa26',
    creator: 'NeonVision',
    is_featured: false,
    created_at: '2024-04-06T15:30:00Z'
  },
  {
    id: '10',
    collection_id: '2',
    name: 'Abstract Dream #999',
    description: 'Legendary masterpiece with museum-quality composition',
    image_url: 'https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 6.8,
    trait_type: 'legendary',
    category: 'artwork',
    owner: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
    creator: 'DreamWeaver',
    is_featured: false,
    created_at: '2024-02-22T12:00:00Z'
  },
  {
    id: '11',
    collection_id: '1',
    name: '11Cyber Punk #7890',
    description: 'Epic tier with advanced tech modifications',
    image_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 3.8,
    trait_type: 'epic',
    category: 'character',
    owner: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
    creator: 'CyberStudio',
    is_featured: false,
    created_at: '2024-01-18T14:45:00Z'
  },
  {
    id: '12',
    collection_id: '3',
    name: '12Galactic Warrior #567',
    description: 'Rare warrior class with unique weapon loadout',
    image_url: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 3.3,
    trait_type: 'rare',
    category: 'character',
    owner: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
    creator: 'SpaceArt',
    is_featured: false,
    created_at: '2024-03-12T09:30:00Z'
  }
];
