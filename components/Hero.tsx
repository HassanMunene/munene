import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

export const Hero = () => {
    const heroRef = useRef(null);
    const [isClient, setIsClient] = useState(false);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;
        // Enable touch scrolling on the document
        document.documentElement.style.touchAction = 'auto';
        document.body.style.touchAction = 'auto';

        return () => {
            document.documentElement.style.touchAction = '';
            document.body.style.touchAction = '';
        }
    }, [isClient]);

    const handleNavigation = (id: string) => {
        if (!isClient) return;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <section
                id="hero"
                ref={heroRef}
                className="pt-24 pb-20 md:pt-28 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] relative w-full overflow-hidden"
            >
                <div>Yooo</div>
            </section>
        </>
    )
}