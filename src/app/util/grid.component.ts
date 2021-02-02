import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector: "grid-ui",
    templateUrl: "./grid.view.html"
})
export class GridTableComponent {

    columns: Array<Object> = new Array<Object>();
    data: Array<Object> = new Array<Object>();

    @Input("grid-columns")
    set setColumns(_columns: Array<Object>) {
        this.columns = _columns;
    }

    @Input("grid-data")
    set setData(_data: Array<Object>) {
        this.data = _data;
    }

    @Output("select-data")
    eventEmitter: EventEmitter<Object> = new EventEmitter<Object>();

    selectData(_data: Object) {
        this.eventEmitter.emit(_data);
    }

    @Output("delete-data")
    eventEmitter2: EventEmitter<Object> = new EventEmitter<Object>();

    deleteData(_data: Object) {
        this.eventEmitter2.emit(_data);
    }

}