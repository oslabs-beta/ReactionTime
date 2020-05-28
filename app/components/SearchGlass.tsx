import React from "react";
import Card from "@material-ui/core/Card";

export const SearchGlass = () => {
    return (
        <div style={{paddingLeft: '70px'}}>
            <div style={{padding:'15px'}}>
            <Card style={{color:'#ebebeb', backgroundColor:'#303030'}}>
                <div style={{paddingLeft:'25px', paddingRight:'25px', paddingBottom:'20px'}}>
            <h1 style={{fontFamily: "Heebo, sans-serif", fontStyle: 'italic', paddingTop:'-15px'}}>Further Reading</h1>

            <h4 style={{fontFamily: "Heebo, sans-serif", fontStyle: 'italic'}}>What is Concurrency?</h4>
                <section style={{fontFamily: "Heebo, sans-serif"}}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque obcaecati ducimus saepe ipsam reprehenderit eveniet amet est sit! Provident qui porro officia fuga sapiente repudiandae minus laboriosam vitae nesciunt.</p>
                    <a target="_blank" href="https://medium.com/swlh/what-is-react-concurrent-mode-46989b5f15da">Learn More About Concurrency</a>
                </section>

            <h4 style={{fontFamily: "Heebo, sans-serif", fontStyle: 'italic'}}>Setting Up Concurrent Mode</h4>
            <section style={{fontFamily: "Heebo, sans-serif"}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus vel sunt magni. Nulla natus dolorum totam unde enim. Perspiciatis facilis et veritatis porro consectetur? Ipsa id eos odit facilis</p>
                <a target="_blank" href="https://reactjs.org/docs/concurrent-mode-adoption.html">Set Up Concurrent Mode</a>
            </section>

            <h4 style={{fontFamily: "Heebo, sans-serif", fontStyle: 'italic'}}>More on Concurrent Mode</h4>
            <section style={{fontFamily: "Heebo, sans-serif"}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus vel sunt magni. Nulla natus dolorum totam unde enim. Perspiciatis facilis et veritatis porro consectetur? Ipsa id eos odit facilis</p>
                <a target="_blank" href="https://reactjs.org/docs/concurrent-mode-intro.html">Learn More About Concurrent Mode</a>
            </section>

            <h4 style={{fontFamily: "Heebo, sans-serif", fontStyle: 'italic'}}>What Can You Do with Concurrent Mode?</h4>
            <section style={{fontFamily: "Heebo, sans-serif"}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus vel sunt magni. Nulla natus dolorum totam unde enim. Perspiciatis facilis et veritatis porro consectetur? Ipsa id eos odit facilis</p>
                <a target="_blank" href="https://www.youtube.com/watch?v=V1Ly-8Z1wQA&t=1053s">See What is Possible</a>
            </section>
            
            </div>
            </Card>
            </div>
        </div>
    );
};