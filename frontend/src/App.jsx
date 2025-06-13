import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ExplorationBar = lazy(() => import('./components/ExplorationBar'));
const Navbar = lazy(() => import("./components/NavBar"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const Hero = lazy(() => import("./sections/Hero"));
const LogoShowcase = lazy(() => import("./sections/LogoShowcase"));
const ServicesSection = lazy(() => import('./sections/ServicesSection'));
const WorkProcess = lazy(() => import("./sections/WorkProcess"));
const WhyChooseUs = lazy(() => import("./sections/WhyChooseUs"));
const DemoSection = lazy(() => import("./sections/DemosSection"));
const DemoViewer = lazy(() => import("./sections/DemoViewer"));
const BlogsSection = lazy(() => import("./sections/BlogsSection"));
const ScheduleAppointment = lazy(() => import("./sections/ScheduleAppointment"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const MeetOurTeam = lazy(() => import("./sections/MeetOurTeam"));
const FAQsSection = lazy(() => import("./sections/FAQsSection"));
const FAQPage = lazy(() => import("./sections/FAQPage"));
const CTASection = lazy(() => import("./sections/CTASection"));
const Footer = lazy(() => import("./sections/Footer"));
const NotFound = lazy(() => import("./components/NotFound"));

const App = () => (
  <Router>
    <ExplorationBar />
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={
        <main className="mt-[7rem] md:mt-[6rem]">
          <Hero />
          <LogoShowcase />
          <ServicesSection />
          <WorkProcess />
          <WhyChooseUs />
          <DemoSection />
          <BlogsSection />
          <ScheduleAppointment />
          <Testimonials />
          <MeetOurTeam />
          <FAQsSection />
        </main>
      } />
      <Route path="/demo/:id" element={<DemoViewer />} />
      <Route path="/faqs" element={<FAQPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <CTASection />
    <Footer />
  </Router>
);

export default App;
