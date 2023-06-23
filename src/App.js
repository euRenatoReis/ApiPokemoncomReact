import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from './contexts/theme-context';
import { BtShowMore } from './buttons/show-more-button/showMoreButton';
import { ToggleButton } from './toggle-button/toggle-button';
import {FetchFunction} from './services/getData'
import { Card } from './cards/card';


function App() {
  return (
    <div>
      <FetchFunction/>
      <ThemeProvider>
        <ToggleButton />
        <Card />
        <BtShowMore />
      </ThemeProvider>
    </div>
  );
}

export default App;
