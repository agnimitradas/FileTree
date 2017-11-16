import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls:['./tree-item.component.css']
})

export class TreeItemComponent implements OnInit {

  collapseFlag:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  
  @Input()
  public data: any = {};

  folderClicked(data){
    console.log(data);
  }

  readFile(data){
    let url= data.path
    window.open(url,'_blank');
  }

}
