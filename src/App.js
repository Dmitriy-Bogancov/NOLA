import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

import { refreshUserThunk } from "./redux/auth/authThunk";
import { useAuth } from "./services/hooks/useAuth";
import { RestrictedRout } from "./components/AuthRouts/RestrictedRout";
import { PrivateRoute } from "./components/AuthRouts/PrivateRout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const Layout = lazy(() => import("./components/Layout/Layout"));
const LoadingPage = lazy(() => import("./pages/LoadingPage/LoadingPage"));
const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const PostDetailsPage = lazy(() =>
  import("./pages/PostDetailsPage/PostDetailsPage")
);
const AdvertiserDetailsPage = lazy(() =>
  import("./pages/AdvertiserDetailsPage/AdvertiserDetailsPage")
);
const AuthorizationPage = lazy(() =>
  import("./pages/AuthorizationPage/AuthorizationPage")
);
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const RecoverPasswordPage = lazy(() =>
  import("./pages/RecoverPasswordPage/RecoverPasswordPage")
);
const RecoveryPage = lazy(() => import("./pages/RecoveryPage/RecoveryPage"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
const SearchCategoriesPage = lazy(() =>
  import("./pages/SearchCategoriesPage/SearchCategoriesPage")
);
const SavedPostsPage = lazy(() =>
  import("./pages/SavedPostsPage/SavedPostsPage")
);
const UpdatePasswordPage = lazy(() =>
  import("./pages/UpdatePasswordPage/UpdatePasswordPage")
);
const AccountAdverticerPage = lazy(() =>
  import("./pages/AccountAdverticerPage/AccountAdverticerPage")
);
const SearchEngineResultsPage = lazy(() =>
  import("./pages/SearchEngineResultsPage/SearchEngineResultsPage")
);
const RegistrationCheckPage = lazy(() =>
  import("./pages/RegistrationCheckPage/RegistrationCheckPage")
);
const AdverticerEditPage = lazy(() =>
  import("./pages/AdverticerEditPage/AdverticerEditPage")
);
const SettingPage = lazy(() => import("./pages/SettingPage/SettingPage"));
const LanguagePage = lazy(() => import("./pages/LanguagePage/LanguagePage"));
const ThemePage = lazy(() => import("./pages/ThemePage/ThemePage"));
const AdverticerPublicationsPage = lazy(() =>
  import("./pages/AdverticerPublicationsPage/AdverticerPublicationsPage")
);
const AdverticeArchivePage = lazy(() =>
  import("./pages/AdverticeArchivePage/AdverticeArchivePage")
);
const LinksPage = lazy(() => import("./pages/LinksPage/LinksPage"));
const AddLinksPage = lazy(() => import("./pages/AddLinksPage/AddLinksPage"));
const AddPostPage = lazy(() => import("./pages/AddPostPage/AddPostPage"));
const QuestionsPage = lazy(() => import("./pages/QuestionsPage/QuestionsPage"));
const AboutServicePage = lazy(() =>
  import("./pages/AboutServicePage/AboutServicePage")
);
const PolicyAndPrivecyPage = lazy(() =>
  import("./pages/PolicyAndPrivecyPage/PolicyAndPrivecyPage")
);
const FeedbackPage = lazy(() =>
  import("./pages/FeedbackPage/FeedbackPage")
);
const EditPostPage = lazy(() => import("./pages/EditPostPage/EditPostPage"));
const PreviewAdvertisemetPage = lazy(() =>
  import("./pages/PreviewAdvertisemetPage/PreviewAdvertisemetPage")
);
const ChangePasswordPage = lazy(() =>
  import("./pages/ChangePasswordPage/ChangePasswordPage")
);
const ChangeEmailPage = lazy(() => 
  import("./pages/ChangeEmailPage/ChangeEmailPage")
)
const DraftsPage = lazy(() => import("./pages/DraftsPage/DraftsPage"));
const EditDraftsPage = lazy(() => import("./pages/EditDraftsPage/EditDraftsPage"))

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <div className="App">
      <ScrollToTop/>
      {!isRefreshing && (
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<LoadingPage />} />

            <Route path="/welcome" element={<WelcomePage />} />

            <Route path="/main" element={<Layout />}>
              <Route index element={<MainPage />} />
              <Route path="savedPosts" element={<SavedPostsPage />} />

              <Route path="search" element={<SearchPage />} />
              <Route
                path="search/categories"
                element={<SearchCategoriesPage />}
              />
              <Route
                path="search/categories/searchEngineResults"
                element={<SearchEngineResultsPage />}
              />

              <Route
                path="authorization"
                element={
                  <RestrictedRout
                    component={<AuthorizationPage />}
                    redirectTo="/main/accountAdverticer"
                  />
                }
              >
                <Route path="registration" element={<RegistrationPage />} />
                <Route index element={<SignInPage />} />
              </Route>

              <Route
                path="registrationCheck"
                element={
                  <RestrictedRout
                    redirectTo="/main/addPost"
                    component={<RegistrationCheckPage />}
                  />
                }
              />

              <Route
                path="accountAdverticer"
                element={
                  <PrivateRoute
                    component={<AccountAdverticerPage />}
                    redirectTo="/main/authorization"
                  />
                }
              >
                <Route index element={<AdverticerPublicationsPage />} />
                <Route
                  path="adverticerArchive"
                  element={<AdverticeArchivePage />}
                />
              </Route>

              <Route
                path="drafts"
                element={
                  <PrivateRoute component={<DraftsPage />} redirectTo="/main/authorization" />}
                // element={<DraftsPage />}
              />

              <Route
                path="addPost/:editPostId"
                element={
                  <PrivateRoute
                    component={<EditPostPage />}
                    redirectTo="/main/authorization"
                  />
                }
              />

              <Route path="drafts/:editDraftsId" element={
                  <PrivateRoute
                    component={<EditDraftsPage />}
                    redirectTo="/main/authorization"
                  />
                }/>

              <Route
                path="addPost/previewAdvertisemet"
                element={
                  <PrivateRoute
                    component={<PreviewAdvertisemetPage />}
                    redirectTo="/main/authorization"
                  />
                }
              />
            </Route>

            <Route
              path="/main/addPost"
              element={
                <PrivateRoute
                component = {
                <AddPostPage />
              }
                  redirectTo="/main/authorization"
                />
              }
            />

            <Route path="/main/:postId" element={<PostDetailsPage />} />

            <Route path="/:advertiserId" element={<AdvertiserDetailsPage />} />

            <Route
              path="/reset-password/:email/:token"
              element={<RecoverPasswordPage />}
            />
            <Route path="/recovery" element={<RecoveryPage />} />
            <Route path="/updatePassword" element={<UpdatePasswordPage />} />

            <Route
              path="main/accountAdverticer/adverticerEdit"
              element={
                <PrivateRoute
                  component={<AdverticerEditPage />}
                  redirectTo="/main/authorization"
                />
              }
            />

            <Route
              path="main/accountAdverticer/adverticerEdit/links"
              element={
                <PrivateRoute
                  component={<LinksPage />}
                  redirectTo="/main/authorization"
                />
              }
            />
            <Route
              path="main/accountAdverticer/adverticerEdit/links/addLinks"
              element={
                <PrivateRoute
                  component={<AddLinksPage />}
                  redirectTo="/main/authorization"
                />
              }
            />

            <Route path="/setting" element={<SettingPage />} />

            <Route path="/main/setting/language" element={<LanguagePage />} />
            <Route path="/main/setting/theme" element={<ThemePage />} />

            <Route
              path="/main/setting/questions"
              element={<QuestionsPage />}
            />

            <Route
              path="/main/setting/aboutService"
              element={<AboutServicePage />}
            />

            <Route
              path="/main/setting/policyAndPrivecy"
              element={<PolicyAndPrivecyPage />}
            />

           <Route
              path="/main/setting/feedback"
              element={<FeedbackPage />}
            />           
            <Route
              path="/main/settingAdverticer/changePassword"
              element={
                <PrivateRoute
                  component={<ChangePasswordPage />}
                  redirectTo="/main/authorization"
                />
              }
            />

            <Route
              path="/main/settingAdverticer/changeEmail"
              element={
                <PrivateRoute
                  component={<ChangeEmailPage />}
                  redirectTo="/main/authorization"
                />
              }
            />
          </Routes>
        </Suspense>
      )}
    </div>
  );
}

export default App;
