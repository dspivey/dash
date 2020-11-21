import { Container, CssBaseline, Grid, } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BarChart from '../charts/bar';
import CombinedChart from '../charts/combined';
import LineChart from '../charts/line';
import UnitedStatesMap from '../maps/usa';
import WorldMap from '../maps/world';
import Metric from '../metric';

// import logo from './logo.svg';
import './app.css';
import NavBar from './navbar';


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
                    spacing={2}
                    style={{ marginBottom: 16 }}
                >
                    <Grid item md={3} xs={6}>
                        <Metric title="Total Charges" value="$1,932,438,031" loading={loading} />
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <Metric title="Total Payments" value="$984,823,207" loading={loading} />
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <Metric title="Average Charges" value="$780,404" loading={loading} />
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <Metric title="Average Charge by Visit" value="$99" loading={loading} />
                    </Grid>
                    {/*<Metric title="Total Charges" value="$1,932,438,031" loading={loading} />*/}
                    {/*<Metric title="Total Payments" value="$984,823,207" loading={loading} />*/}
                    {/*<Metric title="Average Charges" value="$780,404" loading={loading} />*/}
                    {/*<Metric title="Average Charge by Visit" value="$99" loading={loading} />*/}
                </Grid>
                <Grid container spacing={2} style={{ marginBottom: 16 }}>
                    <Grid item md={6} xs={12}>
                        <LineChart
                            elementId="linechart"
                            loading={loading}
                            title="Charges by Year"
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <CombinedChart
                            elementId="combined"
                            loading={loading}
                            title="Wall Road"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginBottom: 16 }}>
                    <Grid item xs={12}>
                        <UnitedStatesMap
                            elementId="worldmap"
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
