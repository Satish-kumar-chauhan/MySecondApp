import exh1 from '../assets/images/Exhibition/Upcoming/exh1.jpg';
import exh2 from '../assets/images/Exhibition/Upcoming/exh2.jpg';
import exh3 from '../assets/images/Exhibition/Upcoming/exh3.jpg';
import oil2 from '../assets/images/Oil_paint/oil2.jpg';
import oil3 from '../assets/images/Oil_paint/oil3.jpg';
import oil4 from '../assets/images/Oil_paint/oil4.jpg';
import water1 from '../assets/images/Watercolor_paint/watercolor1.jpg';
import water2 from '../assets/images/Watercolor_paint/watercolor2.jpg';

export const data =  {
    paintingTypes:[
        {
            id:"oil",
            name:"Oil",
        },
        {
            id:"water",
            name:"Watercolor",
        },
        {
            id:"pastel",
            name:"Pastel",
        },
        {
            id:"acrylic",
            name:"Acrylic",
        },
        {
            id:"abstract",
            name:"Abstract",
        }
    ]
};
export const exhibition =  [
    'Upcoming',
    'Current',
    'Past',
    ];
export const newArrival = [
    {
        id:0,
        name:"Painting Name1",
        price:10.50,
        instock:50,
        type:"Painting Type",
        imgSrc:oil3,
        desc:"Painting Desc"
    },
    {
        id:1,
        name:"Painting Name2",
        price:10.50,
        instock:50,
        type:"Painting Type",
        imgSrc:oil2,
        desc:"Painting Desc"
    },
    {
        id:2,
        name:"Painting Name3",
        price:10.50,
        instock:50,
        type:"Painting Type",
        imgSrc:oil3,
        desc:"Painting Desc"
    },
    {
        id:3,
        name:"Painting Name4",
        price:10.50,
        instock:50,
        type:"Painting Type",
        imgSrc:oil4,
        desc:"Painting Desc"
    },    {
        id:4,
        name:"Painting Name5",
        price:10.50,
        instock:50,
        type:"Painting Type",
        imgSrc:water1,
        desc:"Painting Desc"
    },    {
        id:5,
        name:"Painting Name6",
        price:10.50,
        instock:50,
        type:"Painting Type",
        imgSrc:water2,
        desc:"Painting Desc"
    }
];

export const events = {
    upcoming:[
        {
            id:0,
            date:"upcoming exhibition date",
            location:"exhibition location",
            imgSrc:exh1,
            status: 'Comming Soon',
        },
        {
            id:1,
            date:"upcoming exhibition date",
            location:"exhibition location",
            imgSrc:exh1,
            status: 'Comming Soon',
        },
        {
            id:2,
            date:"upcoming exhibition date",
            location:"exhibition location",
            imgSrc:exh1,
            status: 'Comming Soon',
        }
    ],
    current:[
        {
            id:0,
            date:"current exhibition date",
            location:"current exhibition location",
            imgSrc:exh2,
            status: 'Booking Open',
        },
        {
            id:1,
            date:"current exhibition date",
            location:"current exhibition location",
            imgSrc:exh2,
            status: 'Booking Open',
        },
        {
            id:2,
            date:"current exhibition date",
            location:"current exhibition location",
            imgSrc:exh2,
            status: 'Booking Open',
        }
    ],
    past:[
        {
            id:0,
            date:"past exhibition date",
            location:"current exhibition location",
            imgSrc:exh3,
            status: 'Closed',
        },
        {
            id:1,
            date:"past exhibition date",
            location:"current exhibition location",
            imgSrc:exh3,
            status: 'Closed',
        },
        {
            id:2,
            date:"past exhibition date",
            location:"current exhibition location",
            imgSrc:exh3,
            status: 'Closed',
        }
    ]
}
