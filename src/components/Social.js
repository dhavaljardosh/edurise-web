import React from "react";
import Header from "./Header";

/* This example requires Tailwind CSS v2.0+ */
const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

export default function Social() {
  return (
    <div className="bg-white max-w-7xl mx-auto">
      <Header />
      <h1>SOCIAL PAGE</h1>
    </div>
  );
}
