// Playground.js
const Playground = () => {
  const [input, setInput] = React.useState("Want to go to the park?");
  const [settings, setSettings] = React.useState({
    excitement: 0.8,
    treatSensitivity: 0.7,
    barkVolume: "medium",
    tailWagSpeed: "fast"
  });
  const [output, setOutput] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const processInput = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setOutput({
        intention: "PARK_DETECTED",
        excitement_level: settings.excitement * 1.2,
        tail_wag_frequency: settings.tailWagSpeed === "fast" ? 8.5 : 4.2,
        predicted_actions: [
          "run_to_door",
          "bring_leash",
          "maximum_excitement"
        ],
        treat_expectation: settings.treatSensitivity,
        bark_response: {
          volume: settings.barkVolume,
          frequency: "happy",
          duration: "2s"
        }
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="playground-container">
      <h2>Interactive Playground</h2>
      <div className="playground-grid">
        <div className="input-section">
          <h3>Input</h3>
          <textarea 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="command-input"
            placeholder="Enter your command..."
          />
          <div className="settings-grid">
            <div className="setting">
              <label>Excitement Level</label>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.1"
                value={settings.excitement}
                onChange={(e) => setSettings({...settings, excitement: parseFloat(e.target.value)})}
              />
            </div>
            <div className="setting">
              <label>Treat Sensitivity</label>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.1"
                value={settings.treatSensitivity}
                onChange={(e) => setSettings({...settings, treatSensitivity: parseFloat(e.target.value)})}
              />
            </div>
          </div>
          <button 
            onClick={processInput}
            disabled={loading}
            className="process-btn"
          >
            {loading ? 'Processing...' : 'Process Command'}
          </button>
        </div>
        {output && (
          <div className="output-section">
            <h3>Output</h3>
            <pre className="output-display">
              {JSON.stringify(output, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

// Mount component
const playgroundRoot = document.getElementById('playground-root');
if (playgroundRoot) {
  ReactDOM.render(<Playground />, playgroundRoot);
}
