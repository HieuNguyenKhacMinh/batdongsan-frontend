import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from './menu.service';

@Component({
    selector: 'app-news-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
    userId: string
    constructor(private menuService: MenuService, private router: Router) {
        this.userId = localStorage.getItem("user_id");
    }
    menus: any;
    ngOnInit() {
        this.menuService.get().subscribe(res => {
            this.menus = res;
            console.log(this.menus);
        })
    }

    signOut() {
        localStorage.clear();
        this.router.navigate(['./client']);
    }
}