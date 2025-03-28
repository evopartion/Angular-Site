import { Component, OnInit } from '@angular/core';
import { CategoryModel } from './models/category.model';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from './services/category.service';
import { NgForm } from '@angular/forms';
import { SharedModule } from '../../common/shared/shared.module';

@Component({
  selector: 'app-categories',
  imports: [SharedModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  categories: CategoryModel[] = [];

  constructor(
    private _toastr: ToastrService,
    private _category: CategoryService
  ){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getAll(){
    this._category.getAll(res=> this.categories = res);
  }

  add(form:NgForm){
    if(form.valid){
      this._category.add(form.controls["name"].value,res=>{
        this._toastr.success(res.message);
        let element = document.getElementById("addModalCloseBtn");
        element?.click();
        form.reset();
        this.getAll();
      });
    }
  }
}
