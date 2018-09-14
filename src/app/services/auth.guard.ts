// import { Injectable } from '@angular/core';
// import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
// import { Observable } from 'rxjs/Observable';
// // import { UserService } from '../core/services/user.service';
//
// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor (private userService: UserService, private router: Router) {}
//   canActivateChild(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     if (this.userService.isLoggedIn()) {
//       return true
//     } else {
//       this.router.navigateByUrl('/auth/')
//       return false
//     }
//   }
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     if (this.userService.isLoggedIn() && this.userService.isVerified()) {
//       return true
//     } else if (this.userService.isLoggedIn() && !this.userService.isVerified()) {
//       this.router.navigateByUrl('/welcome')
//       return false
//     } else {
//       this.router.navigateByUrl('/auth/')
//       return false
//     }
//   }
// }
//
// @Injectable()
// export class NoAuthGuard implements CanActivate, CanActivateChild {
//   constructor (private userService: UserService, private router: Router) {}
//   canActivate(next: ActivatedRouteSnapshot,
//               state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     // console.log('NoAuthGuard', this.userService.isLoggedIn())
//     if (!this.userService.isLoggedIn()) {
//       return true
//     } else {
//       this.router.navigateByUrl('/dashboard')
//       return false
//     }
//   }
//
//   canActivateChild(next: ActivatedRouteSnapshot,
//                    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     // console.log('NoAuthGuard', this.userService.isLoggedIn())
//     if (!this.userService.isLoggedIn()) {
//       return true
//     } else {
//       this.router.navigateByUrl('/dashboard')
//       return false
//     }
//   }
// }
