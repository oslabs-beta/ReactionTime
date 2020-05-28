import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export const SearchGlass = () => {
    return (
       
        <div style={{paddingLeft: '80px'}}>
            <h1 style={{fontFamily: "Heebo, sans-serif", color: '#EBEBEB'}}>Further Reading</h1>

                <Card style={{backgroundColor: '#303030'}}>
                <CardContent>
                    <h3 style={{fontFamily: "Heebo, sans-serif", fontStyle: 'italic', color: '#EBEBEB'}}>What is Concurrency?</h3>
                        <section style={{fontFamily: "Heebo, sans-serif"}}>
                            <p style={{color: '#EBEBEB'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque obcaecati ducimus saepe ipsam reprehenderit eveniet amet est sit! Provident qui porro officia fuga sapiente repudiandae minus laboriosam vitae nesciunt.</p>
                            <a style={{color: '#3F51B5', fontStyle: 'italic'}} target="_blank" href="https://medium.com/swlh/what-is-react-concurrent-mode-46989b5f15da">Learn More About Concurrency</a>
                        </section>
                </CardContent>
                </Card>
                <br/>
                <Card style={{backgroundColor: '#303030'}}>
                <CardContent>
                    <h3 style={{fontFamily: "Heebo, sans-serif", fontStyle: 'italic', color: '#EBEBEB'}}>Setting Up Concurrent Mode</h3>
                    <section style={{fontFamily: "Heebo, sans-serif"}}>
                        <p style={{color: '#EBEBEB'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus vel sunt magni. Nulla natus dolorum totam unde enim. Perspiciatis facilis et veritatis porro consectetur? Ipsa id eos odit facilis</p>
                        <a style={{color: '#3F51B5', fontStyle: 'italic', fontWeight: 700}}target="_blank" href="https://reactjs.org/docs/concurrent-mode-adoption.html">Set Up Concurrent Mode</a>
                    </section>
                </CardContent>
                </Card>
                <br/>
                <Card style={{backgroundColor: '#303030'}}>
                <CardContent>
                    <h3 style={{fontFamily: "Heebo, sans-serif", fontStyle: 'italic', color: '#EBEBEB'}}>More on Concurrent Mode</h3>
                    <section style={{fontFamily: "Heebo, sans-serif"}}>
                        <p style={{color: '#EBEBEB'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus vel sunt magni. Nulla natus dolorum totam unde enim. Perspiciatis facilis et veritatis porro consectetur? Ipsa id eos odit facilis</p>
                        <a style={{color: '#3F51B5', fontStyle: 'italic', fontWeight: 700}}target="_blank" href="https://reactjs.org/docs/concurrent-mode-intro.html">Learn More About Concurrent Mode</a>
                    </section>
                </CardContent>
                </Card>
                <br/>
                <Card style={{backgroundColor: '#303030'}}>
                <CardContent>
                    <h3 style={{fontFamily: "Heebo, sans-serif", fontStyle: 'italic', color: '#EBEBEB'}}>What Can You Do with Concurrent Mode?</h3>
                    <section style={{fontFamily: "Heebo, sans-serif"}}>
                        <p style={{color: '#EBEBEB'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus vel sunt magni. Nulla natus dolorum totam unde enim. Perspiciatis facilis et veritatis porro consectetur? Ipsa id eos odit facilis</p>
                        <a style={{color: '#3F51B5', fontStyle: 'italic', fontWeight: 700}}target="_blank" href="https://www.youtube.com/watch?v=V1Ly-8Z1wQA&t=1053s">See What is Possible</a>
                    </section>
                </CardContent>
                </Card>
        </div>
    );
};