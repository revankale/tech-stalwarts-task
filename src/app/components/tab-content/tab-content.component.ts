import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent implements OnInit {


  @Input() tabArray: string[] = [];

  @Output() onTabChange = new EventEmitter<number>();

  activetedTab: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  setTab(index: number) {
    this.activetedTab = index;
    debugger;
    this.onTabChange.emit(this.activetedTab);
  }

}
