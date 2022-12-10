import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  @Input() sidenav!: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSidenav(){
    this.sidenavToggle.emit();
  }

}
