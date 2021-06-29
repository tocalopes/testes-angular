import { ActionDirectiveModule } from './action.module';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActionDirective } from "./action.directive";
import { Component } from '@angular/core';
import { faTintSlash } from '@fortawesome/free-solid-svg-icons';
import { By } from '@angular/platform-browser';

describe(ActionDirective.name, () => {

    let fixture: ComponentFixture<ActionDirectiveTestComponent>
    let component: ActionDirectiveTestComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ActionDirectiveTestComponent],
            imports:[ActionDirectiveModule]
        }).compileComponents();
        
        fixture  = TestBed.createComponent(ActionDirectiveTestComponent);
        component = fixture.componentInstance;
    })

    it(`(D) (@Outputo appAction) should emit event with payload when ENTER key is pressed`, () => {
        
        // fixture.debugElement.nativeElement 
        // const divEl = fixture.nativeElement.querySelector('.dummy-component');
        const divEl = fixture.debugElement.query(By.directive(ActionDirective)).nativeElement;
        const event = new KeyboardEvent('keyup', {key: 'Enter'});
        divEl.dispatchEvent(event);
        expect(component.hasEvent()).toBeTrue()
    });

    it(`(D) (@Output appAction) should emit event with payload when clicked`, () => {
        const divEl = fixture.nativeElement.querySelector('.dummy-component');
        const event = new Event('click');
        divEl.dispatchEvent(event);
        expect(component.hasEvent()).toBeTrue()
    })

    it(`(D) (@Output appAction) should emit event with payload when clicked or ENTER key pressed`, ()=>{
        const divEl = fixture.nativeElement.querySelector('.dummy-component');
        const keyboardEvent = new KeyboardEvent('keyup', {key: 'Enter'});
        const clickEvent = new Event('click');
        divEl.dispatchEvent(clickEvent);
        expect(component.hasEvent()).withContext('Click event').toBeTrue()
        component.clearEvent();
        divEl.dispatchEvent(keyboardEvent);
        expect(component.hasEvent()).withContext('Keyboard event "keyup"').toBeTrue()
    })
});


@Component({
    template: `<div class="dummy-component" (appAction)="actionHandler($event)"></div>`
})
class ActionDirectiveTestComponent{
    
    private event: Event = null;

    public actionHandler(event: Event): void {
        this.event = event;
    }

    public hasEvent(): boolean {
        return !!this.event;
    }

    public clearEvent(): void {
        this.event = null;
    }
}