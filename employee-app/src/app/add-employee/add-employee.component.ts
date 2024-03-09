import { Component } from '@angular/core';
import { Employee } from '../class/employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ){}

  onSubmit() {
    this.employeeService.addEmployee(this.employee).subscribe(
      data => {console.log(data);
      this.goBackToEmployeeList();  
      }
    );
  }

  goBackToEmployeeList(){
    this.router.navigate(['/employees'])
  }
}
