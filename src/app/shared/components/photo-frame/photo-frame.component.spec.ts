import { PhotoFrameModule } from './photo-frame.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { PhotoFrameComponent } from './photo-frame.component';

describe(PhotoFrameComponent.name, () => {
    let fixture : ComponentFixture<PhotoFrameComponent> = null;
    let component: PhotoFrameComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PhotoFrameModule]
        }).compileComponents();

        fixture = TestBed.createComponent(PhotoFrameComponent)
        component = fixture.componentInstance
    })

    it('Should create component', () => {
        expect(component).toBeTruthy();
    })

    it(`#${PhotoFrameComponent.prototype.like.name}
        should trigger (@Output liked) once when called
        multiple times within debounce time`, () => {
            fixture.detectChanges();
            let times = 0;
            component.liked.subscribe(() => {
                times ++
            })
            component.like();
            component.like();
            expect(times).toBe(1)
    });
})