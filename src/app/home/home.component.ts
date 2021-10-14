import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userForm: FormGroup;
  listData: any;
  deletedData: any;
  submitted = false;
  first = false;
  second = false;
  item;

  constructor(private fb: FormBuilder) {
    this.listData = [];
    this.deletedData = [];
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      ContactNo: ['', [Validators.required, Validators.pattern('[- +()0-9]+')]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')]],
      dob: ['', Validators.required],
      myFile: ['', Validators.required]
    })
  }

  addItem() {
    this.first = true;
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }
  reset() {
    this.userForm.reset();
  }

  displayStyle = "none";

  openPopup(item) {
    this.item = item;
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  removeItems() {
    this.submitted = true;
    this.second = true;
    this.listData.forEach((curr_value: any, index: any) => {
      if (curr_value == this.item) {
        this.deletedData.push(this.listData[index]);
        this.listData.splice(index, 1);
      }
    }
    )
    this.listData.length > 0 ? this.first = true : this.first = false;
    // if (this.listData.length > 0) {
    //   this.second = false;
    // }
    this.closePopup();
  }


  ngOnInit(): void {
  }

}
