export let providers = [{
    "name": "Twitter",
    "description": "Proof of Twitter account",
    "proofs": {
      "proofOfTwitter": {
          "description": "Proof of Twitter account",
          "contractAddress": "",
          "contractABI": ""
      }
    }
}, {
    "name": "GitHub",
    "description": "Proof of GitHub account",
    "proofs": {
      "githubAccount": {
          "description": "has GitHub account",
          "contractAddress": "0x6395F09b3ED5E1FD1E482773a6784bC0a79529ed",
          "contractABI": [{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getByAddress","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getDateValidated","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"newAccountToAddress","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"username","type":"bytes"}],"name":"postProof","outputs":[{"name":"balance","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}]
      }
    }
}, {
    "name": "SURFconext",
    "description": "Proof of being a student",
    "proofs": {
      "isStudent": {
          "description": "Is student?",
          "contractAddress": "",
          "contractABI": ""
      }
    }
}, {
    "name": "eHerkenning",
    "description": "Proof of identity attributes",
    "proofs": {
      "olderThan18": {
          "description": "Older than 18?",
          "contractAddress": "",
          "contractABI": ""
      }
    }
}, {
    "name": "Rabobank",
    "description": "Proof ownership of Rabobank bank account",
    "proofs": {
      "hasRabobankIBAN": {
          "description": "Has Rabobank IBAN?",
          "contractAddress": "",
          "contractABI": ""
      }
    }
}, {
    "name": "Museumkaart",
    "description": "Proof of ownership of museumkaart",
    "proofs": {
      "hasMuseumkaart": {
          "description": "Owns museumkaart?",
          "contractAddress": "",
          "contractABI": ""
      }
    }
}, {
    "name": "CJP",
    "description": "Proof of ownership of CJP-pas",
    "proofs": {
      "hasCJPpas": {
          "description": "Owns CJP-pas?",
          "contractAddress": "",
          "contractABI": ""
      }
    }
}, {
    "name": "ProofOfPhone",
    "description": "Proof of phone",
    "proofs": {
      "hasPhoneNumber": {
          "description": "has phonenumber",
          "contractAddress": "0xf7e9626dbaeb1a6c8b3d02379eb54b81f16e785f",
          "contractABI": [{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getPaymentByAddress","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"},{"name":"phone","type":"uint256"}],"name":"newPhoneToAddr","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getPaymentDataByAddress","outputs":[{"name":"","type":"bytes"}],"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getPhoneByAddress","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"sendEtherToOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"phones","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"hasPhone","outputs":[{"name":"","type":"bool"}],"type":"function"},{"inputs":[],"type":"constructor"}]
      }
    }
}, {
    "name": "ConsenSys",
    "description": "Proof of physical address",
    "proofs": {
      "hasPhysicalAddress": {
          "description": "has physical address",
          "contractAddress": "",
          "contractABI": ""
      }
    }
}, {
  "name": "TrustRegistry",
  "description": "Trust Registry Demo",
  "proofs": {
    "TrustRegistry": {
      "description": "Trust Registry Demo",
      "contractAddress": "0xd2152c121e8fbf2ac2b746567474626b36380ed3",
      "contractABI": [{"constant":false,"inputs":[{"name":"_pubkey","type":"address"},{"name":"_orgName","type":"bytes32"},{"name":"_contactInfo","type":"bytes32"}],"name":"newEntry","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"data","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"entries","outputs":[{"name":"pubkey","type":"address"},{"name":"orgName","type":"bytes32"},{"name":"contactInfo","type":"bytes32"},{"name":"validUntil","type":"uint256"},{"name":"isRevoked","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getEntry","outputs":[{"name":"pubkey","type":"address"},{"name":"orgName","type":"string"},{"name":"contactInfo","type":"string"},{"name":"validUntil","type":"uint256"},{"name":"isRevoked","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"getLength","outputs":[{"name":"e","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}]
    }
  }
}
];
