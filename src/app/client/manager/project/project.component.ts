import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ProjectService } from './project.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProjectComponent } from './delete/delete.component';
import { CreateProjectectComponent } from './list/create/create.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProjectComponent implements OnInit {

  constructor(private projectService: ProjectService, public dialog: MatDialog) {

  }
  references: any[];
  ngOnInit(): void {
    //get table properties
    this.projectService.getProperties().subscribe((res: any) => {
      // change column display
      this.properties = res.content;

      const arr = ["description", "home_number", "street", "product_type", "product_unit_id",
      "city_id", "wards_id", "district_id", "country_id"]
      this.columnsToDisplay = Object.keys(res.content).filter(c => !arr.includes(c)).
        sort((a: any, b: any) => (this.properties[a].order > this.properties[b].order) ? 1 : ((this.properties[b].order > this.properties[a].order) ? -1 : 0));
      this.columnsToDisplay.push('action');
    })

    this.getDatasource();
  }

  getDatasource() {
    // set datasource
    this.projectService.all().subscribe((res: any) => {
      this.dataSource = res;
    })
  }

  dataSource: any;
  columnsToDisplay: any;
  expandedElement: any | null | undefined;
  properties: any;
  openDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(CreateProjectectComponent, {
      width: '550px',
      data: { properties: this.properties, dataSource }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDatasource();
    });
  }
  confirmDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(DeleteProjectComponent, {
      width: '550px',
      data: { properties: this.properties, dataSource }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDatasource();
    });
  }

  search() { }
}


