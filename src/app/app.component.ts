import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import Noir from './themes/app-theme';
import { AppConfigService } from './config/appconfigservice';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, InputTextModule, FormsModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Ang_v18';
  value: any;

  config: PrimeNGConfig = inject(PrimeNGConfig);
  app_config: AppConfigService = inject(AppConfigService);

  constructor() {
    this.config.theme.set(Noir);
  }
  ngOnInit() {
    this.config.ripple.set(true);
  }

  toggleDarkMode() {
    this.app_config.appState.update((state) => {
        const newState = { ...state, darkTheme: !state.darkTheme };
        console.log('Dark mode state:', newState.darkTheme);
        return newState;
    });
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
