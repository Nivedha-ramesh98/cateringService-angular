import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss']
})
export class UserGroupsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title : string = "UserGroups";
  isShow : boolean = false;
  age : number = 0;
  states : string[] = ["TN", "KL", "KA", "AP", "TL"];
  tnCites : string[] = ["CH", "TR", "MD", "SL", "KK"];
  selectedState : string = "";
  cities : string[] =[];

  userGroups : UserGroup[] = [];
  userGroup : UserGroup = new UserGroup();

  setCity()
  {
    if(this.selectedState == "TN")
    {
      this.cities = this.tnCites;
    }
  }

  addGroup()
  {
    let userGroup = this.userGroup;
    this.userGroups.push(userGroup);
    this.userGroup = new UserGroup();
  }
}

export class UserGroup
{
  userGroupName : string = "";
  userGroupId : string = "";
  userGroupDescription : string = "";
}
