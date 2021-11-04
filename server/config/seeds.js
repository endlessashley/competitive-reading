const db = require('./connection');
const { User, Book, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Graphic Novels' },
    { name: 'Young Adult' },
    { name: 'Novels' },
    { name: 'Non-Fiction' },
    { name: 'Fantasy' }
  ]);

  console.log('Categories Seeded');

  await Books.deleteMany();

  const book = await Book.insertMany([
    {
      title: 'V for Vendetta',
      author: 'Alan Moore',
      image: 'example.jpg',
      points: 10,
      category: categories[0]._id,  
    },
    {
      title: 'Nimona',
      author: 'Noelle Stevenson',
      image: 'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      title:'Watchmen',
      author:'Alan Moore',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      title:'Maus: A Survivors Tale',
      author: 'Art Spiegelman',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      title:'Daytripper',
      author:'Gabriel Ba and Fabio Moon',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      title:'This One Summer',
      author: 'Mariko Tamaki and Jillian Tamaki',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      title:'Sweet Tooth',
      author:'Jeff Lemire',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      title:'Through the Woods',
      author:'Emily Carroll',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      title:'Blankets',
      author:'Craig Thompson',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      title:'My Favorite Thing is Monsters',
      author: 'Emil Ferris',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      title:'Jimmy Corrigan: The Smartest Kid on Earth',
      author:'Chris Ware',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      title:'Blacksad',
      author:'Juan Diaz Canales and Juanjo Guarnido',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      title:'Here',
      author:'Richard McGuire',
      image: 'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      title:'How To Be Happy',
      author:'Eleanor Davis',
      image: 'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      title:'Megahex',
      author:'Simon Hanselmann',
      image: 'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      title:'A Contract With God',
      author:'Will Eisner',
      image: 'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      title:'The Color of Earth (trilogy)',
      author: 'Kim Dong Hwa',
      image: 'example.jpg',
      points: 30,
      category: categories[0]._id,
    },
    {
      title: 'The Encyclopdia of Early Earth',
      author:'Isabel Greenberg',
      image: 'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      title:'Monstress',
      author:'Marjorie Liu and Sana Takeda',
      image: 'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      title:'The Wicked + The Divine',
      author:'Kieron Gillen and Jamie McKelvie',
      image: 'example.jpg',
      points: 10,
      category: categories[0]._id,
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
