import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "Silk Saree with Gold Border",
    srcUrl: "/images/pic1.png",
    gallery: ["/images/pic1.png", "/images/pic10.png", "/images/pic11.png"],
    price: 320,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 2,
    title: "Embroidered Lehenga Choli",
    srcUrl: "/images/pic2.png",
    gallery: ["/images/pic2.png"],
    price: 480,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 3.5,
  },
  {
    id: 3,
    title: "Cotton Kurti with Prints",
    srcUrl: "/images/pic3.png",
    gallery: ["/images/pic3.png"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 4,
    title: "Designer Anarkali Suit",
    srcUrl: "/images/pic4.png",
    gallery: ["/images/pic4.png", "/images/pic10.png", "/images/pic11.png"],
    price: 280,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
  },
];

export const topSellingData: Product[] = [
  {
    id: 5,
    title: "Banarasi Silk Saree",
    srcUrl: "/images/pic5.png",
    gallery: ["/images/pic5.png", "/images/pic10.png", "/images/pic11.png"],
    price: 450,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 5.0,
  },
  {
    id: 6,
    title: "Bridal Lehenga Set",
    srcUrl: "/images/pic6.png",
    gallery: ["/images/pic6.png", "/images/pic10.png", "/images/pic11.png"],
    price: 650,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
  },
  {
    id: 7,
    title: "Palazzo Suit Set",
    srcUrl: "/images/pic7.png",
    gallery: ["/images/pic7.png"],
    price: 220,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.0,
  },
  {
    id: 8,
    title: "Ethnic Sharara Suit",
    srcUrl: "/images/pic8.png",
    gallery: ["/images/pic8.png"],
    price: 380,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
];

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "Chanderi Saree",
    srcUrl: "/images/pic12.png",
    gallery: ["/images/pic12.png", "/images/pic10.png", "/images/pic11.png"],
    price: 290,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
  },
  {
    id: 13,
    title: "Ghagra Choli with Dupatta",
    srcUrl: "/images/pic13.png",
    gallery: ["/images/pic13.png", "/images/pic10.png", "/images/pic11.png"],
    price: 350,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.5,
  },
  {
    id: 14,
    title: "Salwar Kameez",
    srcUrl: "/images/pic14.png",
    gallery: ["/images/pic14.png"],
    price: 240,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 15,
    title: "Festive Saree Collection",
    srcUrl: "/images/pic15.png",
    gallery: ["/images/pic15.png"],
    price: 380,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5.0,
  },
];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Priya M.",
    content:
      '"ELEGAND has transformed my wardrobe! The quality of their sarees is exceptional, and each piece tells a story of our beautiful heritage. I feel so elegant wearing them."',
    rating: 5,
    date: "June 10, 2024",
  },
  {
    id: 2,
    user: "Anjali K.",
    content: `"I purchased a lehenga from ELEGAND for my wedding, and it was absolutely stunning! The craftsmanship and attention to detail exceeded my expectations. Highly recommended!"`,
    rating: 5,
    date: "June 15, 2024",
  },
  {
    id: 3,
    user: "Neha S.",
    content: `"The kurtis I ordered are so comfortable and beautifully designed. ELEGAND truly celebrates Desi style with grace and elegance. I'm a loyal customer now!"`,
    rating: 5,
    date: "June 18, 2024",
  },
  {
    id: 4,
    user: "Divya R.",
    content: `"As someone who loves traditional fashion, ELEGAND is my go-to store. Their collection is diverse, and every piece is crafted with such care and precision."`,
    rating: 5,
    date: "June 20, 2024",
  },
  {
    id: 5,
    user: "Meera P.",
    content: `"The Banarasi saree I bought from ELEGAND is absolutely gorgeous. It's perfect for festivals and special occasions. Thank you for preserving our cultural fashion!"`,
    rating: 5,
    date: "June 22, 2024",
  },
  {
    id: 6,
    user: "Isha T.",
    content: `"ELEGAND offers the perfect blend of tradition and modernity. Their customer service is excellent, and the packaging is so thoughtful. Definitely worth every penny!"`,
    rating: 5,
    date: "June 25, 2024",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="NEW ARRIVALS"
          data={newArrivalsData}
          viewAllLink="/shop#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="top selling"
            data={topSellingData}
            viewAllLink="/shop#top-selling"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
