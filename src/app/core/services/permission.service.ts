import {Injectable} from '@angular/core';

import {AuthService} from "./auth.service";
import {UserRoleEnum} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(
    private authService: AuthService
  ) {
  }

  get isAdmin(): boolean {
    return this.authService?.currentUser?.role === UserRoleEnum.ADMIN;
  }

  get isUser(): boolean {
    return this.authService?.currentUser?.role === UserRoleEnum.USER;
  }

  get defaultSection(): string {
    if (this.isAdmin) {
      return 'admin';
    }
    return '';
  }

}
