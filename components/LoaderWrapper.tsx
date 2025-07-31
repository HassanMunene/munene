"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Transition } from "./ui/Transitions";
import { OpacityTransition } from "./ui/Transitions";

interface LoaderWrapperProps {
    children: React.ReactNode;
}

const LoaderWrapper: React.FC<LoaderWrapperProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const count = setInterval(() => {
            if (counter < 100) {
                setCounter(counter + 2);
            } else {
                clearInterval(count);
            }
        }, 25);

        return () => {
            clearInterval(count);
        };
    }, [counter]);
    return (
        <>
            {isLoading ? (
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: "-100%" }}
                    transition={{ delay: 2.5, duration: 1, type: "tween" }}
                    onAnimationComplete={() => setIsLoading(false)}
                    className="fixed top-0 left-0 z-[9999] w-full h-full bg-background"
                >
                    <div className="p-4 md:p-10 flex flex-col md:justify-between max-md:gap-8 w-full h-full">
                        <Transition transition={{ delay: 0.2 }}>
                            <span className="font-semibold text-white/40">Munene</span>
                        </Transition>
                        <div className="flex flex-col max-md:justify-between max-md:h-full">
                            <Transition transition={{ delay: 0.4 }}>
                                <div className="text-3xl md:text-5xl w-full md:w-2/5 whitespace-pre-wrap">
                                    <OpacityTransition>
                                        Full-stack developer.
                                    </OpacityTransition>
                                </div>
                            </Transition>
                            <div className="flex justify-between items-end">
                                <span></span>
                                <motion.span className="md:text-9xl text-7xl font-semibold md:font-bold">
                                    {counter}%
                                </motion.span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ) : children}
        </>
    );
};

export default LoaderWrapper;