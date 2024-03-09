import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../class/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/employee";

  constructor(private http: HttpClient) { }

  addEmployee(employee:Employee){
    return this.http.post(this.baseUrl+`/add`,employee);
  }

  getEmployeeList():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl+`/list`);
  }

  getEmployeeById(id: number):Observable<Employee>{
    return this.http.get<Employee>(this.baseUrl+`/${id}`)
  }

  updateEmployee(id: number, employee: Employee){
    return this.http.put(this.baseUrl+`/update/${id}`,employee);
  }

  deleteEmployee(id: number): Observable<Object>{
     return this.http.delete(this.baseUrl+`/delete/${id}`);
  }

}
