// data/development.js
const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
};

const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution."
};

const mushrooms = [
    {
        "image": "/public/images/death_cap.jpg",
        "name": "Death Cap",
        "scientific_name": "Amanita phalloides",
        "filterable": {
          "is_toxic": "true",
          "is_favorite": "false"
        },
        "characteristics": {
          "diameter": "5–15 cm",
          "cap_shape": "Flat",
          "cap_color": "Yellow",
          "cap_texture": "Smooth",
          "gills_type": "Free",
          "gills_color": "White",
          "stem_shape": "Slender",
          "stem_color": "White",
          "stem_ring": "Absent",
          "habitat": "Near oak/beech"
        },
        "description": "The Death Cap is a highly toxic mushroom that is responsible for the majority of mushroom poisoning fatalities. It features a smooth yellow cap, free white gills, and a slender white stem, often found near oak and beech trees.",
        "region": "Europe, Asia, North America"
    },      
    {
        "image": "/public/images/paddy_straw_mushroom.jpg",
        "name": "Paddy Straw Mushroom",
        "scientific_name": "Volvariella volvacea",
        "filterable": {
          "is_toxic": "false",
          "is_favorite": "true"
        },
        "characteristics": {
          "diameter": "5–12 cm",
          "cap_shape": "Bell-shaped",
          "cap_color": "Gray-brown",
          "cap_texture": "Smooth",
          "gills_type": "Free",
          "gills_color": "Pink",
          "stem_shape": "Cylindrical",
          "stem_color": "White",
          "stem_ring": "Absent",
          "habitat": "Rice straw beds"
        },
        "description": "An edible mushroom cultivated in East and Southeast Asia, featuring a smooth gray-brown cap and pink gills.",
        "region": "Asia, introduced elsewhere"
    },      
    {
        "image": "/public/images/destroying_angel.jpg",
        "name": "Destroying Angel",
        "scientific_name": "Amanita virosa",
        "filterable": {
          "is_toxic": "true",
          "is_favorite": "false"
        },
        "characteristics": {
          "diameter": "5–10 cm",
          "cap_shape": "Convex",
          "cap_color": "White",
          "cap_texture": "Smooth",
          "gills_type": "Free",
          "gills_color": "White",
          "stem_shape": "Slender",
          "stem_color": "White",
          "stem_ring": "Present",
          "habitat": "Forests"
        },
        "description": "A deadly poisonous mushroom with a smooth white cap, free white gills, and a slender stem.",
        "region": "Europe, North America"
    },      
    {
        "image": "/public/images/false_death_cap.jpg",
        "name": "False Death Cap",
        "scientific_name": "Amanita citrina",
        "filterable": {
          "is_toxic": "false",
          "is_favorite": "false"
        },
        "characteristics": {
          "diameter": "5–10 cm",
          "cap_shape": "Convex",
          "cap_color": "Yellowish",
          "cap_texture": "Smooth",
          "gills_type": "Free",
          "gills_color": "White",
          "stem_shape": "Cylindrical",
          "stem_color": "White",
          "stem_ring": "Present",
          "habitat": "Woodlands"
        },
        "description": "A mushroom with a yellowish cap and white gills, resembling the Death Cap but less toxic.",
        "region": "Europe, North America"
    },
    {
        "image": "/public/images/puffball.jpg",
        "name": "Puffball",
        "scientific_name": "Calvatia gigantea",
        "filterable": {
          "is_toxic": "false",
          "is_favorite": "true"
        },
        "characteristics": {
          "diameter": "10–70 cm",
          "cap_shape": "Spherical",
          "cap_color": "White",
          "cap_texture": "Smooth",
          "gills_type": "None",
          "gills_color": "N/A",
          "stem_shape": "None",
          "stem_color": "N/A",
          "stem_ring": "Absent",
          "habitat": "Grasslands"
        },
        "description": "Edible mushrooms known for their large, spherical fruiting bodies; they lack gills and stems.",
        "region": "Worldwide"
    }  
]
// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

export default mushrooms // import mushrooms from './data/development.js';

// More than one export.
export {warningMessage, dummyData}; // Requires import {warningMessage, dummyData} from './data/development.js';
