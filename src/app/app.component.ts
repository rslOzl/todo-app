import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: string[] = [];
  newTask: string;
  isInputEmpty: boolean = true;
  editingIndex: number = -1;
  isLoading: boolean = false;

  isCheckboxChecked: boolean = false;


  constructor(){
    this.newTask ="";
  }

  ngOnInit() {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }

  addToList() {
    if (this.newTask === undefined || this.newTask === "") {
      return;
    } else {
      this.isLoading = true;
      setTimeout(() => {
        this.items.push(this.newTask);
        this.newTask = "";
        this.isInputEmpty = true;
        this.updateLocalStorage();
        this.isLoading = false;
      }, 350);
    }
  }

  deleteTask(index: any) {
    this.isLoading = true;
    setTimeout(() => {
      this.items.splice(index, 1);
      this.updateLocalStorage();
      this.isLoading = false;
    }, 350);
  }

  editTask(index: number) {
    this.editingIndex = index;
  }
  saveTask() {
    this.isLoading = true;
    this.editingIndex = -1;
    this.updateLocalStorage();
    this.isLoading= false;
  }


  updateLocalStorage() {
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  // onCheckboxChange(checked: boolean) {
  //   if (checked) {
  //    this.isCheckboxChecked= checked;
  //   }
  //   return;
  // }
}
