export default function SkillsCard({ image, category, items }) {
  return (
    <div className="skills-card">
      <img src={image} alt="" />
      <div className="contents">
        <h3 className="category">{category}</h3>
        <ul className="tech-items">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
