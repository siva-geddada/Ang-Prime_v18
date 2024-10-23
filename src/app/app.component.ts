import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { NgClass } from '@angular/common';
import Noir from './themes/app-theme';
import { AppConfigService } from './config/appconfigservice';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { DomHandler } from 'primeng/dom';
import { AppMenuComponent } from './layout/menu/app.menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgClass, TopbarComponent, AppMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Ang_v18';

  prime_config: PrimeNGConfig = inject(PrimeNGConfig);
  app_config = inject(AppConfigService);

  constructor() {
    this.prime_config.theme.set(Noir);
  }

  get isNewsActive(): boolean {
    return this.app_config.state.newsActive ?? false;
  }

  get containerClass() {
    return {
      'layout-news-active': this.isNewsActive,
      // 'p-ripple-disabled': this.isRippleDisabled,
    };
  }

  get isMenuActive(): boolean {
    return this.app_config.state.menuActive ?? false;
  }
  hideMenu() {
    this.app_config.hideMenu();
    DomHandler.unblockBodyScroll('blocked-scroll');
}
}
