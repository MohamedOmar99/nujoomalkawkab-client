import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const langKey = "selectedLanguage";

@Injectable({
    providedIn: 'root'
})

export class OthersService {

    // initialize language data
    languages: any = [
        { label: "English", code: "en", dir: "ltr" },
        { label: "کوردی", code: "ku", dir: "rtl" },
        { label: "العربية", code: "ar", dir: "rtl" },
    ]

    selectedLabel: string = "English";
    selectedLanguage: string = "en";
    selectedDirection: string = "ltr";

    constructor(private translate: TranslateService) { }

    setInitialLanguage() {
        let language: any = localStorage.getItem(langKey) || this.translate.getBrowserLang();
        let selectLang = this.languages.filter((lang: any) => lang.code === language)[0];
        this.setLanguage(selectLang);
    }

    setLanguage(lang: any) {
        this.translate.use(lang.code);
        localStorage.setItem(langKey, lang.code);
        this.selectedLabel = lang.label;
        this.selectedLanguage = lang.code;
        this.selectedDirection = lang.dir;
        document.body.dir = lang.dir;
    }
}
