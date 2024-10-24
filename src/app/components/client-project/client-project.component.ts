import { CommonModule, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, IClient, IClientProject, IEmployee } from '../../model/interface/role';
import { AlertComponent } from "../../reusalableComponent/alert/alert.component";

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, UpperCasePipe, DatePipe, JsonPipe, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl("", [Validators.email]),
    clientId: new FormControl("")
  })
  clientSrv = inject(ClientService)
  employeeList: IEmployee[] = [];
  clientList: IClient[] = [];
  // clientProjectList:IClientProject[]=[]
  clientProjectList: IClientProject[] = []
  // clientProjectList=signal<IClientProject[]>([])

  fistName = signal("First Project");
  ngOnInit(): void {
    this.getAllClientProject();
    this.getAllEmployee();
    this.getAllClient();
  }
  changesFirstName() {
    this.fistName.set("New Demo Project");
  }
  getAllEmployee() {
    this.clientSrv.getAllEmployee().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;
    })
  }
  getAllClient() {
    this.clientSrv.GetAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    })
  }
  getAllClientProject() {
    debugger
    this.clientSrv.getAllClientProject().subscribe((res: APIResponseModel) => {
      this.clientProjectList = res.data;
    })
  }
  onSaveProject() {
    const formValue = this.projectForm.value;
    debugger;
    this.clientSrv.addClientProjectUpdate(formValue).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Project save successfully");
      }
      else {
        alert(res.message);
      }
    })
  }
  // onEdit(data:clientp){
  //   ClientService.
  // }
}
