import sale from "../assets/sale.avif";
import sale2 from "../assets/sale2.webp";
import sale3 from "../assets/sale3.jpg";
import male1 from "../assets/man.jpg";
import male2 from "../assets/man2.jpg";
import female1 from "../assets/woman.webp";
import female2 from "../assets/woman2.jpg";
import Ceo from "../assets/ceo.png";
import Customer from "../assets/team.avif";
import Accounter from "../assets/team2.jpg";
import Agent from "../assets/team3.avif";
import Manager from "../assets/team4.jpg";
import Guard1 from "../assets/guard1.jpg";
import Guard2 from "../assets/guard2.jpg";
import Farrosh from "../assets/farrosh.jpg";

export const productsData = [
  {
    _id: 1,
    title: "Classic Hoodie",
    description: "A comfortable and stylish hoodie for daily wear.",
    category: "clothing",
    img: "https://cdn.shopify.com/s/files/1/0469/9894/5945/files/lvb_ttfd_hood_01_01_a_400x400.png?v=1747156668",
    colors: [
      {
        color: "black",
        img: "https://cdn.shopify.com/s/files/1/0469/9894/5945/files/lvb_ttfd_hood_01_01_a_400x400.png?v=1747156668",
      },
      {
        color: "gray",
        img: "https://cdn.shopify.com/s/files/1/0469/9894/5945/files/greyhood_01_01_a_400x400.png?v=1739297726",
      },
      {
        color: "blue",
        img: "https://readabookla.com/cdn/shop/files/READ_Hoodie.png?v=1732824399&width=1946",
      },
    ],
    like: false,
    count: 0,
    quantity: 20,
    rating: 4.5,
    price: 24.99,
  },
  {
    _id: 2,
    title: "Running Sneakers",
    description: "Lightweight sneakers perfect for running or casual use.",
    category: "shoes",
    img: "https://i.ebayimg.com/images/g/7pkAAOSwRuBnH8hC/s-l400.jpg",
    colors: [
      {
        color: "white",
        img: "https://i.ebayimg.com/images/g/7pkAAOSwRuBnH8hC/s-l400.jpg",
      },
      {
        color: "red",
        img: "https://thumblr.uniid.it/product/98896/7d1dcab00c74.jpg?width=3840&format=webp&q=75",
      },
      {
        color: "blue",
        img: "https://assets.soletrader.net/600x600/filters:fit()/dynamic/ZR01BLUE-2.jpg",
      },
    ],
    like: false,
    count: 0,
    quantity: 15,
    rating: 4.8,
    price: 42.49,
  },
  {
    _id: 3,
    title: "Leather Backpack",
    description: "Premium leather backpack for everyday carry.",
    category: "accessories",
    img: "https://res.cloudinary.com/wolfandbadger/image/upload/s---nRe0qu7--/products/t5ovewcsri33xy3eraol",
    colors: [
      {
        color: "brown",
        img: "https://mahileather.com/cdn/shop/products/personalised-brown-leather-backpack-with-side-pockets.jpg?v=1601299120",
      },
      {
        color: "black",
        img: "https://mahileather.com/cdn/shop/files/5300_BLK_Front.jpg?v=1730371103",
      },
      {
        color: "tan",
        img: "https://cdn11.bigcommerce.com/s-uiywfsyvbe/images/stencil/1280x1280/products/390/5497/5497__00510.1719595424.jpg?c=1",
      },
    ],
    like: false,
    count: 0,
    quantity: 10,
    rating: 4.3,
    price: 59.99,
  },
  {
    _id: 4,
    title: "Smart Watch",
    description: "Stay connected with this sleek smart watch.",
    category: "electronics",
    img: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg",
    colors: [
      {
        color: "black",
        img: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg",
      },
      {
        color: "silver",
        img: "https://cdn0.it4profit.com/s3size/rt:fill/w:900/h:900/g:no/el:1/f:webp/plain/s3://cms/product/81/f4/81f4095595752bd59e20d811a0b85869/250603160046374659.webp",
      },
      {
        color: "gold",
        img: "https://ir.ozone.ru/s3/multimedia-1-k/c400/7139409176.jpg",
      },
    ],
    like: false,
    count: 0,
    quantity: 8,
    rating: 4.7,
    price: 74.99,
  },
  {
    _id: 5,
    title: "Casual T-Shirt",
    description: "Soft and comfy t-shirt for everyday style.",
    category: "clothing",
    img: "https://www.houseofkids.pl/media/catalog/product/6/1/61e01e3d3f55acalvin_klein_Front_website.jpg",
    colors: [
      {
        color: "white",
        img: "https://www.houseofkids.pl/media/catalog/product/6/1/61e01e3d3f55acalvin_klein_Front_website.jpg",
      },
      {
        color: "black",
        img: "https://tboapp.topbrandoutlet.co.uk/uploads/product-fetured-image/wmsm-1-230723907470.webp",
      },
      {
        color: "navy",
        img: "https://images.squarespace-cdn.com/content/v1/5632062ae4b056714fc0a063/1616191080736-32FHCEW6KL69GUU6XFJK/NORTH%2BRISE%2BNAVY%2BJ.jpg?format=1500w",
      },
    ],
    like: false,
    count: 0,
    quantity: 25,
    rating: 4.2,
    price: 14.49,
  },
  {
    _id: 6,
    title: "Bluetooth Headphones",
    description: "High-quality sound with noise cancellation.",
    category: "electronics",
    img: "https://m.media-amazon.com/images/I/51-+O3-wFxL._AC_UF894,1000_QL80_.jpg",
    colors: [
      {
        color: "black",
        img: "https://m.media-amazon.com/images/I/51-+O3-wFxL._AC_UF894,1000_QL80_.jpg",
      },
      {
        color: "white",
        img: "https://www.srhythm.com/cdn/shop/files/B09H5MWT89.MAIN_1000x.jpg?v=1737342815",
      },
      {
        color: "red",
        img: "https://m.media-amazon.com/images/I/61VqlU3fDuL.jpg",
      },
    ],
    like: false,
    count: 0,
    quantity: 12,
    rating: 4.6,
    price: 39.95,
  },
  {
    _id: 7,
    title: "Leather Belt",
    description: "Elegant leather belt to complete your look.",
    category: "accessories",
    img: "https://azbelt.com/cdn/shop/products/DSC07205_cut.jpg?v=1613938576",
    colors: [
      {
        color: "brown",
        img: "https://azbelt.com/cdn/shop/products/DSC07205_cut.jpg?v=1613938576",
      },
      {
        color: "black",
        img: "https://www.hnwilliams.com/wp-content/uploads/2024/01/BLACK_305.jpg",
      },
      {
        color: "tan",
        img: "https://cdn11.bigcommerce.com/s-uiywfsyvbe/products/471/images/10892/10892__56320.1719596903.386.513.jpg?c=1",
      },
    ],
    like: false,
    count: 0,
    quantity: 18,
    rating: 4.4,
    price: 18.75,
  },
  {
    _id: 8,
    title: "Sports Water Bottle",
    description: "Stay hydrated during workouts and on the go.",
    category: "accessories",
    img: "https://5.imimg.com/data5/GT/EU/BE/SELLER-91744525/750-ml-stainless-steel-sports-water-bottle-500x500.jpg",
    colors: [
      {
        color: "blue",
        img: "https://5.imimg.com/data5/GT/EU/BE/SELLER-91744525/750-ml-stainless-steel-sports-water-bottle-500x500.jpg",
      },
      {
        color: "green",
        img: "https://media.istockphoto.com/id/1153731660/photo/green-sport-plastic-water-bottle-standing-3d.jpg?s=612x612&w=0&k=20&c=f290xq7-azGBEchpY6roT-ouG3VrpKwRGvhFfkMnZfI=",
      },
      {
        color: "black",
        img: "https://cdn.exesport.eu/images/0/92593c8a75a945a9/2/exel-eazy-bottle-black.jpg?hash=1978115031",
      },
    ],
    like: false,
    count: 0,
    quantity: 30,
    rating: 4.9,
    price: 9.99,
  },
  {
    _id: 9,
    title: "Winter Jacket",
    description: "Stay warm and stylish during cold seasons.",
    category: "clothing",
    img: "https://jasonbarret.com/cdn/shop/files/S20f5f5cec6884ada9acad8648be587015.webp?v=1737684166&width=1080",
    colors: [
      {
        color: "black",
        img: "https://jasonbarret.com/cdn/shop/files/S20f5f5cec6884ada9acad8648be587015.webp?v=1737684166&width=1080",
      },
      {
        color: "gray",
        img: "https://i.sportisimo.com/products/images/2148/2148127/700x700/columbia-powder-lite-ii-jacket_0.jpeg",
      },
      {
        color: "navy",
        img: "https://cdn-images.farfetch-contents.com/24/56/64/12/24566412_54583687_1000.jpg",
      },
    ],
    like: false,
    count: 0,
    quantity: 10,
    rating: 4.5,
    price: 89.99,
  },
  {
    _id: 10,
    title: "Yoga Mat",
    description: "Eco-friendly yoga mat with non-slip surface.",
    category: "accessories",
    img: "https://www.hirefitness.co.uk/wp-content/uploads/2021/12/yoga-purple.jpg",
    colors: [
      {
        color: "purple",
        img: "https://www.hirefitness.co.uk/wp-content/uploads/2021/12/yoga-purple.jpg",
      },
      {
        color: "green",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqSKqujVsyvIaJeCY5vA5MHXyh6lxvkFJ3gnKii19ELlr_06azVNHGbTwsMl1xculZXA&usqp=CAU",
      },
      {
        color: "blue",
        img: "https://www.oneills.com/media/catalog/product/cache/7c0093f75f453d86e7d165133c528de2/u/f/ufm100r-mat-blue-logo.jpg",
      },
    ],
    like: false,
    count: 0,
    quantity: 20,
    rating: 4.6,
    price: 22.99,
  },
  {
    _id: 11,
    title: "Denim Jeans",
    description: "Classic denim jeans with a modern fit.",
    category: "clothing",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjvpiVZ8ZNUoOJXCHbu0i3Gq5KJhccYws_Q&s",
    colors: [
      {
        color: "blue",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjvpiVZ8ZNUoOJXCHbu0i3Gq5KJhccYws_Q&s",
      },
      {
        color: "black",
        img: "https://cdn-images.farfetch-contents.com/30/02/99/95/30029995_59145100_1000.jpg",
      },
      {
        color: "gray",
        img: "https://non.eco/cdn/shop/products/non_relaxed-jean_grey_front.jpg?v=1685464979",
      },
    ],
    like: false,
    count: 0,
    quantity: 18,
    rating: 4.3,
    price: 34.99,
  },
  {
    _id: 12,
    title: "Fitness Tracker",
    description: "Track your steps, heart rate, and workouts.",
    category: "electronics",
    img: "https://www.svp.co.uk/user/products/large/217813_3108_143539.jpg",
    colors: [
      {
        color: "black",
        img: "https://www.svp.co.uk/user/products/large/217813_3108_143539.jpg",
      },
      {
        color: "pink",
        img: "https://www.gosupps.com/media/catalog/product/cache/25/small_image/1500x1650/9df78eab33525d08d6e5fb8d27136e95/6/1/61z9UKqEKBL.jpg",
      },
      {
        color: "blue",
        img: "https://m.media-amazon.com/images/I/61xjav9nweL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
    like: false,
    count: 0,
    quantity: 14,
    rating: 4.4,
    price: 49.99,
  },
  {
    _id: 13,
    title: "Beanie Hat",
    description: "Warm knit beanie for winter comfort.",
    category: "accessories",
    img: "https://media.rapha.cc/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_480,dpr_2.0/archive/amplience-image/LGB01XX_BLK_Product_H220_01",
    colors: [
      {
        color: "black",
        img: "https://media.rapha.cc/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_480,dpr_2.0/archive/amplience-image/LGB01XX_BLK_Product_H220_01",
      },
      {
        color: "gray",
        img: "https://cdn-images.farfetch-contents.com/25/76/45/11/25764511_55880250_600.jpg",
      },
      {
        color: "red",
        img: "https://heimplanet.com/cdn/shop/products/Heimplanet-Beanie-Short-Red-1.jpg?v=1664268549",
      },
    ],
    like: false,
    count: 0,
    quantity: 22,
    rating: 4.5,
    price: 12.99,
  },
  {
    _id: 14,
    title: "Sunglasses",
    description: "Stylish UV-protection sunglasses for any outfit.",
    category: "accessories",
    img: "https://www.dervin.in/cdn/shop/files/dervin-uv-protection-square-flat-lens-matte-frame-sunglasses-for-men-and-women-dervin-1.jpg?v=1720947730",
    colors: [
      {
        color: "black",
        img: "https://www.dervin.in/cdn/shop/files/dervin-uv-protection-square-flat-lens-matte-frame-sunglasses-for-men-and-women-dervin-1.jpg?v=1720947730",
      },
      {
        color: "brown",
        img: "https://shwoodshop.com/cdn/shop/files/CragClayArchesEngravedBrown_WC2C3ABP_02.jpg?v=1722008184&width=1080",
      },
      {
        color: "blue",
        img: "https://cdn11.bigcommerce.com/s-ae81c/images/stencil/1280x1280/attribute_rule_images/44142_source_1698943216.jpg",
      },
    ],
    like: false,
    count: 0,
    quantity: 25,
    rating: 4.6,
    price: 19.95,
  },
  {
    _id: 15,
    title: "Laptop Sleeve",
    description: "Protective and stylish sleeve for your laptop.",
    category: "electronics",
    img: "https://img.tvcmall.com/dynamic/uploads/details/740x740_610301476A-1.webp",
    colors: [
      {
        color: "gray",
        img: "https://img.tvcmall.com/dynamic/uploads/details/740x740_610301476A-1.webp",
      },
      {
        color: "black",
        img: "https://rivacase.com/images/virtuemart/product/7707_black.4260709010090.ver01.jpg",
      },
      {
        color: "navy",
        img: "https://rushfaster.co/cdn/shop/products/102_8caa78f5-f368-4517-b384-742d06f42d10_658x700.png?v=1679899148",
      },
    ],
    like: false,
    count: 0,
    quantity: 20,
    rating: 4.7,
    price: 27.5,
  },
  {
    _id: 16,
    title: "Flip Flops",
    description: "Perfect for beach and casual wear.",
    category: "shoes",
    img: "https://www.superga.com/cdn/shop/files/UBS111FIW___A03_d854d908-d8b5-4522-b7be-69a3fe142169.jpg?v=1714691611&width=1080",
    colors: [
      {
        color: "black",
        img: "https://www.superga.com/cdn/shop/files/UBS111FIW___A03_d854d908-d8b5-4522-b7be-69a3fe142169.jpg?v=1714691611&width=1080",
      },
      {
        color: "white",
        img: "https://www.superga.com/cdn/shop/files/UBS111FJW___A02_39b4d351-4eb9-4fec-a387-c9f89efce70d.jpg?v=1714691671&width=1080",
      },
      {
        color: "red",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxxQ6Z0roGTlwWQ3HuEHOFk9-hABxahnmFXw&s",
      },
    ],
    like: false,
    count: 0,
    quantity: 30,
    rating: 4.1,
    price: 11.99,
  },
  {
    _id: 17,
    title: "Travel bag",
    description: "Unique graphic design hoodie for streetwear lovers.",
    category: "clothing",
    img: "https://admin.di-sport.uz/storage/thumbnails/galleries/17279/34kXhlG0RvB788hV2nDvaRBLPl3NGq5FcMk6vZIf-large.webp",
    colors: [
      {
        color: "black",
        img: "https://admin.di-sport.uz/storage/thumbnails/galleries/17279/34kXhlG0RvB788hV2nDvaRBLPl3NGq5FcMk6vZIf-large.webp",
      },
      {
        color: "white",
        img: "https://cdn-images.farfetch-contents.com/29/99/23/18/29992318_59328874_1000.jpg",
      },
      {
        color: "grey",
        img: "https://cdn-images.farfetch-contents.com/29/53/88/23/29538823_58680624_1000.jpg",
      },
    ],
    like: false,
    count: 0,
    quantity: 16,
    rating: 4.5,
    price: 29.99,
  },
  {
    _id: 18,
    title: "Wireless Charger",
    description: "Fast wireless charging pad for all devices.",
    category: "electronics",
    img: "https://www.baseus.com/cdn/shop/files/Baseus_PicoGo_2-in-1_Qi2_Magnetic_Wireless_Charger_67W_1_front.jpg?v=1725616295",
    colors: [
      {
        color: "black",
        img: "https://www.baseus.com/cdn/shop/files/Baseus_PicoGo_2-in-1_Qi2_Magnetic_Wireless_Charger_67W_1_front.jpg?v=1725616295",
      },
      {
        color: "white",
        img: "https://d-wireless.com/wp-content/uploads/2024/11/3-in-1-wireless-charger-2-1024x1024.jpg",
      },
      {
        color: "green",
        img: "https://m.media-amazon.com/images/I/51f+WwFjydL.jpg",
      },
    ],
    like: false,
    count: 0,
    quantity: 14,
    rating: 4.8,
    price: 21.99,
  },
  {
    _id: 19,
    title: "Travel Mug",
    description: "Keep your drinks hot or cold for hours.",
    category: "accessories",
    img: "https://cdn.webshopapp.com/shops/190718/files/380883478/ferrari-thermal-mug-matt-black.jpg",
    colors: [
      {
        color: "black",
        img: "https://cdn.webshopapp.com/shops/190718/files/380883478/ferrari-thermal-mug-matt-black.jpg",
      },
      {
        color: "blue",
        img: "https://i.ebayimg.com/images/g/bpMAAOSw6qxg7MV6/s-l400.jpg",
      },
      {
        color: "yellow",
        img: "https://i5.walmartimages.com/asr/e2c8d5a7-d364-4d8f-9d15-b13a8c4d7649.70928674bdc0d9f981ad473551d6c91f.jpeg",
      },
    ],
    like: false,
    count: 0,
    quantity: 25,
    rating: 4.9,
    price: 16.99,
  },
  {
    _id: 20,
    title: "Cotton Socks Pack",
    description: "Comfortable everyday socks pack of 5.",
    category: "clothing",
    img: "https://www.superga.com/cdn/shop/files/UBS5124TW___001_c5a89bab-6354-46c0-914e-fa91795d9fcc.jpg?v=1714702415&width=1080",
    colors: [
      {
        color: "white",
        img: "https://www.superga.com/cdn/shop/files/UBS5124TW___001_c5a89bab-6354-46c0-914e-fa91795d9fcc.jpg?v=1714702415&width=1080",
      },
      {
        color: "black",
        img: "https://www.superga.com/cdn/shop/files/UBS5124TW___005_58cd7a87-9ecb-4bfe-873a-a79f11400c10.jpg?v=1714702418&width=1080",
      },
      {
        color: "gray",
        img: "https://www.boulevard-dore.com/88762-large_default/short-socks-shiny-effect-grey.jpg",
      },
    ],
    like: false,
    count: 0,
    quantity: 35,
    rating: 4.6,
    price: 13.49,
  },
  {
    _id: 21,
    title: "Winter Jacket",
    description: "Stay warm in style during winter adventures.",
    category: "clothing",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwb2J56ByQoNx3ctjITlXZ_iLewceLX1Hjg&shttps://via.placeholder.com/400x400.png?text=Whitehttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwb2J56ByQoNx3ctjITlXZ_iLewceLX1Hjg&s",
    colors: [
      {
        color: "white",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwb2J56ByQoNx3ctjITlXZ_iLewceLX1Hjg&shttps://via.placeholder.com/400x400.png?text=Whitehttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwb2J56ByQoNx3ctjITlXZ_iLewceLX1Hjg&s",
      },
      {
        color: "brown",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThYMAws5yofuYrbKOk16SxxZfo1vLuDse65g&s",
      },
      {
        color: "yellow",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL1qVvS75Sv_UMFGtWgV-U0thdqofB5jTfkw&s",
      },
    ],
    like: false,
    count: 0,
    quantity: 29,
    rating: 4.9,
    price: 42.62,
  },
  {
    _id: 22,
    title: "Summer Hat",
    description: "Perfect hat to keep cool under the sun.",
    category: "clothing",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGxR6oRWwxe0mKShDXS0Ub0-GNz0JQ97siQ&s",
    colors: [
      {
        color: "gray",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGxR6oRWwxe0mKShDXS0Ub0-GNz0JQ97siQ&s",
      },
      {
        color: "white",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI0FR7gFBcYIFz0uGXeDpa4ts_0rNSTMjvyQ&s",
      },
      {
        color: "red",
        img: "https://m.media-amazon.com/images/I/51hX8UtwQPL._AC_UY1000_.jpg",
      },
    ],
    like: false,
    count: 0,
    quantity: 17,
    rating: 4.4,
    price: 49.87,
  },
  {
    _id: 23,
    title: "Classic Pants",
    description: "Flexible and breathable pants for casual looks.",
    category: "clothing",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhaaxDEX4Q2X-8qLDxtLlGinAqonnJIoLdg&s",
    colors: [
      {
        color: "brown",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhaaxDEX4Q2X-8qLDxtLlGinAqonnJIoLdg&s",
      },
      {
        color: "blue",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6vX46ugWvAMolpSjmGIA_rZ7tviTl4HVODXKCP2Nkh8HE_LRFoeagvv2o9iucZFwgDoY&usqp=CAU",
      },
      {
        color: "red",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrcGZR55uvesge7SXifvtc5sG9_TvPnbptQQ&s",
      },
    ],
    like: false,
    count: 0,
    quantity: 16,
    rating: 4.6,
    price: 73.71,
  },
  {
    _id: 24,
    title: "Denim Jeans",
    description: "Classic jeans with a modern fit.",
    category: "clothing",
    img: "https://images.vestiairecollective.com/images/resized/w=1246,q=75,f=auto,/produit/red-denim-jeans-still-here-jeans-38570220-1_2.jpg",
    colors: [
      {
        color: "red",
        img: "https://images.vestiairecollective.com/images/resized/w=1246,q=75,f=auto,/produit/red-denim-jeans-still-here-jeans-38570220-1_2.jpg",
      },
      {
        color: "yellow",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtDjib1sON9BJ4NNrJ1b5aIPI3CcSBWAURd3rcddDdcXGB654XceAmFUuLLM1w3E72a4&usqp=CAU",
      },
      {
        color: "blue",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy6MFdX1tf1GV22pvB58eNZdTFsfWoD11-SA&s",
      },
    ],
    like: false,
    count: 0,
    quantity: 22,
    rating: 4.5,
    price: 38.45,
  },
  {
    _id: 25,
    title: "Gaming Mouse",
    description: "Ergonomic design for gaming precision.",
    category: "accessories",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmdZBmJtH9a-HNn5c7sF3e0XqjHHBwnxwHQ&s",
    colors: [
      {
        color: "red",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmdZBmJtH9a-HNn5c7sF3e0XqjHHBwnxwHQ&s",
      },
      {
        color: "white",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ZaKwyFDUPg8A1TwS6Vk-g8ZAccFDaz22YA&s",
      },
      {
        color: "brown",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZPq_ij-Us151gfi_oR4zn-zP4M1xcQ6fCg&s",
      },
    ],
    like: false,
    count: 0,
    quantity: 24,
    rating: 4.1,
    price: 10.82,
  },
  {
    _id: 26,
    title: "Wireless Keyboard",
    description: "Sleek keyboard with silent keys.",
    category: "accessories",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWrvdR50EQQOo5wYKEM4S0ZFf7DJPl643nNA&s",
    colors: [
      {
        color: "green",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWrvdR50EQQOo5wYKEM4S0ZFf7DJPl643nNA&s",
      },
      {
        color: "blue",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrWtU1I8GgGRJtG_5jOUU5QNKERsvu_WKtQ&s",
      },
      {
        color: "gray",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeyNh32qPoSI7b_aOt_A2ENNe3lwv06TCHjQ&s",
      },
    ],
    like: false,
    count: 0,
    quantity: 30,
    rating: 4.7,
    price: 16.06,
  },
  {
    _id: 27,
    title: "Office Chair",
    description: "Comfortable chair for long workdays.",
    category: "accessories",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKDmMx0ssf538prTSCPB6GOyptu3FMywxvrQ&s",
    colors: [
      {
        color: "tan",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKDmMx0ssf538prTSCPB6GOyptu3FMywxvrQ&s",
      },
      {
        color: "white",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAKbpFwz6-Y9VGTHXOrAIzG9XXM98gZhn1aw&s",
      },
      {
        color: "blue",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEB5gqoCFoZh_wONjhxYT6Pbx5jwgsegxfTw&s",
      },
    ],
    like: false,
    count: 0,
    quantity: 6,
    rating: 4.6,
    price: 67.56,
  },
  {
    _id: 28,
    title: "Sunglasses",
    description: "Stylish shades for sunny days.",
    category: "accessories",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtOj2JPTcHdUE10eb1grjL5WBwhzRAu7bYg&s",
    colors: [
      {
        color: "red",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtOj2JPTcHdUE10eb1grjL5WBwhzRAu7bYg&s",
      },
      {
        color: "gray",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oegrS66ENI9GjeFyF4PA1ISK-yftpPS0Zg&s",
      },
      {
        color: "green",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUfI3_3qhqyugUUJxp-MNM-6zSYS4wDPEXJQ&s",
      },
    ],
    like: false,
    count: 0,
    quantity: 28,
    rating: 4.4,
    price: 63.35,
  },
  {
    _id: 29,
    title: "Travel Mug",
    description: "Keep your drink hot or cold on the go.",
    category: "accessories",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRql4eunlqu0lcnqP7SvY4S2aQIikNvbuGsmQ&s",
    colors: [
      {
        color: "gray",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRql4eunlqu0lcnqP7SvY4S2aQIikNvbuGsmQ&s",
      },
      {
        color: "navy",
        img: "https://i.etsystatic.com/39210184/r/il/40ef5a/6341765875/il_fullxfull.6341765875_c931.jpg",
      },
      {
        color: "tan",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRye9wzZkKJLDA9D-NKPj2v2w-qDODjFUYmsA&s",
      },
    ],
    like: false,
    count: 0,
    quantity: 19,
    rating: 4.6,
    price: 75.97,
  },
  {
    _id: 30,
    title: "Backpack Cooler",
    description: "Insulated backpack ideal for hikes.",
    category: "accessories",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZzscSZHs_kGNPLAEb7GDR13uROK_WHhG8hQ&s",
    colors: [
      {
        color: "black",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZzscSZHs_kGNPLAEb7GDR13uROK_WHhG8hQ&s",
      },
      {
        color: "white",
        img: "https://diamondbackbranding.com/cdn/shop/files/IGLO-SC24B_bone_front_FEAT.webp?v=1702935723",
      },
      {
        color: "gray",
        img: "https://earthpak.com/cdn/shop/products/medium_4aaaccc0-70b6-40d6-b27a-ca07b5025c25.jpg?v=1690474625&width=1080",
      },
    ],
    like: false,
    count: 0,
    quantity: 13,
    rating: 4.8,
    price: 73.83,
  },
  {
    _id: 31,
    title: "Hiking Boots",
    description: "Durable boots for rough terrains.",
    category: "shoes",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6ybuPgSGj2Wm8jf_v2UXSKXLLKXUIjHx4o8Xhal3PXB4LZ4mthauZv-PX95pFA7t9U0&usqp=CAU",
    colors: [
      {
        color: "tan",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6ybuPgSGj2Wm8jf_v2UXSKXLLKXUIjHx4o8Xhal3PXB4LZ4mthauZv-PX95pFA7t9U0&usqp=CAU",
      },
      {
        color: "blue",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5r7q6ET_Par3-fYUhu_hywxEJu51H3GKdRQ&s",
      },
      {
        color: "gray",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgV-qOjHcrdRTScsPngnFZC12ZQfX2ktc4A&s",
      },
    ],
    like: false,
    count: 0,
    quantity: 12,
    rating: 4.8,
    price: 23.49,
  },
  {
    _id: 32,
    title: "Fitness Tracker",
    description: "Track your steps and stay fit.",
    category: "accessories",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoLSTk3NFPfFPfGcIokVRASFATpHAJeWavew&s",
    colors: [
      {
        color: "green",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoLSTk3NFPfFPfGcIokVRASFATpHAJeWavew&s",
      },
      {
        color: "red",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1RuYMcRSGncOTezdZgJHqZQx7ob1wOmpqg&s",
      },
      {
        color: "white",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwuaCEDgnL8XuB4YFku4dkF5sFFbKsUq-UOA&s",
      },
    ],
    like: false,
    count: 0,
    quantity: 28,
    rating: 4.7,
    price: 36.98,
  },
  {
    _id: 33,
    title: "Graphic Tee",
    description: "Eye-catching tee with bold graphics.",
    category: "clothing",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZV7xzTBGGnZWFSC3Lc5G3zFBRhphzhTu8A&s",
    colors: [
      {
        color: "green",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZV7xzTBGGnZWFSC3Lc5G3zFBRhphzhTu8A&s",
      },
      {
        color: "red",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkS3fKCUUXUKI5BsCPJmqJVmX8uw9RgXYMEg&s",
      },
      {
        color: "tan",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw6ZgUIfGHsXyfnItmPxo5T5R9UwSJyLzsVq5zUQWk5z9AaLBE7zSuXx8yPCM4hvDHcaM&usqp=CAU",
      },
    ],
    like: false,
    count: 0,
    quantity: 17,
    rating: 4.9,
    price: 37.34,
  },
  {
    _id: 34,
    title: "Phone Case",
    description: "Protective and stylish phone case.",
    category: "accessories",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA25sbYAnhFiGm3Gx2bf-JmjjUva3B9H2rhg&s",
    colors: [
      {
        color: "red",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA25sbYAnhFiGm3Gx2bf-JmjjUva3B9H2rhg&s",
      },
      {
        color: "blue",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBJNkTzuqDAAq07xPTkAewbV7k1JyaArDn7Q&s",
      },
      {
        color: "yellow",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCrImDcT1QHVI5P9USVEsAiQY3c1DoatLAQ&s",
      },
    ],
    like: false,
    count: 0,
    quantity: 17,
    rating: 4.7,
    price: 41.93,
  },
  {
    _id: 35,
    title: "Portable Charger",
    description: "Charge your devices anywhere, anytime.",
    category: "accessories",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2n3tttlbLHaEpFQKPMXgzwplHLEj3lmpelrApv5vX5ykNezBwHBUz02MJ17CrN31ePRo&usqp=CAU",
    colors: [
      {
        color: "tan",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2n3tttlbLHaEpFQKPMXgzwplHLEj3lmpelrApv5vX5ykNezBwHBUz02MJ17CrN31ePRo&usqp=CAU",
      },
      {
        color: "navy",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXW0zp4dBsS9Kuc0NAv-S567UcpNbKOC7fLA&s",
      },
      {
        color: "black",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-T2Ww_0TbBD8-IwRxBzjkWH_HOFQc51Q6g&s",
      },
    ],
    like: false,
    count: 0,
    quantity: 9,
    rating: 4.8,
    price: 75.9,
  },
  {
    _id: 36,
    title: "Wireless Earbuds",
    description: "Experience true wireless freedom and crystal-clear sound.",
    category: "accessories",
    img: "https://multimedia.bbycastatic.ca/multimedia/products/300x300/159/15969/15969977.jpeg",
    colors: [
      {
        color: "white",
        img: "https://multimedia.bbycastatic.ca/multimedia/products/300x300/159/15969/15969977.jpeg",
      },
      {
        color: "black",
        img: "https://istore.co/cdn/shop/files/IST-51205_TWEarbuds_Black.png?v=1710987302",
      },
      {
        color: "blue",
        img: "https://www.atlantia.ca/cdn/shop/files/ScreenShot2024-05-22at12.39.17PM_800x.png?v=1716407381",
      },
    ],
    like: false,
    count: 0,
    quantity: 15,
    rating: 4.6,
    price: 29.99,
  },
];

export const saleData = [
  {
    id: 1,
    title: "Fashion sale",
    image: sale,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit laboriosam natus voluptatem eius dolorem fugit?",
  },
  {
    id: 2,
    title: "Fashion sale",
    image: sale2,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit laboriosam natus voluptatem eius dolorem fugit?",
  },
  {
    id: 3,
    title: "Cool sale",
    image: sale3,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit laboriosam natus voluptatem eius dolorem fugit?",
  },
  {
    id: 4,
    title: "Fashion male sale",
    image: male1,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit laboriosam natus voluptatem eius dolorem fugit?",
  },
  {
    id: 5,
    title: "Fashion male sale",
    image: male2,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit laboriosam natus voluptatem eius dolorem fugit?",
  },
  {
    id: 6,
    title: "Fashion female sale",
    image: female1,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit laboriosam natus voluptatem eius dolorem fugit?",
  },
  {
    id: 7,
    title: "Fashion female sale",
    image: female2,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit laboriosam natus voluptatem eius dolorem fugit?",
  },
];

export const aboutUs = [
  {
    id: 1,
    title: "Our Team",
    description:
      "We are a passionate team of designers, developers, marketers, and product managers working together to shape the future of online retail.",
  },
  {
    id: 2,
    title: "Our Values",
    description:
      "Transparency, responsibility, and creativity drive everything we do. We believe in honest work and building long-term relationships.",
  },
  {
    id: 3,
    title: "Our Vision",
    description:
      "We envision a world where shopping online is more efficient, enjoyable, and accessible — from every device, everywhere.",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Jeff Bezos",
    img: Ceo,
    position: "Ceo",
  },
  {
    id: 2,
    name: "Tom Adward",
    img: Customer,
    position: "Customer",
  },
  {
    id: 3,
    name: "Kein Brown",
    img: Accounter,
    position: "Accounter",
  },
  {
    id: 4,
    name: "Anna Colliman",
    img: Agent,
    position: "Agent",
  },
  {
    id: 5,
    name: "Adam Clein",
    img: Manager,
    position: "Manager",
  },
  {
    id: 6,
    name: "Kabir Sinh",
    img: Guard1,
    position: "Guard",
  },
  {
    id: 7,
    name: "Arjun Ray",
    img: Guard2,
    position: "Guard",
  },
  {
    id: 8,
    name: "Elena Walker",
    img: Farrosh,
    position: "Cleaner",
  },
];
