import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Employee } from 'src/models/employee';
import { Certification } from 'src/models/certifications';
import { Project } from 'src/models/project';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getColleagues(): Observable<Employee[]> {
    return this.http.post<Employee[]>('/api/colleagues', {}).pipe(
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }
  getProfile(id: string): Observable<Employee[]> {
    return this.http.post<Employee[]>('/api/profile', { id: id }).pipe(
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }
  getCertifications(id: string): Observable<Certification[]> {
    return this.http
      .post<Certification[]>('/api/certifications', { id: id })
      .pipe(
        catchError((err) => {
          console.log(err);
          return of([]);
        })
      );
  }
  getProjects(id: string): Observable<Project[]> {
    return this.http.post<Project[]>('/api/projects', { id: id }).pipe(
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }
  getLookup(path: string): Observable<string[]> {
    return this.http.post<string[]>(path, {}).pipe(
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }
}
