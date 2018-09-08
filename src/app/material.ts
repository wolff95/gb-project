import {
  MatButtonToggleModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatCheckboxModule
} from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCheckboxModule
  ],
  exports: [
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCheckboxModule
  ]
})
export class MaterialModule {}
