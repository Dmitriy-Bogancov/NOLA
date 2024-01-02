import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import EntrancePage from "./pages/EntrancePage/EntrancePage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import MainPage from "./pages/MainPage/MainPage";
import PostDetailsPage from "./pages/PostDetailsPage/PostDetailsPage";
import AdvertiserDetailsPage from "./pages/AdvertiserDetailsPage/AdvertiserDetailsPage";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import RecoverPasswordPage from "./pages/RecoverPasswordPage/RecoverPasswordPage";
import RecoveryPage from "./pages/RecoveryPage/RecoveryPage";
import AdvertiserPage from "./pages/AdvertiserPage/AdvertiserPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoadingPage />} />
        </Route>

        <Route path="/entrance" element={<EntrancePage />} />
        <Route path="/welcome" element={<WelcomePage />} />

        <Route path="/main" element={<MainPage />} />
        <Route path="/main/:postId" element={<PostDetailsPage />} />

        <Route path="/:advertiserId" element={<AdvertiserDetailsPage />} />

        <Route path="/authorization" element={<AuthorizationPage />} />

        <Route path="registration" element={<RegistrationPage />} />
        <Route path="signIn" element={<SignInPage />} />

        <Route path="/recoverPasswordPage" element={<RecoverPasswordPage />} />
        <Route path="/recovery" element={<RecoveryPage />} />

        <Route path="/advertiser" element={<AdvertiserPage />} />
      </Routes>
    </div>
  );
}

export default App;
