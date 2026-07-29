import { useState } from "react";
import type { Screen } from "./types";
import { campaigns } from "./data";
import Nav from "./components/Nav";
import Home from "./screens/Home";
import Campaigns from "./screens/Campaigns";
import CampaignDetail from "./screens/CampaignDetail";
import Donate from "./screens/Donate";
import AdminLogin from "./screens/AdminLogin";
import AdminDashboard from "./screens/AdminDashboard";
import Gallery from "./screens/Gallery";

const HIDE_NAV_SCREENS: Screen[] = ["admin", "admin-login"];

function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [selectedCampaignId, setSelectedCampaignId] = useState<string>(
    campaigns[0].id,
  );

  function navigate(target: Screen, campaignId?: string) {
    if (campaignId) setSelectedCampaignId(campaignId);
    setScreen(target);
    window.scrollTo(0, 0);
  }

  const selectedCampaign =
    campaigns.find((c) => c.id === selectedCampaignId) ?? campaigns[0];
  const showNav = !HIDE_NAV_SCREENS.includes(screen);

  return (
    <div>
      {showNav && <Nav onNavigate={navigate} currentScreen={screen} />}
      {screen === "home" && <Home onNavigate={navigate} />}
      {screen === "campaigns" && <Campaigns onNavigate={navigate} />}
      {screen === "detail" && (
        <CampaignDetail campaign={selectedCampaign} onNavigate={navigate} />
      )}
      {screen === "donate" && <Donate />}
      {screen === "admin-login" && <AdminLogin onNavigate={navigate} />}
      {screen === "admin" && <AdminDashboard onNavigate={navigate} />}
      {screen === "gallery" && <Gallery />}
    </div>
  );
}

export default App;
