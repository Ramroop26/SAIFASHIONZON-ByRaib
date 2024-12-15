const products = [
  {
    id: 1,
    name: "Neck Sleeveless",
    description: " Embellished Maxi Dress for Women",
    price: 599,
    gender: "women",
    type: "shirt",
    img: "https://image.ibb.co/kOhL6k/img1.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 2,
    name: "Light Net Fabric Saree",
    description: "Light Brown Shirt for Women",
    price: 799,
    gender: "women",
    type: "shirt",
    img: "https://m.media-amazon.com/images/I/81N2nYcWDiL._SY741_.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 3,
    name: "Women Grey Shirt",
    description: "Grey Shirt for Women",
    price: 1499,
    gender: "649",
    type: "shirt",
    img: "https://image.ibb.co/n6iMCQ/img3.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 4,
    name: "Warm Shirt Women",
    description: "Woolen Hoodie Women",
    price: 299,
    gender: "women",
    type: "shirt",
    img: "https://image.ibb.co/dVfORk/img4.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 5,
    name: "Women Grey Shirt",
    description: "Light Grey Shirt for Women",
    price: 499,
    gender: "women",
    type: "shirt",
    img: "https://image.ibb.co/jpMxmk/img5.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 6,
    name: "Women Red/Brown Shirt",
    description: "Red/Brown Blouse for Women",
    price: 999,
    gender: "women",
    type: "blouse",
    img: "https://image.ibb.co/mJppz5/img6.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 7,
    name: "Dark Grey Shirt Women",
    description: "Dark Grey Shirt for Women",
    price: 600,
    gender: "women",
    type: "shirt",
    img: "https://image.ibb.co/eZiSmk/img7.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 8,
    name: "White Shirt Women",
    description: "White Shirt for Women",
    price: 1499,
    gender: "women",
    type: "shirt",
    img: "https://image.ibb.co/dyCysQ/img8.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 9,
    name: "Black Shirt Women",
    description: "Black Shirt for Women",
    price: 299,
    gender: "women",
    type: "shirt",
    img: "https://image.ibb.co/eOYre5/img10.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 10,
    name: "No Shoulder Hoodie",
    description: "Hoodie for Women",
    price: 499,
    gender: "women",
    type: "shirt",
    img: "https://image.ibb.co/f6gcK5/img9.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 11,
    name: "Women Banarasi Silk",
    description: "MANOHARI Banarasi Silk Traditional saree Women",
    price: 699,
    gender: "women",
    type: "watch",
    img: "https://m.media-amazon.com/images/I/61Mx5CNwjgL._SY741_.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 12,
    name: "Chinon Solid Saree",
    description: "Chinon Solid Saree Dhruva-New for Women",
    price: 749,
    gender: "women",
    type: "necklace",
    img: "https://m.media-amazon.com/images/I/61I75DAAGeL._SY741_.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 12,
    name: "Chinon Solid Saree",
    description: "Chinon Solid Saree Dhruva-New for Women",
    price: 4549,
    gender: "women",
    type: "necklace",
    img: "https://cdn.handmadelovebytanya.com/hmlmain/products/66752caba68c8437ca9d5f04/P-15903-Sh3MS.jpeg",
    inCart: false,
    category: "women"
  },
  
  {
    id: 13,
    name: "Man Black Shirt",
    description: "Black T-Shirt for Men",
    price: 280,
    gender: "men",
    type: "shirt",
    img: "http://media.istockphoto.com/photos/smiling-young-man-in-blank-black-tshirt-picture-id464946525?k=6&m=464946525&s=612x612&w=0&h=KAjCFoJGDcFcx8R33Tq1vzqbfixh1XwGpFeiRNoTkRQ=",
    inCart: false,
    category: "accessories"
  },
  {
    id: 14,
    name: "Man Grey Tanktop",
    description: "Grey Tanktop for Men",
    price: 299,
    gender: "men",
    type: "shirt",
    img: "http://media.istockphoto.com/photos/portrait-of-young-man-wearing-tshirt-picture-id465207699?k=6&m=465207699&s=612x612&w=0&h=wSacC0bmcrekig1DW8lOwH7y3X0e4R9266-TuivVQJA=",
    inCart: false,
    category: "accessories"
  },
  {
    id: 15,
    name: "Man White Shirt",
    description: "White Shirt for Men",
    price: 399,
    gender: "men",
    type: "shirt",
    img: "http://media.istockphoto.com/photos/young-man-wearing-a-white-shirt-picture-id465331977?k=6&m=465331977&s=612x612&w=0&h=-K3c5eE2dZGmg6d5BrBfxOvcHRP7PwHrylyjuEVjbZo=",
    inCart: false,
    category: "accessories"
  },
  {
    id: 16,
    name: "Man Brown T-Shirt",
    description: "Brown T-Shirt for Men",
    price: 300,
    gender: "men",
    type: "shirt",
    img: "http://media.istockphoto.com/photos/young-man-looks-to-the-side-picture-id184616842?k=6&m=184616842&s=612x612&w=0&h=SmtsffRByKDH4_HtzGY8bWvHgH8o_4epWVPogvfJXnk=",
    inCart: false,
    category: "accessories"
  },
  {
    id: 17,
    name: "Unisex Hoodie Sweatshire",
    description: "Hodie Unisex for Men",
    price: 499,
    gender: "men",
    type: "tie",
    img: "https://m.media-amazon.com/images/I/61YsJRbsU0L._SY741_.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 18,
    name: "Black T-Shirt Men",
    description: "T-Shirt for Men",
    price: 410,
    gender: "men",
    type: "shirt",
    img: "http://media.istockphoto.com/photos/smiling-man-in-a-black-t-shirt-picture-id520883622?k=6&m=520883622&s=612x612&w=0&h=XuxfQE0EOo_uWqA8SzNJvZ9Vn-sKR_cT4J9GRIudE4U=",
    inCart: false,
    category: "accessories"
  },
  {
    id: 19,
    name: "Max Solid Slim Fit T-shirt",
    description: " Max Men's Solid for Men",
    price: 399,
    gender: "men",
    type: "tie",
    img: "https://m.media-amazon.com/images/I/81vHlgI1+dL._SX569_.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 20,
    name: "Cotton Rich Polo T-Shirt",
    description: "Mandarin Collar T-shirts for Men",
    price: 399,
    gender: "men",
    type: "tie",
    img: "https://m.media-amazon.com/images/I/712XTTg1j6L._SX569_.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 21,
    name: "Neck Blouson Sweater",
    description: "Neck Blouson Sweater For Man",
    price: 699,
    gender: "men",
    type: "tie",
    img: "https://m.media-amazon.com/images/I/81ZihcbKhfL._SY550_.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 22,
    name: "Formal Tuxedo Shirte",
    description: "Cotton Solid Formal Tuxedo Shirt for Men",
    price: 3059,
    gender: "men",
    type: "tie",
    img: "https://m.media-amazon.com/images/I/51SwBO4+fnL._SY550_.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 23,
    name: "Man Fit Shirt",
    description: "Fit Shirt for Men",
    price: 2999,
    gender: "men",
    type: "tie",
    img: "https://m.media-amazon.com/images/I/51CU9SGMDIL._SY550_.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 24,
    name: "Man Matching Printed Cotton T-shirt",
    description: "Matching Printed Cotton T-shirt for Men",
    price: 599,
    gender: "men",
    type: "tie",
    img: "https://m.media-amazon.com/images/I/61ujE+SnrfL._SX522_.jpg",
    inCart: false,
    category: "accessories"
  },
  

  
];

export default products;
