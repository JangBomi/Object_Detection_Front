import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import {NavLink, useHistory} from "react-router-dom";
import {Router} from "@material-ui/icons";




const images = [
    {
        url: 'https://cdn.pixabay.com/photo/2015/06/08/15/11/camera-801924_960_720.jpg',
        title: '촬영하러 가기',
        width: '40%',
        imageLink: '/startCam',
    },
    {
        url: 'https://cdn.pixabay.com/photo/2016/12/29/21/17/notebook-1939358_960_720.jpg',
        title: '과거기록 보기',
        width: '40%',
        imageLink: '/past',
    },

];

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        marginTop: '10%',
        justifyContent: 'center',
        alignContent: 'center'
    },
    image: {
        position: 'relative',
        height: 300,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

export default function ButtonBases() {
    const classes = useStyles();
    const history = useHistory();

    const bodyElt = document.querySelector("body");
    bodyElt.style.backgroundColor = "white";

    if (!sessionStorage.getItem("token")) {
        alert("로그인이 필요한 서비스입니다.");
        history.push('/');
    }

    return (
        <div className={classes.root}>
            {images.map((image) => (
                <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                    }}
                >
                    <NavLink to={image.imageLink} >
          <span
              className={classes.imageSrc}
              style={{
                  backgroundImage: `url(${image.url})`,
              }}
          />
                    <span className={classes.imageBackdrop}/>
                    <span className={classes.imageButton}>
            <Typography
                component="span"
                variant="h5"
                color="inherit"
                className={classes.imageTitle}
            >

              {image.title}

                <span className={classes.imageMarked}/>
            </Typography>
          </span>
                </NavLink>
                </ButtonBase>
            ))}
        </div>
    );
}