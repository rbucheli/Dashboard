import DashBoard from "./DashBoard";
import Widget from "./Widget";
import Reviews from "./Reviews";
import Customers from "./Customers";
import OnlineAnalytics from "./OnlineAnalytics";
import Settings from "./Settings";

function SideBar() {
  return (
    <div className="sidebar">
      <DashBoard />
      <Widget />
      <Reviews />
      <Customers />
      <OnlineAnalytics />
      <Settings/>
    </div>
  );
}

export default SideBar;