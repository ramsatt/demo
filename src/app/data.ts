export const resData = [
  {
    "id": "6836c883aa38d714ec43252e",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "1 Gbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.1.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.1.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "1 Gbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "nextAvailableProduct": "PR_PIP_SVC",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_PIP_SVC"
          },
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": false,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextAvailableProduct": "PR_PIP_SVC",
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IDS"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec43252f",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "1 Gbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.1.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.1.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "1 Gbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "nextAvailableProduct": "PR_PIP_SVC",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": false,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextAvailableProduct": "PR_PIP_SVC",
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IDS"
          },
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_PIP_SVC"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec432530",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "1 Gbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "value": "Gold",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "1 Gbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_PIP_SVC"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": true,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IB"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec432531",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "1 Gbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "value": "Gold",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "1 Gbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "nextAvailableProduct": "PR_IB",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": false,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextAvailableProduct": "PR_IB",
            "nextThirdPartyTransport": true,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IDS"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": true,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IB"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec432532",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "value": "Gold",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "1 Gbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.1.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.1.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "1 Gbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": true,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IB"
          },
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_PIP_SVC"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec432533",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "value": "Gold",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "1 Gbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.1.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.1.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "1 Gbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "nextAvailableProduct": "PR_IB",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": true,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IB"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "1 Gbps",
            "productAvailable": false,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextAvailableProduct": "PR_IB",
            "nextThirdPartyTransport": true,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IDS"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec432534",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "500 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                "value": "500 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_PORT_SPEED",
                "name": "EF Realtime CAR",
                "value": "500 Mbps",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": true
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.1.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.1.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "500 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                    "value": "500 Mbps",
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "nextAvailableProduct": "PR_PIP_SVC",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_PIP_SVC"
          },
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": false,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextAvailableProduct": "PR_PIP_SVC",
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IDS"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec432535",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "500 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                    "value": "500 Mbps",
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.1.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.1.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "500 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                "value": "500 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_PORT_SPEED",
                "name": "EF Realtime CAR",
                "value": "500 Mbps",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": true
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "nextAvailableProduct": "PR_PIP_SVC",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": false,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextAvailableProduct": "PR_PIP_SVC",
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IDS"
          },
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_PIP_SVC"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec432536",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "500 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                "value": "500 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_PORT_SPEED",
                "name": "EF Realtime CAR",
                "value": "500 Mbps",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": true
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "value": "Gold",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "500 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_PIP_SVC"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": true,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IB"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec432537",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "500 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                    "value": "500 Mbps",
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "value": "Gold",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "500 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "nextAvailableProduct": "PR_IB",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": false,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextAvailableProduct": "PR_IB",
            "nextThirdPartyTransport": true,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IDS"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": true,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IB"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec432538",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "value": "Gold",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "500 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.1.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.1.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "500 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                "value": "500 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_PORT_SPEED",
                "name": "EF Realtime CAR",
                "value": "500 Mbps",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": true
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": true,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IB"
          },
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_PIP_SVC"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec432539",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "value": "Gold",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "500 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.1.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.1.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "500 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                    "value": "500 Mbps",
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "nextAvailableProduct": "PR_IB",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": true,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IB"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "500 Mbps",
            "productAvailable": false,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextAvailableProduct": "PR_IB",
            "nextThirdPartyTransport": true,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IDS"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec43253a",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "200 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                "value": "200 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_PORT_SPEED",
                "name": "EF Realtime CAR",
                "value": "200 Mbps",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": true
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.1.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.1.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "200 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                    "value": "200 Mbps",
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": true,
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "nextAvailableProduct": "PR_PIP_SVC",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": true,
            "status": "SUCCESS",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": true,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": true,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": true,
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_PIP_SVC"
          },
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": false,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextAvailableProduct": "PR_PIP_SVC",
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": true,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IDS"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec43253b",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "200 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                    "value": "200 Mbps",
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.1.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.1.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "200 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                "value": "200 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_PORT_SPEED",
                "name": "EF Realtime CAR",
                "value": "200 Mbps",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": true
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "nextAvailableProduct": "PR_PIP_SVC",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": true,
            "status": "SUCCESS",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": true,
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": true,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": true,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": false,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextAvailableProduct": "PR_PIP_SVC",
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": true,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IDS"
          },
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": true,
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_PIP_SVC"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec43253c",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "200 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                "value": "200 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_PORT_SPEED",
                "name": "EF Realtime CAR",
                "value": "200 Mbps",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": true
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "value": "Gold",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "200 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": true,
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": true,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": true,
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_PIP_SVC"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": true,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IB"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec43253d",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "200 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                    "value": "200 Mbps",
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "value": "Gold",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "200 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "nextAvailableProduct": "PR_IB",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": true,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": true,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": false,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextAvailableProduct": "PR_IB",
            "nextThirdPartyTransport": true,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IDS"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": true,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IB"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec43253e",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "value": "Gold",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "200 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.1.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.1.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "200 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                "value": "200 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_PORT_SPEED",
                "name": "EF Realtime CAR",
                "value": "200 Mbps",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": true
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": true,
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": true,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": true,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IB"
          },
          {
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": true,
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_PIP_SVC"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec43253f",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "value": "Gold",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "200 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.1.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.1.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "200 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                    "value": "200 Mbps",
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "nextAvailableProduct": "PR_IB",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": true,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": true,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": true,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IB"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "200 Mbps",
            "productAvailable": false,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextAvailableProduct": "PR_IB",
            "nextThirdPartyTransport": true,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IDS"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec432540",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "100 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                "value": "100 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_PORT_SPEED",
                "name": "EF Realtime CAR",
                "value": "100 Mbps",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": true
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.1.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.1.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "100 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                    "value": "100 Mbps",
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "previousBestSpeed": "50 Mbps",
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "previousBestSpeed": "50 Mbps",
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "nextAvailableProduct": "PR_PIP_SVC",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "previousBestSpeed": "50 Mbps",
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_PIP_SVC"
          },
          {
            "previousBestSpeed": "50 Mbps",
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": false,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextAvailableProduct": "PR_PIP_SVC",
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IDS"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec432541",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "100 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                    "value": "100 Mbps",
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.1.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.1.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "100 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                "value": "100 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_PORT_SPEED",
                "name": "EF Realtime CAR",
                "value": "100 Mbps",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": true
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "previousBestSpeed": "50 Mbps",
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "nextAvailableProduct": "PR_PIP_SVC",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "previousBestSpeed": "50 Mbps",
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "previousBestSpeed": "50 Mbps",
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": false,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextAvailableProduct": "PR_PIP_SVC",
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IDS"
          },
          {
            "previousBestSpeed": "50 Mbps",
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_PIP_SVC"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec432542",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "100 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                "value": "100 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_PORT_SPEED",
                "name": "EF Realtime CAR",
                "value": "100 Mbps",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": true
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "value": "Gold",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "100 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "previousBestSpeed": "50 Mbps",
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "previousBestSpeed": "50 Mbps",
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_PIP_SVC"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": true,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IB"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec432543",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "100 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                    "value": "100 Mbps",
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "value": "Gold",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "100 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "previousBestSpeed": "50 Mbps",
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "nextAvailableProduct": "PR_IB",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": false,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextAvailableProduct": "PR_IB",
            "nextThirdPartyTransport": true,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IDS"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": true,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IB"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec432544",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "value": "Gold",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "100 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.1.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.1.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "100 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                "value": "100 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_PORT_SPEED",
                "name": "EF Realtime CAR",
                "value": "100 Mbps",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": true
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "previousBestSpeed": "50 Mbps",
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": true,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IB"
          },
          {
            "previousBestSpeed": "50 Mbps",
            "nextBestSpeed": "200 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_PIP_SVC"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec432545",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "value": "Gold",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "100 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.1.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.1.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "100 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                    "value": "100 Mbps",
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          },
          {
            "previousBestSpeed": "50 Mbps",
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "nextAvailableProduct": "PR_IB",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": false,
            "message": "VRSA not available for requested speed in Argentina in ROM",
            "nextAvailableProduct": "None",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "WARN",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": true,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IB"
          },
          {
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "100 Mbps",
            "productAvailable": false,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextAvailableProduct": "PR_IB",
            "nextThirdPartyTransport": true,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": false,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IDS"
          }
        ]
      }
    },
    "fwasite": false
  },
  {
    "id": "6836c883aa38d714ec432546",
    "romDesignId": "6836c860aa38d714ec43252d",
    "createdOn": "28-05-2025 13:55:38",
    "updatedOn": "28-05-2025 13:55:38",
    "createdBy": "7229494842",
    "updatedBy": "7229494842",
    "siteType": "High Availability",
    "siteTypeId": "6618f1094d7ce158addffcd6",
    "quantity": 1.0,
    "location": {
      "country": "Argentina",
      "countryCode": "ARG",
      "countryIso3Code": "ARG",
      "valid": false
    },
    "circuits": [
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.0.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.0.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "50 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                "value": "50 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_PORT_SPEED",
                "name": "EF Realtime CAR",
                "value": "50 Mbps",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": true
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.0.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.0.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": true,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": true,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.0.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.0.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.0.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": true
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": true
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.0.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.0.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": true
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      },
      {
        "products": [
          {
            "productId": null,
            "productCode": "PR_ACC",
            "productGroupCode": "PR_ACC.ddffc59.1.0",
            "productName": "Access",
            "instanceId": "PR_ACC.ddffc59.1.0",
            "features": [
              {
                "featureName": "Local Access",
                "featureCode": "FET_LA",
                "specifications": [
                  {
                    "code": "SP_OPER_PERF_LEVEL",
                    "name": "Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_APP_PERF_LEVEL",
                    "name": "Application Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_OPER_PERF",
                    "name": "Requested Operational Performance",
                    "isMandatory": false
                  },
                  {
                    "code": "ESP_REQUESTED_APP_PERF",
                    "name": "Requested Application Performance",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_ACC_OWNER",
                "name": "Access Owner",
                "value": "Verizon Provided",
                "isMandatory": true
              },
              {
                "code": "SP_MMP",
                "name": "Access Design",
                "value": "STDLP",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_SPEED",
                "name": "Access Speed",
                "value": "50 Mbps",
                "isMandatory": true
              },
              {
                "code": "SP_CUST_HAND_OFF_TYPE",
                "name": "Customer Handoff",
                "value": "Ethernet",
                "isMandatory": true
              },
              {
                "code": "SP_UNI_SPEED",
                "name": "UNI Speed",
                "value": "100M",
                "isMandatory": true
              },
              {
                "code": "SP_LAN_INF",
                "name": "WAN Interface to the CE",
                "value": "100Base-TX",
                "isMandatory": true
              },
              {
                "code": "SP_CONN_TYPE",
                "name": "Connector Type",
                "value": "RJ45",
                "isMandatory": true
              },
              {
                "code": "SP_ACC_TPV_VNS",
                "name": "VNS Ready Access",
                "value": "No",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          },
          {
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
                    "value": "50 Mbps",
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
          },
          {
            "productId": null,
            "productCode": "PR_MWAN",
            "productGroupCode": "PR_MWAN.ddffc59.1.0",
            "productName": "Managed WAN",
            "instanceId": "PR_MWAN.ddffc59.1.0",
            "features": [
              {
                "featureName": "SD WAN",
                "featureCode": "FET_SD_WAN",
                "specifications": [
                  {
                    "code": "SP_MAN",
                    "name": "Vendor",
                    "value": "CISS",
                    "isMandatory": false,
                    "valueDesc": "Cisco"
                  },
                  {
                    "code": "SP_SDN_WAN_LIC_BAN",
                    "name": "License Bandwidth",
                    "value": "Essentials Tier 1",
                    "isMandatory": false,
                    "valueDesc": "Essentials Tier 1"
                  },
                  {
                    "code": "SP_MNS_OB",
                    "name": "OOB Type",
                    "value": "No OOB",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_PBY",
                    "name": "OOB Provided By",
                    "value": "Verizon",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_OOB_CON_TYPE",
                    "name": "OOB Config Type",
                    "value": "1 to 1",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_VNS_SOL_TYP",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "ESP_ASSOCIATED_ACCESS_ID",
                "name": "Associated Access / Transport",
                "value": "PR_ACC.ddffc59.1.0",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB",
                "name": "OOB Type",
                "value": "No OOB",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OB_REQ",
                "name": "Advanced OOB Configuration",
                "value": "No",
                "isMandatory": false
              },
              {
                "code": "SP_MNS_OOB_PBY",
                "name": "OOB Provided By",
                "value": "Verizon",
                "isMandatory": true
              },
              {
                "code": "SP_MNS_OOB_CON_TYPE",
                "name": "OOB Config Type",
                "value": "1 to 1",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_MLAN",
            "productGroupCode": "PR_MLAN.ddffc59.1.0",
            "productName": "Managed LAN",
            "instanceId": "PR_MLAN.ddffc59.1.0",
            "features": [
              {
                "featureCode": "FET_INSTANCE",
                "specifications": [
                  {
                    "code": "SP_INSTANCE",
                    "name": "Number of Instance",
                    "value": "1",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureCode": "FET_CLO_SWI",
                "specifications": [
                  {
                    "code": "SP_ADV_SEC_LIC_REQ",
                    "name": "License Required",
                    "value": "Enterprise License, 3 Years",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_DHCP_AVAIL",
                    "name": "Does network provide automatic network connectivity via DHCP and no proxy for the devices?",
                    "value": "Yes",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_NW_DEVICES_NO_OF_PORTS",
                    "name": "Number of Ports",
                    "value": "8",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_LAN_BW_CODE",
                    "name": "LAN Bandwidth",
                    "value": "1G",
                    "isMandatory": false
                  },
                  {
                    "code": "SP_MNS_REQUIRED_POE",
                    "name": "Required POE",
                    "value": "No",
                    "isMandatory": false
                  }
                ]
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_MNS_LS",
                "name": "Level of Service",
                "value": "Full",
                "isMandatory": true
              }
            ],
            "valid": false,
            "transport": false
          },
          {
            "productId": null,
            "productCode": "PR_CPE",
            "productGroupCode": "PR_CPE.ddffc59.1.0",
            "productName": "CPE",
            "instanceId": "PR_CPE.ddffc59.1.0",
            "features": [
              {
                "featureName": "Site Preparation Services/CPE",
                "featureCode": "FET_SISER",
                "specifications": [
                  {
                    "code": "SP_CPE_SERVICES",
                    "name": "Site Preparation Services/CPE",
                    "value": "CPE and CPE Services Only",
                    "isMandatory": false
                  }
                ]
              },
              {
                "featureName": "CPE Install",
                "featureCode": "FET_INSTALL",
                "specifications": []
              },
              {
                "featureName": "CPE Maintenance",
                "featureCode": "FET_MAINTAIN",
                "specifications": []
              },
              {
                "featureName": "CPE Budgetary",
                "featureCode": "FET_IS_BUDGETARY",
                "specifications": []
              }
            ],
            "index": null,
            "specifications": [
              {
                "code": "SP_BILL_METHOD",
                "name": "Billing Method",
                "value": "Monthly Recurring Plan (MRP)",
                "isMandatory": true
              },
              {
                "code": "SP_DISCOUNT_TIER",
                "name": "Pricing Tier",
                "value": "Lowest Price",
                "isMandatory": false
              },
              {
                "code": "SP_BILL_OPTION",
                "name": "Maintenance Billing Option",
                "value": "Monthly",
                "isMandatory": true
              },
              {
                "code": "SP_CPE_MANUF",
                "name": "Vendor",
                "value": "",
                "isMandatory": false
              }
            ],
            "valid": false,
            "transport": false
          }
        ],
        "valid": true
      }
    ],
    "vendor": "VRSA",
    "pricingStatus": "NotInitiated",
    "availabilityStatus": {
      "status": "WARN",
      "countryCode": "ARG",
      "available": [],
      "notAvailable": [],
      "recommendations": {
        "PR_ACC": [
          {
            "previousBestSpeed": "20 Mbps",
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "50 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 0.0
            },
            "isExactMatch": true,
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_ACC"
          },
          {
            "previousBestSpeed": "20 Mbps",
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "50 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "nextAvailableProduct": "PR_PIP_SVC",
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 0.0
            },
            "isExactMatch": true,
            "status": "SUCCESS",
            "autoFixRequired": true,
            "ProductCode": "PR_ACC"
          }
        ],
        "PR_CPE": [
          {
            "productAvailable": true,
            "priceAvailable": true,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 4.0
            },
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          },
          {
            "productAvailable": true,
            "priceAvailable": true,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 4.0
            },
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_CPE"
          }
        ],
        "transport": [
          {
            "previousBestSpeed": "20 Mbps",
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "50 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 0.0,
              "productIndex": 1.0
            },
            "isExactMatch": true,
            "status": "SUCCESS",
            "autoFixRequired": false,
            "ProductCode": "PR_PIP_SVC"
          },
          {
            "previousBestSpeed": "20 Mbps",
            "nextBestSpeed": "50 Mbps",
            "requestedSpeed": "50 Mbps",
            "productAvailable": true,
            "priceAvailable": false,
            "thirdPartyTransport": false,
            "nextAvailableProduct": "PR_PIP_SVC",
            "nextThirdPartyTransport": false,
            "index": {
              "circuitIndex": 1.0,
              "productIndex": 1.0
            },
            "isExactMatch": true,
            "status": "WARN",
            "autoFixRequired": true,
            "ProductCode": "PR_IDS"
          }
        ]
      }
    },
    "fwasite": false
  }
];
