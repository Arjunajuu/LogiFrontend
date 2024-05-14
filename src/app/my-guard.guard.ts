
// // import { Router,CanActivateFn } from "@angular/router";

// export const myGuardGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { Router,CanActivateFn} from "@angular/router";
import { SessionStorageService } from "./sessionstorage.service";
import { inject } from "@angular/core";

export const myGuardGuard= () => {
  const router = inject(Router);
 if (sessionStorage.getItem('username')=='admin'){
    return true;
  }
    return router.navigate(["login"]);
}

