import { PhotoFrameComponent } from './../photo-frame/photo-frame.component';
import { Component, Input } from "@angular/core";
import { Photo } from './interfaces/photo';

@Component({
    selector: 'app-photo-board',
    templateUrl: './photo-board.component.html',
    styleUrls: ['./photo-board.component.scss']
})
export class PhotoBoardComponent{

    @Input() public photos: Photo[];
    public rows: any[][] = [];

    

}