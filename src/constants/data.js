import images from './images';

const juices = [
  {
    title: 'Grapefruits',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Lychees',
    price: '$63',
    tags: 'AU | Bottle',
  },
  {
    title: 'Cherries',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Pineapples',
    price: '$50',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Strawberries',
    price: '$59',
    tags: 'IE | 750 ml',
  },
];

const iceCreams = [
  {
    title: 'Strawberry',
    price: '$20',
    tags: 'Strawberrie | lemon Vanilla  | 30 ml',
  },
  {
    title: "Choco-o-nilla",
    price: '$16',
    tags: 'Chocolate | Vanilla Maltesrs | 40 ml',
  },
  {
    title: 'Neapolitan',
    price: '$10',
    tags: 'Vanilla | Choclate | Strawberry | 25 ml',
  },
  {
    title: 'Bubblegum Bliss',
    price: '$31',
    tags: 'Milk | eggs sugar | Cream | 40 ml ',
  },
  {
    title: 'Caramel Ripple',
    price: '$26',
    tags: 'Liquid Sugar |  Milk | Salt | 20 ml',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { juices, iceCreams, awards };
