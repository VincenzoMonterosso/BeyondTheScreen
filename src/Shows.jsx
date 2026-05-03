import Logo from './Logo.jsx'

export default function Shows() {
    return (
        <>
        <Logo />
        <section aria-labelledby="bluey">
            <h2 id="bluey">Bluey</h2>
            <p>
            <strong>Best Time of Day:</strong> Morning
            </p>
            <p>Supports waking up the nervous system and easing into daily routines.</p>

            <details>
            <summary>Click to Learn More</summary>
            <article>
                <h3>Sensory Input</h3>
                <p>
                <strong>Low to Moderate</strong>
                </p>
                <p>Regulation-friendly</p>
                <p>Supports smooth transitions into routines</p>
                <p>Engaging without overstimulation</p>

                <h3>Pacing</h3>
                <p>
                <strong>Moderate</strong>
                </p>
                <p>Short episodes (about 7 minutes)</p>
                <p>About 160 words per minute</p>
                <p>Supports attention without feeling rushed or overwhelming</p>

                <h3>Predictability</h3>
                <p>
                <strong>High</strong>
                </p>
                <p>Familiar characters and family routines</p>
                <p>Consistent structure (play to problem to resolution)</p>
                <p>Helps children feel secure and know what to expect</p>

                <h3>Emotional Intensity</h3>
                <p>
                <strong>Low</strong>
                </p>
                <p>Gentle themes and everyday situations</p>
                <p>Problems are mild and resolved quickly</p>
                <p>Supports co-regulation and emotional safety</p>

                <h3>Why It Works</h3>
                <p>
                    Bluey is a great morning choice because it gently activates attention, supports
                    routine-building,<br /> and encourages positive family connection without overwhelming the
                    nervous system.
                </p>
            </article>
            </details>
        </section>
        </>
    )
}
