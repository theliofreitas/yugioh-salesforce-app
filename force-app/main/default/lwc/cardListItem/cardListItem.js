import { LightningElement, api } from 'lwc';

export default class CardListItem extends LightningElement {
  @api id;
  @api name;
  @api attribute;
  @api race;
  @api atk;
  @api def;
  @api image;
  _level;

  @api
  get level() {
    return this._level;
  }
  set level(value) {
    this._level = 'Lv. ' + value;
  }
  
  // Dynamically get CSS class
  get attributeStyle() {
    return 'slds-badge_' + this.attribute; 
  } 
}