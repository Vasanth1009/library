// Importing node.js file system,crypto module
const fs = require('fs');
const crypto = require('crypto');

class Repository {
  constructor(filename) {
    // The filename where datas are going to store
    if (!filename) {
      throw new Error('Filename is ' + 'required to create a datastore!');
    }
    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (err) {
      // If file not exist, It is created with empty array
      fs.writeFileSync(this.filename, '[]');
    }
  }

  async findOneBy(attrs) {
    // Read all file contents of the datastore
    const jsonRecords = await fs.promises.readFile(this.filename, {
      encoding: 'utf8',
    });

    // Parsing json records in javascript
    // object type records
    const records = JSON.parse(jsonRecords);

    // Iterating through each record
    for (let record of records) {
      let found = true;

      // Iterate through each given property for each record
      for (let key in attrs) {
        // If any given property not matches with record is discarded
        if (record[key] !== attrs[key]) {
          found = false;
        }
      }
      // If 'found' remains true after
      // iterating through each given
      // property that means record found
      if (found) {
        return record;
      }
    }

    // If record not found
    return {};
  }
}

// The 'datastore.json' file created at runtime if it not exist here we try to fetch information from database 
// using some properties that means database(datastore.json) already exist and there are also records in it.
module.exports = new Repository('datastore.json');
