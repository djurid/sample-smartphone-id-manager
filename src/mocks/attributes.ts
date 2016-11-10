export let attributes = [ {
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
    "name": "Rabobank",
    "description": "Proof ownership of Rabobank bank account",
    "proofs": {
      "hasRabobankIBAN": {
          "description": "Has Rabobank IBAN?",
          "contractAddress": "",
          "contractABI": ""
      }
    }
}
];
