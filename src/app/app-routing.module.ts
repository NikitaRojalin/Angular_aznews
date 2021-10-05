import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndmainComponent} from './indmain/indmain.component';
import {DetailsComponent} from './details/details.component';
import {CategoryComponent} from './category/category.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ElementComponent} from './element/element.component';
import {BlogComponent} from './blog/blog.component';
import {SingleblogComponent} from './singleblog/singleblog.component';
import {LatestnewsComponent} from './latestnews/latestnews.component';
const routes: Routes = [{ path: '', component: IndmainComponent },
{
    path:"home",
    component:IndmainComponent
},
{
    path:"detail/:id",
    component:DetailsComponent
},
{
    path:"category",
    component:CategoryComponent
},
{
    path:"about",
    component:AboutComponent
},
{
    path:"contact",
    component:ContactComponent
},
{
    path:"element",
    component:ElementComponent
},
{
    path:"blog",
    component:BlogComponent
},
{
    path:"singleblog",
    component:SingleblogComponent
},
{
    path:"latestnews",
    component:LatestnewsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
