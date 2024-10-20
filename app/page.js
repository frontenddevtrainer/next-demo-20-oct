import Image from "next/image";
import Toggle from "./components/toggle/toggle.component";
import PeopleComponent from "./components/people/people.component";

export default function Home() {
  return (
    <>
      <Toggle />
      <PeopleComponent />
      Demo Test
    </>
  );
}
