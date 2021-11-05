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
<<<<<<< Updated upstream
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
=======
      name: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Canned Coffee',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Toilet Paper',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'toilet-paper.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Handmade Soap',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'soap.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Camera',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'camera.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Tablet',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'example.jpg',
      price: 9.99,
      quantity: 600
>>>>>>> Stashed changes
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
