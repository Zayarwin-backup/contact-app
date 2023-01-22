import React from "react";
import PresonList from "./PresonList";

function ListRender() {
  const presons = [
    {
      id: 1,
      name: "Zayarwin",
      age: 19,
      skill: "react",
    },
    {
      id: 2,
      name: "Zayarlin",
      age: 20,
      skill: "laravel",
    },
    {
      id: 1,
      name: "Naybala",
      age: 16,
      skill: "Javascript",
    },
  ];
  const personsList = presons.map((person) => (
    <PresonList person={person} />
  ));
  return <div>{personsList}</div>;
}

export default ListRender;
