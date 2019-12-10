import { Component, OnInit } from "@angular/core";
import { sampleData } from "./datasource";
import { EditSettingsModel } from "@syncfusion/ej2-angular-treegrid";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public data: Object[] = [];
  public editSettings: EditSettingsModel;
  public toolbar: String[];

  ngOnInit(): void {
    this.data = sampleData;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: "Dialog"
    };
    this.toolbar = ["Add", "Edit", "Delete", "Update", "Cancel"];
  }
}
