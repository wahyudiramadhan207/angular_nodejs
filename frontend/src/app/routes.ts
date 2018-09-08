import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';

export const appRoutes: Routes = [
  { path: 'create', 
    component: CreateComponent 
  },
  { path: 'read',
    component: ReadComponent
  },
  { path: 'update/:id',
    component: UpdateComponent
  }
];