import React from "react";
import { Frame, Line, Heading, Paragraph } from "arwes";

const ShipCard = (props) => (
  <Frame layer={"primary"} animate level={0} corners={4} style={{ marginBottom: 20 }}>
    <model-viewer
      style={{ backgroundColor: "black", height: "400px", width: "100%", margin: "auto" }}
      src={props.ship}
      alt="A 3D model of a spaceship"
      auto-rotate
      camera-controls
      interaction-prompt="none"
    ></model-viewer>
    <Line animate />
    <Heading>Test Ship Craft</Heading>
  </Frame>
);

export default ShipCard;
