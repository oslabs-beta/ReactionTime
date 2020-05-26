import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export const SetUp = () => {
    return (
        <div style={{paddingLeft: '80px'}}>
            <h1 style={{fontFamily: "Heebo, sans-serif", fontStyle: 'italic'}}>How to Use ReactionTime</h1>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Install Testing Libraries
                        </Typography>
                        <Typography color="textSecondary">
                            Install Jest and Enzyme
                        </Typography>
                        <br/>
                        <Typography variant="body2" component="p" color="primary">
                            In your terminal, type in the following command to install the Jest and Enzyme testing libraries that you will need as dependencies: npm install jest react-testing-library enzyme
                        </Typography>
                    </CardContent>
                </Card> 
                <br/>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Create New File
                        </Typography>
                        <Typography color="textSecondary">
                            Add Test File
                        </Typography>
                        <br/>
                        <Typography variant="body2" component="p" color="primary">
                            In the repositoty of your app, create a new file in your ROOT directory for your tests that will end in .test.js. You will later paste the generated tests into this file.
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Import Testing Libraries
                        </Typography>
                        <Typography color="textSecondary">
                            Bring in Enzyme & React-testing-library
                        </Typography>
                        <br/>
                        <Typography variant="body2" component="p" color="primary">
                            At the top of the test file ending in .test.js that was just created, import enzyme and react-testing-library into the file.
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Download ReactionTime
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Input Names
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Copy & Paste
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Enjoy You Test!
                        </Typography>
                    </CardContent>
                </Card>
        </div>
    );
};