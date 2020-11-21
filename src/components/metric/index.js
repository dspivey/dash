import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Typography,
} from '@material-ui/core';
import {
    AccountBalanceTwoTone,
    BubbleChartTwoTone,
    DonutSmallTwoTone,
    EventNoteTwoTone,
    MonetizationOnSharp,
    PollTwoTone,
    ScheduleTwoTone,
    TrendingDown,
    TrendingUp
} from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';
import React from 'react';


const icons = {
    bank: <AccountBalanceTwoTone />,
    bubble: <BubbleChartTwoTone />,
    calendar: <EventNoteTwoTone />,
    chart: <PollTwoTone />,
    donut: <DonutSmallTwoTone />,
    money: <MonetizationOnSharp />,
    schedule: <ScheduleTwoTone />,
    tendingDown: <TrendingDown />,
    trendingUp: <TrendingUp />,
};

const useStyles = makeStyles((theme) => (
    {
        root: {
            minWidth: 350,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        avatar: {
            backgroundColor: red[500],
        },
    }
));

// TODO: Update MetricCard to be more customizable via props
// TODO: Add more visual distinction for metric cards
export default function MetricCard(props) {
    const classes = useStyles();

    const {
              icon    = 'money',
              loading = false,
              title,
              value   = '$1,932,438,031',
          } = props;

    if (loading) {
        return <Skeleton className={classes.root} variant="rect" />;
    }

    return (
        <Card
            classes={{
                root: classes.root,
            }}
        >
            <CardHeader
                avatar={
                    <Avatar
                        aria-label="metric"
                        className={classes.avatar}
                        variant="rounded"
                    >
                        {icons[icon]}
                    </Avatar>
                }
                // action={
                //     <IconButton aria-label="settings">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title={<h2 style={{ marginBottom: 4 }}>{title}</h2>}
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography variant="h4" color="textSecondary" component="p">
                    {value}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}