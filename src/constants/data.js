import images from './images';

const wines = [
  {
    title: 'Chapel Hill',
    price: 'R$ 120',
    tags: 'Austrália',
  },
  {
    title: 'Catena Malbec',
    price: 'R$ 150',
    tags: 'Argentina',
  },
  {
    title: 'La Vieille Rose',
    price: 'R$ 220',
    tags: 'França',
  },
  {
    title: 'Rosso Elegante',
    price: 'R$ 180',
    tags: 'Itália',
  },
  {
    title: 'Porto Charmoso',
    price: 'R$ 160',
    tags: 'Portugal',
  },
];


const cocktails = [
  {
    title: 'Aperol Spritz',
    price: 'R$ 55',
    tags: 'Aperol | Prosecco Villa Marchesi | água com gás | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'R$ 42',
    tags: 'Rum escuro | Cerveja de gengibre | Fatia de limão',
  },
  {
    title: 'Daiquiri',
    price: 'R$ 40',
    tags: 'Rum | Suco cítrico | Açúcar',
  },
  {
    title: 'Old Fashioned',
    price: 'R$ 70',
    tags: 'Bourbon | Açúcar mascavo | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: 'R$ 47',
    tags: 'Gin | Vermute Doce | Campari | Guarnição de laranja',
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

export default { wines, cocktails, awards };
