import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navbar = lazy(() => import("./components/NavBar"));
const Hero = lazy(() => import("./sections/Hero"));
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const LogoShowcase = lazy(() => import("./sections/LogoShowcase"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const FeaturedCards = lazy(() => import("./sections/FeaturedCards"));
const Indsutries = lazy(() => import("./sections/Industries"));
const DemoSection = lazy(() => import("./sections/DemosSection"));
const BlogsSection = lazy(() => import("./sections/BlogsSection"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const MeetOurTeam = lazy(() => import("./sections/MeetOurTeam"));
const StatsSection = lazy(() => import("./sections/StatsSection"));
const FAQPage = lazy(() => import("./sections/FAQPage"));
const FAQsSection = lazy(() => import("./sections/FAQsSection"));
const CTASection = lazy(() => import("./sections/CTASection"));
const Contact = lazy(() => import("./sections/Contact"));
const ScheduleAppointment = lazy(() => import("./sections/ScheduleAppointment"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={
        <>
          <Hero />
          <ShowcaseSection />
          <LogoShowcase />
          <FeatureCards />
          <FeaturedCards />
          <Indsutries />
          <DemoSection />
          <BlogsSection />
          <Testimonials />
          <MeetOurTeam />
          <StatsSection />
          <FAQsSection />
          <CTASection />
          <Contact />
          <ScheduleAppointment />
          <Footer />
        </>
      } />
      <Route path="/faqs" element={<FAQPage />} />
    </Routes>
  </Router>
);

export default App;
