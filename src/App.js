import { useEffect, useState } from 'react'; 
import './App.css';
import Header from './component/Header';
import fetchUser from './services/random_user';
import UserSummary from './component/UserSummary';


function App() {

  const [currentUser, setCurrentUser] = useState(null);

  const refreshUser = async () => {
    const res = await fetchUser()
    setCurrentUser(res.results[0])
    console.log(currentUser)
}


  useEffect(() => {
    refreshUser()
  }, [])

  return (
    <div className="App">
      <Header />
      <button onClick={refreshUser}>Click Me</button>

      <UserSummary userData={currentUser} />
    </div>
  );
}

export default App;