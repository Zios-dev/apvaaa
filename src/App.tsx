import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import INBOX from "./pages/INBOX";
import FAVOURITES from "./pages/FAVOURITES";
import SHOWS from "./pages/SHOWS";
import DASHBOARD from "./pages/DASHBOARD";
import CREATESHOW from "./pages/CREATESHOW";
import ACCOUNTSETTINGS from "./pages/ACCOUNTSETTINGS";
import PROFILE from "./pages/PROFILE";
import INBOXCHAT from "./pages/INBOXCHAT";
import INBOXCHAT1 from "./pages/INBOXCHAT1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/favourites":
        title = "";
        metaDescription = "";
        break;
      case "/shows":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/create-show":
        title = "";
        metaDescription = "";
        break;
      case "/account-settings":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/inbox-chat1":
        title = "";
        metaDescription = "";
        break;
      case "/inbox-chat":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<INBOX />} />
      <Route path="/favourites" element={<FAVOURITES />} />
      <Route path="/shows" element={<SHOWS />} />
      <Route path="/dashboard" element={<DASHBOARD />} />
      <Route path="/create-show" element={<CREATESHOW />} />
      <Route path="/account-settings" element={<ACCOUNTSETTINGS />} />
      <Route path="/profile" element={<PROFILE />} />
      <Route path="/inbox-chat1" element={<INBOXCHAT />} />
      <Route path="/inbox-chat" element={<INBOXCHAT1 />} />
    </Routes>
  );
}
export default App;
