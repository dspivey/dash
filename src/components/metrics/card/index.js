import { Card, CardContent, CardHeader, Typography, } from '@material-ui/core';
import { blue, green, purple, red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {
    BubbleChartTwoTone,
    DonutSmallTwoTone,
    EventNoteTwoTone,
    Functions as SumIcon,
    MonetizationOnRounded as MoneyIcon,
    PollRounded as ChartIcon,
    Receipt as ReceiptIcon,
    ScheduleRounded as ScheduleIcon,
    TrendingDown,
    TrendingUp
} from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';


const icons = {
    bubble:       BubbleChartTwoTone,
    calendar:     EventNoteTwoTone,
    chart:        ChartIcon,
    donut:        DonutSmallTwoTone,
    money:        MoneyIcon,
    receipt:      ReceiptIcon,
    schedule:     ScheduleIcon,
    sum:          SumIcon,
    trendingDown: TrendingDown,
    trendingUp:   TrendingUp,
};

const useStyles = makeStyles((theme) => (
    {
        root:                {
            // minWidth: 350,
        },
        media:               {
            height:     0,
            paddingTop: '56.25%', // 16:9
        },
        avatar:              {},
        cardHeaderRoot:      {
            backgroundColor: '#1e2021',
            opacity:         0.9,
            padding:         theme.spacing(1),
        },
        cardHeaderTitle:     {
            fontSize:   '2em',
            color:      'white',
            whiteSpace: 'nowrap',
        },
        cardHeaderSubheader: {
            color: 'white',
        },
        cardContentRoot:     {
            padding: theme.spacing(3, 2),
        },
        blue:                {
            color: blue[500],
        },
        purple:              {
            color: purple[500],
        },
        red:                 {
            color: red[800],
        },
        green:               {
            color: green[800],
        },
        skeletonRoot:        {
            borderRadius: 4,
            minWidth:     350,
        }
    }
));


export default function CardMetric(props) {
    const classes = useStyles();

    const {
              avatar,
              avatarColor = 'blue',
              icon        = 'trendingUp',
              loading     = false,
              title,
              value,
          } = props;

    const Icon = icons[icon];

    const fallbackAvatar = (
        <Icon
            className={clsx(classes[avatarColor])}
            shapeRendering="crispEdges"
            style={{
                fontSize: 48
            }}
        />
    );

    if (loading) {
        return (
            <Card classes={{ root: classes.root }}>
                <CardHeader
                    avatar={<Skeleton animation="wave" variant="circle" width={48} height={48} />}
                    title={<Skeleton animation="wave" height={10} width="80%" />}
                    subheader={<Skeleton animation="wave" height={10} width="40%" />}
                />
                <Skeleton animation="wave" variant="rect" height={75} />
            </Card>
        );
    }

    return (
        <Card
            classes={{
                root: classes.root,
            }}
        >
            <CardHeader
                classes={{
                    root:      classes.cardHeaderRoot,
                    title:     classes.cardHeaderTitle,
                    subheader: classes.cardHeaderSubheader,
                }}
                avatar={avatar || fallbackAvatar}
                // subheader="Some other detail"
                title={title}
            />
            <CardContent
                classes={{
                    root: classes.cardContentRoot,
                }}>
                <Typography
                    variant="h3"
                    color="textSecondary"
                    component="p"
                    style={{ fontSize: '3em' }}
                >
                    {value}
                </Typography>
            </CardContent>
            {/*<CardActions style={{ justifyContent: "flex-end" }}>
             <Button size="small" color="secondary" variant="outlined">
             Learn More
             </Button>
             </CardActions>*/}
        </Card>
    );
}

CardMetric.propTypes = {
    avatar:      PropTypes.node,
    avatarColor: PropTypes.oneOf(['blue', 'green', 'purple', 'red']),
    icon:        PropTypes.oneOf(Object.keys(icons)),
    loading:     PropTypes.bool,
    title:       PropTypes.string.isRequired,
    value:       PropTypes.string.isRequired,
};