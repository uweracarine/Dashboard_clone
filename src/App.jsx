import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import AppLayout from './components/AppLayout'
import DashboardPage from './pages/DashboardPage'
import ImagesPage from './pages/ImagesPage'
import VideosPage from './pages/VideosPage'
import DocumentsPage from './pages/DocumentsPage'
import AllFilesPage from './pages/AllFilesPage'
import TrashPage from './pages/TrashPage'

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="file-manager/images" element={<ImagesPage />} />
            <Route path="file-manager/videos" element={<VideosPage />} />
            <Route path="file-manager/documents" element={<DocumentsPage />} />
            <Route path="file-manager/all-files" element={<AllFilesPage />} />
            <Route path="file-manager/trash" element={<TrashPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}
