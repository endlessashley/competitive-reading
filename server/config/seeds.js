const db = require('./connection');
const { User, Book, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Graphic Novels' },
    { name: 'Young Adult' },
    { name: 'Novels' },
    { name: 'Science Fiction' },
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

    },

    {
      title:'Harry Potter Series',
      author:'J.K. Rowling',
      image:'example.jpg',
      points: 70,
      category: categories[1]._id
    },
    {
      title:'The Hunger Games series',
      author:'Suzanne Collins',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      title:'To Kill a Mockingbird',
      author:'Harper Lee',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      title:'The Fault in Our Stars',
      author:'John Green',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      title:'The Catcher in the Rye',
      author:'J.D. Salinger',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      title:'Fahrenheit 451',
      author:'Ray Bradbury',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      title:'Looking for Alaska',
      author:'John Green',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      title:'The Book Thief',
      author:'Markus Zusak',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      title:'The Giver series',
      author:'Lois Lowry',
      image:'example.jpg',
      points: 30,
      category: categories[1]._id
    },
    {
      title:'The Hitchhikers Guide to the Galaxy',
      author:'Douglas Adams',
      image:'example.jpg',
      points: 40,
      category: categories[1]._id
    },
    {
      title:'The Outsiders',
      author:'S.E. Hinton',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      title:'His Dark Materials series',
      author:'Philip Pullman',
      image:'example.jpg',
      points: 30,
      category: categories[1]._id
    },
    {
      title:'The Perks of Being a Wallflower',
      author:'Stephen Chbosky',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      title:'The Princess Bride',
      author:'William Goldman',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      title:'Lord of the Flies',
      author:'WIlliam Golding',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      title:'Divergent series',
      author:'Veronica Roth',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      title:'Paper Towns',
      author:'John Green',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      title:'The Mortal Instruments Series',
      author:'Cassandra Clare',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      title:'An Abundance of Katherines',
      author:'John Green',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      title:'Flowers For ALgernon',
      author:'Daniel Keyes',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      title:'Don Quixote',
      author:'Miguel De Cervantes',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:'Pilgrims Progress',
      author:'John Bunyan',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:'Robinson Crusoe',
      author:'Daniel Defoe',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:'Gullivers Travels',
      author:'Jonathon Swift',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:'Tom Jones',
      author:'Henry Fielding',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:'Clarissa',
      author:'Samuel Richardson',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:'Tristram Shandy',
      author:'Laurence Stern',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:'Dangerous Liasons',
      author:'Pierre Choderlos De Laclos',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:'Emma',
      author:'Jane Austen',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:'Frankenstein',
      author:'Marry Shelley',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:'Nightmare Abbey',
      author:'Thomas Love Peacock',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:'The Black Sheep',
      author:'Honore De Balzac',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:'The Charterhouse of Parma',
      author:'Stendhal',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:'The Count of Monte Cristo',
      author:'Alexandre Dumas',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:'Sybil',
      author:'Benjamin Disraeli',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:'David Copperfield',
      author:'Charles Dickens',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:'Wuthering Heights',
      author:'Emily Bronte',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:'Jane Eyre',
      author:'Charlotte Bronte',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:'Vanity Fair',
      author:'William Makepeace Thackery',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:'The Scarlet Letter',
      author:'Nathaniel Hawthorne',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    {
      title:
      author:
      image:'example.jpg'
      points: 10,
      category: categories[3]._id
    },
    

  ]);

  console.log('books seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        books: [books[0]._id, books[0]._id, books[1]._id]
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
