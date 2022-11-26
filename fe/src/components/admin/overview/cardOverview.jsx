import React, { Fragment } from "react";
import { Grid, Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.css";

const CardOverview = props => {
    return(
        <Fragment>
            <Grid item md={3} xs={3} sm={3} className="card-item-overview">
                <Card className={props.backgroundcolor}>
                    <CardContent>
                        <Typography variant="body2" className="dashboard-card-content-label">
                            {props.label}
                        </Typography>
                        <Typography variant="h5" component="h6" className="dashboard-card-content-title">
                            {props.sum}
                        </Typography>
                    </CardContent>
                    <CardActions className={props.linebutton}>
                        <Button size="small"><Link to={props.link}>CHI TIẾT</Link></Button>
                    </CardActions>
                </Card>
            </Grid>
        </Fragment>
    )
}

export default CardOverview;