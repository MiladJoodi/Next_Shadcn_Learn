"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ResponsiveLine } from '@nivo/line'

const MyResponsiveLine = ({ data }: any) => {
    return (
        <ResponsiveLine
            data={data}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="basis"
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
        />
    )
}


const Lines = () => {

    const data = [
        {
            "id": "japan",
            "color": "hsl(334, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 242
                },
                {
                    "x": "helicopter",
                    "y": 242
                },
                {
                    "x": "boat",
                    "y": 9
                },
                {
                    "x": "train",
                    "y": 87
                },
                {
                    "x": "subway",
                    "y": 264
                },
                {
                    "x": "bus",
                    "y": 250
                },
                {
                    "x": "car",
                    "y": 295
                },
                {
                    "x": "moto",
                    "y": 262
                },
                {
                    "x": "bicycle",
                    "y": 271
                },
                {
                    "x": "horse",
                    "y": 92
                },
                {
                    "x": "skateboard",
                    "y": 190
                },
                {
                    "x": "others",
                    "y": 58
                }
            ]
        },
        {
            "id": "france",
            "color": "hsl(242, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 228
                },
                {
                    "x": "helicopter",
                    "y": 233
                },
                {
                    "x": "boat",
                    "y": 149
                },
                {
                    "x": "train",
                    "y": 114
                },
                {
                    "x": "subway",
                    "y": 197
                },
                {
                    "x": "bus",
                    "y": 108
                },
                {
                    "x": "car",
                    "y": 156
                },
                {
                    "x": "moto",
                    "y": 204
                },
                {
                    "x": "bicycle",
                    "y": 186
                },
                {
                    "x": "horse",
                    "y": 69
                },
                {
                    "x": "skateboard",
                    "y": 154
                },
                {
                    "x": "others",
                    "y": 286
                }
            ]
        },
        {
            "id": "us",
            "color": "hsl(206, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 11
                },
                {
                    "x": "helicopter",
                    "y": 274
                },
                {
                    "x": "boat",
                    "y": 31
                },
                {
                    "x": "train",
                    "y": 175
                },
                {
                    "x": "subway",
                    "y": 117
                },
                {
                    "x": "bus",
                    "y": 233
                },
                {
                    "x": "car",
                    "y": 139
                },
                {
                    "x": "moto",
                    "y": 35
                },
                {
                    "x": "bicycle",
                    "y": 172
                },
                {
                    "x": "horse",
                    "y": 33
                },
                {
                    "x": "skateboard",
                    "y": 89
                },
                {
                    "x": "others",
                    "y": 263
                }
            ]
        },
        {
            "id": "germany",
            "color": "hsl(208, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 251
                },
                {
                    "x": "helicopter",
                    "y": 94
                },
                {
                    "x": "boat",
                    "y": 200
                },
                {
                    "x": "train",
                    "y": 207
                },
                {
                    "x": "subway",
                    "y": 42
                },
                {
                    "x": "bus",
                    "y": 298
                },
                {
                    "x": "car",
                    "y": 273
                },
                {
                    "x": "moto",
                    "y": 123
                },
                {
                    "x": "bicycle",
                    "y": 262
                },
                {
                    "x": "horse",
                    "y": 93
                },
                {
                    "x": "skateboard",
                    "y": 78
                },
                {
                    "x": "others",
                    "y": 240
                }
            ]
        },
        {
            "id": "norway",
            "color": "hsl(39, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 237
                },
                {
                    "x": "helicopter",
                    "y": 289
                },
                {
                    "x": "boat",
                    "y": 62
                },
                {
                    "x": "train",
                    "y": 91
                },
                {
                    "x": "subway",
                    "y": 44
                },
                {
                    "x": "bus",
                    "y": 139
                },
                {
                    "x": "car",
                    "y": 273
                },
                {
                    "x": "moto",
                    "y": 212
                },
                {
                    "x": "bicycle",
                    "y": 65
                },
                {
                    "x": "horse",
                    "y": 227
                },
                {
                    "x": "skateboard",
                    "y": 75
                },
                {
                    "x": "others",
                    "y": 89
                }
            ]
        }
    ]


    return (
        <Card>
        <CardHeader>
            <CardTitle>Lines</CardTitle>
            <CardDescription>These are the states of this year</CardDescription>
        </CardHeader>
        <CardContent className='h-[264px] flex items-center w-full'>
            <MyResponsiveLine data={data} />
        </CardContent>
    </Card>
    );
}

export default Lines;