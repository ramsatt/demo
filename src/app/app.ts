import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {resData} from './data';

export enum STATUS {
  SUCCESS = 'SUCCESS', WARN = 'WARN', ERROR = 'ERROR', UNKNOWN = 'UNKNOWN'
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  dataArray: any[] = resData;
  autoFixProductSuggestion: any[] = [];
  autoFixSpeedSuggestion: any[] = [];

  constructor() {
    this.constructAutoFixDataList();
  }

  constructAutoFixDataList() {
    // Filter sites with WARN status
    const warnSites = this.dataArray.filter(site => site.availabilityStatus.status === STATUS.WARN);

    // Process product list suggestions
    warnSites.forEach(site => {
      const transport = site.availabilityStatus.recommendations.transport;
      if (transport?.length) {
        const hasSuggestion = transport.some((t: any) => !t.productAvailable && t.autoFixRequired);
        const notAdded = !this.autoFixProductSuggestion.find(s => s.site === site);
        if (hasSuggestion && notAdded) {
          this.autoFixProductSuggestion.push(site);
        }
      }
    });

    // Process speed list suggestions
    warnSites.forEach(site => {
      const prAcc = site.availabilityStatus.recommendations.PR_ACC;
      if (prAcc?.length) {
        const hasSuggestion = prAcc.some((p: any) => p.productAvailable && p.autoFixRequired);
        const notAdded = this.autoFixSpeedSuggestion.indexOf(site) === -1 && this.autoFixProductSuggestion.indexOf(site) === -1;
        if (hasSuggestion && notAdded) {
          this.autoFixSpeedSuggestion.push(site);
        }
      }
    });

    console.log('AutoFix Product Suggestions:', this.autoFixProductSuggestion);
    console.log('AutoFix Speed Suggestions:', this.autoFixSpeedSuggestion);
  }

}
