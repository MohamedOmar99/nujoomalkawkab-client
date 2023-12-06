import { Component } from '@angular/core';
import { OthersService } from './services/others.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nujoomalkawkab';

  languages: any[] = [];
  selectedLanguage: string = "";
  constructor(private otherService: OthersService) {
    this.languages = this.otherService.languages;
    this.selectedLanguage = this.otherService.selectedLanguage;
  }

  changeLanguage(lang: any) {
    this.otherService.setLanguage(lang);
  }
}
