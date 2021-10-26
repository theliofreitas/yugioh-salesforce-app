import { LightningElement } from 'lwc';

export default class CardList extends LightningElement {

  cards = [
    {
      id: 40640057,
      name: 'Kuriboh',
      attribute: 'DARK',
      race: 'Fiend',
      level: 1,
      atk: 300,
      def: 200,
      image: 'https://storage.googleapis.com/ygoprodeck.com/pics/40640057.jpg'
    },
    {
      id: 46986421,
      name: 'Dark Magician',
      attribute: 'DARK',
      race: 'Spellcaster',
      level: 7,
      atk: 2500,
      def: 2100,
      image: 'https://storage.googleapis.com/ygoprodeck.com/pics/46986421.jpg'
    },
    {
      id: 6368038,
      name: 'Gaia The Fierce Knight',
      attribute: 'EARTH',
      race: 'Warrior',
      level: 7,
      atk: 2300,
      def: 2100,
      image: 'https://storage.googleapis.com/ygoprodeck.com/pics/6368038.jpg'
    },
    {
      id: 44095762,
      name: 'Mirror Force',
      race: 'Normal',
      image: 'https://storage.googleapis.com/ygoprodeck.com/pics/44095762.jpg'
    },
    {
      id: 71625222,
      name: 'Time Wizard',
      attribute: 'LIGHT',
      race: 'Spellcaster',
      level: 2,
      atk: 500,
      def: 400,
      image: 'https://storage.googleapis.com/ygoprodeck.com/pics/71625222.jpg'
    },
    {
      id: 15259703,
      name: 'Toon World',
      race: 'Continuous',
      image: 'https://storage.googleapis.com/ygoprodeck.com/pics/15259703.jpg'
    },
    {
      id: 89631139,
      name: 'Blue-Eyes White Dragon',
      attribute: 'LIGHT',
      race: 'Dragon',
      level: 8,
      atk: 3000,
      def: 2500,
      image: 'https://storage.googleapis.com/ygoprodeck.com/pics/89631139.jpg'
    }
  ];
}