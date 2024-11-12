import { AuthContextProvider } from './contexts/AuthContext.tsx';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// As fontas vão ficar assim. Não é erro.
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Para rodar o projeto, executar o comando 'npm run dev' no terminal Git Bash.
// Endereço do projeto no navegador: http://localhost:5173/auth/sign-in.

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
)

