import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { Global, ThemeProvider } from '@emotion/react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { GlobalStyles, theme } from 'styles';
import { persistor } from './redux/store';
import { store } from './redux/store';
import 'modern-normalize';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    </ThemeProvider>
  </React.StrictMode>
);
