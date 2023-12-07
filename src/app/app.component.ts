import { Component } from '@angular/core';
import { OthersService } from './services/others.service';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nujoomalkawkab';

  languages: any[] = [];
  selectedLanguage: string = "";
  constructor(private otherService: OthersService, private apiService: ApiService) {
    this.languages = this.otherService.languages;
    this.selectedLanguage = this.otherService.selectedLanguage;

    this.apiService.get("products/all").subscribe((response) => {
      console.log(response);

    })
  }

  changeLanguage(lang: any) {
    this.otherService.setLanguage(lang);
  }
}
