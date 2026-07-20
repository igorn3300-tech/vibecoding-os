const journeyPath =
  'M215 800C315 670 415 650 520 710C690 810 850 765 1015 625C1135 520 1210 350 1335 235'

function IdeaStage() {
  return (
    <div className="journey-stage-dom idea-stage-dom">
      <div className="idea-card-dom">
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
          <path d="M20 29C20 22 25 17 32 17C39 17 44 22 44 29C44 35 40 38 37 42H27C24 38 20 35 20 29ZM27 48H37M29 53H35" />
          <path d="M32 10V5M12 18L8 14M52 18L56 14M13 34H7M57 34H51" />
        </svg>
      </div>
      <strong>ИДЕЯ</strong>
    </div>
  )
}

function ProductStage() {
  return (
    <div className="journey-stage-dom product-stage-dom">
      <div className="glass-stage-card product-card-dom">
        <div className="browser-dots"><i /><i /><i /></div>
        <span className="browser-line browser-line-long" />
        <span className="browser-line browser-line-short" />
        <div className="browser-tiles"><i /><i /></div>
      </div>
      <strong>ПРОДУКТ</strong>
    </div>
  )
}

function RevenueStage() {
  return (
    <div className="journey-stage-dom revenue-stage-dom">
      <div className="glass-stage-card revenue-card-dom">
        <div className="revenue-bars"><i /><i /><i /><i /></div>
        <svg className="revenue-chart-dom" viewBox="0 0 100 62" aria-hidden="true">
          <path d="M5 51L25 34L43 42L62 23L78 31L95 8" />
          <path d="M84 8H95V19" />
        </svg>
        <span className="ruble-chip">₽</span>
      </div>
      <strong>ДОХОД</strong>
    </div>
  )
}

function GrowthStage() {
  return (
    <div className="journey-stage-dom growth-stage-dom">
      <div className="glass-stage-card growth-card-dom">
        <span className="growth-grid-dom" />
        <svg className="growth-chart-dom" viewBox="0 0 110 95" aria-hidden="true">
          <path className="growth-area-dom" d="M4 88V70L30 46L52 56L76 38L105 5V88Z" />
          <path className="growth-line-dom" d="M4 70L30 46L52 56L76 38L105 5" />
          <path className="growth-arrow-dom" d="M93 5H105V17" />
        </svg>
        <span className="growth-flare-dom" />
      </div>
      <strong>РОСТ</strong>
    </div>
  )
}

export function FounderJourneyIllustration() {
  return (
    <div className="journey" aria-hidden="true">
      <svg
        className="journey-svg"
        viewBox="0 0 1536 1024"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
      >
        <defs>
          <linearGradient id="journeyLine" x1="215" y1="800" x2="1335" y2="235">
            <stop stopColor="#8B5CF6" />
            <stop offset="0.48" stopColor="#3B82F6" />
            <stop offset="0.77" stopColor="#22D3EE" />
            <stop offset="1" stopColor="#22C55E" />
          </linearGradient>
          <filter id="routeGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        <g className="background-rings">
          <circle cx="768" cy="490" r="315" />
          <circle cx="768" cy="490" r="365" />
          <circle cx="768" cy="490" r="415" />
        </g>

        <path className="route-glow" d={journeyPath} />
        <path className="route-main" d={journeyPath} />
        <path className="route-core" d={journeyPath} />
        <path className="route-tail" d={journeyPath} />

        <circle className="travel-pulse" cx="0" cy="0" r="8" />
        {Array.from({ length: 12 }, (_, index) => (
          <circle
            className={`path-particle particle-${index + 1}`}
            cx="0"
            cy="0"
            r={index % 3 === 0 ? 3 : 2}
            key={index}
          />
        ))}
        <g className="flow-arrow flow-arrow-1"><path d="M0 -6L9 0L0 6" /></g>
        <g className="flow-arrow flow-arrow-2"><path d="M0 -6L9 0L0 6" /></g>
      </svg>

      <svg
        className="data-waves"
        viewBox="0 0 1536 1024"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
      >
        <defs>
          <linearGradient id="waveLine" x1="0" y1="0" x2="1536" y2="0">
            <stop stopColor="#8B5CF6" />
            <stop offset="0.55" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <g className="bottom-waves">
          <path d="M-80 850C184 790 328 924 574 874C812 826 956 938 1610 770" />
          <path d="M-80 878C218 824 344 946 610 894C860 845 1060 921 1610 802" />
          <path d="M-80 908C222 860 392 970 696 916C966 868 1180 914 1610 842" />
          <path d="M-80 938C260 900 430 990 756 948C1040 912 1252 934 1610 886" />
          <path d="M-80 966C296 938 468 1004 824 974C1110 950 1324 958 1610 930" />
          <path d="M-80 990C320 968 512 1018 876 997C1164 980 1378 985 1610 970" />
        </g>
        <g className="wave-points">
          <circle cx="206" cy="852" r="3" />
          <circle cx="462" cy="913" r="2.5" />
          <circle cx="706" cy="888" r="3" />
          <circle cx="954" cy="907" r="2" />
          <circle cx="1218" cy="850" r="3" />
          <circle cx="1396" cy="817" r="2.5" />
        </g>
      </svg>

      <div className="mobile-route" />
      <IdeaStage />
      <ProductStage />
      <RevenueStage />
      <GrowthStage />
    </div>
  )
}
