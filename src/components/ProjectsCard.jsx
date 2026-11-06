export default function ProjectsCard({ title, description, image, techStack }) {
  return (
    <div className="projects-card">
      <img src={image} alt="" />
      <div className="contents">
        <h3 className="title">{title}</h3>
        <p>{description}</p>
        <ul className="tech-stacks">
          {techStack.map((stack, index) => (
            <li key={index}>{stack}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
