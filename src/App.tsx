import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import ScrollToTop from './components/ScrollToTop'

// Master Documentation Pages
import Part1_GettingStarted from './pages/GettingStarted'
import Part2_ContentManagement from './pages/ContentManagement'
import Part3_DeveloperGuide from './pages/DeveloperGuide'
import Part4_TechnicalLeads from './pages/TechnicalLeads'
import Part5_OperationsMaintenance from './pages/OperationsMaintenance'
import Part6_DeploymentProduction from './pages/DeploymentProduction'
import Part7_ReferenceBestPractices from './pages/ReferenceBestPractices'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          
          {/* Master Documentation Routes */}
          <Route path="docs/part1" element={<Part1_GettingStarted />} />
          <Route path="docs/part2" element={<Part2_ContentManagement />} />
          <Route path="docs/part3" element={<Part3_DeveloperGuide />} />
          <Route path="docs/part4" element={<Part4_TechnicalLeads />} />
          <Route path="docs/part5" element={<Part5_OperationsMaintenance />} />
          <Route path="docs/part6" element={<Part6_DeploymentProduction />} />
          <Route path="docs/part7" element={<Part7_ReferenceBestPractices />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
