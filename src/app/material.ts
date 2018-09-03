import {
  MatButtonToggleModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule
} from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule
  ]
})
export class MaterialModule {}
