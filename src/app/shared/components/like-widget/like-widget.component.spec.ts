import { LikeWidgetModule } from './like-widget.module';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdSevice } from './../../services/unique-id/unique-id.service';
import { LikeWidgetComponent } from "./like-widget.component";

describe(LikeWidgetComponent.name, () => {
    let fixture: ComponentFixture<LikeWidgetComponent> = null;
    let component: LikeWidgetComponent = null
    // fixture wrapper contem metodos necessários pra testar um component
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations : [LikeWidgetComponent],
            providers : [UniqueIdSevice],
            // provide: ComponentFixtureAutoDetect, useValue : true
                // subtitui os fixture.detectChanges()
            imports: [FontAwesomeModule]
            // imports: [LikeWidgetModule] também funciona
        }).compileComponents();
        // método assincrono, pois o component é carregado de forma assincrona
        fixture = TestBed.createComponent(LikeWidgetComponent)
        component = fixture.componentInstance;
    })

    it('Should create component', () => {
        
        expect(component).toBeTruthy();
    })

    it('Should auto-generate ID during ngOnInt() when (@Input id) is not assigned', () =>{
        
        fixture.detectChanges()
        // os teste não detectam mudanças por padrão, por isso a linha acima é necessária
        expect(component.id).toBeTruthy()
    })

    it('Should NOT auto generate ID during ngOnInit() when (@Input id) is assigned', () =>{
        
        const someId = 'someId'
        component.id = someId
        fixture.detectChanges()
        // os teste não detectam mudanças por padrão, por isso a linha acima é necessária
        expect(component.id).toBe(someId)
    })

    it(`${LikeWidgetComponent.prototype.like.name}
        shoul trigger (@Output liked) when called`,        
        () => {
            spyOn(component.liked,'emit')
            fixture.detectChanges()
            component.like()
            expect(component.liked.emit).toHaveBeenCalled()
        }
        // done => {
        //     fixture.detectChanges()
        //     component.liked.subscribe(() => {
        //         expect(true).toBeTrue()
        //         done()
        //     })  
        //     component.like()  
        // }
    )
})
