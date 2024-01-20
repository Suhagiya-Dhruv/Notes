import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {

    console.log(props);
    const { title, price, thumbnail } = props?.data;

    return (
        <Card sx={{ minWidth: 345, maxWidth: 345 }}>
            <CardMedia
                sx={{
                    height: 140,
                }}
                image={thumbnail}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <div>Price : {price}</div>
            </CardContent>
        </Card>
    );
}