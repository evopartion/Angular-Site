import { Component, OnInit } from '@angular/core';
import { CategoryModel } from './models/category.model';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from './services/category.service';
import { NgForm } from '@angular/forms';
import { SharedModule } from '../../common/shared/shared.module';
import { SwalService } from '../../common/services/swal.service';
import { CategoryPipe } from './pipes/category.pipe';

@Component({
  selector: 'app-categories',
  imports: [SharedModule,CategoryPipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  categories: CategoryModel[] = [];
  updateCategory: CategoryModel = new CategoryModel();
  search:string="";

  constructor(
    private _toastr: ToastrService,
    private _category: CategoryService,
    private _swal: SwalService
  ){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getAll(){
    this._category.getAll(res=> this.categories = res);
  }

  get(model: CategoryModel){
    this.updateCategory = {...model};
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

  update(form:NgForm){
    if(form.valid){
      this._category.update(this.updateCategory,res=>{
        this._toastr.warning(res.message);
        this.getAll();
        let element = document.getElementById("updateModalCloseBtn");
        element?.click();                
      });
    }
  }

  removeById(model: CategoryModel){
    this._swal.callSwal(`${model.name} kategorisini silmek istiyor musunuz`,"","Sil",()=>{
      this._category.removeById(model._id,res=>{
        this._toastr.info(res.message);
        this.getAll();
      })
    });
  }
}
