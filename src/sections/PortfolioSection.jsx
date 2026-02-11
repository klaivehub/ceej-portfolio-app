import React from "react";
import ProjectCard from "../components/cards/ProjectCard";
import { EXPERIENCES_DATA } from "../constants";

export default function PortfolioSection({ projects }) {
    return (
        <section
            id="portfolio"
            className="min-h-screen bg-gray-50 py-20 px-4 grid-background"
            style={{
                backgroundColor: "var(--primary-dark)",
                color: "var(--primary-light)",
            }}
        >
            <div className="max-w-4xl mx-auto w-full px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-4 mt-6"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Featured{" "}
                        <span style={{ color: "var(--accent-color)" }}>
                            Projects
                        </span>
                    </h2>
                    <p
                        className="text-lg"
                        style={{ color: "var(--text-subtitle)" }}
                    >
                        Here are some of the projects I've worked on recently.
                        Each project showcases my skills in full-stack
                        development, problem-solving, and creativity. Feel free
                        to explore and reach out if you'd like to collaborate or
                        learn more about any of these projects!
                    </p>
                </div>

                {EXPERIENCES_DATA.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {EXPERIENCES_DATA.map((experience) => (
                            <ProjectCard key={experience.title} experience={experience} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">
                        No projects found.
                    </p>
                )}
            </div>
        </section>
    );
}
