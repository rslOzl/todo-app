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
      this.isLoading = true; // Yüklenme durumunu başlat
      setTimeout(() => { // Simüle edilen bir asenkron işlem
        this.items.push(this.newTask);
        this.newTask = "";
        this.isInputEmpty = true;
        this.updateLocalStorage();
        this.isLoading = false; // Yüklenme durumunu sonlandır
      }, 350); // İsteğe bağlı olarak 1 saniye gecikme eklendi
    }
  }

  deleteTask(index: any) {
    this.isLoading = true; // Yüklenme durumunu başlat
    setTimeout(() => { // Simüle edilen bir asenkron işlem
      this.items.splice(index, 1);
      this.updateLocalStorage();
      this.isLoading = false; // Yüklenme durumunu sonlandır
    }, 350); // İsteğe bağlı olarak 1 saniye gecikme eklendi
  }

  editTask(index: number) {
    this.editingIndex = index;
  }
  saveTask() {
    this.isLoading = true; // Yüklenme durumunu başlat
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
