import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { HttpClient } from '@angular/common/http';
import { APIResponseModel } from '../model/interface/role';
import { environment } from '../../environments/environment.development';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private API_URL= 'https://freeapi.miniprojectideas.com/api/ClientStrive/';
  constructor( private http:HttpClient) { }
  GetAllClients():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(this.API_URL+Constant.API_METHOD.GET_ALL_CLIENT)
  }
  getAllUser(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  getAllEmployee():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(this.API_URL+Constant.API_METHOD.GET_ALL_EMP)
  }
  addUpdate(obj:Client):Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(this.API_URL + 'AddUpdateClient',obj);
  }  
  deleteClient(id:number):Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(this.API_URL+ 'DeleteClientByClientId?clientId='+id)
  }
  addClientProjectUpdate(obj:Client):Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(this.API_URL+'AddUpdateClientProject',obj);
  }
  getAllClientProject():Observable<APIResponseModel>{
return this.http.get<APIResponseModel>(this.API_URL+'GetAllClientProjects');
  }
} 
