import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPopoverPage } from './menu-popover';

@NgModule({
  declarations: [
    MenuPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPopoverPage),
  ],
})
export class MenuPopoverPageModule {}
