import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationTypeService } from '../notification-type-type.service';

@Component({
    selector: 'delete-hotel',
    templateUrl: 'delete.component.html',
    styleUrls: ['delete.component.scss']
})

export class DeleteNotificationTypeComponent implements OnInit {
    constructor(
        private service: NotificationTypeService,
        public dialogRef: MatDialogRef<DeleteNotificationTypeComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() { }

    delete() {
        this.service.delete(this.data.dataSource).subscribe(res => {
            this.dialogRef.close();
        })
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}