import { Component, OnDestroy, OnInit } from '@angular/core';
import dayjs from 'dayjs';

@Component({
    selector: 'app-poker-dashboard',
    templateUrl: './poker-dashboard.component.html',
    styleUrls: ['./poker-dashboard.component.scss']
})
export class PokerDashboardComponent implements OnDestroy, OnInit {

    private _timer!: NodeJS.Timer;

    private _startDate = dayjs('2023-01-29T01:26:00Z');

    gameClock!: string;

    ngOnInit(): void {
        this._timer = setInterval(() => {
            const currentDate = dayjs();
            this.gameClock = dayjs(currentDate.diff(this._startDate)).format('HH:mm:ss');
        }, 1000);
    }

    ngOnDestroy(): void {
        clearInterval(this._timer);
    }
}
