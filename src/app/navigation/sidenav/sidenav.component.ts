import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() closeEvent = new EventEmitter<string>();


  panelOpenState = true;
  rotate: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  onCloseSideNav() {
    this.closeEvent.emit()
  }



  onOpen() {
    this.rotate = !this.rotate;
    if (this.rotate) {
    } else {
    }
  }

}
