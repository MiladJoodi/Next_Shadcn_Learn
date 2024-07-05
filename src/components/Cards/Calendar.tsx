"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ResponsiveTimeRange } from '@nivo/calendar'

const MyResponsiveTimeRange = ({ data /* see data tab */ }: any) => (
    <ResponsiveTimeRange
        data={data}
        from="2018-04-01"
        to="2018-12-30"
        emptyColor="#eeeeee"
        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[]}
    />
)

const Calendar = () => {

    function generateDataArray(year: number, numberOfObjects: number, minValue: number, maxValue: number) {
        const dataArray = [];

        for (let i = 1; i <= numberOfObjects; i++) {
            const randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
            const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
            const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
            const date = `${year}-${month}-${day}`;

            dataArray.push({ "value": randomValue, "day": date })
        }
        return dataArray;
    }

    const data = [
        {
            "value": 142,
            "day": "2018-05-18"
        },
        {
            "value": 100,
            "day": "2018-05-28"
        },

        {
            "value": 270,
            "day": "2018-09-28"
        },
        {
            "value": 150,
            "day": "2018-08-28"
        },
        {
            "value": 330,
            "day": "2018-10-28"
        },
        {
            "value": 100,
            "day": "2018-11-28"
        },
        {
            "value": 76,
            "day": "2018-07-01"
        },
        {
            "value": 80,
            "day": "2018-07-08"
        },
        {
            "value": 108,
            "day": "2018-04-02"
        },
        {
            "value": 336,
            "day": "2018-05-19"
        },
        {
            "value": 119,
            "day": "2018-05-07"
        },
        {
            "value": 88,
            "day": "2018-07-12"
        },
        {
            "value": 138,
            "day": "2018-06-19"
        },
        {
            "value": 362,
            "day": "2018-07-21"
        },
        {
            "value": 187,
            "day": "2018-07-10"
        },
        {
            "value": 247,
            "day": "2018-06-02"
        },
        {
            "value": 199,
            "day": "2018-04-10"
        },
        {
            "value": 28,
            "day": "2018-04-21"
        },
        {
            "value": 153,
            "day": "2018-07-04"
        },
        {
            "value": 9,
            "day": "2018-05-05"
        },
        {
            "value": 355,
            "day": "2018-05-24"
        },
        {
            "value": 59,
            "day": "2018-06-20"
        },
        {
            "value": 241,
            "day": "2018-06-23"
        },
        {
            "value": 327,
            "day": "2018-08-04"
        },
        {
            "value": 191,
            "day": "2018-06-18"
        },
        {
            "value": 340,
            "day": "2018-07-30"
        },
        {
            "value": 326,
            "day": "2018-07-25"
        },
        {
            "value": 322,
            "day": "2018-04-01"
        },
        {
            "value": 134,
            "day": "2018-04-27"
        },
        {
            "value": 105,
            "day": "2018-04-22"
        },
        {
            "value": 256,
            "day": "2018-08-05"
        },
        {
            "value": 119,
            "day": "2018-05-31"
        },
        {
            "value": 325,
            "day": "2018-07-15"
        },
        {
            "value": 335,
            "day": "2018-07-02"
        },
        {
            "value": 191,
            "day": "2018-07-24"
        },
        {
            "value": 178,
            "day": "2018-05-25"
        },
        {
            "value": 189,
            "day": "2018-08-03"
        },
        {
            "value": 170,
            "day": "2018-07-19"
        },
        {
            "value": 162,
            "day": "2018-06-26"
        },
        {
            "value": 136,
            "day": "2018-04-25"
        },
        {
            "value": 393,
            "day": "2018-05-11"
        },
        {
            "value": 124,
            "day": "2018-04-11"
        },
        {
            "value": 166,
            "day": "2018-07-16"
        },
        {
            "value": 52,
            "day": "2018-08-01"
        },
        {
            "value": 83,
            "day": "2018-04-28"
        },
        {
            "value": 179,
            "day": "2018-04-19"
        },
        {
            "value": 252,
            "day": "2018-06-15"
        },
        {
            "value": 62,
            "day": "2018-04-17"
        },
        {
            "value": 100,
            "day": "2018-07-06"
        },
        {
            "value": 72,
            "day": "2018-08-08"
        },
        {
            "value": 100,
            "day": "2018-05-21"
        },
        {
            "value": 290,
            "day": "2018-04-03"
        },
        {
            "value": 182,
            "day": "2018-05-04"
        },
        {
            "value": 34,
            "day": "2018-05-01"
        },
        {
            "value": 90,
            "day": "2018-04-04"
        },
        {
            "value": 136,
            "day": "2018-06-04"
        },
        {
            "value": 131,
            "day": "2018-06-24"
        },
        {
            "value": 134,
            "day": "2018-07-26"
        },
        {
            "value": 223,
            "day": "2018-05-13"
        },
        {
            "value": 165,
            "day": "2018-05-10"
        },
        {
            "value": 320,
            "day": "2018-08-02"
        },
        {
            "value": 186,
            "day": "2018-07-13"
        },
        {
            "value": 124,
            "day": "2018-04-29"
        },
        {
            "value": 118,
            "day": "2018-05-26"
        },
        {
            "value": 209,
            "day": "2018-04-20"
        },
        {
            "value": 165,
            "day": "2018-05-28"
        },
        {
            "value": 270,
            "day": "2018-04-09"
        },
        {
            "value": 262,
            "day": "2018-06-13"
        },
        {
            "value": 386,
            "day": "2018-04-05"
        },
        {
            "value": 158,
            "day": "2018-06-16"
        },
        {
            "value": 375,
            "day": "2018-07-14"
        },
        {
            "value": 8,
            "day": "2018-06-08"
        },
        {
            "value": 256,
            "day": "2018-06-12"
        },
        {
            "value": 338,
            "day": "2018-05-06"
        },
        {
            "value": 125,
            "day": "2018-04-24"
        },
        {
            "value": 337,
            "day": "2018-07-09"
        },
        {
            "value": 152,
            "day": "2018-04-26"
        },
        {
            "value": 157,
            "day": "2018-07-29"
        },
        {
            "value": 369,
            "day": "2018-05-16"
        },
        {
            "value": 398,
            "day": "2018-06-01"
        },
        {
            "value": 261,
            "day": "2018-05-08"
        },
        {
            "value": 383,
            "day": "2018-06-10"
        },
        {
            "value": 155,
            "day": "2018-04-18"
        },
        {
            "value": 382,
            "day": "2018-04-13"
        },
        {
            "value": 11,
            "day": "2018-06-22"
        },
        {
            "value": 127,
            "day": "2018-05-15"
        },
        {
            "value": 239,
            "day": "2018-08-10"
        },
        {
            "value": 301,
            "day": "2018-06-25"
        },
        {
            "value": 191,
            "day": "2018-04-14"
        },
        {
            "value": 137,
            "day": "2018-08-09"
        },
        {
            "value": 328,
            "day": "2018-07-20"
        },
        {
            "value": 162,
            "day": "2018-05-12"
        },
        {
            "value": 86,
            "day": "2018-08-11"
        },
        {
            "value": 36,
            "day": "2018-07-05"
        },
        {
            "value": 263,
            "day": "2018-05-29"
        },
        {
            "value": 394,
            "day": "2018-05-30"
        },
        {
            "value": 16,
            "day": "2018-06-05"
        },
        {
            "value": 151,
            "day": "2018-06-07"
        },
        {
            "value": 390,
            "day": "2018-07-31"
        },
        {
            "value": 286,
            "day": "2018-04-16"
        },
        {
            "value": 371,
            "day": "2018-07-22"
        },
        {
            "value": 27,
            "day": "2018-06-11"
        },
        {
            "value": 320,
            "day": "2018-05-20"
        },
        {
            "value": 71,
            "day": "2018-05-14"
        },
        {
            "value": 232,
            "day": "2018-05-09"
        },
        {
            "value": 34,
            "day": "2018-07-03"
        },
        {
            "value": 150,
            "day": "2018-12-03"
        },
        {
            "value": 70,
            "day": "2018-12-01"
        },



        {
            "value": 95,
            "day": "2018-12-04"
        },

        {
            "value": 300,
            "day": "2018-12-05"
        },

        {
            "value": 189,
            "day": "2018-12-06"
        },

        {
            "value": 71,
            "day": "2018-12-07"
        },

        {
            "value": 30,
            "day": "2018-12-08"
        },

        {
            "value": 110,
            "day": "2018-12-09"
        },

        {
            "value": 220,
            "day": "2018-12-10"
        },

        {
            "value": 250,
            "day": "2018-12-11"
        },

        {
            "value": 70,
            "day": "2018-12-12"
        },

        {
            "value": 320,
            "day": "2018-12-13"
        },


    ]

    // Example usage
    // const data = generateDataArray(2023, 20, 20, 100);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>These are the results of this year</CardDescription>
            </CardHeader>
            <CardContent className='h-[250px] flex items-center w-full'>
                <MyResponsiveTimeRange data={data} />
            </CardContent>
        </Card>
    );
}

export default Calendar;