import Image from 'next/image';
import Footer from '../../components/Footer';
import './resume-assistant.css';

export const metadata = {
  title: 'AI Resume Assistant | Pixel Pals',
  description:
    'Preview the Pixel Pals AI Resume Assistant for clearer, stronger and more relevant CV applications.',
};

const features = [
  {
    number: '01',
    title: 'Understand your goal',
    description:
      'The assistant will begin with the role, industry and experience level you are targeting.',
  },
  {
    number: '02',
    title: 'Strengthen the content',
    description:
      'It will help improve clarity, structure, wording and relevance while keeping your experience truthful.',
  },
  {
    number: '03',
    title: 'Prepare for applications',
    description:
      'It will help highlight missing keywords, role alignment and opportunities to improve your CV.',
  },
];

const developmentNotes = [
  'Clear, role-specific guidance',
  'Simple step-by-step experience',
  'Private and user-controlled editing',
];

function ResumePreview() {
  return (
    <div className="resume-page__preview" data-node-id="163:25">
      <div className="resume-page__cv-viewport" data-node-id="163:26">
        <Image
          className="resume-page__cv"
          src="/resume-preview.png"
          alt="Preview of a professionally formatted CV"
          width={2532}
          height={3594}
          priority
        />
      </div>

      <div
        className="resume-page__score"
        aria-label="CV match score: 87 percent"
        data-node-id="163:40"
      >
        <span>CV MATCH SCORE</span>
        <strong>87%</strong>
        <small>↑ 18 points</small>
      </div>
    </div>
  );
}

export default function ResumeAssistantPage() {
  return (
    <div className="resume-page">
      <main>
        <section className="resume-page__hero" aria-labelledby="resume-page-title">
          <div className="resume-page__hero-inner">
            <div className="resume-page__hero-copy">
              <span className="resume-page__badge">
                <Image
                  src="/early-access-dot.svg"
                  alt=""
                  width={8}
                  height={8}
                  aria-hidden="true"
                />
                Early Access Preview
              </span>

              <p className="resume-page__eyebrow">
                A SMARTER WAY TO BUILD YOUR NEXT CV
              </p>

              <h1 id="resume-page-title">
                Your experience deserves a CV that gets noticed.
              </h1>

              <p className="resume-page__intro">
                We are building an AI-powered resume assistant that will help
                you shape stronger, clearer and more relevant applications —
                without losing your own voice.
              </p>

              <p className="resume-page__release-note">
                <Image
                  src="/private-development-dot.svg"
                  alt=""
                  width={7}
                  height={7}
                  aria-hidden="true"
                />
                Currently in private development
              </p>
            </div>

            <ResumePreview />
          </div>
        </section>

        <section
          className="resume-page__features"
          aria-labelledby="resume-page-features-title"
        >
          <header className="resume-page__feature-intro">
            <h2 id="resume-page-features-title">
              An assistant designed around the whole application journey.
            </h2>
            <p>
              The first release is being shaped to make CV creation simpler,
              more focused and easier to understand.
            </p>
          </header>

          <div className="resume-page__feature-grid">
            {features.map((feature) => (
              <article className="resume-page__feature-card" key={feature.number}>
                <span
                  className={`resume-page__feature-number ${
                    feature.number === '01'
                      ? 'resume-page__feature-number--active'
                      : ''
                  }`}
                >
                  {feature.number}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="resume-page__development"
          aria-labelledby="resume-page-development-title"
        >
          <div className="resume-page__development-copy">
            <p className="resume-page__development-eyebrow">
              Early Access Preview
            </p>
            <h2 id="resume-page-development-title">
              We are taking the time to build it properly.
            </h2>
            <p>
              The AI Resume Assistant is still being designed, tested and
              refined. This page is a preview of the experience we are working
              toward — not a live product yet.
            </p>
          </div>

          <ul className="resume-page__checklist">
            {developmentNotes.map((note) => (
              <li key={note}>
                <span aria-hidden="true">✓</span>
                {note}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
