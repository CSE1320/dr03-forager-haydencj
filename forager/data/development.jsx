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
    "image": "/images/deathcap.png",
    "name": "Death Cap",
    "scientific_name": "Amanita phalloides",
    "filterable": {
      "is_toxic": "true",
      "is_favorite": "false",
      "is_edible": "false",
      "is_medicinal": "false"
    },
    "characteristics": {
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
    "region": "Europe, Asia, North America",
    "match_percent": 97
  },
  {
    "image": "/images/paddystraw.png",
    "name": "Paddy Straw Mushroom",
    "scientific_name": "Volvariella volvacea",
    "filterable": {
      "is_toxic": "false",
      "is_favorite": "false",
      "is_edible": "true",
      "is_medicinal": "false"
    },
    "characteristics": {
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
    "region": "Asia",
    "match_percent": 90
  },
  {
    "image": "/images/destroyingangel.png",
    "name": "Destroying Angel",
    "scientific_name": "Amanita virosa",
    "filterable": {
      "is_toxic": "true",
      "is_favorite": "false",
      "is_edible": "false",
      "is_medicinal": "false"
    },
    "characteristics": {
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
    "region": "Europe, North America",
    "match_percent": 80
  },
  {
    "image": "/images/falsedeathcap.png",
    "name": "False Death Cap",
    "scientific_name": "Amanita citrina",
    "filterable": {
      "is_toxic": "true",
      "is_favorite": "false",
      "is_edible": "false",
      "is_medicinal": "false"
    },
    "characteristics": {
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
    "region": "Europe, North America",
    "match_percent": 70
  },
  {
    "image": "/images/puffball.png",
    "name": "Puffball",
    "scientific_name": "Calvatia gigantea",
    "filterable": {
      "is_toxic": "false",
      "is_favorite": "false",
      "is_edible": "false",
      "is_medicinal": "false"
    },
    "characteristics": {
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
    "region": "Worldwide",
    "match_percent": 60
  }
]

const userCharacteristics = {
  cap_shape: "",
  cap_color: "",
  cap_texture: "",
  gills_type: "",
  gills_color: "",
  stem_shape: "",
  stem_color: "",
  stem_ring: "",
  habitat: ""
};

const userFilters = {
  tags: "",
  regions: "",
  category: "",
};

// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

export default mushrooms // import mushrooms from './data/development.js';

// More than one export.
export { mushrooms, userFilters, userCharacteristics, warningMessage, dummyData }; // Requires import {warningMessage, dummyData} from './data/development.js';
