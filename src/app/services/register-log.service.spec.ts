import { TestBed, inject } from "@angular/core/testing";

import { RegisterLogService } from "./register-log.service";

describe("RegisterLogService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterLogService]
    });
  });

  it("should be created", inject(
    [RegisterLogService],
    (service: RegisterLogService) => {
      expect(service).toBeTruthy();
    }
  ));
});
