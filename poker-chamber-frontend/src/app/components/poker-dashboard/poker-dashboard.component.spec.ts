import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerDashboardComponent } from './poker-dashboard.component';

describe('PokerDashboardComponent', () => {
    let component: PokerDashboardComponent;
    let fixture: ComponentFixture<PokerDashboardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ PokerDashboardComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PokerDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
