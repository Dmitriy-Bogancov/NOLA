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
import SearchPage from "./pages/SearchPage/SearchPage";
import SearchCategoriesPage from "./pages/SearchCategoriesPage/SearchCategoriesPage";
import SavedPostsPage from "./pages/SavedPostsPage/SavedPostsPage";
import UpdatePasswordPage from "./pages/UpdatePasswordPage/UpdatePasswordPage";
import AccountAdverticerPage from "./pages/AccountAdverticerPage/AccountAdverticerPage";
import SearchEngineResultsPage from "./pages/SearchEngineResultsPage/SearchEngineResultsPage";
import RegistrationCheckPage from "./pages/RegistrationCheckPage/RegistrationCheckPage";
import AdverticerEditPage from "./pages/AdverticerEditPage/AdverticerEditPage";
import SettingPage from "./pages/SettingPage/SettingPage";

import ThemePage from "./pages/ThemePage/ThemePage";
import LanguagePage from "./pages/LanguagePage/LanguagePage";
import AdverticerPublicationsPage from "./pages/AdverticerPublicationsPage/AdverticerPublicationsPage";
import AdverticerSavedPage from "./pages/AdverticerSavedPage/AdverticerSavedPage";
import LinksPage from "./pages/LinksPage/LinksPage";
import AddLinksPage from "./pages/AddLinksPage/AddLinksPage";
import AddPostPage from "./pages/AddPostPage/AddPostPage";
import AboutServicePage from "./pages/AboutServicePage/AboutServicePage";
import ContactServicePage from "./pages/PolicyAndPrivecyPage/PolicyAndPrivecyPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoadingPage />} />

        <Route path="/welcome" element={<WelcomePage />} />

        <Route path="/entrance" element={<EntrancePage />} />

        <Route path="/main" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="savedPosts" element={<SavedPostsPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="search/categories" element={<SearchCategoriesPage />} />
          <Route
            path="search/categories/searchEngineResults"
            element={<SearchEngineResultsPage />}
          />

          <Route path="authorization" element={<AuthorizationPage />}>
            <Route path="registration" element={<RegistrationPage />} />
            <Route index element={<SignInPage />} />
          </Route>

          <Route path="registrationCheck" element={<RegistrationCheckPage />} />

          <Route path="accountAdverticer" element={<AccountAdverticerPage />}>
            <Route
              // path="adverticerPublications"
              index
              element={<AdverticerPublicationsPage />}
            />
            <Route path="adverticerSaved" element={<AdverticerSavedPage />} />
          </Route>

          <Route path="addPost" element={<AddPostPage />} />
        </Route>

        <Route path="/main/:postId" element={<PostDetailsPage />} />

        <Route path="/:advertiserId" element={<AdvertiserDetailsPage />} />

        <Route path="/recoverPasswordPage" element={<RecoverPasswordPage />} />
        <Route path="/recovery" element={<RecoveryPage />} />
        <Route path="/updatePassword" element={<UpdatePasswordPage />} />

        <Route
          path="main/accountAdverticer/adverticerEdit"
          element={<AdverticerEditPage />}
        />

        <Route
          path="main/accountAdverticer/adverticerEdit/links"
          element={<LinksPage />}
        />
        <Route
          path="main/accountAdverticer/adverticerEdit/links/addLinks"
          element={<AddLinksPage />}
        />

        <Route path="/main/setting" element={<SettingPage />} />
        <Route path="/main/setting/language" element={<LanguagePage />} />
        <Route path="/main/setting/theme" element={<ThemePage />} />
        <Route
          path="/main/setting/aboutService"
          element={<AboutServicePage />}
        />

        <Route
          path="/main/setting/aboutService/contactService"
          element={<ContactServicePage />}
        />
      </Routes>
    </div>
  );
}

export default App;
