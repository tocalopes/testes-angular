import { PhotoFrameComponent } from './../photo-frame/photo-frame.component';
import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Photo } from './interfaces/photo';
import { faOtter } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-photo-board',
    templateUrl: './photo-board.component.html',
    styleUrls: ['./photo-board.component.scss']
})
export class PhotoBoardComponent implements OnChanges{

    @Input() public photos: Photo[];
    public rows: any[][] = [];

    ngOnChanges(changes: SimpleChanges): void {
        //photos é populado caso o input altere seu valor
        if(changes.photos){
            this.rows = this.groupColumns(changes.photos.currentValue);
        }
    }

    private groupColumns(photos: Photo[]): any[][]{
        const newRows = [];
        const step = 4;
        for(let index = 0; index < photos.length; index += step){
            newRows.push(photos.slice(index, index +4))
        }

        return newRows;
    }

}