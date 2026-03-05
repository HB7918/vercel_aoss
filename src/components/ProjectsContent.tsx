export default function ProjectsContent() {
  return (
    <div className="content-area">
      {/* Feature Banner */}
      <div className="feature-banner">
        <div className="feature-banner-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <p>
          <strong>Experience the new navigation</strong>{' '}
          <a href="#">Learn more</a>
        </p>
        <button className="try-btn">Try it out</button>
      </div>

      {/* Projects Header */}
      <div className="projects-header">
        <input 
          type="text" 
          placeholder="Search Projects..." 
          style={{
            padding: '8px 12px',
            border: '1px solid #eaeaea',
            borderRadius: '6px',
            fontSize: '14px',
            width: '240px',
            background: '#fff'
          }}
        />
        <div className="view-controls">
          <button className="view-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
          </button>
          <button className="view-btn active">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
          <button className="view-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
          <button className="add-new-btn">
            Add New...
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Projects Card */}
      <div style={{ display: 'flex', gap: '24px' }}>
        <div className="projects-card" style={{ flex: 1 }}>
          <div className="projects-card-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
          <h2>Deploy your first project</h2>
          <p>Start with one of our templates<br />or create something new.</p>

          <div className="integration-list">
            {/* Import Project */}
            <div className="integration-item">
              <div className="integration-info">
                <div className="integration-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
                <div className="integration-details">
                  <h3>Import Project</h3>
                  <p>Add a repo from your git provider</p>
                </div>
              </div>
              <button className="integration-btn">Import</button>
            </div>

            {/* Next.js Boilerplate */}
            <div className="integration-item">
              <div className="integration-info">
                <div className="integration-icon" style={{ background: '#000', color: '#fff' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.5 0C5.149 0 0 5.149 0 11.5S5.149 23 11.5 23 23 17.851 23 11.5 17.851 0 11.5 0zm0 1.5c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10z"/>
                  </svg>
                </div>
                <div className="integration-details">
                  <h3>Next.js Boilerplate</h3>
                  <p>Get started with Next.js and React.</p>
                </div>
              </div>
              <button className="integration-btn">Deploy</button>
            </div>

            {/* OpenSearch Serverless - HIGHLIGHTED */}
            <div className="integration-item highlighted">
              <div className="integration-info">
                <div className="integration-icon opensearch-icon">
                  OS
                </div>
                <div className="integration-details">
                  <h3>
                    Amazon OpenSearch Serverless
                    <span className="new-tag">NEW</span>
                  </h3>
                  <p>Vector search & RAG with AWS OpenSearch V2</p>
                </div>
              </div>
              <button className="integration-btn primary">Deploy</button>
            </div>

            {/* AI Chatbot */}
            <div className="integration-item">
              <div className="integration-info">
                <div className="integration-icon" style={{ background: '#f3f4f6' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="integration-details">
                  <h3>AI Chatbot</h3>
                  <p>A full featured, hackable Next.js AI chatbot.</p>
                </div>
              </div>
              <button className="integration-btn">Deploy</button>
            </div>

            {/* Express.js */}
            <div className="integration-item">
              <div className="integration-info">
                <div className="integration-icon" style={{ background: '#f3f4f6' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div className="integration-details">
                  <h3>Express.js</h3>
                  <p>Get started with Express.js on Vercel.</p>
                </div>
              </div>
              <button className="integration-btn">Deploy</button>
            </div>

            {/* Vite + React */}
            <div className="integration-item">
              <div className="integration-info">
                <div className="integration-icon" style={{ background: '#646cff20' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#646cff">
                    <path d="M12 2L2 19.5h20L12 2z" />
                  </svg>
                </div>
                <div className="integration-details">
                  <h3>Vite + React Starter</h3>
                  <p>Get started with Vite and React on Vercel.</p>
                </div>
              </div>
              <button className="integration-btn">Deploy</button>
            </div>

            {/* Browse Templates */}
            <div className="browse-templates">
              <span>Browse Templates</span>
              <div className="template-icons">
                <div className="template-icon" style={{ background: '#00d8ff' }} />
                <div className="template-icon" style={{ background: '#ff6b35' }} />
                <div className="template-icon" style={{ background: '#8b5cf6' }} />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
