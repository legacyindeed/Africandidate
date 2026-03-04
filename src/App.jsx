import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
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
import AdmitIndex from './pages/AdmitIndex'
import AdmitIndexSubmit from './pages/AdmitIndexSubmit'
import AdmitIndexAdmin from './pages/AdmitIndexAdmin'
import NotFound from './pages/NotFound'

function App() {
  return (
    <AuthProvider>
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
          <Route path="/admit-index" element={<AdmitIndex />} />
          <Route path="/admit-index/submit" element={<AdmitIndexSubmit />} />
          <Route path="/admin/admit-index" element={<AdmitIndexAdmin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
