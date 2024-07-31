import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="data:image/png;base64,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" alt="Logo" />
                <h1 className="title">Food App</h1>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = (props) => {
    const {data} = props;

    const {cloudinaryImageId, name, cuisines, sla, avgRating} = data.info;
    return (
        <div className="res-card">
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="res-logo" />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4>{avgRating} stars</h4>
        </div>
    )
}

const resData = [
    {
        "info": {
            "id": "830418",
            "name": "Indian Coffee House",
            "cloudinaryImageId": "2469fa88ee9b0b5d1366ba88f2a7fa7f",
            "locality": "Chhindwara City",
            "areaName": "Khajri Chowk",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian",
                "North Indian",
                "Chinese",
                "Fast Food",
                "Beverages"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "106448",
            "avgRatingString": "4.6",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 49,
                "lastMileTravel": 11.2,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "11.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-31 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8b9ecf7d-063f-49c9-9a90-1bb97b969a96"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/indian-coffee-house-city-khajri-chowk-chhindwara-830418",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "870899",
            "name": "Paras Mishthan",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/9de3a721-5e96-41d2-bb3e-3cbeff47fbd3_870899.jpg",
            "locality": "Nagarpalika Complex",
            "areaName": "Chhindwara City",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Beverages",
                "Sweets",
                "Snacks"
            ],
            "avgRating": 3.3,
            "veg": true,
            "parentId": "510613",
            "avgRatingString": "3.3",
            "totalRatingsString": "10+",
            "sla": {
                "deliveryTime": 48,
                "lastMileTravel": 11.2,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "11.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-31 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹150",
                "discountTag": "SAVE BIG"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8b9ecf7d-063f-49c9-9a90-1bb97b969a96"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/paras-mishthan-nagarpalika-complex-chhindwara-city-chhindwara-870899",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "672945",
            "name": "Annu's Kitchen's Queen Of Paratha",
            "cloudinaryImageId": "dd519572ed1bed19de47e94186e743ea",
            "locality": "Teacher's Colony",
            "areaName": "Chhindwara City",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Chinese",
                "Beverages",
                "Fast Food",
                "Desserts"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "402960",
            "avgRatingString": "4.6",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 63,
                "lastMileTravel": 13.7,
                "serviceability": "SERVICEABLE",
                "slaString": "60-65 mins",
                "lastMileTravelString": "13.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-31 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8b9ecf7d-063f-49c9-9a90-1bb97b969a96"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/annus-kitchens-queen-of-paratha-teachers-colony-chhindwara-city-chhindwara-672945",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "509851",
            "name": "Magic Momo",
            "cloudinaryImageId": "dh0qsuqritnmbncwrni3",
            "locality": "Parasia Road",
            "areaName": "Prasia Road",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Momos",
                "Chinese"
            ],
            "avgRating": 4.1,
            "veg": true,
            "parentId": "129345",
            "avgRatingString": "4.1",
            "totalRatingsString": "20+",
            "sla": {
                "deliveryTime": 65,
                "lastMileTravel": 12.3,
                "serviceability": "SERVICEABLE",
                "slaString": "60-65 mins",
                "lastMileTravelString": "12.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-31 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8b9ecf7d-063f-49c9-9a90-1bb97b969a96"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/magic-momo-parasia-road-prasia-road-chhindwara-509851",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "549580",
            "name": "Fresh Meal's",
            "cloudinaryImageId": "v5e3atn9tmtgcca1onnr",
            "locality": "Teacher's Colony",
            "areaName": "Chhindwara City",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "South Indian"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "15219",
            "avgRatingString": "4.2",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 60,
                "lastMileTravel": 13.6,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "13.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-31 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8b9ecf7d-063f-49c9-9a90-1bb97b969a96"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/fresh-meals-teachers-colony-chhindwara-city-chhindwara-549580",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "344937",
            "name": "Myfit Meals - Meal Prep Co.",
            "cloudinaryImageId": "smo2yv6budwe0ciye1ry",
            "locality": "Teacher's Colony",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹220 for two",
            "cuisines": [
                "Continental",
                "Salads"
            ],
            "avgRating": 4.7,
            "parentId": "142688",
            "avgRatingString": "4.7",
            "totalRatingsString": "10+",
            "sla": {
                "deliveryTime": 66,
                "lastMileTravel": 13.3,
                "serviceability": "SERVICEABLE",
                "slaString": "65-70 mins",
                "lastMileTravelString": "13.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-31 20:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8b9ecf7d-063f-49c9-9a90-1bb97b969a96"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/myfit-meals-meal-prep-co-teachers-colony-chhindwara-locality-chhindwara-344937",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "912754",
            "name": "Urban Cafe",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG",
            "locality": "SOUTH CIVIL LINE",
            "areaName": "Chhindwara City",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Snacks",
                "Pizzas",
                "Pastas",
                "Fast Food",
                "Burgers",
                "Cafe"
            ],
            "veg": true,
            "parentId": "1330",
            "avgRatingString": "NEW",
            "sla": {
                "deliveryTime": 67,
                "lastMileTravel": 11.4,
                "serviceability": "SERVICEABLE",
                "slaString": "65-70 mins",
                "lastMileTravelString": "11.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextOpenTimeMessage": "Opens next at 11 am, today"
            },
            "badges": {},
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8b9ecf7d-063f-49c9-9a90-1bb97b969a96"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/urban-cafe-south-civil-line-chhindwara-city-chhindwara-912754",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "382152",
            "name": "Shriji Namkeen",
            "cloudinaryImageId": "wa8ek94fp9d97ru1tcyn",
            "locality": "Palika Market",
            "areaName": "Chhindwara City",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Snacks",
                "Beverages",
                "Desserts"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "187168",
            "avgRatingString": "4.3",
            "totalRatingsString": "20+",
            "sla": {
                "deliveryTime": 56,
                "lastMileTravel": 10.7,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "10.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextOpenTimeMessage": "Opens next at 11 am, today"
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8b9ecf7d-063f-49c9-9a90-1bb97b969a96"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/shriji-namkeen-palika-market-chhindwara-city-chhindwara-382152",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search for restaurants" />
                <button>Search</button>
            </div>
            <div className="res-container">
                {resData.map((resData) => <RestaurantCard data={resData} />)}
            </div>
        </div>
    )
}
const AppComponent = () => {
    return (
    <div className="app">
        <Header />
        <Body />
    </div>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponent/>);