"use client";

import { About as IAbout, Timeline } from "../utils/interface";
import { OpacityTextReveal, SlideIn, Transition } from "./ui/Transitions";
import { useEffect, useState } from "react";

interface AboutProps {
    about: IAbout;
    timeline: Timeline[];
}

interface Contribution {
    date: string;
    count: number;
    level: number;
}

const About = ({ about }: AboutProps) => {
    const [contributions, setContributions] = useState<Contribution[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGitHubContributions = async () => {
            try {
                const username = "HassanMunene";
                const response = await fetch(
                    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
                );

                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

                const data = await response.json();
                setContributions(data.contributions || []);
            } catch (error) {
                console.error("Error fetching GitHub contributions:", error);
                setError("Failed to load GitHub activity");
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubContributions();
    }, []);

    const getColorForContributions = (count: number) => {
        if (count === 0) return "from-gray-800 to-gray-700";
        if (count < 3) return "from-green-600 to-green-500";
        if (count < 5) return "from-green-500 to-green-400";
        if (count < 7) return "from-green-400 to-green-300";
        return "from-green-300 to-green-200";
    };

    // Group contributions by week (7 days)
    const weeks = [];
    for (let i = 0; i < contributions.length; i += 7) {
        weeks.push(contributions.slice(i, i + 7));
    }

    return (
        <div className="mx-auto max-w-2xl lg:max-w-7xl px-6 md:px-8">
            <section className="py-20 relative" id="about">
                <div>
                    <h3 className="md:text-5xl text-2xl font-bold overflow-hidden uppercase pb-8">
                        <SlideIn>
                            <OpacityTextReveal>{about.quote}</OpacityTextReveal>
                        </SlideIn>
                    </h3>
                    <Transition
                        viewport={{ once: true }}
                        className="md:text-4xl tracking-tighter"
                    >
                        <OpacityTextReveal>{about.description}</OpacityTextReveal>
                    </Transition>

                    {/* GitHub Contributions Section */}
                    <Transition viewport={{ once: true }} className="mt-16">
                        <div className="flex items-center justify-between mb-6">
                            <h4 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                My Coding Journey
                            </h4>
                        </div>

                        {error ? (
                            <div className="text-red-400">{error}</div>
                        ) : loading ? (
                            <div className="animate-pulse h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl"></div>
                        ) : (
                            <div className="space-y-4">
                                <div className="overflow-x-auto pb-4">
                                    <div className="inline-flex gap-2">
                                        {weeks.map((week, weekIndex) => (
                                            <div key={weekIndex} className="flex flex-col gap-1">
                                                {week.map((day, dayIndex) => (
                                                    <div
                                                        key={`${weekIndex}-${dayIndex}`}
                                                        className={`w-4 h-4 rounded-sm bg-gradient-to-br ${getColorForContributions(day.count)} transition-all duration-200 cursor-pointer`}
                                                        title={`${day.count} contributions on ${day.date}`}
                                                    />
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center justify-between px-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-gray-400">Less</span>
                                        <div className="flex gap-1">
                                            {[0, 3, 5, 7].map((level) => (
                                                <div
                                                    key={level}
                                                    className={`w-3 h-3 rounded-sm bg-gradient-to-br ${getColorForContributions(level)}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs text-gray-400">More</span>
                                    </div>

                                    <div className="text-sm text-gray-400">
                                        <span className="font-medium text-white">{contributions.reduce((sum, day) => sum + day.count, 0)}</span> contributions in the last year
                                    </div>
                                </div>

                                {/* Animated month labels */}
                                <div className="flex justify-between text-xs text-gray-400 px-2">
                                    {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map((month) => (
                                        <span key={month}>{month}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </Transition>
                </div>
            </section>
        </div>
    );
};

export default About;