import { CommonModule } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AppConfigService } from '../../config/appconfigservice';
import { DomHandler } from 'primeng/dom';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="layout-topbar">
    <div class="layout-topbar-inner">
      <div class="layout-topbar-logo-container">
        <h2>Ang_v18</h2>
      </div>

      <ul class="topbar-items">
        <li>
          <button type="button" class="topbar-item" (click)="toggleDarkMode()">
            <i
              class="pi"
              [ngClass]="{ 'pi-moon': isDarkMode, 'pi-sun': !isDarkMode }"
            ></i>
          </button>
        </li>
        <li class="relative">
          <button
            type="button"
            class="topbar-item config-item"
            pStyleClass="@next"
            enterFromClass="hidden"
            enterActiveClass="animate-scalein"
            leaveToClass="hidden"
            leaveActiveClass="animate-fadeout"
          >
            <i class="pi pi-palette"></i>
          </button>
          <!-- <app-configurator/> -->
        </li>
        <li *ngIf="showMenuButton" class="menu-button">
                <button type="button"
                    class="topbar-item menu-button"
                    (click)="toggleMenu()" aria-haspopup aria-label="Menu">
                    <i class="pi pi-bars"></i>
                </button>
            </li>
      </ul>
    </div>
  </div>`,
  styleUrl: './topbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {
  title = 'Ang_v18';
  @Input({ transform: booleanAttribute }) showMenuButton = true;
  @Input({ transform: booleanAttribute }) showConfigurator = true;
  
  config: PrimeNGConfig = inject(PrimeNGConfig);
  app_config: AppConfigService = inject(AppConfigService);

  constructor() {}
  ngOnInit() {
    this.config.ripple.set(true);
  }

  toggleDarkMode() {
    this.app_config.appState.update((state: any) => {
      const newState = { ...state, darkTheme: !state.darkTheme };
      console.log('Dark mode state:', newState.darkTheme);
      return newState;
    });
  }

  toggleMenu() {
    if (this.app_config.state.menuActive) {
        this.app_config.hideMenu();
        DomHandler.unblockBodyScroll('blocked-scroll');
    } else {
        this.app_config.showMenu();
        DomHandler.blockBodyScroll('blocked-scroll');
    }
}
  get landingClass() {
    return {
      'layout-dark': this.isDarkMode,
      'layout-light': !this.isDarkMode,
      'layout-news-active': this.isNewsActive,
    };
  }

  get isDarkMode() {
    return this.app_config.appState().darkTheme;
  }

  get isNewsActive() {
    return this.app_config.state.newsActive;
  }
}
