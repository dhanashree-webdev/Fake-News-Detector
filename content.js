async function analyzeContent() {
    const textContent = document.body.innerText;
    // Send the content to your analysis server or use a local model
    const response = await fetch('https://your-analysis-server.com/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: textContent })
    });
    const result = await response.json();
    
    // Display the result (this could be an overlay, a badge, etc.)
    const statusElement = document.createElement('div');
    statusElement.style.position = 'fixed';
    statusElement.style.top = '10px';
    statusElement.style.right = '10px';
    statusElement.style.padding = '10px';
    statusElement.style.backgroundColor = result.isFake ? 'red' : 'green';
    statusElement.style.color = 'white';
    statusElement.textContent = result.isFake ? 'Fake News Detected' : 'News Verified';
    document.body.appendChild(statusElement);
  }
  
  analyzeContent();
  