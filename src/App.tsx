import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'
import { Work } from '@/pages/Work'

function App() {
  const path = window.location.pathname

  return (
    <Layout>
      {path === '/about' ? (
        <About />
      ) : path === '/contact' ? (
        <Contact />
      ) : path === '/work' ? (
        <Work />
      ) : (
        <Home />
      )}
    </Layout>
  )
}

export default App