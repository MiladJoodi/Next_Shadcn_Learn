'use client';

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bump
import { ResponsiveLine } from '@nivo/line'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBump = (props: any) => {
  return (
    <ResponsiveLine
        data={props.data}
        margin={{ top: 10, right: 85, bottom: 25, left: 45 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
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
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
  )
}

export default function General() {
  const data = [
    {
      "id": "japan",
      "color": "hsl(277, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 267
        },
        {
          "x": "helicopter",
          "y": 165
        },
        {
          "x": "boat",
          "y": 74
        },
        {
          "x": "train",
          "y": 55
        },
        {
          "x": "subway",
          "y": 1
        },
        {
          "x": "bus",
          "y": 146
        },
        {
          "x": "car",
          "y": 9
        },
        {
          "x": "moto",
          "y": 79
        },
        {
          "x": "bicycle",
          "y": 6
        },
        {
          "x": "horse",
          "y": 37
        },
        {
          "x": "skateboard",
          "y": 133
        },
        {
          "x": "others",
          "y": 51
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(182, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 85
        },
        {
          "x": "helicopter",
          "y": 253
        },
        {
          "x": "boat",
          "y": 5
        },
        {
          "x": "train",
          "y": 11
        },
        {
          "x": "subway",
          "y": 229
        },
        {
          "x": "bus",
          "y": 159
        },
        {
          "x": "car",
          "y": 33
        },
        {
          "x": "moto",
          "y": 92
        },
        {
          "x": "bicycle",
          "y": 186
        },
        {
          "x": "horse",
          "y": 198
        },
        {
          "x": "skateboard",
          "y": 103
        },
        {
          "x": "others",
          "y": 173
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(113, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 295
        },
        {
          "x": "helicopter",
          "y": 2
        },
        {
          "x": "boat",
          "y": 245
        },
        {
          "x": "train",
          "y": 96
        },
        {
          "x": "subway",
          "y": 153
        },
        {
          "x": "bus",
          "y": 98
        },
        {
          "x": "car",
          "y": 198
        },
        {
          "x": "moto",
          "y": 91
        },
        {
          "x": "bicycle",
          "y": 62
        },
        {
          "x": "horse",
          "y": 300
        },
        {
          "x": "skateboard",
          "y": 136
        },
        {
          "x": "others",
          "y": 11
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(208, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 267
        },
        {
          "x": "helicopter",
          "y": 278
        },
        {
          "x": "boat",
          "y": 269
        },
        {
          "x": "train",
          "y": 195
        },
        {
          "x": "subway",
          "y": 172
        },
        {
          "x": "bus",
          "y": 157
        },
        {
          "x": "car",
          "y": 6
        },
        {
          "x": "moto",
          "y": 145
        },
        {
          "x": "bicycle",
          "y": 35
        },
        {
          "x": "horse",
          "y": 32
        },
        {
          "x": "skateboard",
          "y": 153
        },
        {
          "x": "others",
          "y": 41
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(102, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 176
        },
        {
          "x": "helicopter",
          "y": 177
        },
        {
          "x": "boat",
          "y": 260
        },
        {
          "x": "train",
          "y": 115
        },
        {
          "x": "subway",
          "y": 101
        },
        {
          "x": "bus",
          "y": 153
        },
        {
          "x": "car",
          "y": 5
        },
        {
          "x": "moto",
          "y": 223
        },
        {
          "x": "bicycle",
          "y": 32
        },
        {
          "x": "horse",
          "y": 141
        },
        {
          "x": "skateboard",
          "y": 104
        },
        {
          "x": "others",
          "y": 289
        }
      ]
    }
  ]

  return <Card className='w-full'>
    <CardHeader>
      <CardTitle>This week</CardTitle>
      <CardDescription>These are the results of this week.</CardDescription>
    </CardHeader>
    <CardContent className="grid gap-4 h-[400px]">
      <MyResponsiveBump data={data} />
    </CardContent>
  </Card>;
}