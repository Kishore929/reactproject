import './App.css';
import LoginSignUp from './Login_SignUp_Comp/LoginSignUp/LoginSignup';
import Mes_Update from './Topics/State/Mes_Update';
import PassValues from './Topics/Props/PassValues';
import Hello from './Topics/JSX/Hello';
import Counter from './Topics/SetState/Counter';

function App() {
  return (
    <div>
      {/* <LoginSignUp/>
      <Mes_Update/>
      <PassValues fname = "Ravi kishore" lname = "meesala" /> 
      <Hello/> */}

      <Counter/>
      
    </div>
  );
}

export default App;