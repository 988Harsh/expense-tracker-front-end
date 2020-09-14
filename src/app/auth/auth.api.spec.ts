import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthApi } from "./auth.api.service";
import { environment } from "../../environments/environment";

describe('#login', () => {

    let injector: TestBed;
    let service: AuthApi;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthApi]
        });
        injector = getTestBed();
        service = injector.get(AuthApi);
        httpMock = injector.get(HttpTestingController);
    });


    it('should return an Observable<{User,token}>', () => {
        const dummyUser = {
            user: { id: 2, name: "Harsh", email: "harsh@gmail.com", password: "pass" },
            token: "something"
        };
        const server = environment.server;
        const credentials = { username: 'Harsh', password: 'harsh12345' };
        service.login(credentials).subscribe(data => {
            expect(Object.keys(data).length).toBe(2);
            expect(data).toEqual(dummyUser);
        });

        const req = httpMock.expectOne(`${server}/authenticate`);
        expect(req.request.method).toBe("POST");
        req.flush(dummyUser);
    });
});

describe('#signup', () => {

    let injector: TestBed;
    let service: AuthApi;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthApi]
        });
        injector = getTestBed();
        service = injector.get(AuthApi);
        httpMock = injector.get(HttpTestingController);
    });


    it('should return an Observable<{User,token}>', () => {
        const dummyUser = {
            user: { id: 2, name: "Harsh Patel", email: "test@test.com", password: "pass" },
            token: "something"
        };
        const user = { name: "Harsh Patel", email: "test@test.com", password: "pass" };
        const server = environment.server;
        service.signup(user).subscribe(data => {
            expect(data).toEqual(dummyUser);
            expect(Object.keys(data).length).toBe(2);
        });

        const req = httpMock.expectOne(`${server}/register`);
        expect(req.request.method).toBe("POST");
        req.flush(dummyUser);
    });
});