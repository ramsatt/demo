export const PR_PIP_SVC = {
  "productId": null,
  "productCode": "PR_PIP_SVC",
  "productGroupCode": "PR_PIP_SVC.96c9306.0.0",
  "productName": "Private IP (PIP)",
  "instanceId": "PR_PIP_SVC.96c9306.0.0",
  "features": [
    {
      "featureName": "PIP Port",
      "featureCode": "FET_PIP_PORT",
      "specifications": [
        {
          "code": "SP_DBW",
          "name": "PIP Dynamic Network Manager",
          "value": "Yes",
          "isMandatory": true
        },
        {
          "code": "SP_IP_ADD_PRO",
          "name": "IP Version",
          "value": "IPV4",
          "isMandatory": false
        }
      ]
    },
    {
      "featureName": "Class of Service",
      "featureCode": "FET_PIP_COS",
      "specifications": [
        {
          "code": "SP_PIP_CLASS_OF_SERVICE",
          "name": "Class of Service",
          "value": "Standard",
          "isMandatory": true
        }
      ]
    }
  ],
  "index": null,
  "specifications": [
    {
      "code": "SP_PORT_SPEED",
      "name": "Port Speed",
      "value": "1 Gbps",
      "isMandatory": true
    },
    {
      "code": "SP_PORT_SPEED",
      "name": "EF Realtime CAR",
      "value": "1 Gbps",
      "isMandatory": true
    }
  ],
  "valid": false,
  "transport": true
};

export const PR_IDS = {
  "productId": null,
  "productCode": "PR_IDS",
  "productGroupCode": "PR_IDS.96c9306.0.0",
  "productName": "Internet Dedicated Services",
  "instanceId": "PR_IDS.96c9306.0.0",
  "features": [
    {
      "featureName": "Internet Dedicated Port",
      "featureCode": "FET_ID_PORT",
      "specifications": [
        {
          "code": "SP_IDS_PRT_SPEED",
          "name": "Port Speed",
          "value": "1 Gbps",
          "isMandatory": true
        },
        {
          "code": "SP_IDS_PRICEPLAN",
          "name": "Pricing Plan",
          "value": "Tiered",
          "isMandatory": true,
          "valueDesc": "Tiered"
        },
        {
          "code": "SP_IDS_PRTCOL",
          "name": "IP Protocol",
          "value": "IPv4 Only",
          "isMandatory": false
        },
        {
          "code": ""
        },
        {
          "code": "SP_VNS_SOL_TYP",
          "isMandatory": false
        }
      ]
    },
    {
      "featureName": "IDS Extension Feature",
      "featureCode": "EXT_FET_IDS",
      "specifications": [
        {
          "code": "ESP_IDS_IP_ADR_ASGN_CONN",
          "name": "/29 IP addresses assignment for the connection",
          "value": "No",
          "isMandatory": false
        },
        {
          "code": "ESP_IDS_ADDR_SPACE_PE_CE",
          "name": "Address Space for PE to CE Edge Interface",
          "value": "/30",
          "isMandatory": false
        },
        {
          "code": ""
        },
        {
          "code": "SP_VNS_SOL_TYP",
          "isMandatory": false
        }
      ]
    }
  ],
  "index": null,
  "specifications": [],
  "valid": false,
  "transport": true
};

export const PR_IB = {
  "productId": null,
  "productCode": "PR_IB",
  "productGroupCode": "PR_IB.96c9306.1.0",
  "productName": "Broadband",
  "instanceId": "PR_IB.96c9306.1.0",
  "features": [
    {
      "featureCode": "FET_IBB_CPE",
      "specifications": [
        {
          "code": "SP_CPE_SOURCE",
          "name": "CPE Source",
          "value": "Vendor providing CPE",
          "isMandatory": true
        }
      ]
    },
    {
      "featureName": "Broadband",
      "featureCode": "FET_IBB",
      "specifications": [
        {
          "code": "SP_IB_STA_OR_SO_WI",
          "name": "Standalone or Sold with",
          "value": "Standalone",
          "isMandatory": true
        }
      ]
    }
  ],
  "index": null,
  "specifications": [],
  "valid": false,
  "transport": true
};
