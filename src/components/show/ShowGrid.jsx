import React from "react";
import ShowCard from "./ShowCard";
import IMG_NOT_FOUND from '../../images/not-found.png';
import {  FlexGrid } from "../style";

const ShowGrid = ({data}) => {
  return (
    <FlexGrid>
      {
        data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMG_NOT_FOUND}
          summary={show.summary}
        />
      ))
      }
    </FlexGrid>
  );
};

export default ShowGrid;