import { FounderJourneyIllustration } from './components/FounderJourneyIllustration'
import './App.css'

function App() {
  const handleCreateProject = () => {
    console.log('Создание нового проекта')
  }

  return (
    <main className="hero">
      <section className="hero-layout" aria-labelledby="hero-title">
        <div className="hero-copy">
          <header>
            <h1 id="hero-title">
              <span className="title-founder">Founder</span>
              <span className="title-os">OS</span>
            </h1>
            <p className="hero-tagline">
              Превращаем идеи в продукты.
              <br />
              Продукты — в <span>успешный бизнес.</span>
            </p>
          </header>

          <div className="hero-welcome">
            <p className="welcome-label">Добро пожаловать.</p>
            <p className="welcome-question">У вас появилась новая идея?</p>
            <p className="welcome-result">
              Давайте превратим её в успешный бизнес.
            </p>
          </div>

          <div className="create-button-shell">
            <div className="button-breathe-shell">
              <button
                className="create-button"
                type="button"
                onClick={handleCreateProject}
              >
                <svg
                  className="button-spark"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M12 3L13.7 8.3L19 10L13.7 11.7L12 17L10.3 11.7L5 10L10.3 8.3L12 3Z" />
                </svg>
                <span>Создать новый проект</span>
                <span className="arrow-circle">
                  <svg
                    className="button-arrow"
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M5 12H19M13 6L19 12L13 18" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <span className="scroll-cue" aria-hidden="true" />
        </div>

        <FounderJourneyIllustration />
      </section>
    </main>
  )
}

export default App
