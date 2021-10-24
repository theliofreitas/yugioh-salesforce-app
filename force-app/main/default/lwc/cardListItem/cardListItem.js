import { LightningElement } from 'lwc';

export default class CardListItem extends LightningElement {
  name = 'Kuriboh';
  attribute = 'DARK';
  race = 'Fiend';
  level = 1;
  atk = 300;
  def = 200;
  image = 'https://storage.googleapis.com/ygoprodeck.com/pics/40640057.jpg';
  
  // Dynamically set CSS class
  attributeStyle = 'slds-badge_' + [this.attribute]; 

  level = 'Lv. ' + this.level;
}