import React, { Fragment, useEffect } from "react";
import { Carousel } from "./components/Carousel";
import { ExploreTopBooks } from "./components/ExploreTopBooks";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraryServices";


export const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Fragment>
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
    </Fragment>
  );
};
