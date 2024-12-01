import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const vinosBlancos = [
    {
        nombre: 'Chardonnay',
        descripcion: 'El Chardonnay es un vino blanco seco, con cuerpo y notas de frutas como manzana, pera y cítricos. A menudo tiene un toque de roble debido a su envejecimiento en barricas.'
    },
    {
        nombre: 'Sauvignon Blanc',
        descripcion: 'El Sauvignon Blanc es un vino blanco fresco y ligero, con alta acidez y sabores de frutas tropicales, hierba y cítricos. Es ideal para maridar con mariscos y ensaladas.'
    },
    {
        nombre: 'Riesling',
        descripcion: 'El Riesling es un vino blanco aromático que puede variar de seco a muy dulce. Tiene notas de frutas como melocotón, manzana y cítricos, y una acidez vibrante.'
    },
    {
        nombre: 'Pinot Grigio',
        descripcion: 'El Pinot Grigio es un vino blanco ligero y refrescante, con sabores de manzana verde, pera y limón. Es perfecto para disfrutar en días calurosos.'
    },
    {
        nombre: 'Gewürztraminer',
        descripcion: 'El Gewürztraminer es un vino blanco aromático y especiado, con notas de lichi, rosa y especias. Suele ser ligeramente dulce y es excelente con comida asiática.'
    }
];

const Blancos = () => {
    return (
        <Grid container spacing={3}>
            {vinosBlancos.map((vino, index) => (
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

export default Blancos;