import './WhyPixelPals.css';

const deliveryPoints = [
  'Discovery mapped to business goals',
  'Interfaces designed for conversion',
  'AI workflows connected to real operations',
];

const benefits = [
  'AI-first thinking',
  'Modern React architecture',
  'Long-term partnerships',
  'Fast performance',
  'Exceptional UX',
  'Business-focused development',
  'Premium quality',
];

export default function WhyPixelPals() {
  return (
    <section
      id="why-pixel-pals"
      className="why-pixel-pals"
      aria-labelledby="why-pixel-pals-heading"
      data-node-id="15:181"
    >
      <div className="why-pixel-pals__container">
        <div className="why-pixel-pals__visual">
          <h2>
            Strategy, design, engineering, and automation moving together.
          </h2>

          <div className="why-pixel-pals__proof-list">
            {deliveryPoints.map((point) => (
              <div className="why-pixel-pals__proof" key={point}>
                <span
                  className="why-pixel-pals__check"
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="why-pixel-pals__content">
          <header className="why-pixel-pals__heading">
            <span className="why-pixel-pals__eyebrow">
              Why businesses choose Pixel Pals
            </span>

            <h2 id="why-pixel-pals-heading">
              Why businesses choose Pixel Pals
            </h2>

            <p>
              A technology partner for teams that need AI-first thinking,
              modern React architecture, scalable solutions and long-term
              product quality.
            </p>
          </header>

          <div
            className="why-pixel-pals__benefits"
            aria-label="Pixel Pals benefits"
          >
            {benefits.map((benefit) => (
              <div className="why-pixel-pals__benefit" key={benefit}>
                <span
                  className="why-pixel-pals__benefit-check"
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
