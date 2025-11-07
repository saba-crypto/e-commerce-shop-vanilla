class Product {
  id;
  image;
  name;
  priceCents;
  rating;
  constructor(productData) {
    this.id = productData.id
    this.image = productData.image
    this.name = productData.name
    this.priceCents = productData.priceCents
    this.rating = productData.rating
  }
}
class PopularProduct extends Product {
  type;
  constructor(productData) {
    super(productData)
    this.type = 'popular'
  }
}
export let products = [{
  id: '8385627dh238',
  image: "/images/Game-card-images/mario.webp",
  name: 'Super Mario World',
  priceCents: 999,
  rating: 4.8,
},{
  id: 'ahd74629da',
  image: "/images/Game-card-images/bionic-commando.png",
  name: 'Bionic Commando: ReArmed',
  priceCents: 1499,
  rating: 5,
},{
  id: 'aheh23-5893-ia',
  image: "/images/Game-card-images/donkey-kong.webp",
  name: 'Donkey-Kong country returns 3D',
  priceCents: 499,
  rating: 3,
},{
  id: 'awdhsa-3859-38',
  image: "/images/Game-card-images/doom.webp",
  name: 'DOOM ETERNAL',
  priceCents: 299,
  rating: 4.6,
},{
  id: 'ahcnth57-284',
  image: "/images/Game-card-images/final-fantasy-nocopyright.jpg",
  name: 'Final Fantasy XVI',
  priceCents: 1099,
  rating: 4.3,
},{
  id: '572985-27hsbv-3875',
  image: "/Images/Game-card-images/freelancer.png",
  name: 'FreeLancer',
  priceCents: 399,
  rating: 3.5,
},{
  id: '28fn10fna-r4jf7',
  image: "/images/Game-card-images/golden-eye.webp",
  name: 'GoldenEye 007',
  priceCents: 1199,
  rating: 4.4,
},{
  id: 'wnc-wj47f-qjf7',
  image: "/images/Game-card-images/mario-world-nocopyright.png",
  name: 'Super Mario World',
  priceCents: 799,
  rating: 2.3,
},{
  id: 'ac82nfi3917rnbdja',
  image: "/images/Game-card-images/mario2.webp",
  name: 'Super Mario 64',
  priceCents: 899,
  rating: 3.9,
},{
  id: 'amfltp1086u1hf',
  image: "/images/Game-card-images/megaman7-nocopyright.png",
  name: 'Mega Man7',
  priceCents: 599,
  rating: 4.5,
},{
  id: '184dncmaske-58',
  image: "/images/Game-card-images/metalgear-nocopyright.jpg",
  name: 'Metal Gear',
  priceCents: 749,
  rating: 4,
},{
  id: 'shcnam-2947ad',
  image: "/images/Game-card-images/pacman.avif",
  name: 'PacMan',
  priceCents: 99,
  rating: 3.7,
},{
  id: '83a837rhd',
  image: "/images/Game-card-images/sonic-nocopyright.png",
  name: 'Super Mario World',
  priceCents: 549,
  rating: 3,
},{
  id: '104idkamf--wjfn3',
  image: "/images/Game-card-images/sonic.webp",
  name: 'Sonic The Hedgehog 2',
  priceCents: 899,
  rating: 4.7,
},{
  id: '19473hsnsmck',
  image: "/images/Game-card-images/street-fighters-nocopyright.jpg",
  name: 'Street Fighters II: Champion Edition',
  priceCents: 1499,
  rating: 4.4,
},{
  id: '1234567890',
  image: "/images/Game-card-images/streetfighters-image.jpg",
  name: 'Street Fighters II: Special Champion Edition',
  priceCents: 1799,
  rating: 4.1,
},{
  id: '0987654321',
  image: "/images/Game-card-images/tetris.png",
  name: 'Tetris',
  priceCents: 49,
  rating: 4.1,
},{
  id: 'thisistheuniqueid',
  image: "/Images/Game-card-images/zelda-ocarina-of-time.webp",
  name: 'The Legend Of zelda: ocarina of time 3D',
  priceCents: 2099,
  rating: 4.6,
},{
  id: 'thisidisalsounique',
  image: "/images/Game-card-images/zelda.webp",
  name: 'The Legend Of Zelda: A Link To The Past',
  priceCents: 2499,
  rating: 4.9,
}].map((product) => {
  if (product.rating >= 4.7) {
    return new PopularProduct(product)
  } else {
    return new Product(product)
  }
});