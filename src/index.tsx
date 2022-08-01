import {createRoot} from 'react-dom/client';
import App from './App';
const appContainer = document.getElementById('app');

if (appContainer) {
  const root = createRoot(appContainer);
  root.render(<App />);
}
