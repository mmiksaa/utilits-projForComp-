import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Timer from './views/Timer/Timer';
import Palitra from './views/Palitra/Palitra';

import { store } from './store/store';
import { Provider } from 'react-redux';

import styles from './App.module.scss';

function App() {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Timer />} />
            <Route path='/palitra' element={<Palitra />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
