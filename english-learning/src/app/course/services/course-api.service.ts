import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CourseItemModel } from "../models/course-item.model";

@Injectable({
    providedIn: 'root'
})
export class CourseApiService {
    private readonly apiBaseUrl: string;

    private readonly courseItemPath: string;

    constructor(private httpClient: HttpClient) {
        this.apiBaseUrl = environment['ApiBaseUrl'];
        this.courseItemPath = this.apiBaseUrl.concat('/api/course/item');
    }

    getItems(): Observable<CourseItemModel[]> {
        return this.httpClient.get<CourseItemModel[]>(this.courseItemPath);
    }
}