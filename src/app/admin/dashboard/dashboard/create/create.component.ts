import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashboardService } from '../dashboard.service';

@Component({
    selector: 'create-dashboard',
    templateUrl: 'create.component.html',
    styleUrls: ['create.component.scss']
})

export class CreateDashboardComponent implements OnInit {
    constructor(
        private service: DashboardService,
        public dialogRef: MatDialogRef<CreateDashboardComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
    dataSource: any;
    columns: any;
    properties: any;
    ngOnInit() {
        console.log(this.data);
        // get properites
        this.properties = this.data.properties;
        // filter những collum có visible != true
        this.columns = Object.keys(this.data.properties)
            .filter((column: any) => this.properties[column].visible !== true);
       



        this.dataSource = this.data.dataSource || {};
        // set to form control



    }
    create() {
        console.log(this.dataSource);
        this.service.update(this.dataSource).subscribe(res => {
            this.dialogRef.close();
        })
       
    }
}