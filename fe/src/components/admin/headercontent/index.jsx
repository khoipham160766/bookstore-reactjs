import React, { Fragment } from "react";
import { Grid, Typography } from "@mui/material";
import "./style.css";

const HeaderContent = props => {
    return(
        <Fragment>
                <Grid>
                    <Grid item xs={12} sm={12}></Grid>
                    <Typography variant="body2" className="dashboard-sub-title">
                        {props.subtitle}
                    </Typography>
                    <Typography variant="h5" className="dashboard-title">
                        {props.title}
                    </Typography>
                </Grid>
                <div className="row">
                    <div className="col md-6">

                    </div>
                </div>
        </Fragment>
    )
}

export default HeaderContent;