import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import ScrollToTop from './components/ScrollToTop'

// Master Documentation Pages
import GettingStarted from './pages/GettingStarted'
import ContentManagement from './pages/ContentManagement'
import DeveloperGuide from './pages/DeveloperGuide'
import TechnicalLeads from './pages/TechnicalLeads'
import OperationsMaintenance from './pages/OperationsMaintenance'
import DeploymentProduction from './pages/DeploymentProduction'
import ReferenceBestPractices from './pages/ReferenceBestPractices'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          
          {/* Master Documentation Routes */}
          <Route path="docs/getting-started" element={<GettingStarted />} />
          <Route path="docs/content-management" element={<ContentManagement />} />
          <Route path="docs/developer-guide" element={<DeveloperGuide />} />
          <Route path="docs/technical-leads" element={<TechnicalLeads />} />
          <Route path="docs/operations-maintenance" element={<OperationsMaintenance />} />
          <Route path="docs/deployment-production" element={<DeploymentProduction />} />
          <Route path="docs/reference-best-practices" element={<ReferenceBestPractices />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
