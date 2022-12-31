import { Component, Input, OnInit } from '@angular/core';
import { Color } from '@ionic/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {

  @Input() item: string = "";
  @Input() creator: string = "";
  @Input() createdDate: string = "";
  @Input() dueDate: string = "";
  @Input() notes: string = "";
  @Input() isInvitation: boolean = false;
  @Input() isDone: boolean = false;
  @Input() isRemoved: boolean = false;

  public showAddAndRemoveButtons: boolean = false;
  public cardColor : Color = 'undefined';
  constructor() { }

  ngOnInit() {
    this.showAddAndRemoveButtons = !this.isInvitation && !this.isDone && !this.isRemoved
    const color = this.isDone? 'success' : this.isRemoved ? 'danger' : 'undefined';
    this.cardColor = color;
   }

}
