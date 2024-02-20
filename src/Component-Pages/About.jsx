import FactCard from "./Components/FactCard";
import { facts } from "./Components/facts";
import "./about.css";

export default function About() {
  return (
    <div className="about-container">
      <h2>About</h2>
      <p className="about-text">Get to know some facts about dogs!</p>
      <div className="fact-container">
        {facts.map((fact) => (
          <FactCard key={fact.id} fact={fact.fact} />
        ))}
      </div>
    </div>
  );
}
