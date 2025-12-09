import Image from "next/image";
import ParallaxHeader from '@/components/ParallaxHeader';
import CarSection from '@/components/CarSection';
import HorizontalScroll from '@/components/HorizontalScroll';
import GallerySection from '@/components/GallerySection';
import FeatureShowcase from '@/components/FeatureShowcase';
import LuxuryShowcase from '@/components/LuxuryShowcase';
import PremiumGallery from '@/components/PremiumGallery';
import ModelShowcase from '@/components/ModelShowcase';
import HeritageTimeline from '@/components/HeritageTimeline';
import c1 from "../../public/c1.jpg";
import c2 from "../../public/c2.jpg";
import c3 from "../../public/c3.jpg";
import c5 from "../../public/c5.jpg";
import c6 from "../../public/c6.jpg";
import c7 from "../../public/c7.jpg";
import c32 from "../../public/c32.jpg";
import c33 from "../../public/c33.jpg";
import c34 from "../../public/c34.jpg";

const carData = [
  {
    model: 'Model S',
    description: 'Experience unmatched performance with our flagship luxury sedan.',
    imageUrl: c1,
    color: 'rgba(26, 26, 26, 0.7)', // Dark overlay for better text visibility
  },
  {
    model: 'Model X', 
    description: 'Versatility and power combined in our premium SUV.',
    imageUrl: c2,
    color: 'rgba(26, 26, 26, 0.7)',
  },
  {
    model: 'Roadster',
    description: 'The ultimate performance car with breathtaking acceleration.',
    imageUrl: c3,
    color: 'rgba(26, 26, 26, 0.7)',
  },
];

const featureData = [
  {
    title: "PRECISION ENGINEERING",
    description: "Every component is crafted to perfection, ensuring optimal performance in all conditions.",
    imageUrl: c5,
  },
  {
    title: "LUXURY INTERIOR",
    description: "Premium materials and ergonomic design create an unparalleled driving experience.",
    imageUrl: c6,
  },
  {
    title: "CUTTING-EDGE TECHNOLOGY",
    description: "Advanced systems that enhance both safety and driving pleasure.",
    imageUrl: c7,
  },
];

const experienceData = [
  {
    title: "PORSCHE EXPERIENCE CENTER",
    description: "Test the limits of both car and driver on our professional tracks with expert guidance.",
    imageUrl: c32,
  },
  {
    title: "EXCLUSIVE MANUFAKTUR",
    description: "Create a truly bespoke Porsche with our personalization program.",
    imageUrl: c33,
  },
  {
    title: "PORSCHE CLUB",
    description: "Join a global community of enthusiasts who share your passion for the brand.",
    imageUrl: c34,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <ParallaxHeader />
      
      <section className="car-showcase">
        {carData.map((car, index) => (
          <CarSection 
            key={car.model}
            model={car.model}
            description={car.description}
            imageUrl={car.imageUrl}
            color={car.color}
            index={index}
          />
        ))}
      </section>
      
      <LuxuryShowcase />
      
      <FeatureShowcase features={featureData} />
      
      <HorizontalScroll />
      
      <ModelShowcase />
      
      <PremiumGallery />
      
      <HeritageTimeline />
      
      <FeatureShowcase features={experienceData} />
      
      <GallerySection />
      
      <footer className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-16">
            <div className="mb-12 md:mb-0">
              <h3 className="text-4xl font-bold mb-8 tracking-tighter">PORSCHE</h3>
              <p className="text-lg max-w-md mb-8 text-gray-400">Driven by dreams. Fueled by passion.</p>
              <div className="flex space-x-6">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-xl">𝕏</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-xl">ƒ</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-xl">𝓘</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
              <div>
                <h4 className="text-lg font-bold mb-6">Models</h4>
                <ul className="space-y-4 text-gray-400">
                  <li className="hover:text-white transition-colors"><a href="#">911</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">Taycan</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">Cayenne</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">Panamera</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">718</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">Macan</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-6">Services</h4>
                <ul className="space-y-4 text-gray-400">
                  <li className="hover:text-white transition-colors"><a href="#">Porsche Finder</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">Build Your Porsche</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">Financial Services</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">Service & Maintenance</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">Porsche Shop</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-6">About</h4>
                <ul className="space-y-4 text-gray-400">
                  <li className="hover:text-white transition-colors"><a href="#">Company</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">Heritage</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">Motorsport</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">Sustainability</a></li>
                  <li className="hover:text-white transition-colors"><a href="#">Careers</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="luxury-divider"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} Porsche. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
