import { Component,OnInit } from '@angular/core';
import { Employee } from '../class/employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {  

   employee: Employee[] =[];

   constructor(
    private employeeService: EmployeeService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.getEmployees()
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {
      console.log(data);
      this.employee = data;
    });
  }

  updateEmployee(id: number) {
    this.router.navigate(['updateEmployee',id]);
  }

  deleteEmployee(id: number) {
      this.employeeService.deleteEmployee(id).subscribe(data => {
        this.getEmployees();
      });
  }
}
