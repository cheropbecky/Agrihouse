import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Group 1.png";

// SVG wheat stalk paths
const WheatStalk = ({ x, delay, scale = 1, flip = false }) => (
    <motion.g
        transform={`translate(${x}, 0) scale(${flip ? -scale : scale}, ${scale})`}
        style={{ transformOrigin: `${x}px 100%` }}
    >
        {/* Main stem */}
        <motion.path
            d={`M0 160 C0 120 -4 80 -8 40`}
            stroke="#c8a84b"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
        {/* Grain head */}
        {[-8, -12, -16, -10, -6].map((cx, i) => (
            <motion.ellipse
                key={i}
                cx={cx - i * 1}
                cy={40 - i * 8}
                rx="3"
                ry="5"
                fill="#d4a017"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.9 }}
                transition={{ duration: 0.4, delay: delay + 1.0 + i * 0.08, ease: "backOut" }}
                style={{ transformOrigin: `${cx}px ${40 - i * 8}px` }}
            />
        ))}
        {/* Side leaves */}
        <motion.path
            d={`M-2 120 C-20 100 -28 85 -15 75`}
            stroke="#5a8a3c"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 0.7, delay: delay + 0.4, ease: "easeOut" }}
        />
        <motion.path
            d={`M-4 90 C12 72 20 58 8 50`}
            stroke="#5a8a3c"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 0.7, delay: delay + 0.7, ease: "easeOut" }}
        />
    </motion.g>
);

const TAGLINE = "Growing fresh. Delivering real.";

