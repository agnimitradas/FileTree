import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class FilesService {

    getAllFilesUrl='http://localhost:7070/api/allFiles';

    constructor(private _http:Http) { }

    getAllFiles(data):Observable<any>{
        //let data={"path":"\\10.56.166.248\Users\ad00440946\Downloads\Angular2-GettingStarted-master"}
        return this._http.post(this.getAllFilesUrl,data)
            .map((response:Response)=>{
                console.log(response.json())
                return response.json();
            });
    }
}