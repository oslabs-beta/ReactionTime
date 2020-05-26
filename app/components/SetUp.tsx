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
                        <Typography component="p">
                    
                        </Typography>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Create New Files
                        </Typography>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Import Library
                        </Typography>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Import Enzyme
                        </Typography>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Download ReactionTime
                        </Typography>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Input Names
                        </Typography>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Copy & Paste
                        </Typography>
                    </CardContent>
                </Card>

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