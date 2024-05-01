import { Routes } from '@angular/router';
import { FashionComponent } from './Fashion/fashion.component';
import { ClothesComponent } from './clothes/clothes.component';
import { HairstyleComponent } from './hairstyle/hairstyle.component';

export const routes: Routes = [
    {path:'fashion',component:FashionComponent},
    {path:'clothes',component:ClothesComponent},
    {path:'hairstyles',component:HairstyleComponent}
];
