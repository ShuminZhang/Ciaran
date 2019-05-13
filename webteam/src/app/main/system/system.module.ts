import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { UserMainComponent } from './user/user-main.component';
import { UserRoleComponent } from './user/user-role.component';
import { UserProfileComponent } from './user/user-profile.component';
import { UserPasswordComponent } from './user/user-password.component';
import { UserAddComponent } from './user/user-add.component';
import { AuthPermissionComponent } from './authority/auth-permission.component';
import { AuthRoleComponent } from './authority/auth-role.component';
import { AuthMainComponent } from './authority/auth-main.component';

@NgModule({
  declarations: [SystemComponent, UserMainComponent, UserRoleComponent, UserProfileComponent, UserPasswordComponent, UserAddComponent, AuthPermissionComponent, AuthRoleComponent, AuthMainComponent],
  imports: [
    CommonModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
