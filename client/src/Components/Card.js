import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import { Edit, Share, Chat } from '@material-ui/icons';

const CardTemp = () => {
    return (
        <Card style={{margin: '10px 10px'}}>
            <CardContent>
                <Typography variant="body2" component="p" gutterBottom>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Typography>
                <Typography color="textSecondary" variant="body2" component="small">
                    created 12 June 2020 00:19:22
                </Typography>
            </CardContent>
            <CardActions style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <Button size="small">Learn More</Button>
                </div>
                <div style={{color: 'grey'}}>
                    <Share style={{margin: '5px 8px', fontSize: '20px'}} />
                    <Chat style={{margin: '5px 8px', fontSize: '20px'}} />
                    <Edit style={{margin: '5px 8px', fontSize: '20px'}} />
                </div>
            </CardActions>
        </Card>
    )
}

export default CardTemp