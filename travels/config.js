var config = {
    "style": "mapbox://styles/omnifarter/cl4h24ssw000b15jufkwb8e3m",
    "accessToken": "pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg",
    "showMarkers": false,
    "theme": "dark",
    "use3dTerrain": true,
    "title": "Gabriel's Travels",
    "subtitle": "Where I have travelled to since 2018",
    "chapters": [
        {
            "id": "summary",
            "alignment": "left",
            "title": "Summary",
            "countries": 12,
            "cities":1,
            "location": {
                "center": [68.924,32.061],
                "zoom": 2.25,
                "pitch": 0.00,
                "bearing": 0.00
            },
            "onChapterEnter": [
                {
                    "layer": "country-boundaries",
                    "opacity": 0.4
                }
            ],
            "onChapterExit": [
                {
                    "layer": "country-boundaries",
                    "opacity": 0
                }
            ]
        },
        {
            "id": "france",
            "alignment": "left",
            "title": "France Pre-Graduation Trip",
            "days":13,
            "date":"April 2022",
            "image":"https://storage.googleapis.com/omnifarter-travel/france.jpg",
            "places": ["Paris","Reims","Tours","Bordaeux","Arcachon","Dorgdogne Valley","Clermont-Ferrand","Annecy","Chamonix","Nice"],
            "location": {
                "center": [2.48383, 46.48293],
                "zoom": 5.89,
                "pitch": 0.00,
                "bearing": 0.00
            },
            "onChapterEnter": [
                {
                    "layer": "France",
                    "opacity": 1 
                }
            ],
            "onChapterExit": [
                {
                    "layer": "France",
                    "opacity": 0
                }
            ]
        },
        {
            "id": "hangzhou",
            "alignment": "left",
            "title": "Hangzhou Exchange Program",
            "image":"",
            "days":100,
            "date":"May 2019",
            "places": ["Hangzhou","Shanghai","Taizhou","Huzhou","Guilin","Zhangjiajie","Chengdu","Huangshan"],
            "location": {
                "center": [110.594,28.446],
                "zoom": 5.92,
                "pitch": 0.00,
                "bearing": 0.00
            },
            "onChapterEnter": [
                {
                    "layer": "China",
                    "opacity": 1
                }
            ],
            "onChapterExit": [
                {
                    "layer": "China",
                    "opacity": 0
                }
            ]
        },
        {
            "id": "taiwan-2018",
            "alignment": "left",
            "title": "Taiwan Family Trip",
            "image":"",
            "days":9,
            "date":"Dec 2018",
            "places": ["Taipei","Pingxi","Taroko Gorge","Hualien"],
            "location": {
                "center": [121.382,24.546],
                "zoom": 9.07,
                "pitch": 0.00,
                "bearing": 0.00
            },
            "onChapterEnter": [
                {
                    "layer": "Taiwan",
                    "opacity": 1
                }
            ],
            "onChapterExit": [
                {
                    "layer": "Taiwan",
                    "opacity": 0
                }
            ]
        },
        {
            "id": "tioman-2018",
            "alignment": "left",
            "title": "Tioman Diving Trip",
            "image":"",
            "days":3,
            "date":"Aug 2018",
            "places": ["Tioman"],
            "location": {
                "center": [104.091,2.792],
                "zoom": 11.90,
                "pitch": 0.00,
                "bearing": 0.00
            },
            "onChapterEnter": [
                {
                    "layer": "Tioman",
                    "opacity": 1
                }
            ],
            "onChapterExit": [
                {
                    "layer": "Tioman",
                    "opacity": 0
                }
            ]
        },
        {
            "id": "cameron-highland-2018",
            "alignment": "left",
            "title": "Cameron Highland Term Break Trip",
            "image":"",
            "days":3,
            "date":"Jun 2018",
            "places": ["Cameron Highlands"],
            "location": {
                "center": [101.358,4.476],
                "zoom": 13.63,
                "pitch": 0.00,
                "bearing": 0.00
            },
            "onChapterEnter": [
                {
                    "layer": "Cameron Highlands",
                    "opacity": 1
                }
            ],
            "onChapterExit": [
                {
                    "layer": "Cameron Highlands",
                    "opacity": 0
                }
            ]
        },
        {
            "id": "bali-2018",
            "alignment": "left",
            "title": "Bali 2018",
            "image":"",
            "days":3,
            "date":"Apr 2018",
            "places": ["Kuta","Tanah Lot"],
            "location": {
                "center": [115.129,-8.690],
                "zoom": 11.97,
                "pitch": 0.00,
                "bearing": 0.00
            },
            "onChapterEnter": [
                {
                    "layer": "Bali",
                    "opacity": 1
                }
            ],
            "onChapterExit": [
                {
                    "layer": "Bali",
                    "opacity": 0
                }
            ]
        },
        {
            "id": "australia-2018",
            "alignment": "left",
            "title": "Australia 2018",
            "image":"",
            "days":9,
            "date":"Mar 2018",
            "places": ["Sydney","Hunter's Valley","Ellenborough Falls","Port Macquarie","Coff's Harbour","Gold Coast","Brisbane"],
            "location": {
                "center": [152.345,-30.706],
                "zoom": 6.43,
                "pitch": 0.00,
                "bearing": 0.00
            },
            "onChapterEnter": [
                {
                    "layer": "Australia",
                    "opacity": 1
                }
            ],
            "onChapterExit": [
                {
                    "layer": "Australia",
                    "opacity": 0
                }
            ]
        },
        {
            "id": "krabi-2018",
            "alignment": "left",
            "title": "Krabi ORD Trip 2018",
            "image":"",
            "days":6,
            "date":"Mar 2018",
            "places": ["Krabi","Ao Nang","Phi Phi Islands"],
            "location": {
                "center": [98.703,7.893],
                "zoom": 11.06,
                "pitch": 0.00,
                "bearing": 0.00
            },
            "onChapterEnter": [
                {
                    "layer": "Krabi",
                    "opacity": 1
                }
            ],
            "onChapterExit": [
                {
                    "layer": "Krabi",
                    "opacity": 0
                }
            ]
        }
    ]
}