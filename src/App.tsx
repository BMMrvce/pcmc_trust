import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WhoWeAre from './pages/about/WhoWeAre';
import HowItEvolved from './pages/about/HowItEvolved';
import Mission from './pages/about/Mission';
import LegalFinancial from './pages/about/LegalFinancial';
import ActivitiesOfTrust from './pages/ActivitiesOfTrust';
import MedicalProgrammes from './pages/activities/MedicalProgrammes';
import DentalCamp from './pages/activities/DentalCamp';
import GeneralHealthCamp from './pages/activities/GeneralHealthCamp';
import MedicalHelpline from './pages/activities/MedicalHelpline';
import TrustCampActivities from './pages/activities/TrustCampActivities';
import EyeCamps from './pages/activities/EyeCamps';
import BloodCamps from './pages/activities/BloodCamps';
import VeterinaryCamps from './pages/activities/VeterinaryCamps';
import EducationalProgrammes from './pages/activities/EducationalProgrammes';
import SocialProgrammes from './pages/activities/SocialProgrammes';
import AwarenessProgrammes from './pages/activities/AwarenessProgrammes';
import PhotoGallery from './pages/PhotoGallery';
import WaysToHelp from './pages/WaysToHelp';
import Volunteer from './pages/help/Volunteer';
import Donate from './pages/help/Donate';
import SpreadTheWord from './pages/help/SpreadTheWord';
import PressEvents from './pages/PressEvents';
import PressMedia from './pages/press/PressMedia';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* About Us Routes */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/how-it-evolved" element={<HowItEvolved />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/legal-financial" element={<LegalFinancial />} />
          
          {/* Activities Routes */}
          <Route path="/activities" element={<ActivitiesOfTrust />} />
          <Route path="/activities/medical-programmes" element={<MedicalProgrammes />} />
          <Route path="/activities/dental-camp" element={<DentalCamp />} />
          <Route path="/activities/general-health-camp" element={<GeneralHealthCamp />} />
          <Route path="/activities/medical-helpline" element={<MedicalHelpline />} />
          <Route path="/activities/trust-camp" element={<TrustCampActivities />} />
          <Route path="/activities/eye-camps" element={<EyeCamps />} />
          <Route path="/activities/blood-camps" element={<BloodCamps />} />
          <Route path="/activities/veterinary-camps" element={<VeterinaryCamps />} />
          <Route path="/activities/educational-programmes" element={<EducationalProgrammes />} />
          <Route path="/activities/social-programmes" element={<SocialProgrammes />} />
          <Route path="/activities/awareness-programmes" element={<AwarenessProgrammes />} />
          
          {/* Other Routes */}
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/ways-to-help" element={<WaysToHelp />} />
          <Route path="/ways-to-help/volunteer" element={<Volunteer />} />
          <Route path="/ways-to-help/donate" element={<Donate />} />
          <Route path="/ways-to-help/spread-the-word" element={<SpreadTheWord />} />
          <Route path="/press-events" element={<PressEvents />} />
          <Route path="/press-events/media" element={<PressMedia />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
