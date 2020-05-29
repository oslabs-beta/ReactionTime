import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export const SearchGlass = () => {
    return (
       
        <div style={{paddingLeft: '80px'}}>
            <h1 style={{fontFamily: "Raleway, sans-serif", color: '#EBEBEB'}}>Further Reading</h1>

                <Card style={{backgroundColor: '#303030'}}>
                <CardContent>
                    <h3 style={{fontFamily: "Raleway, sans-serif", fontStyle: 'italic', color: '#EBEBEB'}}>What is Concurrency?</h3>
                        <section style={{fontFamily: "Raleway, sans-serif"}}>
                            <p style={{color: '#EBEBEB'}}>In Concurrent Mode, rendering is not blocking. It is interruptible.</p>
                            <a style={{color: '#3F51B5', fontStyle: 'italic'}} target="_blank" href="https://medium.com/swlh/what-is-react-concurrent-mode-46989b5f15da">Learn More About Concurrency</a>
                        </section>
                </CardContent>
                </Card>
                <br/>
                <Card style={{backgroundColor: '#303030'}}>
                <CardContent>
                    <h3 style={{fontFamily: "Raleway, sans-serif", fontStyle: 'italic', color: '#EBEBEB'}}>Setting Up Concurrent Mode</h3>
                    <section style={{fontFamily: "Raleway, sans-serif"}}>
                        <p style={{color: '#EBEBEB'}}>Install the experimental builds of React and Enable Concurrent Mode</p>
                        <a style={{color: '#3F51B5', fontStyle: 'italic', fontWeight: 700}}target="_blank" href="https://reactjs.org/docs/concurrent-mode-adoption.html">Set Up Concurrent Mode</a>
                    </section>
                </CardContent>
                </Card>
                <br/>
                <Card style={{backgroundColor: '#303030'}}>
                <CardContent>
                    <h3 style={{fontFamily: "Raleway, sans-serif", fontStyle: 'italic', color: '#EBEBEB'}}>What Can You Do with Concurrent Mode?</h3>
                    <section style={{fontFamily: "Raleway, sans-serif"}}>
                        <p style={{color: '#EBEBEB'}}>Suspense for Data Fetching is a new feature that lets you use Suspense to declaratively “wait” for anything else, including data.</p>
                        <a style={{color: '#3F51B5', fontStyle: 'italic', fontWeight: 700}}target="_blank" href="https://reactjs.org/docs/concurrent-mode-suspense.html#approach-3-render-as-you-fetch-using-suspense">Learn More About Concurrent Mode</a>
                    </section>
                </CardContent>
                </Card>
                <br/>
                <Card style={{backgroundColor: '#303030'}}>
                <CardContent>
                    <h3 style={{fontFamily: "Raleway, sans-serif", fontStyle: 'italic', color: '#EBEBEB'}}>More on Concurrent Mode</h3>
                    <section style={{fontFamily: "Raleway, sans-serif"}}>
                        <p style={{color: '#EBEBEB'}}>Ready for Concurrent Mode?</p>
                        <a style={{color: '#3F51B5', fontStyle: 'italic', fontWeight: 700}}target="_blank" href="https://www.youtube.com/watch?v=V1Ly-8Z1wQA&t=1053s">See What is Possible</a>
                    </section>
                </CardContent>
                </Card>

{/* export const SearchGlass = () => {
    return (

        <div style={{paddingLeft: '70px'}}>
            <div style={{padding:'15px'}}>
              <Card style={{color:'#ebebeb', backgroundColor:'#303030'}}>
                <div style={{paddingLeft:'25px', paddingRight:'25px', paddingBottom:'20px'}}>
                  <h1 style={{fontFamily: "Heebo, sans-serif", fontStyle: 'italic', paddingTop:'-15px'}}>Further Reading</h1>

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
              </Card>
            </div> */}
        </div>
    );
};