export default function LoadingScreen({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [exiting, setExiting] = useState(false);

    // Track both conditions via refs so RAF always has fresh values
    const pageLoaded = useRef(document.readyState === "complete");
    const minTimeDone = useRef(false);
    const exitTriggered = useRef(false);

    const tryExit = useCallback(() => {
        if (pageLoaded.current && minTimeDone.current && !exitTriggered.current) {
            exitTriggered.current = true;
            setExiting(true);
            setTimeout(onComplete, 900);
        }
    }, [onComplete]);

    // Listen for window load
    useEffect(() => {
        if (document.readyState === "complete") {
            pageLoaded.current = true;
            tryExit();
        } else {
            const onLoad = () => { pageLoaded.current = true; tryExit(); };
            window.addEventListener("load", onLoad);
            return () => window.removeEventListener("load", onLoad);
        }
    }, [tryExit]);

    // Animated progress bar:
    // - Fills to ~82% over MIN_DURATION, then stalls until page is loaded
    // - Once pageLoaded, races to 100% and triggers exit
    useEffect(() => {
        const MIN_DURATION = 2500; // ms minimum display time
        const start = Date.now();
        let raf;

        const frame = () => {
            const elapsed = Date.now() - start;
            const rawPct = elapsed / MIN_DURATION; // 0 → 1 over MIN_DURATION

            if (!pageLoaded.current) {
                // Fill to max 82% until page is ready
                const clamped = Math.min(rawPct, 0.82);
                setProgress(1 - Math.pow(1 - clamped, 3));
                raf = requestAnimationFrame(frame);
            } else {
                // Page loaded — race to 100%
                const raceStart = elapsed;
                const raceFrame = () => {
                    const raceElapsed = Date.now() - start - raceStart;
                    const racePct = Math.min(raceElapsed / 400, 1);
                    const combined = 0.82 + racePct * 0.18;
                    setProgress(1 - Math.pow(1 - combined, 3));
                    if (racePct < 1) {
                        raf = requestAnimationFrame(raceFrame);
                    } else {
                        minTimeDone.current = true;
                        setTimeout(tryExit, 300);
                    }
                };
                // Ensure minimum animation time has passed
                const remaining = MIN_DURATION - elapsed;
                if (remaining > 0) {
                    setTimeout(() => { raf = requestAnimationFrame(raceFrame); }, remaining);
                } else {
                    raf = requestAnimationFrame(raceFrame);
                }
            }
        };

        raf = requestAnimationFrame(frame);
        return () => cancelAnimationFrame(raf);
    }, [tryExit]);

    // Typewriter
    useEffect(() => {
        let i = 0;
        const id = setTimeout(() => {
            const interval = setInterval(() => {
                i++;
                setTypedText(TAGLINE.slice(0, i));
                if (i >= TAGLINE.length) clearInterval(interval);
            }, 42);
            return () => clearInterval(interval);
        }, 700);
        return () => clearTimeout(id);
    }, []);

    const progressPct = Math.round(progress * 100);

    return (
        <AnimatePresence>
            {!exiting ? (
                <motion.div
                    key="loader"
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
                    style={{ background: "#0d1a0e" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    {/* Ambient glow */}
                    <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(255,81,0,0.10) 0%, transparent 70%)",
                        }}
                    />

                    {/* Wheat field row */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden" style={{ height: 170 }}>
                        <svg
                            width="600"
                            height="170"
                            viewBox="0 0 600 170"
                            style={{ overflow: "visible" }}
                        >
                            {[
                                { x: 60, delay: 0.0, scale: 0.85, flip: false },
                                { x: 130, delay: 0.15, scale: 1.0, flip: true },
                                { x: 200, delay: 0.08, scale: 0.7, flip: false },
                                { x: 270, delay: 0.22, scale: 1.1, flip: false },
                                { x: 340, delay: 0.05, scale: 0.9, flip: true },
                                { x: 410, delay: 0.18, scale: 0.75, flip: false },
                                { x: 480, delay: 0.12, scale: 1.05, flip: true },
                                { x: 545, delay: 0.25, scale: 0.8, flip: false },
                            ].map((s, i) => (
                                <WheatStalk key={i} {...s} />
                            ))}
                        </svg>
                    </div>

                    {/* Ground line */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[2px]"
                        style={{ background: "linear-gradient(90deg, transparent, #5a8a3c55, #5a8a3c, #5a8a3c55, transparent)" }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
                    />

                    {/* Center content */}
                    <div className="relative z-10 flex flex-col items-center gap-6 pb-36">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, scale: 0.6, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <motion.img
                                src={logo}
                                alt="AgriHouse"
                                className="h-14 w-14 object-contain drop-shadow-lg"
                                animate={{ rotate: [0, -5, 5, -3, 0] }}
                                transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
                            />
                            <span
                                className="text-white font-black text-[2.6rem] tracking-tight"
                                style={{ fontFamily: "Urbanist, sans-serif", letterSpacing: "-0.03em" }}
                            >
                                Agri<span style={{ color: "#ff5100" }}>House</span>
                            </span>
                        </motion.div>

                        {/* Typewriter tagline */}
                        <motion.p
                            className="text-[1.05rem] font-medium tracking-widest uppercase"
                            style={{ fontFamily: "Poppins, sans-serif", color: "#a5c882", letterSpacing: "0.18em", minHeight: "1.5em" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            {typedText}
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.55 }}
                                style={{ color: "#ff5100" }}
                            >
                                |
                            </motion.span>
                        </motion.p>

                        {/* Progress bar */}
                        <motion.div
                            className="relative mt-4 overflow-hidden rounded-full"
                            style={{ width: 260, height: 5, background: "rgba(255,255,255,0.08)" }}
                            initial={{ opacity: 0, scaleX: 0.6 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            {/* Soil texture base */}
                            <div className="absolute inset-0 rounded-full" style={{ background: "rgba(139,90,43,0.25)" }} />
                            {/* Fill */}
                            <motion.div
                                className="absolute left-0 top-0 h-full rounded-full"
                                style={{ width: `${progressPct}%`, background: "linear-gradient(90deg, #ff5100, #ffb347)" }}
                                transition={{ ease: "linear" }}
                            />
                            {/* Shine */}
                            <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)" }} />
                        </motion.div>

                        {/* Percent */}
                        <motion.span
                            className="text-xs font-semibold tabular-nums"
                            style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Urbanist, sans-serif", letterSpacing: "0.1em" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            {progressPct}%
                        </motion.span>
                    </div>

                    {/* Floating particles (fireflies) */}
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="pointer-events-none absolute rounded-full"
                            style={{
                                width: 3 + (i % 3),
                                height: 3 + (i % 3),
                                background: i % 2 === 0 ? "#ff5100" : "#a5c882",
                                left: `${10 + i * 8.5}%`,
                                top: `${20 + (i % 4) * 14}%`,
                                opacity: 0,
                                filter: "blur(0.5px)",
                            }}
                            animate={{
                                opacity: [0, 0.7, 0],
                                y: [0, -30 - i * 4, -60 - i * 4],
                                x: [0, (i % 2 === 0 ? 12 : -12)],
                            }}
                            transition={{
                                duration: 2.5 + i * 0.3,
                                delay: 0.5 + i * 0.25,
                                repeat: Infinity,
                                repeatDelay: i * 0.4,
                                ease: "easeOut",
                            }}
                        />
                    ))}
                </motion.div>
            ) : (
                // Split-curtain exit: top half slides up, bottom half slides down
                <motion.div key="exit" className="fixed inset-0 z-[9999] pointer-events-none">
                    <motion.div
                        className="absolute left-0 right-0 top-0"
                        style={{ height: "50%", background: "#0d1a0e" }}
                        initial={{ y: 0 }}
                        animate={{ y: "-100%" }}
                        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
                    />
                    <motion.div
                        className="absolute left-0 right-0 bottom-0"
                        style={{ height: "50%", background: "#0d1a0e" }}
                        initial={{ y: 0 }}
                        animate={{ y: "100%" }}
                        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
