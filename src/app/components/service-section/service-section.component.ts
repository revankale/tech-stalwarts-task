import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.css']
})
export class ServiceSectionComponent implements OnInit {



  tabs: string[] = ['UI/UX Design', 'Cloud Computing', 'Web Development', 'Platform Development'];

  contant:any = "";

  activetedTabIndex: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  tabChange(tabindex: number) {
    debugger;
    this.activetedTabIndex = tabindex;
  }
}
