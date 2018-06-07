import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class EmployeeService {


  getData() {
    return data
  }

  addData(newData) {
    debugger;
    newData.id = data.length++;
    data.push(newData);
  }

  editData(updateData) {
    data.forEach(item => {
      if (item.id === updateData.id) {
        item = updateData;
      }
    })
  }
}

let data = [{
  "id": "1",
  "name": "Jhon",
  "phone": "9999999999",
  "address": {
    "city": "Pune",
    "address_line1": "ABC road",
    "address_line2": "XYZ building",
    "postal_code": "12455"
  }
}, {
  "id": 2,
  "name": "Jacob",
  "phone": "AZ99A99PQ9",
  "address": {
    "city": "Pune",
    "address_line1":
      "PQR road",
    "address_line2": "ABC building",
    "postal_code": "13455"
  }
}, {
  "id": 3,
  "name": "Ari",
  "phone": "145458522",
  "address": {
    "city": "Mumbai",
    "address_line1": "ABC road",
    "address_line2": "XYZ building",
    "postal_code": "12455"
  }
}];
