// Documentation.js
const Documentation = () => {
  const [activeTab, setActiveTab] = React.useState('getting-started');

  return (
    <div className="documentation-container">
      <div className="docs-sidebar">
        <h3>Documentation</h3>
        <ul className="docs-nav">
          <li>
            <button 
              className={activeTab === 'getting-started' ? 'active' : ''}
              onClick={() => setActiveTab('getting-started')}
            >
              Getting Started
            </button>
          </li>
          <li>
            <button 
              className={activeTab === 'api-reference' ? 'active' : ''}
              onClick={() => setActiveTab('api-reference')}
            >
              API Reference
            </button>
          </li>
          <li>
            <button 
              className={activeTab === 'examples' ? 'active' : ''}
              onClick={() => setActiveTab('examples')}
            >
              Examples
            </button>
          </li>
        </ul>
      </div>
      
      <div className="docs-content">
        {activeTab === 'getting-started' && (
          <div className="doc-section">
            <h2>Getting Started with BLM</h2>
            <p>BLM (Bark Language Model) is a state-of-the-art canine language processing API that enables seamless communication between humans and dogs.</p>
            
            <h3>Quick Start</h3>
            <pre className="code-block">
              <code>
{`// Initialize BLM
const blm = new BLM('your-api-treat');

// Process a command
const response = await blm.process({
  input: "Want to go for a walk?",
  excitement: 0.9
});`}
              </code>
            </pre>
          </div>
        )}

        {activeTab === 'api-reference' && (
          <div className="doc-section">
            <h2>API Reference</h2>
            <div className="method-card">
              <h3>blm.process(input, options)</h3>
              <p>Process human commands and convert them to canine understanding.</p>
              
              <h4>Parameters</h4>
              <table className="params-table">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>input</td>
                    <td>string</td>
                    <td>The human command to process</td>
                  </tr>
                  <tr>
                    <td>excitement</td>
                    <td>float</td>
                    <td>Level of enthusiasm (0-1)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'examples' && (
          <div className="doc-section">
            <h2>Examples</h2>
            <div className="example-card">
              <h3>Basic Usage</h3>
              <pre className="code-block">
                <code>
{`// Process a simple command
const response = await blm.process({
  input: "Let's play fetch!",
  options: {
    excitement: 0.9,
    treatSensitivity: 0.8,
    tailWagSpeed: "maximum"
  }
});`}
                </code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Mount component
const documentationRoot = document.getElementById('documentation-root');
if (documentationRoot) {
  ReactDOM.render(<Documentation />, documentationRoot);
}
