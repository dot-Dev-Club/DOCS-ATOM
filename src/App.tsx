import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import IntroductionPage from './pages/IntroductionPage'
import GettingStartedPage from './pages/GettingStartedPage'
import UnderstandingPage from './pages/UnderstandingPage'
import NavigatingPage from './pages/NavigatingPage'
import AdminPanelPage from './pages/AdminPanelPage'
import ManagingContentPage from './pages/ManagingContentPage'
import UserManagementPage from './pages/UserManagementPage'
import EventsPage from './pages/EventsPage'
import GalleryPage from './pages/GalleryPage'
import CustomizationPage from './pages/CustomizationPage'
import DevelopmentPage from './pages/DevelopmentPage'
import TroubleshootingPage from './pages/TroubleshootingPage'
import BestPracticesPage from './pages/BestPracticesPage'
import FAQPage from './pages/FAQPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="introduction" element={<IntroductionPage />} />
        <Route path="getting-started" element={<GettingStartedPage />} />
        <Route path="understanding" element={<UnderstandingPage />} />
        <Route path="navigating" element={<NavigatingPage />} />
        <Route path="admin-panel" element={<AdminPanelPage />} />
        <Route path="managing-content" element={<ManagingContentPage />} />
        <Route path="user-management" element={<UserManagementPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="customization" element={<CustomizationPage />} />
        <Route path="development" element={<DevelopmentPage />} />
        <Route path="troubleshooting" element={<TroubleshootingPage />} />
        <Route path="best-practices" element={<BestPracticesPage />} />
        <Route path="faq" element={<FAQPage />} />
      </Route>
    </Routes>
  )
}

export default App
