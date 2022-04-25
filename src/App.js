
// import { ToastContainer } from 'react-toastify';
import AppRouter from './app-router/AppRouter';
import './App.css';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
        {/* <ToastContainer /> */}
      </AuthContextProvider>
    </div>
  );
}

export default App;
