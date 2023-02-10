import { Component, OnDestroy, OnInit } from '@angular/core';
import dayjs from 'dayjs';

@Component({
    selector: 'app-poker-dashboard',
    templateUrl: './poker-dashboard.component.html',
    styleUrls: ['./poker-dashboard.component.scss']
})
export class PokerDashboardComponent implements OnDestroy, OnInit {

    private _timer!: NodeJS.Timer;

    private _gameTime = dayjs(0).startOf('day');

    private _playerEntries = 15;

    private _eliminatedPlayers = 10;

    private _remainingTimeInLevel = dayjs(0).startOf('day').add(30, 'minutes');

    blindStructure = [
        '50/100',
        '100/200',
        '200/400'
    ];

    blindLevel = 0;

    gamePaused = false;

    ngOnInit(): void {
        this._timer = setInterval(() => {
            if (!this.gamePaused) {
                this._gameTime = this._gameTime.add(1, 'second');
                this._remainingTimeInLevel = this._remainingTimeInLevel.subtract(1, 'second');
            }
        }, 1000);
    }

    ngOnDestroy(): void {
        clearInterval(this._timer);
    }

    pauseGame(): void {
        this.gamePaused = true;
    }

    resumeGame(): void {
        this.gamePaused = false;
    }

    goToNextLevel(): void {
        this.blindLevel = this.blindLevel + 1;
        this._remainingTimeInLevel = dayjs(0).startOf('day').add(30, 'minutes');
    }

    goToPreviousLevel(): void {
        this.blindLevel = this.blindLevel - 1;
        this._remainingTimeInLevel = dayjs(0).startOf('day').add(30, 'minutes');
    }

    get blinds(): string {
        return this.blindStructure[this.blindLevel];
    }

    get gameClock(): string {
        return this._gameTime.format('HH:mm:ss');
    }

    get remainingTimeInLevel(): string {
        return this._remainingTimeInLevel.format('HH:mm:ss');
    }

    get remainingPlayers(): string {
        return `${this._playerEntries - this._eliminatedPlayers}/${this._playerEntries}`;
    }
}
