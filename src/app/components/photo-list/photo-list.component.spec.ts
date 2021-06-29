import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { PhotoListModule } from './photo-list.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoListComponent } from './photo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { buildPhotoList } from 'src/app/shared/components/photo-board/test/build-photo-list';
import { of } from 'rxjs';

describe(PhotoListComponent.name, () => {

    let fixture: ComponentFixture<PhotoListComponent>
    let component: PhotoListComponent
    let service: PhotoBoardService

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                PhotoListModule,
                HttpClientModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(PhotoListComponent);
        component = fixture.componentInstance;
        service = TestBed.inject(PhotoBoardService);
    })

    it('Should create component', () => {
        expect(component).toBeTruthy();
    })

    it(`(D) Should display board when data arrives`, () => {
        fixture.detectChanges();
        const photos = buildPhotoList();

        spyOn(service,'getPhotos')
            .and.returnValue(of(photos));
    })
});