import Reviews from "./components/Reviews";
import AverageRating from "./components/AverageRating";
import SentimentalAnalysis from "./components/SentimentAnalysis";
import WebsiteVisitors from "./components/WebsiteVisitors";
import SideBar from "./components/SideBar";

import './styles.css';


function App() {
  return (
    <div className="container">
      <Reviews />
      <AverageRating />
      <SentimentalAnalysis />
      <WebsiteVisitors />
      <SideBar />
    </div>
  )
}

export default App;
