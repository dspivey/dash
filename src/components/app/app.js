import { Container, CssBaseline, Grid, } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { CombinedChart } from '../charts';
import { LineChart } from '../charts';
import { UnitedStatesMap } from '../maps';
import { CardMetric } from '../metrics';

// import logo from './logo.svg';
import './app.css';
import NavBar from './navbar';


// TODO: Move app wide state to an AppContext (e.g. loading, status alerts)
// TODO: Add skeleton for viz components
// TODO: Add `collapses` around viz components and/or `rows`
// TODO: Change viz component surface to a card instead of paper?
function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, [setLoading]);

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
                    <Grid item md={3} xs={6}>
                        <CardMetric
                            avatarColor="green"
                            icon="money"
                            title="Total Charges"
                            value="$1,932,438,031"
                            loading={loading}
                        />
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <CardMetric
                            avatarColor="red"
                            icon="receipt"
                            title="Total Payments"
                            value="$984,823,207"
                            loading={loading}
                        />
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <CardMetric
                            avatarColor="purple"
                            icon="chart"
                            title="Average Charges"
                            value="$780,404"
                            loading={loading}
                        />
                    </Grid>
                    <Grid item md={3} xs={6}>
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
                        <LineChart
                            elementId="linechart"
                            loading={loading}
                            title="Charges by Year"
                        />
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <CombinedChart
                            elementId="combined"
                            loading={loading}
                            title="Wall Road"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{ marginBottom: 24 }}>
                    <Grid item xs={12}>
                        <UnitedStatesMap
                            elementId="usmap"
                            loading={loading}
                            title="'Merica"
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
