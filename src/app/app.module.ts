import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material";

import { AppComponent } from "./app.component";
import { VatButtonsComponent } from "./vat-buttons/vat-buttons.component";
import { GbInputComponent } from "./gb-input/gb-input.component";
import { VatRateService } from "./_services/vat-rate.service";
import { CustomNumberPipe } from "./_pipes/customNumber.pipe";
import { FlexLayoutModule } from "@angular/flex-layout";
import { GbHeaderComponent } from './gb-header/gb-header.component';

@NgModule({
  declarations: [
    AppComponent,
    VatButtonsComponent,
    GbInputComponent,
    GbHeaderComponent,
    CustomNumberPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [VatRateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
