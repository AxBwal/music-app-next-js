import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HerSection from "@/components/HerSection";
import Instructors from "@/components/Instructors";
import TestimonialsCards from "@/components/TestimonialsCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return <>
  <HerSection/>
  <FeaturedCourses/>
  <WhyChooseUs/>
  <TestimonialsCards/>
  <UpcomingWebinars/>
  <Instructors/>
  <Footer/>
  </>;
}
