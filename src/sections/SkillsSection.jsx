import { SKILLS_DATA } from "../constants";

export default function SkillsSection() {
    return (
        <section id="skills" className="py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Skills & <span className="text-blue-500">Technologies</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {SKILLS_DATA.map((skill) => (
                        <div key={skill.name} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
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