
import LandingPage from './component/LandingPage';
import { BsToggles2} from 'react-icons/bs';
import useLocalStorage from 'use-local-storage';
import './App.css'

function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  return (
    <div className="App" data-theme={theme}>
        <div className='p-3 flex justify-end'>
        <div className='theme-toggle rounded-xl p-2' >
        <BsToggles2 className='icon' onClick={switchTheme}/>
      </div>
        </div>
     

     < LandingPage />
    </div>
  );
}

export default App;
