import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppLayout from './components/functional/AppLayout.tsx'
import Layout from './components/ui/Layout.tsx'
import { Provider } from './components/ui/provider.tsx'
import './theme/fonts.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Layout><AppLayout /></Layout>
    </Provider>
  </StrictMode>,
)
