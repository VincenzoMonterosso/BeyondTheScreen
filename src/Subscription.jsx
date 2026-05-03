import Logo from './Logo.jsx'
import './Subscription.css'

export default function Subscription() {
  return (
    <>
        <Logo />
        <div className="subscription-page" aria-labelledby="premium-title">
        <h1 id="premium-title" style={{paddingBottom: '50px'}}>Premium Subscription</h1>
        <article id="details">
            <h3>Details</h3>
            <p>First month:</p>
            <p>$150.00</p>
            <p>1 initial evaluation</p>
            <p>3 follow up sessions (30 minutes each)</p>
            <p><br />After First Month:</p>
            <p>$75.00 per month</p>
            <p>2 sessions (30 minutes each)</p>
        </article>
        </div>
    </>
  )
}
