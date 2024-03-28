import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ImageDialogComponent } from '../components/projects/image-dialog/image-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public windowHeight: BehaviorSubject<number> = new BehaviorSubject(0);
  public windowWidth: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private readonly dialog: MatDialog) {}

  public openDialog(
    id: string,
    togglePausedFunction: Function | undefined = undefined
  ): void {
    if (togglePausedFunction) {
      togglePausedFunction();
    }

    const dialogRef = this.dialog.open(ImageDialogComponent, {
      data: id,
    });
    dialogRef.afterClosed().subscribe(() => {
      if (togglePausedFunction) {
        togglePausedFunction();
      }
    });
  }
}
