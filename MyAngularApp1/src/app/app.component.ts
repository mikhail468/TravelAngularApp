import { OnInit, Component } from '@angular/core';
import { PackageService } from './package.service'; //#1 use TopicsService
import { Package } from './package';

@Component({
  selector: 'my-app',
  template: `
  <div class="row">
     <div class="col-md-6">
        <nav class="navbar navbar-light bg-light">
    <input #theName class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button (click)="locPackages(theName.value)" class="btn btn-outline-success my-2 my-sm-0">Search</button>
       </nav>
    </div>
<div class="col-md-6">
    <button (click)="allPackages()" class="btn btn-outline-success my-2 my-sm-0">All Packages</button>
</div>
  </div>
  <div class="row">
   <div class="col-md-3" *ngFor="let p of packages">
      <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <img src="{{pic + p.picture}}"/>
        <div class="card-header">{{p.name}}</div>
        <div class="card-body">
        <p class="card-text">{{p.description}}</p>
        <h5 class="card-title">{{"$" + p.price}}</h5>
     </div>
  </div>
</div>
</div>
`,
  providers: [PackageService] //#2 use TopicsService
})
export class AppComponent implements OnInit  {
  private pic: string = "http://localhost:56214/wwwroot/uploads/";
  private packages: Package[];
  private dbPackages: Package[];

  constructor(private _packageService: PackageService) { } //#3 to use TopicsService

  ngOnInit() {//app is initialized here
    this._packageService.getAllTopics().subscribe(result => { this.packages = result.json() });
    this._packageService.getAllTopics().subscribe(result => { this.dbPackages = result.json() });
    //this.dbPackages = this.packages;
  }

  locPackages(name: string): void {
    this.packages = this.dbPackages;
    this.packages = this.packages.filter(obj => obj.locName.toLowerCase() == name.toLowerCase());
  }

  allPackages() {
    this.packages = this.dbPackages;
  }
}
