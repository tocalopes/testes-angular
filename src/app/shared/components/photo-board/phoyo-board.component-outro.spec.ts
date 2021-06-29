import { Component, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { PhotoBoardModule } from './photo-board.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoBoardComponent } from './photo-board.component';
import { Photo } from './interfaces/photo';
import { faOtter } from '@fortawesome/free-solid-svg-icons';
import { SimpleInnerSubscriber } from 'rxjs/internal/innerSubscribe';

function buildPhotoList(): Photo[]{
    const photos: Photo[] = [];
    for(let i = 0; i < 8; i++){
        photos.push({
            id: i+1,
            url: '',
            description: ''
        })
    }
    return photos
}

describe(PhotoBoardComponent.name, ()=> {
    let fixture: ComponentFixture<PhotoBoardTestComponent> = null;
    let component: PhotoBoardTestComponent;    

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PhotoBoardModule],
            declarations: [PhotoBoardTestComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(PhotoBoardTestComponent);
        component =  fixture.componentInstance;
    })

    it('Sould display rows and columsn when (@Input photos) has value', () => {
        component.photos = buildPhotoList();
        fixture.detectChanges();
        expect(component.board.rows.length)
            .withContext('Number of rows')
            .toBe(2);
        expect(component.board.rows[0].length)
            .withContext('Number of columns from the first row')
            .toBe(4)
        expect(component.board.rows[1].length)
        .withContext('Number of columns from the second row')
        .toBe(4)
    })

})


@Component({
    template: `
        <app-photo-board [photos]="photos">
        
        </app-photo-board>
    `
})
class PhotoBoardTestComponent{

    @ViewChild(PhotoBoardComponent) public board: PhotoBoardComponent;
    public photos: Photo[] = []
}