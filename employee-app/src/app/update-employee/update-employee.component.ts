import { Component, OnInit } from '@angular/core';
import { Employee } from '../class/employee';
import { ActivatedRoute,Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number =0;
  employee: Employee = new Employee();

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private employeeService: EmployeeService
  ){}

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.params['id'];
    console.log(this.id);

    this.employeeService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    }, error => console.log(error));
  }

  // onSubmit(){
  //   this.employeeService.updateEmployee(this.id, this.employee).subscribe( data => {
  //     this.goToEmployeeList();
  //   }, error => console.error());
  // }
  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee)
      .pipe(
        tap(data => {
          this.goToEmployeeList();
        }),
        catchError(error => {
          console.error(error);
          // Handle error here if needed
          throw error; // Re-throw the error to propagate it to the subscriber
        })
      )
      .subscribe();
  }
  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }


}
