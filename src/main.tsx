import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./style/style.css";
import '@ant-design/v5-patch-for-react-19';
import { BrowserRouter, Routes, Route, StaticRouter } from 'react-router-dom';
import { Typography, Divider } from 'antd'; 
import ProtectLayout from './layout/layout';
import { AuthProvider } from './context/auth.context';
import AuthView from './view/auth/auth.login';
import StartUp from './StartUp';
import { Provider } from 'react-redux';
import store from './redux/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Provider store={store}>
  <AuthProvider>
    <BrowserRouter>
      <StartUp/>
    </BrowserRouter>
    </AuthProvider>
  </Provider>
  </StrictMode>
);
