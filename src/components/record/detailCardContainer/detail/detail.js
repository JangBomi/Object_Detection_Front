import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 10,
        float: "left",
    },
    media: {
        height: 180,
    },
});

export default function MediaCard({id, detectedItem, image, captureTime}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="data:image/jpeg;base64,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"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {detectedItem}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {captureTime}   적발
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
