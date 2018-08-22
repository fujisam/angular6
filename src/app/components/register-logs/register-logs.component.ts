import { Component, OnInit } from "@angular/core";
import { RegisterLogService } from "../../services/register-log.service";

@Component({
  selector: "regiester-logs",
  templateUrl: "./register-logs.component.html",
  styleUrls: ["./register-logs.component.scss"]
})
export class RegisterLogsComponent implements OnInit {
  constructor(public registerLogService: RegisterLogService) {}

  ngOnInit() {}
}
