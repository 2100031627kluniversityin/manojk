import bcrypt from 'bcryptjs';
const data = {
    users: [
      {
        name: 'Manoj',
        email: 'manojkumarmadugula30@gmail.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: true,
      },
      {
        name: 'Saida',
        email: 'saida3@gmail.com',
        password: bcrypt.hashSync('12356'),
        isAdmin: true,
      },
      {
        name: 'Sneha',
        email: 'sneha3@gmail.com',
        password: bcrypt.hashSync('1234678'),
        isAdmin: true,
      },
    ],
    products: [
      
      {
        //_id: '1',
        name: 'Nike Slim shirt',
        slug: 'nike-slim-shirt',
        category: 'Shirts',
        image: '/images/p1.jpg', // 679px × 829px
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality shirt ',
      },
      
      {
        //_id: '2',
        name: 'Adidas Fit Shirt',
        slug: 'adidas-fit-shirt',
        category: 'Shirts',
        image: '/images/p2.jpg',
        price: 250,
        countInStock: 0,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        //_id: '1',
        name: 'Nike Slic ',
        slug: 'nike-shiir',
        category: 'Shoi',
        image: '/images/p7.jpg', // 679px × 829px
        price: 120,
        countInStock: 120,
        brand: 'Nikewe',
        rating: 3,
        numReviews: 11,
        description: 'Care Instructions: Hand Wash Only',
      },
      {
        //_id: '1',
        name: 'Nike Slici ',
        slug: 'nike-shiiir',
        category: 'Shoii',
        image: '/images/p8.jpg', // 679px × 829px
        price: 220,
        countInStock: 20,
        brand: 'Nikiwe',
        rating: 4,
        numReviews: 21,
        description: 'Care Instructions: Hand Wash Only',
      },
      {
        //_id: '3',
        name: 'Nike Slim Pant',
        slug: 'nike-slim-pant',
        category: 'Pants',
        image: '/images/p3.jpg',
        price: 250,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'Care Instructions: Hand Wash Only',
      },
      
      {
        //_id: '4',
        name: 'Adidas Fit Pant',
        slug: 'adidas-fit-pant',
        category: 'Pants',
        image: '/images/p4.jpg',
        price: 265,
        countInStock: 5,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'Care Instructions: Hand Wash Only',
      },
      {
        //_id: '1',
        name: 'Nike Slim ',
        slug: 'nike-shirt',
        category: 'Shir',
        image: '/images/p5.jpg', // 679px × 829px
        price: 10,
        countInStock: 1,
        brand: 'Niee',
        rating: 4,
        numReviews: 100,
        description: 'Care Instructions: Hand Wash Only',
      },
      {
        //_id: '1',
        name: 'Nike Sli ',
        slug: 'nike-shir',
        category: 'Shi',
        image: '/images/p6.jpg', // 679px × 829px
        price: 100,
        countInStock: 10,
        brand: 'Nikee',
        rating: 5,
        numReviews: 10,
        description: 'Care Instructions: Hand Wash Only',
      },
      
      {
        //_id: '1',
        name: 'Silk Saree ',
        slug: 'Silk Saree',
        category: 'Shoiis',
        image: '/images/p9.jpg', // 679px × 829px
        price: 221,
        countInStock: 10,
        brand: 'Nikiwes',
        rating: 4.5,
        numReviews: 22,
        description: 'Care Instructions: Hand Wash Only',
      },
      {
        //_id: '1',
        name: 'Nike Slicisa ',
        slug: 'nike-shiiirsa',
        category: 'Shoiisa',
        image: '/images/p10.jpg', // 679px × 829px
        price: 222,
        countInStock: 11,
        brand: 'Nikiwesa',
        rating: 4,
        numReviews: 23,
        description: 'Care Instructions: Hand Wash Only',
      },
      {
        //_id: '1',
        name: 'Nike Slicisar ',
        slug: 'nike-shiiirsar',
        category: 'Shoiisar',
        image: '/images/p11.jpg', // 679px × 829px
        price: 223,
        countInStock: 13,
        brand: 'Nikiwesar',
        rating: 3,
        numReviews: 24,
        description: 'Care Instructions: Hand Wash Only',
      },
      {
        //_id: '1',
        name: 'pattuchira ',
        slug: 'pattuchira',
        category: 'Shoiisari',
        image: '/images/p12.jpg', // 679px × 829px
        price: 224,
        countInStock: 14,
        brand: 'Nikiwesari',
        rating: 4,
        numReviews: 25,
        description: 'Care Instructions: Hand Wash Only',
      },
      {
        //_id: '1',
        name: 'Girl Full Length Sequin Work Gown Dress ',
        slug: 'Girl-Full-Length-Sequin-Work-Gown-Dress',
        category: 'kids',
        image: '/images/p13.jpg', // 679px × 829px
        price: 225,
        countInStock: 15,
        brand: 'Nikiwesarik',
        rating: 5,
        numReviews: 26,
        description: 'Care Instructions: Hand Wash Only ',
       
        
      },
      {
        //_id: '1',
        name: 'Nike Slicisariki ',
        slug: 'nike-shiiirsariki',
        category: 'Shoiisariki',
        image: '/images/p14.jpg', // 679px × 829px
        price: 226,
        countInStock: 16,
        brand: 'Nikiwesariki',
        rating: 4,
        numReviews: 27,
        description: 'Care Instructions: Hand Wash Only',
      },
      {
        //_id: '1',
        name: 'Nike Slicisarikid ',
        slug: 'nike-shiiirsarikid',
        category: 'Shoiisarikid',
        image: '/images/p15.jpg', // 679px × 829px
        price: 227,
        countInStock: 17,
        brand: 'Nikiwesarikid',
        rating: 4.5,
        numReviews: 28,
        description: 'Care Instructions: Hand Wash Only',
      },
      {
        //_id: '1',
        name: 'Culture Creation Kids Cotton Indian Army Dress',
        slug: 'Culture Creation Kids Cotton Indian Army Dress',
        category: 'Shoiisarikids',
        image: '/images/p16.jpg', // 679px × 829px
        price: 228,
        countInStock: 18,
        brand: 'Nikiwesarikids',
        rating: 4,
        numReviews: 29,
        description: 'Care Instructions: Hand Wash Only',
      },
      
      
    ],
  };
  export default data;