import React from "react";

export const SearchGlass = () => {
    return (
        <div style={{ paddingLeft: '80px' }}>
            <h1 style={{ fontFamily: "Heebo, sans-serif", fontStyle: 'italic' }}>Further Reading</h1>

            <h4 style={{ fontFamily: "Heebo, sans-serif", fontStyle: 'italic' }}>What is Concurrency?</h4>
            <section style={{ fontFamily: "Heebo, sans-serif" }}>
                <p>In Concurrent Mode, rendering is not blocking. It is interruptible.</p>
                <a target="_blank" href="https://medium.com/swlh/what-is-react-concurrent-mode-46989b5f15da">Learn More About Concurrency</a>
            </section>

            <h4 style={{ fontFamily: "Heebo, sans-serif", fontStyle: 'italic' }}>Setting Up Concurrent Mode</h4>
            <section style={{ fontFamily: "Heebo, sans-serif" }}>
                <p>Install the experimental builds of React and Enable Concurrent Mode</p>
                <a target="_blank" href="https://reactjs.org/docs/concurrent-mode-adoption.html">Set Up Concurrent Mode</a>
            </section>

            <h4 style={{ fontFamily: "Heebo, sans-serif", fontStyle: 'italic' }}>What Can You Do with Concurrent Mode?</h4>
            <section style={{ fontFamily: "Heebo, sans-serif" }}>
                <p>Suspense for Data Fetching is a new feature that lets you use Suspense to declaratively “wait” for anything else, including data.</p>
                <a target="_blank" href="https://reactjs.org/docs/concurrent-mode-suspense.html#approach-3-render-as-you-fetch-using-suspense">Learn More About Suspense for Data Fetching</a>
            </section>

            <h4 style={{ fontFamily: "Heebo, sans-serif", fontStyle: 'italic' }}>More on Concurrent Mode</h4>
            <section style={{ fontFamily: "Heebo, sans-serif" }}>
                <p>Ready for Concurrent Mode?</p>
                <a target="_blank" href="https://www.youtube.com/watch?v=V1Ly-8Z1wQA&t=1053s">See What is Possible</a>
            </section>

        </div>
    );
};