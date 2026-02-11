import { useState } from "react";
import Button from "../components/Button";
import { EXPERIENCES_DATA } from "../constants/index";

const ExperienceCard = ({ experience, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const ExpandIcon = () => (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{
                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
            }}
        >
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );

    return (
        <div className="flex gap-6 mb-12 relative">
            {/* Timeline Dot */}
            <div className="flex flex-col items-center">
                <div
                    className="w-4 h-4 rounded-full border-2"
                    style={{
                        borderColor: "var(--accent-color)",
                        backgroundColor: "var(--accent-color)",
                    }}
                />
                {index < 2 && (
                    <div
                        className="w-1 h-24 mt-4"
                        style={{
                            backgroundColor: "var(--accent-color)",
                            opacity: 0.3,
                        }}
                    />
                )}
            </div>

            {/* Card Content */}
            <div className="flex-1 pb-8">
                <div
                    className="rounded-lg p-6 border"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderColor: "var(--border-color)",
                        borderOpacity: 0.2,
                    }}
                >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: "var(--primary-light)" }}
                                >
                                    {experience.title}
                                </h3>
                                {experience.status && (
                                    <span
                                        className="text-xs font-semibold px-2 py-1 rounded-full"
                                        style={{
                                            backgroundColor:
                                                experience.status === "Current"
                                                    ? "rgba(34, 197, 94, 0.2)"
                                                    : "rgba(100, 200, 200, 0.2)",
                                            color:
                                                experience.status === "Current"
                                                    ? "#22c55e"
                                                    : "var(--accent-color)",
                                            border:
                                                experience.status === "Current"
                                                    ? "1px solid #22c55e"
                                                    : "1px solid var(--accent-color)",
                                        }}
                                    >
                                        {experience.status}
                                    </span>
                                )}
                            </div>

                            {/* Company & Details */}
                            <div className="flex items-center gap-2 mb-2">
                                <span
                                    className="text-sm"
                                    style={{ color: "var(--text-subtitle)" }}
                                >
                                    🏢 {experience.company}
                                </span>
                            </div>

                            <div
                                className="text-sm flex items-center gap-4"
                                style={{ color: "var(--text-light)" }}
                            >
                                <span>📍 {experience.location}</span>
                                <span>📅 {experience.dateRange}</span>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <p
                        className={`mb-4 leading-relaxed transition-all duration-300 ${
                            isExpanded ? "line-clamp-none" : "line-clamp-3"
                        }`}
                        style={{ color: "var(--text-light)" }}
                    >
                        {experience.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-4">
                        <div
                            className="text-xs font-semibold mb-2"
                            style={{ color: "var(--text-subtitle)" }}
                        >
                            <span style={{ color: "var(--accent-color)" }}>
                                Tech Stack
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {experience.techStack.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs px-2 py-1 rounded-full border"
                                    style={{
                                        borderColor: "var(--accent-color)",
                                        color: "var(--accent-color)",
                                        opacity: 0.8,
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Show More Button */}
                    <Button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-sm font-semibold inline-flex items-center gap-2 transition-colors duration-200"
                        style={{
                            color: "var(--accent-color)",
                        }}
                    >
                        {isExpanded ? "Show Less" : "Show More"}
                        <ExpandIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default function ExperienceSection() {
    return (
        <section
            id="experience"
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
                        Professional <span style={{ color: "var(--accent-color)" }}>Experiences</span>
                    </h2>
                    <p
                        className="text-lg"
                        style={{ color: "var(--text-subtitle)" }}
                    >
                        A snapshot of my journey in the tech industry, showcasing my growth and the impact I've made along the way.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div
                        className="absolute left-2 top-0 bottom-0 w-1"
                        style={{
                            backgroundColor: "var(--accent-color)",
                            opacity: 0.2,
                        }}
                    />

                    {/* Experience Cards */}
                    <div>
                        {EXPERIENCES_DATA.map((experience, index) => (
                            <ExperienceCard
                                key={index}
                                experience={experience}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA Card */}
                <div
                    className="mt-20 rounded-xl p-8 md:p-12 text-center border"
                    style={{
                        backgroundColor: "rgba(71, 216, 255, 0.05)",
                        borderColor: "var(--accent-color)",
                        borderOpacity: 0.2,
                    }}
                >
                    <h3
                        className="text-2xl md:text-3xl font-bold mb-4"
                        style={{
                            color: "var(--primary-light)",
                            fontFamily: "var(--font-body)",
                        }}
                    >
                        Ready to strengthen your team?
                    </h3>
                    <p
                        className="mb-8 text-base md:text-lg max-w-2xl mx-auto"
                        style={{ color: "var(--text-subtitle)" }}
                    >
                        Let's connect and explore how I can contribute to your next project!
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <Button
                            title="Let’s Make It Happen"
                            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                            primaryColor="var(--accent-color)"
                            accentColor="var(--primary-dark)"
                            icon={() => (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            )}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}