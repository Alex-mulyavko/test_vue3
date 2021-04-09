interface productModel {
  vendorCode: string,
  productName: string,
  manufacturer: string,
  price: number,
  available: boolean,
}

const defaultItemsCount = 100;
const listOfRandomLocations = [
  'Fanfoss',
  'Tottenham',
  'Durnatel',
  'Colkirk',
  'Newham',
  'Whiteridge',
  'Cirencester',
  'Willesden',
  'Merton',
  'Calcherth',
];

const listOfRandomProductNames = [
  'Danlight',
  'Sumfresh',
  'Lam-Strong',
  'Lexistock',
  'Can Doning',
  'True-Ing',
  'Softotlam',
  'Inchkeysing',
  'Vivasoft',
  'Dontom',
  'Sanlam',
  'Groove Gocom',
  'Volt-Touch',
  'Biostring',
  'Hot Top',
  'Yearlight',
  'Runstrong',
  'Sunkix',
  'Zaam-Lam',
  'Medcancof',
  'Doning',
  'Villaredtone',
  'Finlux',
  'Latflex',
  'Gooddom',
  'Fixdox',
];

function getUniqueId() {
  return Date.now().toString(36).substr(0, 5) + Math.random().toString(36).substr(2, 5);
}

function getRandomNumber(min = 0, max: number, precision = 2) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
}

function getRandomInt(min: number = 0, max: number):number {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

const getRandomBool = () => Math.random() < 0.5;

const generateProductData = (): productModel => ({
  vendorCode: getUniqueId(),
  productName: listOfRandomProductNames[getRandomInt(0, listOfRandomLocations.length - 1)],
  price: getRandomNumber(100, 500),
  manufacturer: listOfRandomLocations[getRandomInt(0, listOfRandomLocations.length - 1)],
  available: getRandomBool(),
});

export default function createFakeData(itemsCount = defaultItemsCount):productModel[] {
  const data = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < itemsCount; i++) {
    data.push(generateProductData());
  }
  return data;
}
