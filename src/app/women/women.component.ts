import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-women',
  standalone: true,
  imports: [FooterComponent,NgFor,RouterLink,RouterLinkActive],
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {

  category = [
    { id: 'tops', name: 'Tops', count: 440 },
    { id: 'shirts', name: 'Shirts', count: 320 },
    { id: 'jeans', name: 'Jeans', count: 210 },
    { id: 'jackets', name: 'Jackets', count: 150 },
    { id: 'skirts', name: 'Skirts', count: 120 },
    { id: 'dresses', name: 'Dresses', count: 200 },
    { id: 'shorts', name: 'Shorts', count: 180 },
    { id: 'sweaters', name: 'Sweaters', count: 95 },
    { id: 'hoodies', name: 'Hoodies', count: 160 },
    { id: 'blazers', name: 'Blazers', count: 75 },
    { id: 'leggings', name: 'Leggings', count: 140 },
    { id: 'jumpsuits', name: 'Jumpsuits', count: 85 },
    { id: 'ethnic_wear', name: 'Ethnic Wear', count: 210 },
    { id: 'sportswear', name: 'Sportswear', count: 300 },
    { id: 'activewear', name: 'Activewear', count: 220 },
    { id: 'footwear', name: 'Footwear', count: 410 },
    { id: 'accessories', name: 'Accessories', count: 250 },
    { id: 'sunglasses', name: 'Sunglasses', count: 190 },
    { id: 'watches', name: 'Watches', count: 130 },
    { id: 'bags', name: 'Bags', count: 280 },
  ];
  



  brand = [
    { id: 'nike', name: 'Nike', count: 540 },
    { id: 'adidas', name: 'Adidas', count: 480 },
    { id: 'puma', name: 'Puma', count: 450 },
    { id: 'zara', name: 'Zara', count: 420 },
    { id: 'hm', name: 'H&M', count: 400 },
    { id: 'levis', name: 'Levi’s', count: 390 },
    { id: 'gucci', name: 'Gucci', count: 350 },
    { id: 'versace', name: 'Versace', count: 320 },
    { id: 'armani', name: 'Armani', count: 310 },
    { id: 'reebok', name: 'Reebok', count: 300 },
    { id: 'uniqlo', name: 'Uniqlo', count: 290 },
    { id: 'calvin_klein', name: 'Calvin Klein', count: 280 },
    { id: 'tommy_hilfiger', name: 'Tommy Hilfiger', count: 270 },
    { id: 'ralph_lauren', name: 'Ralph Lauren', count: 260 },
    { id: 'gap', name: 'Gap', count: 250 },
    { id: 'fendi', name: 'Fendi', count: 240 },
    { id: 'prada', name: 'Prada', count: 230 },
    { id: 'louis_vuitton', name: 'Louis Vuitton', count: 220 },
    { id: 'burberry', name: 'Burberry', count: 210 },
    { id: 'bata', name: 'Bata', count: 200 },
  ];
  

  

   products = [
    {
      id: 'tops1',
      name: 'ONLY',
      link: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTjTR3B9kefHz_Wjn40nRP5Q7o2aSotHA7mXfqqjmLn1kWTyzDaBSxOVCyyADvhjCfiUwXoQXM44jfl512eH2kfj9XfN2t86tCCv5kkq7-aXsxa-QoUjVwC9w',
      type: 'Casual Top',
      price: '499',
      stricked_price: '999',
      discount: '50%',
      rating: 4.2,
      no_of_ratings: 250,
      description: 'This trendy casual top from ONLY is designed for everyday comfort and style. Made from soft fabric, it ensures a relaxed fit with breathable material. The simple yet elegant design makes it perfect for casual outings or layering. Pair it with jeans or skirts for a versatile look. Available at an affordable price, offering great value for fashion lovers.'
    },
    {
      id: 'tops2',
      name: 'VERO MODA',
      link: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTIIB3lyPBPsbmt12AkNkITKQbnSSS1ONjff1cERK3Z3j1O9E7yWtDLW2dqEj3bgvoimljK0-gHRPvGc_-N-C84qVv5yHUvOErjIme9QlIy8mRqUQ7M-wUn&usqp=CAc',
      type: 'Printed Blouse',
      price: '799',
      stricked_price: '1599',
      discount: '50%',
      rating: 4.5,
      no_of_ratings: 180,
      description: 'A chic printed blouse from VERO MODA, ideal for both casual and office wear. Crafted from premium fabric, it provides a soft and breathable feel throughout the day. The stylish floral prints and modern fit make it a standout choice. It features a button-up front and elegant sleeve design for a sophisticated look. Get a perfect mix of fashion and comfort in one trendy piece.'
    },
    {
      id: 'tops3',
      name: 'ZARA',
      link: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTFT2I5KFTwEVRi5g0TCQLoYkvnyH88Qjcp1FmVov8AHF6hF8K1xiiDF_151p1DTqM8QThBIZFF_1hTqUrJJBUZH6p-OCFAbNNmj0Qm_xBv5503gOQy8vpLIQ',
      type: 'Off-Shoulder Top',
      price: '1299',
      stricked_price: '1999',
      discount: '35%',
      rating: 4.3,
      no_of_ratings: 320,
      description: 'Stay fashionable with this off-shoulder top from ZARA, perfect for parties and casual outings. Designed with premium fabric, it offers a soft touch and comfortable fit. The off-shoulder style adds a trendy, elegant look, making it great for a summer outfit. Pair it with high-waist jeans or skirts for a chic statement. A must-have for those who love modern, stylish fashion.'
    },
    {
      id: 'tops4',
      name: 'H&M',
      link: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQUseraSvE23_bXnzkILyk2oXlNZ0J3BQ5e4--dBCxOgS5Qoyi-XhtFKQNvu_mpgn59qvYtFjjKViWoAaNY0RqTei9It4lN6Zzf4HTStzo',
      type: 'Basic Tee',
      price: '399',
      stricked_price: '599',
      discount: '33%',
      rating: 4.1,
      no_of_ratings: 150,
      description: 'This classic tee from H&M is a must-have wardrobe essential. Made with high-quality cotton, it ensures breathability and durability. The simple yet stylish design makes it easy to pair with any outfit. Perfect for everyday wear, this tee is ideal for casual, sporty, or laid-back looks.'
    },
    {
      id: 'tops5',
      name: "LEVI'S",
      link: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRXfw2W2xbzozTRlhi63jbmhf_X0VF8aE1VehOI6kAtkEEstDciHVf2VOLtHkIzFgS6vZACtrDhVxxvfJS9GwQFoWfZEYBnPk6Iu6P7iSE',
      type: 'Denim Shirt',
      price: '1499',
      stricked_price: '2499',
      discount: '40%',
      rating: 4.6,
      no_of_ratings: 280,
      description: "The timeless denim shirt from LEVI'S offers a rugged yet stylish look. Made from premium denim fabric, it provides a perfect balance of comfort and durability. The button-down design allows it to be styled in multiple ways, whether tucked in or worn as a jacket. Ideal for casual wear, this shirt pairs well with jeans or chinos. A great addition for anyone who loves classic denim fashion."
    },


   {
    id: 'tops6',
    name: 'MANGO',
    link: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSzR9b717pg7XZoNNmtyA8KuQsG-DQBQa6G5O9_eRLm0sKNCY_Z_SmMcdKSXjaX54ZiWl1GPI4XO9FXjQm1kp3qFHypN9Q6Uwgx1EBTPfAE',
    type: 'Chiffon Top',
    price: '899',
    stricked_price: '1799',
    discount: '50%',
    rating: 4.4,
    no_of_ratings: 200,
    description: 'This elegant chiffon top from MANGO is perfect for a lightweight and breezy feel. The flowy design gives a chic and sophisticated look for casual or office wear. Its soft fabric ensures comfort all day long. Pair it with jeans, trousers, or skirts for a fashionable appearance. A must-have for those who love graceful and stylish outfits.'
  },
  {
    id: 'tops7',
    name: 'GUCCI',
    link: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRBV0mk0Lpj-STqTZbqCOE2nLbKKsRKITlxvlR5VyGX5z1ZppY8JFodVxt9tst7ElVSQXEtb2UuY9fHO2ioff7SU0GQQoJm0BvJU6CeHVQRu46PqHUqKHVA',
    type: 'Designer Top',
    price: '4599',
    stricked_price: '5599',
    discount: '18%',
    rating: 4.8,
    no_of_ratings: 100,
    description: 'Elevate your wardrobe with this exclusive designer top from GUCCI. Crafted with premium fabric, it offers unmatched comfort and a high-fashion appeal. The sleek and modern silhouette makes it perfect for special occasions. Pair it with stylish trousers or a skirt for a luxurious statement look. A must-have for those who love sophisticated and elite fashion.'
  },
  {
    id: 'tops8',
    name: 'PRADA',
    link: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSsn_AmAfafnBAtztlVwqxFih3Lqpcf1vUBQR3TXd8DrlZOF9MVrKNNM8SnuNegR3uLt6xlIDmYXpO-zwMsTd4ccp1fJDRS2qGzzSp5YLLi-JiaFig7Ps0qkA',
    type: 'Luxury Blouse',
    price: '5999',
    stricked_price: '7999',
    discount: '25%',
    rating: 4.9,
    no_of_ratings: 120,
    description: 'PRADA’s luxury blouse is the perfect blend of elegance and comfort. Made from premium materials, it offers a sophisticated yet effortless look. Ideal for formal occasions, it pairs beautifully with trousers or a skirt. The sleek and modern design makes it a timeless addition to your wardrobe. Feel confident and stylish with this high-end fashion piece.'
  },
  {
    id: 'tops9',
    name: 'FENDI',
    link: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS4z0T98glA7v97eV_tqkmJaAnz1n4A_1h2VqEJyPHH0EzL3O8rq3ny2TNXjR4sTrFpxt3UcvLVoe61dZyFh4_sTJGhF9bEfgptr-iv_eudrgriHOA5Xblb',
    type: 'Crop Top',
    price: '1699',
    stricked_price: '2099',
    discount: '20%',
    rating: 4.2,
    no_of_ratings: 210,
    description: 'This stylish crop top from FENDI is designed for a bold and trendy look. Crafted from high-quality fabric, it offers superior comfort and a sleek fit. Perfect for casual wear, pair it with high-waist jeans or shorts for a chic ensemble. The modern design makes it a must-have for fashion-forward individuals. Stay ahead in style with this eye-catching piece.'
  },
  {
    id: 'tops10',
    name: 'NIKE',
    link: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTdVz6p4scEG585Y1PDMAxAN8aT8PDsHvyzxvlD_hMcgTwCTmoteORQxWhZEQJlKf5RX7ySOEATTrlgRJ4DOzSyfRbXlPqTtFZdubRzIW_jQXytU4idWEq-',
    type: 'Athletic Tee',
    price: '999',
    stricked_price: '1299',
    discount: '23%',
    rating: 4.3,
    no_of_ratings: 300,
    description: 'NIKE’s athletic tee is designed for high-performance workouts and casual wear. Made with moisture-wicking fabric, it keeps you cool and dry during physical activities. The lightweight material offers maximum comfort and breathability. Perfect for sports, gym sessions, or everyday casual wear. Stay active and stylish with this performance-driven tee.'
  },
  {
    id: 'tops11',
    name: 'ADIDAS',
    link: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQHyp_uwsCibQfDmtg_4dejs2mNETbpfF-vSPY-72Xh1hIJi9K9mFX7SmnhD1QiOIxWZM7hzQwifYRPc3-gtTJes6tp9c28DOpGGgJEpX6R',
    type: 'Sports Top',
    price: '1099',
    stricked_price: '1499',
    discount: '27%',
    rating: 4.3,
    no_of_ratings: 920,
    description: 'Stay fit and comfortable with this sports top from ADIDAS. Made with breathable and stretchable fabric, it offers ease of movement during workouts. The sleek design ensures a stylish look both in and out of the gym. Ideal for running, training, or casual sportswear. A great choice for those who love active and performance-driven fashion.'
  },
  {
    id: 'tops12',
    name: 'PUMA',
    link: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR9hPfyPHmKRlbTlUNfRShiXEv4XCrScDM3tkkgTljR5IaDAeUvkJByRUmFAPDJvYGtF1DAvP1cG1608GsaDdemAbqTFyNs0GJZyxy7vOax',
    type: 'Performance Tee',
    price: '799',
    stricked_price: '1299',
    discount: '38%',
    rating: 4.5,
    no_of_ratings: 1120,
    description: 'PUMA’s performance tee is designed for athletes and fitness enthusiasts. It features quick-dry technology to keep you cool and comfortable during workouts. The lightweight fabric offers excellent breathability and flexibility. Great for gym training, jogging, or casual activewear. Stay motivated and stylish with this top-tier sports tee.'
  },
  {
    id: 'tops13',
    name: 'FOREVER 21',
    link: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT5SW9jsHNMWzfJkFrQSiMgWtosF6iHTEbmFqSY8dZc_zLpRpWdp1NlvWleVqP3dtkjgY6fx-iRqbYvWlZKUjXfGhM_jyXjx4qohklZyZRZs0Ov35g45xoF',
    type: 'Graphic Tee',
    price: '599',
    stricked_price: '899',
    discount: '33%',
    rating: 4.0,
    no_of_ratings: 780,
    description: 'Express your personality with this trendy graphic tee from FOREVER 21. Made from soft cotton fabric, it provides all-day comfort. The eye-catching design and vibrant print make it a standout piece. Ideal for casual wear, pair it with jeans or shorts for a relaxed look. A must-have for those who love bold and fun fashion choices.'
  },
  {
    id: 'tops14',
    name: 'TOMMY HILFIGER',
    link: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTT4EpR72BDvKnQUOsNeu4gsPi_cNV50faVEJoJ3FH7x0hnp2uYGBUoBRstRCrXA5h4eVrgIvppxhKCQNcxIlFn4r7t4EbF--T-gImPOrRX',
    type: 'Classic Polo',
    price: '1399',
    stricked_price: '1999',
    discount: '30%',
    rating: 4.6,
    no_of_ratings: 630,
    description: 'This classic polo from TOMMY HILFIGER is perfect for casual and semi-formal occasions. Made from premium cotton fabric, it offers superior comfort and durability. The timeless design with signature branding makes it a versatile choice. Pair it with chinos or jeans for a polished yet relaxed look. A must-have staple for an effortlessly stylish wardrobe.'
  },
  {
    id: 'tops15',
    name: 'BURBERRY',
    link: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQdsL9IPhQ3jogEripgwWVIw4jwfaAfLewLUoO0g7n7__nYUGciMRshr6jslTEq-9fXLKU0c_WVebUy7OUOsHSIN7A7RwKhMF0x88NeUOo',
    type: 'Plaid Shirt',
    price: '4599',
    stricked_price: '5999',
    discount: '23%',
    rating: 4.8,
    no_of_ratings: 500,
    description: 'Stay effortlessly stylish with this premium plaid shirt from BURBERRY. Made with high-quality fabric, it provides a comfortable fit for all-day wear. The classic checkered pattern adds a timeless touch to your wardrobe. Ideal for casual and smart-casual occasions, pair it with trousers or denim. A luxurious addition for those who appreciate refined fashion.'
  },
  {
    id: 'tops16',
    name: 'CALVIN KLEIN',
    link: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTlznKrjiUz_m21GsfgkG6x6uxhSt-4mu9X1MTzc45ygfLkx8BLUkWEvCnvk1JyCUZJLGwUjGPsNhnsTyjtiPGDvngScdsq_6rtG8f8DYnU1HQXX4y4fwl5ZA',
    type: 'V-Neck Tee',
    price: '999',
    stricked_price: '1499',
    discount: '33%',
    rating: 4.4,
    no_of_ratings: 1040,
    description: 'Upgrade your everyday essentials with this stylish V-neck tee from CALVIN KLEIN. Made with soft, breathable fabric, it ensures superior comfort. The classic fit and minimal branding make it easy to style with any outfit. Perfect for casual wear, layer it under a jacket or wear it solo. A must-have for those who appreciate effortless elegance.'
  },
  {
    id: 'tops17',
    name: 'ARMANI',
    link: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTE0zvCBrF-849Qoyc_Nm7vXbwld7NdwcoqRYyuodpCOTGcLcmkM_WnhCp92Uk-w6QcBPaxxYLVnFReQHPOEgOUmXEm8AjRYGPFE5Qerq2wUwnZ0V_O3PtEUqY',
    type: 'Silk Blouse',
    price: '2999',
    stricked_price: '3999',
    discount: '25%',
    rating: 4.7,
    no_of_ratings: 890,
    description: 'This luxurious silk blouse from ARMANI exudes elegance and sophistication. Made from premium silk, it offers a smooth and comfortable feel. The minimalist yet classy design makes it perfect for formal and semi-formal occasions. Pair it with tailored trousers or a pencil skirt for a refined look. A wardrobe essential for those who love timeless fashion.'
  },
  {
    id: 'tops18',
    name: 'RALPH LAUREN',
    link: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTQ-Ea3K72OlgQtgKL7SSvKGYDUqN1PxGII12LMVrSqWg6GYq_iOLgkQVSWvnXxNOZJCYU7r79V5mTLmRd6jt9bKJYWF5m2UibVJeO5M1HygQri9YRROtPe0w',
    type: 'Button-Up Shirt',
    price: '1899',
    stricked_price: '2399',
    discount: '21%',
    rating: 4.1,
    no_of_ratings: 710,
    description: 'This button-up shirt from RALPH LAUREN brings sophistication to your everyday wardrobe. Made with premium cotton fabric, it offers breathability and comfort. The tailored fit provides a sharp, polished look suitable for various occasions. Ideal for business casual or smart-casual styling. A timeless piece that ensures effortless elegance.'
  },
  {
    id: 'tops19',
    name: 'DIOR',
    link: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRu3wK-v94x4lw-vmQGyd3tlXqqx0HOlPdnYn5PQAS9MOKvfE2jbnq15rgEG0A6-HCo3l2MrAaAExcpR17IIaNkDU4TxKk-nl4DaOO-wdR-2MR0429K74jg',
    type: 'Luxury Top',
    price: '5999',
    stricked_price: '7499',
    discount: '20%',
    rating: 4.9,
    no_of_ratings: 410,
    description: 'Make a statement with this exquisite luxury top from DIOR. Crafted from the finest fabrics, it provides unparalleled elegance and comfort. The sleek design and attention to detail ensure a sophisticated look. Perfect for high-end events or elegant evening wear. A must-have piece for those who appreciate premium fashion.'
  },
  {
    id: 'tops20',
    name: 'SASSAFRAS',
    link: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS8-tuS0iULft8FpGEAryfmNGTriaSqsP9utFD56YkF9ReIHHkiqRJGR5mZADoFevayQR5-0QRkGO31iGGsRgqzjNlCpZaoAJiOnAag-Fs',
    type: 'High Neck Top',
    price: '399',
    stricked_price: '999',
    discount: '60%',
    rating: 4.2,
    no_of_ratings: 670,
    description: 'This high-neck top from SASSAFRAS is a trendy addition to your wardrobe. Made with soft and stretchable fabric, it ensures both style and comfort. The sleek silhouette makes it perfect for layering or standalone wear. Pair it with jeans or skirts for a chic look. A stylish must-have for fashion enthusiasts.'
  }
  ];
  
  discount = [
    { id: '10-plus', value: '10% and Above' },
    { id: '20-plus', value: '20% and Above' },
    { id: '30-plus', value: '30% and Above' },
    { id: '40-plus', value: '40% and Above' },
    { id: '50-plus', value: '50% and Above' },
    { id: '60-plus', value: '60% and Above' },
    { id: '70-plus', value: '70% and Above' },
    { id: '80-plus', value: '80% and Above' },
    { id: '90-plus', value: '90% and Above' },
    { id: '100-plus', value: '100% and Above' },
  ];

  color = [
    { id: 'red', name: 'Red' },
    { id: 'blue', name: 'Blue' },
    { id: 'green', name: 'Green' },
    { id: 'yellow', name: 'Yellow' },
    { id: 'black', name: 'Black' },
    { id: 'white', name: 'White', border:'2px solid #f2f2f2' },
    { id: 'pink', name: 'Pink' },
    { id: 'purple', name: 'Purple' },
    { id: 'orange', name: 'Orange' },
    { id: 'brown', name: 'Brown' },
    { id: 'grey', name: 'Grey' },
    { id: 'cyan', name: 'Cyan' },
    { id: 'magenta', name: 'Magenta' },
    { id: 'teal', name: 'Teal' },
    { id: 'lime', name: 'Lime' },
    { id: 'maroon', name: 'Maroon' },
    { id: 'navy', name: 'Navy' },
    { id: 'gold', name: 'Gold' },
    { id: 'silver', name: 'Silver' },
    { id: 'beige', name: 'Beige' },
  ];
  

  sizes = {
    size_xs: [
      { id: 'xs', name: 'Extra Small', bust: 32, waist: 26, hip: 36, us: 'us-4', uk: 'uk-8', aus: 'aus-9', nz: 'nz-7', eu: 'eu-36' },
    ],
    size_s: [
      { id: 's', name: 'Small', bust: 34, waist: 28, hip: 38, us: 'us-6', uk: 'uk-10', aus: 'aus-10', nz: 'nz-9', eu: 'eu-38' },
    ],
    size_m: [
      { id: 'm', name: 'Medium', bust: 36, waist: 30, hip: 40, us: 'us-8', uk: 'uk-12', aus: 'aus-12', nz: 'nz-11', eu: 'eu-40' },
    ],
    size_l: [
      { id: 'l', name: 'Large', bust: 38, waist: 32, hip: 42, us: 'us-10', uk: 'uk-14', aus: 'aus-14', nz: 'nz-13', eu: 'eu-42' },
    ],
    size_xl: [
      { id: 'xl', name: 'Extra Large', bust: 40, waist: 34, hip: 44, us: 'us-12', uk: 'uk-16', aus: 'aus-16', nz: 'nz-15', eu: 'eu-44' },
    ],
    size_xxl: [
      { id: 'xxl', name: 'Double Extra Large', bust: 42, waist: 36, hip: 46, us: 'us-14', uk: 'uk-18', aus: 'aus-18', nz: 'nz-17', eu: 'eu-46' },
    ],
    ddplus1: [
      { id: 'ddplus1', name: 'DDPlus 1', bust: '42 to 44', waist: '37 to 39', hip: '44', us: 'us-16', uk: 'uk-20', aus: 'aus-20', nz: 'nz-19', eu: 'eu-48' },
    ],
    ddplus2: [
      { id: 'ddplus2', name: 'DDPlus 2', bust: '45 to 47', waist: '40 to 42', hip: '46 to 48', us: 'us-18', uk: 'uk-22', aus: 'aus-22', nz: 'nz-21', eu: 'eu-50' },
    ],
    ddplus3: [
      { id: 'ddplus3', name: 'DDPlus 3', bust: '48 to 50', waist: '42 to 44', hip: '48 to 50', us: 'us-20', uk: 'uk-24', aus: 'aus-24', nz: 'nz-23', eu: 'eu-52' },
    ],
    ddplus4: [
      { id: 'ddplus4', name: 'DDPlus 4', bust: '51 to 53', waist: '44 to 47', hip: '50 to 52', us: 'us-22', uk: 'uk-26', aus: 'aus-26', nz: 'nz-25', eu: 'eu-54' },
    ],
    ddplus5: [
      { id: 'ddplus5', name: 'DDPlus 5', bust: '54 to 56', waist: '47 to 50', hip: '52 to 54', us: 'us-24', uk: 'uk-28', aus: 'aus-28', nz: 'nz-27', eu: 'eu-56' },
    ],
    ddplus6: [
      { id: 'ddplus6', name: 'DDPlus 6', bust: '56 to 58', waist: '51 to 52', hip: '55 to 57', us: 'us-26', uk: 'uk-30', aus: 'aus-30', nz: 'nz-29', eu: 'eu-58' },
    ],
  };
    

  imgUrl = ''
  imgName = ''
  imgType = ''
  imgPrice = ''
  imgRating = ''
  imgStrkPrice = ''
  imgDiscount = ''
  imgDesc = ''
  imgNoofRatings = ''
  ViewImage(item: any) {
    this.imgUrl = item.link;
    this.imgName = item.name;
    this.imgPrice = item.price;
    this.imgDiscount = item.discount;
    this.imgRating = item.rating;
    this.imgNoofRatings = item.no_of_ratings;
    this.imgDesc = item.description;
    this.imgStrkPrice = item.stricked_price;
    this.imgType = item.type;
  
  
  
    
    // console.log({
    //   imgUrl: this.imgUrl,
    //   imgName: this.imgName,
    //   imgType: this.imgType,
    //   imgPrice: this.imgPrice,
    //   imgRating: this.imgRating,
    //   imgStrkPrice: this.imgStrkPrice,
    //   imgDiscount: this.imgDiscount,
    //   imgDesc: this.imgDesc,
    //   imgNoofRatings: this.imgNoofRatings
    // });
  }
  
  }