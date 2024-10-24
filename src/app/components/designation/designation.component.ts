import { Component, inject ,OnInit} from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{
  designationlist:IDesignation[]=[];
  isloader:boolean=true;
masterservice=inject(MasterService);
ngOnInit(): void {
  this.masterservice.getDesignation().subscribe((result:APIResponseModel)=>{
    this.designationlist=result.data;
    this.isloader=false;
    
  },error=>{alert("API error/Network down")
    this.isloader=false;
  }
);
}
}
