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
import Students from "./screens/Students";
import StudentDetail from "./screens/StudentDetail";
import { students } from "./data";

const HIDE_NAV_SCREENS: Screen[] = ["admin", "admin-login"];

function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [selectedCampaignId, setSelectedCampaignId] = useState<string>(
    campaigns[0].id,
  );
  const [selectedStudentId, setSelectedStudentId] = useState<string>(
    students[0].id,
  );

  function navigate(target: Screen, id?: string) {
    if (target === "detail" && id) setSelectedCampaignId(id);
    if (target === "student-detail" && id) setSelectedStudentId(id);
    setScreen(target);
    window.scrollTo(0, 0);
  }

  const selectedCampaign =
    campaigns.find((c) => c.id === selectedCampaignId) ?? campaigns[0];
  const selectedStudent =
    students.find((s) => s.id === selectedStudentId) ?? students[0];
  const showNav = !HIDE_NAV_SCREENS.includes(screen);

  return (
    <div>
      {showNav && <Nav onNavigate={navigate} currentScreen={screen} />}
      {screen === "home" && <Home onNavigate={navigate} />}
      {screen === "campaigns" && <Campaigns onNavigate={navigate} />}
      {screen === "detail" && (
        <CampaignDetail campaign={selectedCampaign} onNavigate={navigate} />
      )}
      {screen === "students" && <Students onNavigate={navigate} />}
      {screen === "student-detail" && (
        <StudentDetail student={selectedStudent} onNavigate={navigate} />
      )}
      {screen === "donate" && <Donate />}
      {screen === "admin-login" && <AdminLogin onNavigate={navigate} />}
      {screen === "admin" && <AdminDashboard onNavigate={navigate} />}
      {screen === "gallery" && <Gallery />}
    </div>
  );
}

export default App;
