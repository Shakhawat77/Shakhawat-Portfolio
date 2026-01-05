// Simple test without React imports
const root = document.getElementById('root');
if (root) {
  root.innerHTML = `
    <div style="padding: 20px; font-size: 24px; color: red; font-family: Arial;">
      <h1>🎉 Basic JavaScript is Working!</h1>
      <p>If you see this, the basic setup is working.</p>
      <button onclick="alert('Button clicked!')">Test Button</button>
    </div>
  `;
} else {
  console.error('Root element not found!');
}