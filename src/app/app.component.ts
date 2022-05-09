import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListaMercado';
  tabs = ['frutas', 'limpeza'];
  selectedTab = this.tabs[0];
  cartShopping = faCartShopping;

  openTab (tab: string) {
    this.selectedTab = tab;
  }
}

