import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function Instructions() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

<<<<<<< HEAD
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="img-fluid"
          alt="rules"
          src={`${window.location.origin}/assets/images/welcome.png`}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid"
          alt="rules"
          src={`${window.location.origin}/assets/images/overview.png`}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid"
          alt="rules"
          src={`${window.location.origin}/assets/images/last.png`}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid"
          alt="rules"
          src={`${window.location.origin}/assets/images/rules.png`}
        />
      </Carousel.Item>
    </Carousel>
  );
=======
	return (
		<>
			<Container style={{ minHeight: "100vh" }}>
				<Carousel activeIndex={index} onSelect={handleSelect}>
					<Carousel.Item>
						<img
							className="img-fluid"
							alt="rules"
							src={`${window.location.origin}/assets/images/welcome.png`}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="img-fluid"
							alt="rules"
							src={`${window.location.origin}/assets/images/overview.png`}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="img-fluid"
							alt="rules"
							src={`${window.location.origin}/assets/images/last.png`}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="img-fluid"
							alt="rules"
							src={`${window.location.origin}/assets/images/rules.png`}
						/>
					</Carousel.Item>
				</Carousel>
				<br></br>
			</Container>
		</>
	);
>>>>>>> 2d781942b0c7282c9893eed2d277435b82907190
}
