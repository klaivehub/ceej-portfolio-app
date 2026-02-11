import { SKILLS_DATA } from "../constants";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 px-4 grid-background"
      style={{
        backgroundColor: "var(--primary-dark)",
        color: "var(--primary-light)",
      }}
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 mt-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Skills &{" "}
            <span style={{ color: "var(--accent-color)" }}>Technologies</span>
          </h2>
          <p className="text-lg" style={{ color: "var(--text-subtitle)" }}>
            I have experience with a wide range of technologies and tools that I
            use to build modern web applications. Below are some of the key
            skills and technologies that I am proficient in.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {SKILLS_DATA.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              {skill.icon}
              <h3 className="text-xl font-semibold mt-4">{skill.name}</h3>
              <p className="text-gray-600 mt-2">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
