import React from "react";
import Button from "../components/Button";

const DownloadIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
);

const EmailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="m22 7-10 5L2 7"></path>
    </svg>
);

export default function HomeSection() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center mt-6 px-4 grid-background"
            style={{
                backgroundColor: "var(--primary-dark)",
                color: "var(--primary-light)",
            }}
        >
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">
                    {/* Left Column */}
                    <div className="flex flex-col justify-center">
                        {/* Heading */}
                        <h1
                            className="text-5xl md:text-6xl font-bold font-700 mb-2 leading-tight"
                            style={{ fontFamily: "var(--font-body)" }}
                        >
                            Hi, I'm{" "}
                            <span style={{ color: "var(--accent-color)" }}>
                                CEEJ
                            </span>
                            !
                        </h1>

                        {/* Subheading */}
                        <h4
                            className="text-xl md:text-2xl mb-6"
                            style={{ color: "var(--text-subtitle)", fontFamily: "var(--font-body)" }}
                        >
                            Full-Stack Web Developer
                        </h4>

                        {/* Description */}
                        <p
                            className="text-base md:text-lg leading-relaxed mb-8"
                            style={{ color: "var(--text-light)" }}
                        >
                            I specialize in creating dynamic and responsive web
                            applications using modern technologies like Laravel
                            and React. Let's build something amazing together!
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-4">
                            <Button
                                title="Download my Resume"
                                href="/resume.pdf"
                                download
                                icon={DownloadIcon}
                                primaryColor="var(--accent-color)"
                                accentColor="var(--primary-dark)"
                            />
                            <Button
                                title="Let's Discuss Opportunities"
                                onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                                icon={EmailIcon}
                                primaryColor="transparent"
                                accentColor="var(--accent-color)"
                                className="border-2"
                                style={{ borderColor: "var(--accent-color)" }}
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col items-center justify-center">
                        {/* Avatar */}
                        <div
                            className="w-48 h-48 md:w-56 md:h-56 rounded-full mb-12 flex border-4 overflow-hidden"
                            style={{
                                borderColor: "var(--accent-color)",
                            }}
                        >
                            <img
                                src="/assets/images/profile_picture.jpg"
                                alt="Chrisjohn Laxa"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Tech Stack */}
                        <div className="w-full mb-8">
                            <p
                                className="text-md font-semibold mb-4 text-center"
                                style={{ color: "var(--text-light)" }}
                            >
                                Tech Stack
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {[
                                    "Laravel",
                                    "React",
                                    "PostgreSQL",
                                    "TailwindCSS",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 rounded-full text-sm font-medium border"
                                        style={{
                                            borderColor: "var(--accent-color)",
                                            color: "var(--accent-color)",
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}