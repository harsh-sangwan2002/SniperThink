import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ExplorationBar = lazy(() => import('./components/ExplorationBar'));
const Navbar = lazy(() => import("./components/NavBar"));
const Hero = lazy(() => import("./sections/Hero"));
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const LogoShowcase = lazy(() => import("./sections/LogoShowcase"));
const ServicesSection = lazy(() => import('./sections/ServicesSection'));
const WorkProcess = lazy(() => import("./sections/WorkProcess"));
const WhyChooseUs = lazy(() => import("./sections/WhyChooseUs"));
const DemoSection = lazy(() => import("./sections/DemosSection"));
const BlogsSection = lazy(() => import("./sections/BlogsSection"));
const ScheduleAppointment = lazy(() => import("./sections/ScheduleAppointment"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const MeetOurTeam = lazy(() => import("./sections/MeetOurTeam"));
const StatsSection = lazy(() => import("./sections/StatsSection"));
const FAQsSection = lazy(() => import("./sections/FAQsSection"));
const FAQPage = lazy(() => import("./sections/FAQPage"));
const CTASection = lazy(() => import("./sections/CTASection"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => (
  <Router>
    <ExplorationBar />
    <Navbar />
    <Routes>
      <Route path="/" element={
        <>
          <Hero />
          <ShowcaseSection />
          <LogoShowcase />
          <ServicesSection />
          <WorkProcess />
          <WhyChooseUs />
          <DemoSection />
          <BlogsSection />
          <ScheduleAppointment />
          <Testimonials />
          <MeetOurTeam />
          <StatsSection />
          <FAQsSection />
          <CTASection />
          <Footer />
        </>
      } />
      <Route path="/faqs" element={<FAQPage />} />
    </Routes>
  </Router>
);

export default App;
