import { Container, CssBaseline, Grid, } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { CombinedChart } from '../charts';
import { LineChart } from '../charts';
import { UnitedStatesMap } from '../maps';
import { CardMetric } from '../metrics';

// import logo from './logo.svg';
import './app.css';
import NavBar from './navbar';


function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    });

    return (
        <div>
            <CssBaseline />
            <NavBar />
            <Container maxWidth="xl">
                <Grid
                    container
                    spacing={3}
                    style={{ marginBottom: 24 }}
                >
                    <Grid item md={3} sm={6} xs={12}>
                        <CardMetric
                            avatarColor="green"
                            icon="money"
                            title="Total Charges"
                            value="$1,932,438,031"
                            loading={loading}
                        />
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <CardMetric
                            avatarColor="red"
                            icon="receipt"
                            title="Total Payments"
                            value="$984,823,207"
                            loading={loading}
                        />
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <CardMetric
                            avatarColor="purple"
                            icon="chart"
                            title="Average Charges"
                            value="$780,404"
                            loading={loading}
                        />
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <CardMetric
                            avatarColor="blue"
                            icon="sum"
                            title="Average Charge by Visit"
                            value="$99"
                            loading={loading}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{ marginBottom: 24 }}>
                    <Grid item md={6} sm={12}>
                        {
                            loading
                                ? <Skeleton variant="rect" width="100%" height={600} />
                                : <LineChart
                                    elementId="linechart"
                                    title="Charges by Year"
                                />
                        }
                    </Grid>
                    <Grid item md={6} sm={12}>
                        {
                            loading
                                ? <Skeleton variant="rect" width="100%" height={600} />
                                : <CombinedChart
                                    elementId="combined"
                                    title="Wall Road"
                                />
                        }
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{ marginBottom: 24 }}>
                    <Grid item xs={12}>
                        {
                            loading
                                ? <Skeleton variant="rect" width="100%" height={600} />
                                : <UnitedStatesMap
                                    elementId="usmap"
                                    title="'Merica"
                                />
                        }
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
