import DashBoard from "./DashBoard";
import Widget from "./Widget";
import ReviewsSide from "./ReviewsSide";
import Customers from "./Customers";
import OnlineAnalytics from "./OnlineAnalytics";
import Settings from "./Settings";

function SideBar() {
  return (
    <div className="sidebar">
      <DashBoard />
      <Widget />
      <ReviewsSide />
      <Customers />
      <OnlineAnalytics />
      <Settings/>
    </div>
  );
}

export default SideBar;