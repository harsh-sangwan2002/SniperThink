import { lazy } from "react";

const Navbar = lazy(() => import("./components/NavBar"));
const Hero = lazy(() => import("./sections/Hero"));
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const LogoShowcase = lazy(() => import("./sections/LogoShowcase"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const FeaturedCards = lazy(() => import("./sections/FeaturedCards"));
const Indsutries = lazy(() => import("./sections/Industries"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const Contact = lazy(() => import("./sections/Contact"));
const ScheduleAppointment = lazy(() => import("./sections/ScheduleAppointment"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <LogoShowcase />
    <FeatureCards />
    <FeaturedCards />
    <Indsutries />
    <Testimonials />
    <Contact />
    <ScheduleAppointment />
    <Footer />
  </>
);

export default App;
