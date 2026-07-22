import './PixelPalsHero.css';

const metrics = [
  { value: '4 core services', label: 'Web, AI, Shopify, UX' },
  { value: 'Fast launch', label: 'Weeks, not months' },
  { value: 'AI-ready', label: 'Automations included' },
];

const indicators = [
  'Keywords Optimized',
  'ATS Friendly',
  'Formatting Improved',
  'Ready to Apply',
];

export default function PixelPalsHero({
  startProjectHref = '#start-project',
  aiPlatformHref = '#ai-platform',
}) {
  return (
    <section className="pp-hero" aria-labelledby="pp-hero-title" data-node-id="15:17">
      <div className="pp-hero__content" data-node-id="15:18">
        <div className="pp-hero__copy" data-node-id="15:19">
          <p className="pp-hero__badge" data-node-id="15:20">
            AI products, websites, Shopify and automation
          </p>

          <h1 className="pp-hero__title" id="pp-hero-title" data-node-id="15:22">
            <span>Modern websites.</span>
            <span>AI-powered software.</span>
            <span>Real business growth.</span>
          </h1>

          <p className="pp-hero__description" data-node-id="15:23">
            Pixel Pals builds intelligent digital products that combine modern web
            development, artificial intelligence, automation and scalable product
            thinking to help businesses grow.
          </p>

          <div className="pp-hero__actions" data-node-id="15:24">
            <a className="pp-button pp-button--primary" href={startProjectHref}>
              <span>Start Your Project</span><span aria-hidden="true">→</span>
            </a>
            <a className="pp-button pp-button--secondary" href={aiPlatformHref}>
              <span>Explore the AI Platform</span><span aria-hidden="true">→</span>
            </a>
          </div>

          <dl className="pp-hero__metrics" data-node-id="15:31">
            {metrics.map((metric) => (
              <div className="pp-hero__metric" key={metric.value}>
                <dt>{metric.value}</dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="pp-product" aria-label="Pixel Pals AI product preview" data-node-id="63:2">
          <div className="pp-product__header" data-node-id="63:3">
            <div className="pp-product__mark" aria-hidden="true" data-node-id="63:4" />
            <div>
              <p className="pp-product__eyebrow">Pixel Pals AI</p>
              <h2>AI Resume Assistant</h2>
            </div>
          </div>

          <div className="pp-product__scores" data-node-id="63:8">
            <article className="pp-score-card">
              <strong>86%</strong>
              <h3>Resume Score</h3>
              <p>Optimized for role fit</p>
            </article>
            <article className="pp-score-card">
              <strong>91%</strong>
              <h3>ATS Score</h3>
              <p>Ready for applicant systems</p>
            </article>
          </div>

          <div className="pp-product__checklist" data-node-id="63:17">
            <h3>Success indicators</h3>
            <ul>
              {indicators.map((indicator) => (
                <li key={indicator}>
                  <img src="/success-dot.svg" alt="" width="18" height="18" />
                  <span>{indicator}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pp-product__insights" data-node-id="63:31">
            <h3>AI Insights</h3>
            <p>
              Role-specific keywords added, structure improved, and the application
              is ready for review.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
