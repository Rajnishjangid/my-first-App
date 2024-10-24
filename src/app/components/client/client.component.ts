import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, IClient } from '../../model/interface/role';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { observable, Observable } from 'rxjs';
import { AsyncScheduler } from 'rxjs/internal/scheduler/AsyncScheduler';
import { AlertComponent } from "../../reusalableComponent/alert/alert.component";
import { MyButtonComponent } from "../../reusalableComponent/my-button/my-button.component";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, CommonModule, JsonPipe, AsyncPipe, AlertComponent, MyButtonComponent,MyButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientobj: Client = new Client;
  clientList: IClient[] = []
  clientservice = inject(ClientService)

  userList$ :Observable<any>=new Observable<any>;

  ngOnInit(): void {
    this.loadClient();
    this.userList$=this.clientservice.getAllUser(); 
  }
  loadClient() {
    this.clientservice.GetAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data
    })
  }
  onSaveClient(data:string) {
debugger;
    this.clientservice.addUpdate(this.clientobj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        this.loadClient();
        alert("Client created successfully")
        this.clientobj = new Client();
      }
      else {
        alert(res.message)
      }
    });
  }
  onDelete(Id:number){
    const IsDelete=confirm("Are you sure want to delete?")
    if(IsDelete){
      this.clientservice.deleteClient(Id).subscribe((res: APIResponseModel) => {
        if (res.result) {
          this.loadClient();
          alert("Client delete successfully")
          this.clientobj = new Client();
        }
        else {
          alert(res.message)
        }
      });
    }
   
  }
  onEdit(data:Client){
this.clientobj=data;
  }

}
