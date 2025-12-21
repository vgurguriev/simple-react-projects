import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="container">
      {/* Accordian */}
      {/* <Accordian /> */}

      {/* Random Color */}
      {/* <RandomColor /> */}

      {/* Star Rating */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image Slider */}
      <ImageSlider
        urlInput={"https://picsum.photos/v2/list"}
        limit={5}
        page={1}
      />
    </div>
  );
}

export default App;
