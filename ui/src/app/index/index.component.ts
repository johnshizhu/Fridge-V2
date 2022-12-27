import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  containerTwoContentHeader = 'Select a storage type to learn more'
  containerTwoContentBody = ''
  containerTwoImagePath = ''
  loadFridge() {
    this.containerTwoContentHeader = "Fridges are created as the highest level of storing your resources."
    this.containerTwoContentBody = "Each Fridge is saved as its own unique entity and will have boxes attributed to them. Each fridge is also saved with a unique identifier tying them to a user."
    this.containerTwoImagePath = "../../assets/fridge-icon.png"
  }
  loadBox() {
    this.containerTwoContentHeader = "Boxes are organizational units within fridges."
    this.containerTwoContentBody = "Each box can hold a designated number of reagents, and also associated unique name, ID, and user. Each box can be assoicated with one Fridge and can be moved between fridges."
    this.containerTwoImagePath = "../../assets/box-icon.png"
  }
  loadReagent() {
    this.containerTwoContentHeader = "Reagents are the lowest organizational level and consist of the actual items that are being stored in each fridge, they are housed in boxes."
    this.containerTwoContentBody = "Each Reagent has associated name, ID, user, and imporant information associated with it such as Sequence, price, date, etc. Each reagent is unique and is assoicated with a single box."
    this.containerTwoImagePath = "../../assets/test-tube-icon.png"
  }
  changeSize() {
    
  }
}