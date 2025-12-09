// import * from "react";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useRef, useState } from "react";

export default function DemoHooks() {
    /* -----------------------------
       1) useState – reactive values
    ------------------------------ */
    const [count, setCount] = useState(0);

    /* --------------------------------------------------------
       2) useEffect – runs when something *changes* (side effects)
       Here we log whenever count changes
    -------------------------------------------------------- */
    useEffect(() => {
        console.log("useEffect ran because count changed:", count);
    }, [count]);

    /* --------------------------------------------------------
       3) useRef – store a value WITHOUT causing re-render
          Also lets you access DOM elements
    -------------------------------------------------------- */
    const inputRef = useRef(null);
    const renderCount = useRef(1);

    // Track renders
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    /* ----------------------------------------------------------------
       4) useMemo – calculate expensive values only when needed
          (simulated heavy computation)
    ---------------------------------------------------------------- */
    const expensiveCalculation = useMemo(() => {
        console.log("useMemo recalculated...");
        let total = 0;
        for (let i = 0; i < 10_000_000; i++) total += i;
        return total + count; // depends on count
    }, [count]);

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h1>React Hooks Demo</h1>

            {/* ------------------------------------------------ */}
            <section style={{ marginBottom: 30 }}>
                <h2>useState</h2>
                <p>Count: {count}</p>
                <Button onClick={() => setCount(count + 1)}>Increase</Button>
                <p>useState causes the component to <strong>re-render</strong> when updated.</p>
            </section>

            {/* ------------------------------------------------ */}
            <section style={{ marginBottom: 30 }}>
                <h2>useEffect</h2>
                <p>Check the console. It logs every time count changes.</p>
                <p>useEffect runs when a value in its dependency array changes.</p>
            </section>

            {/* ------------------------------------------------ */}
            <section style={{ marginBottom: 30 }}>
                <h2>useRef</h2>
                <input ref={inputRef} placeholder="Click button to focus me" />
                <br /><br />
                <Button onClick={() => inputRef.current.focus()}>
                    Focus Input
                </Button>
                <p>Render Count (tracked with useRef): {renderCount.current}</p>
                <p>
                    useRef does <strong>NOT</strong> cause re-render.
                    Values persist across renders quietly.
                </p>
            </section>

            {/* ------------------------------------------------ */}
            <section style={{ marginBottom: 30 }}>
                <h2>useMemo</h2>
                <p><strong>Expensive value:</strong> {expensiveCalculation}</p>
                <p>
                    useMemo only recalculates when <strong>count</strong> changes.
                    Good for expensive calculations.
                </p>
            </section>
        </div>
    );
}
