import React from "react";
import ActorCard from "./ActorCard";
import IMG_NOT_FOUND from '../../images/not-found.png'

const actorgrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          dathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : IMG_NOT_FOUND}
        />
      ))}
    </div>
  );
};

export default actorgrid;
