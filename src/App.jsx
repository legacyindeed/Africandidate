import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Budget from './pages/Budget'
import Banking from './pages/Banking'
import MobileCarriers from './pages/MobileCarriers'
import PreArrival from './pages/PreArrival'
import StayAndBuild from './pages/StayAndBuild'
import Community from './pages/Community'
import HealthInsurance from './pages/HealthInsurance'
import Feedback from './pages/Feedback'
import MBASchools from './pages/MBASchools'
import Recruiting from './pages/Recruiting'
import ApplicationStrategy from './pages/ApplicationStrategy'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application-strategy" element={<ApplicationStrategy />} />
          <Route path="/budget" element={<Budget />} />
          {/* Redirects for old routes */}
          <Route path="/cost-of-living" element={<Navigate to="/budget" replace />} />
          <Route path="/budget-calculator" element={<Navigate to="/budget" replace />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/mobile-carriers" element={<MobileCarriers />} />
          <Route path="/pre-arrival" element={<PreArrival />} />
          <Route path="/stay-and-build" element={<StayAndBuild />} />
          <Route path="/community" element={<Community />} />
          <Route path="/health-insurance" element={<HealthInsurance />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/mba-schools" element={<MBASchools />} />
          <Route path="/top-mba" element={<MBASchools />} />
          <Route path="/recruiting" element={<Recruiting />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
