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

  await Book.deleteMany();

  const books = await Book.insertMany([
    {
      name: 'V for Vendetta',
      author: 'Alan Moore',
      image: 'example.jpg',
      points: 10,
      category: categories[0]._id,  
    },
    {
      name: 'Nimona',
      author: 'Noelle Stevenson',
      image: 'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      name:'Watchmen',
      author:'Alan Moore',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      name:'Maus: A Survivors Tale',
      author: 'Art Spiegelman',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      name:'Daytripper',
      author:'Gabriel Ba and Fabio Moon',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      name:'This One Summer',
      author: 'Mariko Tamaki and Jillian Tamaki',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      name:'Sweet Tooth',
      author:'Jeff Lemire',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      name:'Through the Woods',
      author:'Emily Carroll',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      name:'Blankets',
      author:'Craig Thompson',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      name:'My Favorite Thing is Monsters',
      author: 'Emil Ferris',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      name:'Jimmy Corrigan: The Smartest Kid on Earth',
      author:'Chris Ware',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      name:'Blacksad',
      author:'Juan Diaz Canales and Juanjo Guarnido',
      image:'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      name:'Here',
      author:'Richard McGuire',
      image: 'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      name:'How To Be Happy',
      author:'Eleanor Davis',
      image: 'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      name:'Megahex',
      author:'Simon Hanselmann',
      image: 'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      name:'A Contract With God',
      author:'Will Eisner',
      image: 'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      name:'The Color of Earth (trilogy)',
      author: 'Kim Dong Hwa',
      image: 'example.jpg',
      points: 30,
      category: categories[0]._id,
    },
    {
      name: 'The Encyclopdia of Early Earth',
      author:'Isabel Greenberg',
      image: 'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      name:'Monstress',
      author:'Marjorie Liu and Sana Takeda',
      image: 'example.jpg',
      points: 10,
      category: categories[0]._id,
    },
    {
      name:'The Wicked + The Divine',
      author:'Kieron Gillen and Jamie McKelvie',
      image: 'example.jpg',
      points: 10,
      category: categories[0]._id,

    },

    {
      name:'Harry Potter Series',
      author:'J.K. Rowling',
      image:'example.jpg',
      points: 70,
      category: categories[1]._id
    },
    {
      name:'The Hunger Games series',
      author:'Suzanne Collins',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      name:'To Kill a Mockingbird',
      author:'Harper Lee',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      name:'The Fault in Our Stars',
      author:'John Green',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      name:'The Catcher in the Rye',
      author:'J.D. Salinger',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      name:'Fahrenheit 451',
      author:'Ray Bradbury',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      name:'Looking for Alaska',
      author:'John Green',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      name:'The Book Thief',
      author:'Markus Zusak',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      name:'The Giver series',
      author:'Lois Lowry',
      image:'example.jpg',
      points: 30,
      category: categories[1]._id
    },
    {
      name:'The Hitchhikers Guide to the Galaxy',
      author:'Douglas Adams',
      image:'example.jpg',
      points: 40,
      category: categories[1]._id
    },
    {
      name:'The Outsiders',
      author:'S.E. Hinton',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      name:'His Dark Materials series',
      author:'Philip Pullman',
      image:'example.jpg',
      points: 30,
      category: categories[1]._id
    },
    {
      name:'The Perks of Being a Wallflower',
      author:'Stephen Chbosky',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      name:'The Princess Bride',
      author:'William Goldman',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      name:'Lord of the Flies',
      author:'WIlliam Golding',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      name:'Divergent series',
      author:'Veronica Roth',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      name:'Paper Towns',
      author:'John Green',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      name:'The Mortal Instruments Series',
      author:'Cassandra Clare',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      name:'An Abundance of Katherines',
      author:'John Green',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      name:'Flowers For ALgernon',
      author:'Daniel Keyes',
      image:'example.jpg',
      points: 10,
      category: categories[1]._id
    },
    {
      name:'Don Quixote',
      author:'Miguel De Cervantes',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'Pilgrims Progress',
      author:'John Bunyan',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'Robinson Crusoe',
      author:'Daniel Defoe',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'Gullivers Travels',
      author:'Jonathon Swift',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'Tom Jones',
      author:'Henry Fielding',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'Clarissa',
      author:'Samuel Richardson',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'Tristram Shandy',
      author:'Laurence Stern',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'Dangerous Liasons',
      author:'Pierre Choderlos De Laclos',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'Emma',
      author:'Jane Austen',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'Frankenstein',
      author:'Marry Shelley',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'Nightmare Abbey',
      author:'Thomas Love Peacock',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'The Black Sheep',
      author:'Honore De Balzac',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'The Charterhouse of Parma',
      author:'Stendhal',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'The Count of Monte Cristo',
      author:'Alexandre Dumas',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'Sybil',
      author:'Benjamin Disraeli',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'David Copperfield',
      author:'Charles Dickens',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'Wuthering Heights',
      author:'Emily Bronte',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'Jane Eyre',
      author:'Charlotte Bronte',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'Vanity Fair',
      author:'William Makepeace Thackery',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'The Scarlet Letter',
      author:'Nathaniel Hawthorne',
      image:'example.jpg',
      points: 10,
      category: categories[2]._id
    },
    {
      name:'Dune',
      author:'Frank Herbert',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:'The Martian',
      author:'Andy Weir',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:'Neuromancer',
      author:'William Gibson',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:'The War of the Worlds',
      author:'H.G. Wells',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:'Ancillary Justice',
      author:'Ann Leckie',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:'The Giver',
      author:'Lois Lowry',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:'The Fifth Season',
      author:'N.K. Jemisin',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:'Enders Game',
      author:'Orson Scott Card',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:'The Three Body Problem',
      author:'Liu Cixin',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:'The Martian Chronicles',
      author:'Ray Bradbury',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:'Starship Troopers',
      author:'Robert A. Heinlein',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:'The Blazing World',
      author:'Margaret Cavendish',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:'The Simoqin Prophecies',
      author:'Samit Basu',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:'The Wind-Up Bird Chronicle',
      author:'Haruki Murakami',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:'Recursion',
      author:'Blake Crouch',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:'Hyperion',
      author:'Dan Simmons',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:'The Fall of Hyperion',
      author:'Dan Simmons',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:'Out of the Silent Planet',
      author:'C.S. Lewis',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:'The Dream-Quest of Unknow Kadath',
      author:'H.P. Lovecraft',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:"I, Robot",
      author:'Isaac Asimov',
      image:'example.jpg',
      points: 10,
      category: categories[3]._id
    },
    {
      name:'The Arabian Nights',
      author:'Unknown',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },
    {
      name:"LeMorte D'Arthur",
      author:'Thomas Malory',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },
    {
      name:'Alices Adventures in Wonderland',
      author:'Lewis Carroll',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },
    {
      name:'Through the Looking-Glass',
      author:'Lewis Carroll',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },
    {
      name:'Five Children and It',
      author:'E. Nesbit',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },
    {
      name:'Ozma of Oz',
      author:'L. Frank Baum',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },
    {
      name:'Mary Poppins',
      author:'P.L. Travers',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },
    {
      name:'The Lion, The Witch, and the Wardrobe',
      author:'C.S. Lewis',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },
    {
      name:'The Palm-Wine Drinkard',
      author:'Amos Tutuola',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },
    {
      name:'The Voyage of the Dawn Treader',
      author:'C.S. Lewis',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },
    {
      name:'The Fellowship of the Ring',
      author:'J.R.R. Tolkien',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },
    {
      name:'My Life in the Bush of Ghosts',
      author:'Amos Tutuola',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },
    {
      name:'The Two Towers',
      author:'J.R.R. Tolkien',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },
    {
      name:'The Return of the King',
      author:'J.R.R. Tolkien',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },
    {
      name:'A Hero Born',
      author:'Jin Yong',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },
    {
      name:'The Once & the Future King',
      author:'T.H. White',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },
    {
      name:'James and the Giant Peach',
      author:'Roald Dahl',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },
    {
      name:'The Phantom Tollbooth',
      author:'Norton Juster',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },
    {
      name:'A Wrinkle in Time',
      author:'Madeleine LEngle',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },
    {
      name:'The Wandering Unicorn',
      author:'Manuel Mujica Lainez',
      image:'example.jpg',
      points: 10,
      category: categories[4]._id
    },


  ]);

  console.log('books seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    readBooks: [
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
