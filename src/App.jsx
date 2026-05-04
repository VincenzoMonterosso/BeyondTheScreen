import { useEffect, useState } from 'react'
import stockimg from './assets/stockimg.png'
import stockimg2 from './assets/stockimg2.png'
import './App.css'
import Logo from './Logo.jsx'
import Shows from './Shows.jsx'
import Subscription from './Subscription.jsx'

function NavBar() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const dateText = now.toLocaleDateString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  const timeText = now.toLocaleTimeString()

  return (
    <nav className="top-nav" aria-label="Main navigation">
      <div className="nav-left">
        <a className="nav-brand nav-link" href="/">
          <b>Beyond The Screen</b>
        </a>
        <a className="nav-link" href="/shows">TV Shows</a>
        <a className="nav-link" href="/premium">Premium</a>
      </div>
      <div className="nav-datetime" aria-live="polite">
        <span>{dateText}</span>
        <span>{timeText}</span>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>Ashley Foley OTR/L, </p>
      <p> Rosanna Monterosso OTR/L, </p>
      <p>Sarah Terrazola OTR/L</p>
    </footer>
  )
}

function LandingPage() {
  return (
    <>
      <Logo />
      <header>
        <h1 style={{ paddingBottom: '10px' }}>Beyond the Screen</h1>
      </header>

      <div aria-labelledby="info">
          <p>
            We list shows based on the time of day that is appropriate for a child to watch.
          </p>
          <p>
            Click the time of day to see suggested shows. Then click a show to view sensory input,
            pacing, predictability, and emotional intensity.
          </p>
      </div>

      <div className="landing-stock-row">
        <img className="landing-stock-image" src={stockimg} alt="stockImage1" />
        <img className="landing-stock-image" src={stockimg2} alt="stockImage2" />
      </div>
      <div id="info">

        <div aria-labelledby="mission" style={{ marginTop: '25px' }}>
          <h2 id="mission">Mission Statement</h2>
          <p>
            Beyond the Screen aims to empower families to use screen time with intention to support
            children&apos;s development and daily routines. We strive to make everyday routines feel
            more balanced, manageable, and filled with connection and quality time.
          </p>
        </div>

        <div aria-labelledby="vision">
          <h2 id="vision">Vision Statement</h2>
          <p>
            Beyond the Screen believes in the power of everyday routines to shape children&apos;s
            growth, strengthen relationships, and create a future where screens are used with
            purpose and not as a distraction.
          </p>
        </div>

        
      </div>
    </>
  )
}

function App() {
  const path = window.location.pathname
  const route = path === '/shows' || path === '/premium' ? path : '/'

  return (
    <main>
      <NavBar />
      {route === '/shows' ? <Shows /> : route === '/premium' ? <Subscription /> : <LandingPage />}
      <Footer />
    </main>
  )
}

export default App
