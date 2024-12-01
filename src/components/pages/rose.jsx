import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const vinos = [
    {
        nombre: 'Rosé de Provence',
        descripcion: 'Un rosé ligero y seco con sabores de fresa, sandía y pétalo de rosa.',
    },
    {
        nombre: 'White Zinfandel',
        descripcion: 'Un rosé dulce y afrutado con sabores de fresa, frambuesa y melón.',
    },
    {
        nombre: 'Rosé de Garnacha',
        descripcion: 'Un rosé de cuerpo medio con sabores de cereza, frambuesa y cítricos.',
    },
    {
        nombre: 'Rosé de Sangiovese',
        descripcion: 'Un rosé crujiente y seco con sabores de cereza roja, fresa y hierbas.',
    },
    {
        nombre: 'Rosé de Tempranillo',
        descripcion: 'Un rosé seco con sabores de fresa, frambuesa y un toque de especias.',
    },
];

const Rose = () => {
    return (
        <Grid container spacing={3}>
            {vinos.map((vino, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {vino.nombre}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {vino.descripcion}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Rose;