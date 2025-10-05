

export interface Collection {
  id: string;
  name: string;
  description: string;
  creator: string;
  marketplace: string;
  getgems_url: string;
  image_url: string;
  floor_price: number;
  total_items: number;
  created_at: string;
}

export const collections: Collection[] = [
  {
    id: '1',
    name: 'TON Legends: Crypto Chronicles',
    description: 'The ultimate TON blockchain gaming collection! 40 unique items spanning weapons, armor, artifacts, creatures, and consumables - all integrated with crypto concepts and ready for gameplay.',
    creator: '@yekyawaung',
    marketplace: 'getgems.io',
    getgems_url:'https://getgems.io/yekyawaung',
    image_url: '/assets/collections/ton-legends-crypto-chronicles.JPG?auto=compress&cs=tinysrgb&w=800',
    floor_price: 5,
    total_items: 19,
    created_at: '2025-10-05T00:00:00Z'
  },
  {
    id: '2',
    name: 'Abstract Dreams',
    description: 'Mesmerizing abstract art pieces that transcend reality',
    creator: '@yekyawaung',
    marketplace: 'getgems.io',
    getgems_url:'https://getgems.io/yekyawaung',
    image_url: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800',
    floor_price: 1.8,
    total_items: 5000,
    created_at: '2024-02-20T00:00:00Z'
  },
  {
    id: '3',
    name: 'Galactic Warriors',
    description: 'Epic space warriors ready for intergalactic battles',
    creator: '@yekyawaung',
    marketplace: 'getgems.io',
    getgems_url:'https://getgems.io/yekyawaung',
    image_url: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800',
    floor_price: 3.2,
    total_items: 8000,
    created_at: '2024-03-10T00:00:00Z'
  },
  {
    id: '4',
    name: 'Neon Nights',
    description: 'Vibrant neon-lit cityscapes from a futuristic world',
    creator: '@yekyawaung',
    marketplace: 'getgems.io',
    getgems_url:'https://getgems.io/yekyawaung',
    image_url: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=800',
    floor_price: 1.5,
    total_items: 6000,
    created_at: '2024-04-05T00:00:00Z'
  }
];


