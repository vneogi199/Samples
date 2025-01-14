import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RelationDetailComponent } from './relation-detail/relation-detail.component';
import { RelationListRoutingModule } from './relation-list-routing.module';
import { RelationListComponent } from './relation-list.component';
import { RelationComponent } from './relation/relation.component';
import { OrderRowComponent } from './relation-detail/order-row/order-row.component';



@NgModule({
  declarations: [
    RelationListComponent,
    RelationComponent,
    RelationDetailComponent,
    OrderRowComponent
  ],
  imports: [
    CommonModule,
    RelationListRoutingModule
  ]
})
export class RelationListModule { }
