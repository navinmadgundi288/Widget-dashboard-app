import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

// const data = [
//     { value: 2, label: 'Connected(2)' },
//     { value: 2, label: 'Not Connected(2)' },
//     // { value: 15, label: 'C' },
//     // { value: 20, label: 'D' },
//     ];

const size = {
    width: 450,
    height: 150,

};

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 15,
}));

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}



const Card = ({ title, data, total }) => {
    return (
        <>
            <div className='card'>
                <h4>{title}</h4>
                <div className='pie-chart'>

                    <PieChart series={[{ data, innerRadius: 50 }]} {...size} >
                        {total !== '' && <PieCenterLabel>{total}&nbsp;total</PieCenterLabel>}
                    </PieChart>

                </div>
            </div>
        </>
    );
}

export default React.memo(Card);
