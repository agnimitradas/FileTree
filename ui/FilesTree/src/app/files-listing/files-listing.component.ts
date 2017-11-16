import { Component, OnInit } from '@angular/core';
import { FilesService } from "../../shared/files.service";

@Component({
  selector: 'app-files-listing',
  templateUrl: './files-listing.component.html',
  styleUrls: ['./files-listing.component.css']
})
export class FilesListingComponent implements OnInit {

  searchViewFlag: boolean = true;
  allFilesData={};
  formsInput={
    "path": '\\\\10.56.166.248\\Users\\ad00440946\\Downloads\\Angular2-GettingStarted-master'
  };
  constructor(private _filesService:FilesService) { }

  ngOnInit() {
    
  }

  viewResult(){
    this._filesService.getAllFiles(this.formsInput)
        .subscribe(data=>{
            this.allFilesData = data;
            this.searchViewFlag = false;
        },error=>{
            console.log(error);
            alert("Failed To Fetch Data!");
        });
  }

  backtoSearch(){
    this.searchViewFlag = true;
  }

}
