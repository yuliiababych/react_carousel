import React, { useState } from "react";
import "./Carousel.scss";

interface Props {
  images: string[];
  step?: number;
  itemWidth?: number;
  frameSize?: number;
  animationDuration?: number;
  infinite?: boolean;
}

const Carousel: React.FC<Props> = ({
  images,
  step = 3,
  itemWidth = 130,
  frameSize = 3,
  animationDuration = 1000,
  infinite = false,
}) => {
  const [position, setPosition] = useState<number>(0);

  const move = (direction: "next" | "prev") => {
    const maxPosition = images.length - frameSize;
    let newPosition: number = position;

    if (direction === "next") {
      newPosition = position + step;

      if (newPosition > maxPosition) {
        newPosition = infinite ? 0 : maxPosition;
      }
    } else {
      newPosition = position - step;

      if (newPosition < 0) {
        newPosition = infinite ? maxPosition : 0;
      }
    }

    setPosition(newPosition);
  };

  const gap = 10;
  const containerWidth = frameSize * itemWidth + (frameSize - 1) * gap;
  const totalListWidth = itemWidth * images.length + gap * (images.length - 1);

  const isAtStart = position === 0;
  const isAtEnd = position >= images.length - frameSize;

  return (
    <div className="Carousel">
      <div
        className="Carousel__list-wrapper"
        style={{
          width: `${containerWidth}px`,
          overflow: "hidden",
        }}
      >
        <ul
          className="Carousel__list"
          style={{
            transform: `translateX(${-position * (itemWidth + gap)}px)`,
            transition: `transform ${animationDuration}ms ease-in-out`,
            width: `${totalListWidth}px`,
            height: `${itemWidth}px`,
          }}
        >
          {images.map((image, index) => (
            <li key={index} style={{ width: `${itemWidth}px` }}>
              <img src={image} alt={`${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>

      <div className="Carousel__buttons">
        <button
          type="button"
          onClick={() => move("prev")}
          disabled={!infinite && isAtStart}
          className={!infinite && isAtStart ? "disabled" : ""}
        >
          ⏪
        </button>
        <button
          type="button"
          onClick={() => move("next")}
          data-cy="next"
          disabled={!infinite && isAtEnd}
          className={!infinite && isAtEnd ? "disabled" : ""}
        >
          ⏩
        </button>
      </div>
    </div>
  );
};

export default Carousel;
