import React from "react";
import "./App.scss";
import Carousel from "./components/Carousel";

interface State {
  images: string[];
  itemWidth: number;
  step: number;
  frameSize: number;
  animationDuration: number;
}

class App extends React.Component<{}, State> {
  state = {
    images: [
      "./img/1.png",
      "./img/2.png",
      "./img/3.png",
      "./img/4.png",
      "./img/5.png",
      "./img/6.png",
      "./img/7.png",
      "./img/8.png",
      "./img/9.png",
      "./img/10.png",
    ],
    itemWidth: 130,
    step: 3,
    frameSize: 3,
    animationDuration: 1000,
    infinite: false,
  };

  render() {
    const { images, itemWidth, step, frameSize, animationDuration, infinite } =
      this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1 data-cy="title">Carousel with {images.length} images</h1>

        <ul className="Carousel_inputs">
          <li>
            <label htmlFor="itemWidth">
              Item width:
              <input
                type="number"
                value={itemWidth}
                id="itemWidth"
                onChange={(e) =>
                  this.setState({
                    itemWidth: Number(e.target.value),
                  })
                }
              />
            </label>
          </li>
          <li>
            <label htmlFor="frameSize">
              Frame Size:
              <input
                type="number"
                value={frameSize}
                id="frameSize"
                onChange={(e) =>
                  this.setState({
                    frameSize: Number(e.target.value),
                  })
                }
              />
            </label>
          </li>
          <li>
            <label htmlFor="step">
              Step:
              <input
                type="number"
                value={step}
                id="step"
                onChange={(e) =>
                  this.setState({
                    step: Number(e.target.value),
                  })
                }
              />
            </label>
          </li>
          <li>
            <label htmlFor="animationDuration">
              Animation Duration (ms):
              <input
                type="number"
                value={animationDuration}
                id="animationDuration"
                onChange={(e) =>
                  this.setState({
                    animationDuration: Number(e.target.value),
                  })
                }
              />
            </label>
          </li>
        </ul>

        <Carousel
          images={images}
          itemWidth={itemWidth}
          step={step}
          frameSize={frameSize}
          animationDuration={animationDuration}
          infinite={infinite}
        />
      </div>
    );
  }
}

export default App;
