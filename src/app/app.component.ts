import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'sidebar-test';
  opened: boolean | undefined;
  events: string[] = [];

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) {
  }

  ngAfterViewInit() {
/*    this.observer.observe(['max-width: 800px']).subscribe((res) => {
        if (res.matches) {
          console.log(res.matches);
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      }
    )*/
  }
}
