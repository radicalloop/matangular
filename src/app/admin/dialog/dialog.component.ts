import { Component, OnInit } from '@angular/core';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { LoaderDialogComponent } from './loader-dialog/loader-dialog.component';
import { MatDialog, MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  title: string = 'Confirm Dialog';
  text: string = 'Just click a button!';
  selected: string;

  loaderText: string = 'Please wait';
  loadingTime: number = 3000;

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: { title: this.title, text: this.text, selected: this.selected }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // console.log(result);
      this.selected = result;
    });
  }

  showLoader(): void {
    let dialogRef = this.dialog.open(LoaderDialogComponent, {
      width: '200px',
      height: '200px',
      data: { loaderText: this.loaderText, loadingTime: this.loadingTime },
      disableClose: true
    });

    dialogRef.afterOpen().subscribe(result => {
      console.log('The dialog was closed');
      setTimeout(() => dialogRef.close(), this.loadingTime);
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  openSuccessSnackBar() {
    this.snackBar.open('Saved Successfully!', 'Success!', {
      panelClass: ['mat--success'],
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 4000
    });
  }

  openErrorSnackBar() {
    this.snackBar.open('Error in updation!', 'Error!', {
      panelClass: ['mat--errors'],
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 4000
    });
  }

  ngOnInit() {
  }

}
