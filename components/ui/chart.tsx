'use client';
import { ResponsiveLine } from '@nivo/line';
function Chart() {
  const data = [
    {
      id: 'Asia',
      color: 'hsl(64, 70%, 50%)',
      data: [
        {
          x: 'Souvlaki',
          y: 150,
        },
        {
          x: 'Pizza',
          y: 100,
        },
        {
          x: 'Paella',
          y: 169,
        },
        {
          x: 'Sushi',
          y: 115,
        },
        {
          x: 'Samgyetang',
          y: 215,
        },
        {
          x: 'Pho',
          y: 216,
        },
        {
          x: 'Tom yum',
          y: 166,
        },
      ],
    },
    {
      id: 'America',
      color: 'hsl(19, 70%, 50%)',
      data: [
        {
          x: 'Souvlaki',
          y: 113,
        },
        {
          x: 'Pizza',
          y: 245,
        },
        {
          x: 'Paella',
          y: 276,
        },
        {
          x: 'Sushi',
          y: 275,
        },
        {
          x: 'Samgyetang',
          y: 248,
        },
        {
          x: 'Pho',
          y: 226,
        },
        {
          x: 'Tom yum',
          y: 206,
        },
      ],
    },
    {
      id: 'Australia',
      color: 'hsl(291, 70%, 50%)',
      data: [
        {
          x: 'Souvlaki',
          y: 228,
        },
        {
          x: 'Pizza',
          y: 23,
        },
        {
          x: 'Paella',
          y: 50,
        },
        {
          x: 'Sushi',
          y: 175,
        },
        {
          x: 'Samgyetang',
          y: 84,
        },
        {
          x: 'Pho',
          y: 266,
        },
        {
          x: 'Tom yum',
          y: 255,
        },
      ],
    },
    {
      id: 'Africa',
      color: 'hsl(196, 70%, 50%)',
      data: [
        {
          x: 'Souvlaki',
          y: 149,
        },
        {
          x: 'Pizza',
          y: 53,
        },
        {
          x: 'Paella',
          y: 58,
        },
        {
          x: 'Sushi',
          y: 274,
        },
        {
          x: 'Samgyetang',
          y: 17,
        },
        {
          x: 'Pho',
          y: 178,
        },
        {
          x: 'Tom yum',
          y: 52,
        },
      ],
    },
  ];
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Cuisine',
        legendOffset: 36,
        legendPosition: 'middle',
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Amount',
        legendOffset: -40,
        legendPosition: 'middle',
        truncateTickAt: 0,
      }}
      enableGridX={false}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={3}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}

export default Chart;
