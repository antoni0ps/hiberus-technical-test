import './App.css';
import LoginForm from './components/LoginForm';
// import UsersList from './components/UsersList';
import Router from './routes/Router';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>HEADER</h1>
        </header>
        <LoginForm />
        {/* <UsersList /> */}
      </div>
    </Router>

  );
}

export default App;
