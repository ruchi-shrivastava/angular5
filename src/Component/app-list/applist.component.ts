import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './applist.component.html'
})

export class AppListComponent {
    //private list = ['Buick', 'GMC', 'Mazda'];
    @Input('list') private itemlist = [];
    @Output() private delete = new EventEmitter();
    constructor() {
        setTimeout(() => {
            this.itemlist.push("Maserati")
        }, 3000);
    }

    //private removeCarItem(index, evt) {
        //console.log(index);
        //console.log(evt);
        //this.list.splice(index, 1);
    //}

    private remove(index){
        this.delete.emit(index);
    }
}