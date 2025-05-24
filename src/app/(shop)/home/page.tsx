import React from "react";
import Hero from "./components/hero";
import Products from "./components/products";
import { ReviewCarousel } from "./components/reviews";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Products />
      <ReviewCarousel />
    </main>
  );
};

export default Homepage;
