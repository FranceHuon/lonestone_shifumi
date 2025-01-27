import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider.tsx'
import Layout from './components/ui/Layout.tsx'
import AppLayout from './components/functional/AppLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Layout><AppLayout /></Layout>
    </Provider>
  </StrictMode>,
)
