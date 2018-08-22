import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RegisterLogService {
  registerLogs: string[] = [];

  add(registerLog: string) {
    this.registerLogs.push(registerLog);
  }

  clear() {
    this.registerLogs = [];
  }
}
