"use client";

import Link from "next/link";
import { useState } from "react";
import { About } from "@/utils/interface";
import { TextReveal } from "./ui/Typography";
import { ArrowUpRight } from "./ui/Icons";
import LoaderWrapper from "./LoaderWrapper";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
    about: About;
}

const Hero = ({ about }: HeroProps) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <section className="h-dvh w-dvw overflow-hidden relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "10%" }}
            >
                <span className="blob size-1/2 absolute top-20 left-0 blur-[100px]" />
            </motion.div>
            <LoaderWrapper onLoaded={() => setLoaded(true)}>
                <div className="relative h-full w-full">
                    <div className="flex items-center justify-center flex-col h-full pb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={loaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <div className="relative w-28 h-28 rounded-full overflow-hidden">
                                <Image
                                    src={about.avatar.url}
                                    alt={about.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        <div className="py-6 flex items-center flex-col text-center">
                            <h2 className="md:text-7xl text-4xl font-bold overflow-hidden">
                                <motion.span
                                    initial={{ opacity: 0, y: "100%" }}
                                    animate={loaded ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="inline-block overflow-hidden"
                                >
                                    Hello! I&apos;m {about.name}
                                </motion.span>
                            </h2>
                            <h1 className="md:text-7xl text-3xl overflow-hidden">
                                <motion.span
                                    initial={{ opacity: 0, y: "100%" }}
                                    animate={loaded ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="inline-block overflow-hidden"
                                >
                                    {about.title}
                                </motion.span>
                            </h1>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={loaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="opacity-70 md:text-xl py-4 w-10/12 md:w-2/3 mx-auto flex flex-wrap justify-center gap-2"
                        >
                            {about.subTitle.split(" ").map((word, index) => (
                                <span key={index}>{word}</span>
                            ))}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={loaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <Link
                                href={"#contact"}
                                className="px-5 py-3 mt-4 rounded-full border border-white/50 flex items-center gap-2 group"
                            >
                                <TextReveal>Let's talk</TextReveal>
                                <ArrowUpRight />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </LoaderWrapper>
        </section>
    );
};

export default Hero;