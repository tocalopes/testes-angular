import { TestBed } from "@angular/core/testing";
import { PhotoBoardService } from "./photo-board.service";
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

describe(PhotoBoardService.name, () => {
    let service: PhotoBoardService;
    let httpController: HttpTestingController;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [PhotoBoardService],
            imports: [HttpClientTestingModule],
        })
    })
    service = TestBed.inject(PhotoBoardService);
    httpController = TestBed.inject(HttpTestingController)
})