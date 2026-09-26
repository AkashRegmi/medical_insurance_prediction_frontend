import InsuranceForm from "./component/InsuranceForm";

const App = () => {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Akrio CoverEstimate home">
          <span className="brand-mark" aria-hidden="true">
            +
          </span>
          <span>
            Akrio <span className="brand-light">CoverEstimate</span>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#how-it-works">How it works</a>
          <a href="#about-model">About the model</a>
        </nav>
        <a className="header-cta" href="#estimate">
          Get an estimate <span aria-hidden="true">&rarr;</span>
        </a>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> A practical first look at
              insurance costs
            </p>
            <h1>
              Estimate your insurance cost <em>with machine learning.</em>
            </h1>
            <p className="hero-description">
              Enter a few personal and lifestyle details to get an estimated
              cost based on patterns learned from historical data.
            </p>
            <a className="primary-cta" href="#estimate">
              Get my estimate <span aria-hidden="true">&rarr;</span>
            </a>
            <p className="hero-disclaimer">
              <span aria-hidden="true">*</span> Estimated result. Not a
              guaranteed price.
            </p>
          </div>

          <div
            className="process-visual"
            aria-label="Your details are analyzed by a machine-learning model to produce an estimate"
          >
            <div className="visual-heading">
              <span>THE ESTIMATE, EXPLAINED</span>
              <span className="visual-status">
                <span /> MODEL-BASED
              </span>
            </div>
            <div className="visual-step visual-inputs">
              <div className="visual-step-label">
                <span>01</span>
                <span>YOUR DETAILS</span>
              </div>
              <strong>A few useful inputs</strong>
              <div className="input-tags">
                <span>Age</span>
                <span>Lifestyle</span>
                <span>Region</span>
              </div>
            </div>
            <div className="visual-connector">
              <span />
            </div>
            <div className="visual-model">
              <div className="model-symbol" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div>
                <span className="visual-kicker">02 / THE MODEL</span>
                <strong>Looks for patterns</strong>
              </div>
              <div className="model-bars" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="visual-connector visual-connector-short">
              <span />
            </div>
            <div className="visual-output">
              <div className="output-icon" aria-hidden="true">
                $
              </div>
              <div>
                <span className="visual-kicker">03 / YOUR RESULT</span>
                <strong>A cost estimate</strong>
              </div>
              <span className="output-arrow" aria-hidden="true">
                &rarr;
              </span>
            </div>
            <p className="visual-footnote">
              A helpful reference point, never a quote.
            </p>
          </div>
        </section>

        <section className="steps-section" id="how-it-works">
          <div className="section-heading">
            <p className="eyebrow">Simple by design</p>
            <h2>How does it work?</h2>
          </div>
          <div className="steps-grid">
            <article className="step-item">
              <span className="step-number">01</span>
              <h3>Enter your details</h3>
              <p>
                Share a few basic personal and lifestyle details in the form.
              </p>
            </article>
            <article className="step-item">
              <span className="step-number">02</span>
              <h3>The model finds patterns</h3>
              <p>
                A machine-learning model compares your details with historical
                data.
              </p>
            </article>
            <article className="step-item">
              <span className="step-number">03</span>
              <h3>Get an estimate</h3>
              <p>
                Review a quick estimate and what it can, and cannot, tell you.
              </p>
            </article>
          </div>
        </section>

        <section className="about-section" id="about-model">
          <div className="about-intro">
            <p className="eyebrow">Behind the number</p>
            <h2>A model-informed estimate, made easier to understand.</h2>
          </div>
          <div className="about-details">
            <p>
              Our estimate is generated by a machine-learning model trained on
              historical insurance data. It uses the details you provide to
              identify patterns in that data.
            </p>
            <ul className="benefit-list">
              <li>
                <span aria-hidden="true">01</span> Data-driven estimation
              </li>
              <li>
                <span aria-hidden="true">02</span> A quick result
              </li>
              <li>
                <span aria-hidden="true">03</span> An easy-to-understand
                explanation
              </li>
            </ul>
          </div>
          <div className="about-stamp" aria-hidden="true">
            ML
            <br />
            EST.
          </div>
        </section>

        <section className="notice-section" aria-labelledby="notice-title">
          <div className="notice-icon" aria-hidden="true">
            !
          </div>
          <div>
            <h2 id="notice-title">An estimate, not a promise.</h2>
            <p>
              Actual insurance costs may differ because of factors not included
              in the model, pricing changes, individual circumstances, and other
              factors. This tool is for educational and informational purposes
              only.
            </p>
          </div>
        </section>

        <section className="estimate-section" id="estimate">
          <div className="estimate-heading">
            <p className="eyebrow">Your turn</p>
            <h2>Let’s get your estimate.</h2>
            <p>
              Enter your details below. Your result is an estimate based on the
              information you share.
            </p>
          </div>
          <InsuranceForm />
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">
            +
          </span>
          <span>
            Akrio <span className="brand-light">CoverEstimate</span>
          </span>
        </a>
        <p>
          Educational and informational purposes only. Not an insurance quote.
        </p>
        <a href="#home">Back to top &uarr;</a>
      </footer>
    </div>
  );
};

export default App;
