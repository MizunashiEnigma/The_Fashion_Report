import { Routes } from '@angular/router';
import { FashionserviceService } from '../service/fashionservice.service';
import { FashionComponent } from './Fashion/fashion.component';
import { ClothesComponent } from './clothes/clothes.component';

export const routes: Routes = [
    {path:'fashion',component:FashionComponent},
    {path:'clothes',component:ClothesComponent}
];
