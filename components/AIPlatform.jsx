import './AIPlatform.css';

const aiProducts = [
  {
    title: 'AI Resume Assistant',
    description:
      'Score, optimize and prepare resumes for stronger applications.',
    status: 'Available',
    available: true,
    href: '#',
  },
  {
    title: 'AI Website Audit',
    description:
      'Surface UX, SEO, performance and conversion opportunities.',
    status: 'Coming Soon',
    available: false,
    href: '#',
  },
  {
    title: 'AI SEO Assistant',
    description:
      'Generate search insights, metadata and content direction.',
    status: 'Coming Soon',
    available: false,
    href: '#',
  },
  {
    title: 'Proposal Generator',
    description:
      'Create polished project proposals from a short brief.',
    status: 'Coming Soon',
    available: false,
    href: '#',
  },
  {
    title: 'Content Studio',
    description:
      'Plan and produce campaign-ready business content.',
    status: 'Coming Soon',
    available: false,
    href: '#',
  },
  {
    title: 'Business Assistant',
    description:
      'Automate admin, customer and operations workflows.',
    status: 'Coming Soon',
    available: false,
    href: '#',
  },
  {
    title: 'More AI Products Coming Soon',
    description:
      'A growing suite of intelligent tools for modern teams.',
    status: 'Coming Soon',
    available: false,
    href: '#',
  },
];

export default function AIPlatform() {
  return (
    <section
      id="ai-platform"
      className="ai-platform"
      aria-labelledby="ai-platform-heading"
      data-node-id="15:141"
    >
      <div className="ai-platform__container">
        <header className="ai-platform__heading">
          <span className="ai-platform__eyebrow">AI Platform</span>

          <h2 id="ai-platform-heading">Pixel Pals AI Platform</h2>

          <p>
            Intelligent tools designed to help businesses and professionals
            work smarter, make better decisions and move faster.
          </p>
        </header>

        <div className="ai-platform__grid">
          {aiProducts.map((product) => (
            <article className="ai-platform__card" key={product.title}>
              <span
                className={`ai-platform__status ${
                  product.available
                    ? 'ai-platform__status--available'
                    : 'ai-platform__status--coming-soon'
                }`}
              >
                {product.status}
              </span>

              <h3>{product.title}</h3>

              <p className="ai-platform__description">
                {product.description}
              </p>

              <a
                className={`ai-platform__button ${
                  product.available
                    ? 'ai-platform__button--primary'
                    : 'ai-platform__button--secondary'
                }`}
                href={product.href}
              >
                <span>Explore Tool</span>
                <span className="ai-platform__arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>

        <div className="ai-platform__banner" data-node-id="60:181">
          <div className="ai-platform__banner-copy">
            <span className="ai-platform__banner-badge">Built for momentum</span>
            <h3>Take the next step with an AI workflow that fits your team.</h3>
            <p>
              Launch smarter support, stronger proposals and faster execution
              with a platform designed to scale with your goals.
            </p>
          </div>

          <div className="ai-platform__banner-actions">
            <a
              className="ai-platform__banner-button ai-platform__banner-button--primary"
              href="#ai-platform"
            >
              Start Your Project
            </a>
            <a
              className="ai-platform__banner-button ai-platform__banner-button--secondary"
              href="#why-pixel-pals"
            >
              See Why Pixel Pals
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
