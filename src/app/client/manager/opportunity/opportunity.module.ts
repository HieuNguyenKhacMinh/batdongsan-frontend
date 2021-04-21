import { OpportunityListComponent } from './opportunity-list/opportunity-list.component';
import { OpportunityService } from './opportunity.service';
import { OpportunityComponent } from './opportunity.component';
import { OpportunityDetailComponent } from './opportunity-detail/opportunity-detail.component';
import { MaterialModule } from '../../../material-module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OpportunityRoutingModule } from './opportunity-routing.module';



@NgModule({
    imports: [  
        CommonModule,
        HttpClientModule,
        MaterialModule,
        OpportunityRoutingModule,
    ],
    exports: [],
    declarations: [OpportunityComponent,
        OpportunityListComponent,
        OpportunityDetailComponent],
    providers: [OpportunityService],
})
export class OpportunityModule { }