import { skillsData } from "../data";
import SkillsCard from "./SkillsCard";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <SkillsCard
            key={index}
            image={skill.image}
            category={skill.category}
            items={skill.items}
          />
        ))}
      </div>
    </section>
  );
}
