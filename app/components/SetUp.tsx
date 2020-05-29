import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export const SetUp = () => {
    return (
        <div style={{paddingLeft: '80px'}}>
            <h1 style={{fontFamily: "Raleway, sans-serif", color: "#EBEBEB"}}>How to Use ReactionTime</h1>
                {/*step one*/}
            <Card style={{ backgroundColor: '#303030', color: '#EBEBEB', fontFamily: "Raleway, sans-serif"}}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            1. Install Testing Libraries
                        </Typography>
                        <Typography style={{color: '#3F51B5', fontStyle: "italic", paddingLeft: "25px"}}>
                            Install Jest & Enzyme
                        </Typography>
                        <br/>
                        <Typography variant="body1" component="h2" style={{color: "#EBEBEB"}}>
                            In your terminal, type in the following command to install the Jest and Enzyme testing libraries that you will need as dependencies: npm install jest react-testing-library enzyme.
                        </Typography>
                    </CardContent>
                </Card> 
                <br/>
                {/*step two*/}
            <Card style={{ backgroundColor: '#303030', color: '#EBEBEB', fontFamily: "Raleway, sans-serif"}}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            2. Create New File
                        </Typography>
                        <Typography style={{color: '#3F51B5', fontStyle: "italic", paddingLeft: "25px"}}>
                            Add Test File
                        </Typography>
                        <br/>
                        <Typography variant="body1" component="h2" style={{color: "#EBEBEB"}}>
                            In the repository of your app, create a new file in your ROOT directory for your tests that will end in .test.js. You will later paste the generated tests into this file.
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
                {/*step three*/}
            <Card style={{ backgroundColor: '#303030', color: '#EBEBEB', fontFamily: "Raleway, sans-serif"}}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            3. Import Testing Libraries
                        </Typography>
                        <Typography style={{color: '#3F51B5', fontStyle: "italic", paddingLeft: "25px"}}>
                            Bring in Enzyme & React-testing-library
                        </Typography>
                        <br/>
                        <Typography variant="body1" component="h2" style={{color: "#EBEBEB"}}>
                            At the top of the test file ending in .test.js that was just created, import enzyme and react-testing-library into the file.
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
                {/*step four*/}
            <Card style={{ backgroundColor: '#303030', color: '#EBEBEB', fontFamily: "Raleway, sans-serif"}}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            4. Download ReactionTime
                        </Typography>
                        <Typography style={{color: '#3F51B5', fontStyle: "italic", paddingLeft: "25px"}}>
                            Download the ReactionTime App for your System.
                        </Typography>
                        <br/>
                        <Typography variant="body1" component="h2" style={{color: "#EBEBEB"}}>
                            Visit www.github.com/oslabs-beta/ReactionTime to download the ReactionTime App for either MacOS or Windows PC
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
                {/*step five*/}
            <Card style={{ backgroundColor: '#303030', color: '#EBEBEB', fontFamily: "Raleway, sans-serif"}}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            5. Input Names
                        </Typography>
                        <Typography style={{color: '#3F51B5', fontStyle: "italic", paddingLeft: "25px"}}>
                            Provide the Input for the Test You want Generated
                        </Typography>
                        <br/>
                        <Typography variant="body1" component="h2" style={{color: "#EBEBEB"}}>
                            If testing for Concurrent Mode set up or verifying React Experimental mode, input the correct file path needed from your ROOT directory. If testing for the fallback component or to determine if the fallback component renders in the DOM tree, provide the suspenseful component and name of the fallback as inputs.
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
                {/*step six*/}
            <Card style={{ backgroundColor: '#303030', color: '#EBEBEB', fontFamily: "Raleway, sans-serif"}}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            6. Copy & Paste
                        </Typography>
                        <Typography style={{color: '#3F51B5', fontStyle: "italic", paddingLeft: "25px"}}>
                            Copy Generated Test into your File
                        </Typography>
                        <br/>
                        <Typography variant="body1" component="h2" style={{color: "#EBEBEB"}}>
                            Copy the test that is generated upon providing the correct input(s) and paste the test into the test file created earlier ending in .test.js.
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
                {/*step seven*/}
            <Card style={{ backgroundColor: '#303030', color: '#EBEBEB', fontFamily: "Raleway, sans-serif"}}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            7. Enjoy Your Test!
                        </Typography>
                        <Typography style={{color: '#3F51B5', fontStyle: "italic", paddingLeft: "25px"}}>
                            Test Your Files Using the Command Line
                        </Typography>
                        <br/>
                        <Typography variant="body1" component="h2" style={{color: "#EBEBEB"}}>
                            After pasting the desired tests into your testing file, type in: npm test, at the command line of your termianl and see if your tests pass and you get those green checks!
                        </Typography>
                    </CardContent>
                </Card>
        </div>
    );
};