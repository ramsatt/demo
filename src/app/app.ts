import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {resData} from './data';
import * as _ from 'lodash'
import {PR_IB, PR_IDS, PR_PIP_SVC} from './products';
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
    this.autoFixProduct(this.autoFixProductSuggestion);
    this.autoFixSpeed(this.autoFixSpeedSuggestion);
  }

  autoFixProduct(sites: any[]) {
    console.log('AutoFixing Products for Sites:', sites);
    sites.forEach((site: any) => {
      const transport = site.availabilityStatus.recommendations.transport;
      if (transport?.length) {
        transport.forEach((t: any) => {
          if (!t.productAvailable && t.autoFixRequired) {
            console.log(`AutoFixing Product for Site: ${site.id}, Product Code: ${t.ProductCode}, Next Available Product: ${t.nextAvailableProduct}`);
            let circuitIndex = parseInt(t.index.circuitIndex, 10);
            let productIndex = parseInt(t.index.productIndex, 10);
            let circuits = _.cloneDeep(site.circuits);
            console.log('Circuits before update:', circuits);
            let nextAvailableProduct: any = {};
            if(t.nextAvailableProduct === 'PR_PIP_SVC') {
              nextAvailableProduct = _.cloneDeep(PR_PIP_SVC);
              // copy speed info
              nextAvailableProduct.specifications.forEach((spec: any) => {
                if (spec.code === 'SP_PORT_SPEED') {
                  let speed = site.availabilityStatus.recommendations.PR_ACC[circuitIndex].requestedSpeed;
                  console.log('Speed:', speed);
                  spec.value = speed;
                }
                console.log('nextAvailableProduct', nextAvailableProduct);
              });
              circuits[circuitIndex].products[productIndex] = nextAvailableProduct;

            } else if (t.nextAvailableProduct === 'PR_IDS') {
              // Handle other product logic here if needed
              nextAvailableProduct = _.cloneDeep(PR_IDS);
              nextAvailableProduct.features.forEach((feature: any) => {
                if(feature.featureCode === 'FET_ID_PORT') {
                  feature.specifications.forEach((spec: any) => {
                    if (spec.code === 'SP_IDS_PRT_SPEED') {
                      let speed = site.availabilityStatus.recommendations.PR_ACC[circuitIndex].requestedSpeed;
                      console.log('Speed:', speed);
                      spec.value = speed;
                    }
                  });
                }
              });
              console.log('nextAvailableProduct', nextAvailableProduct);
              circuits[circuitIndex].products[productIndex] = nextAvailableProduct;
            } else if (t.nextAvailableProduct === 'PR_IB') {
              nextAvailableProduct = _.cloneDeep(PR_IB);
              circuits[circuitIndex].products[productIndex] = nextAvailableProduct;
            }
            console.log('Updated Circuits:', circuits);
            site.circuits = circuits;
            console.log('Updated Site', site);
            // Here you would implement the logic to auto-fix the product
            // For example, updating the product availability status or notifying the user
          }
        });
      }
    });
  }

  autoFixSpeed(sites: any[]) {
    console.log('AutoFixing Speed for Sites:', sites);
    sites.forEach((site: any) => {
      let circuits = _.cloneDeep(site.circuits);
      const transport = site.availabilityStatus.recommendations.transport;
      const prAcc = site.availabilityStatus.recommendations.PR_ACC;
      if(transport?.length) {
        transport.forEach((t: any) => {
          if (t.productAvailable && t.autoFixRequired) {
            console.log(`AutoFixing Speed for Site: ${site.id}, Product Code: ${t.ProductCode}, Next Available Speed: ${t.nextAvailableSpeed}`);
            let circuitIndex = parseInt(t.index.circuitIndex, 10);
            let productIndex = parseInt(t.index.productIndex, 10);
            console.log('Circuits before update:', circuits);
            let availableSpeed = prAcc[circuitIndex].previousBestSpeed ? prAcc[circuitIndex].previousBestSpeed : prAcc[circuitIndex].nextBestSpeed;
            console.log('Available Speed:', availableSpeed);
            let accessProductIndex = prAcc[circuitIndex].index.productIndex;
            console.log('Access Product Index:', accessProductIndex);
            circuits[circuitIndex].products[accessProductIndex].specifications.forEach((spec: any) => {
              if (spec.code === 'SP_ACC_SPEED') {
                spec.value = availableSpeed;
              }
            });
            console.log('Updated Circuits:', circuits);
            if(t.ProductCode === 'PR_PIP_SVC') {
              circuits[circuitIndex].products[productIndex].specifications.forEach((spec: any) => {
                if (spec.code === 'SP_PORT_SPEED') {
                  let speed = site.availabilityStatus.recommendations.PR_ACC[circuitIndex].requestedSpeed;
                  console.log('Speed:', speed);
                  spec.value = speed;
                }
              });
            } else if(t.ProductCode === 'PR_IDS') {
              circuits[circuitIndex].products[productIndex].features.forEach((feature: any) => {
                if(feature.featureCode === 'FET_ID_PORT') {
                  feature.specifications.forEach((spec: any) => {
                    if (spec.code === 'SP_IDS_PRT_SPEED') {
                      let speed = site.availabilityStatus.recommendations.PR_ACC[circuitIndex].requestedSpeed;
                      console.log('Speed:', speed);
                      spec.value = speed;
                    }
                  });
                }
              });
            }
          }
        });
      }
      site.circuits = circuits;
      console.log('Updated Site', site);
    });
  }

}
