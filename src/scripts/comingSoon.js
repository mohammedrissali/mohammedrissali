// ComingSoon.js
const ComingSoon = () => {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSubscribed(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="coming-soon-section">
      <div className="coming-soon-container">
        <div className="coming-soon-content">
          <div className="agent-preview">
            <div className="agent-avatar">
              {/* Animated dog avatar */}
              <div className="dog-ears"></div>
              <div className="dog-face"></div>
              <div className="dog-nose"></div>
              <div className="thinking-bubble">
                <span className="typing-dots">...</span>
              </div>
            </div>
          </div>
          
          <div className="coming-soon-text">
            <h2>Meet Your Personal Bark AI Agent</h2>
            <p className="subtitle">The future of human-canine communication is almost here!</p>
            
            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <span>Personalized treat preferences learning</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🧠</span>
                <span>Advanced belly rub optimization</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🦮</span>
                <span>Real-time walk route suggestions</span>
              </div>
            </div>

            {!subscribed ? (
              <form onSubmit={handleSubmit} className="signup-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access"
                  required
                  className="email-input"
                />
                <button 
                  type="submit" 
                  className="signup-button"
                  disabled={loading}
                >
                  {loading ? 'Joining waitlist...' : 'Join Waitlist'}
                </button>
              </form>
            ) : (
              <div className="success-message">
                <div className="success-icon">🎉</div>
                <h3>You're on the list!</h3>
                <p>We'll fetch you updates about our launch.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Mount component
const comingSoonRoot = document.getElementById('coming-soon-root');
if (comingSoonRoot) {
  ReactDOM.render(<ComingSoon />, comingSoonRoot);
}
