import './App.css';
import ContextProvider from './Context/ContextProvider';
import AppRouter from './routers/AppRouter';
import "./Styles/Home_css/home.css"
import './Styles/Home_css/NavBar.css'
import './Styles/Home_css/profile.css'
import './Styles/Signing_css/login.css'
import './Styles/Signing_css/register.css'
import './Styles/User_css/singleProposal.css'
import './Styles/User_css/userProposals.css'
import './Styles/Vendor_css/Createproposal.css'
import './Styles/Vendor_css/EachProposal.css'
import './Styles/Vendor_css/Proposals.css'

function App() {
  return <ContextProvider>
    <AppRouter/>
  </ContextProvider>
  
}

export default App;
