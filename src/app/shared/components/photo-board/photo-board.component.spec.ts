import { SimpleChange, SimpleChanges } from '@angular/core';
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
    let fixture: ComponentFixture<PhotoBoardComponent> = null;
    let component: PhotoBoardComponent;    

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PhotoBoardModule],
        }).compileComponents();

        fixture = TestBed.createComponent(PhotoBoardComponent);
        component =  fixture.componentInstance;
    })

    it('Sould displat rows and columsn when (@Input photos) has value', () => {
        component.photos = buildPhotoList();
        fixture.detectChanges();
        const change: SimpleChanges = {
            photos: new SimpleChange([], component.photos, true)
        }
        component.ngOnChanges(change);
        expect(component.rows.length)
            .withContext('Number of rows')
            .toBe(2);
        expect(component.rows[0].length)
            .withContext('Number of columns from the first row')
            .toBe(4)
        expect(component.rows[1].length)
        .withContext('Number of columns from the second row')
        .toBe(4)
    })

})