import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material";

import { AppComponent } from "./app.component";
import { VatButtonsComponent } from "./vat-buttons/vat-buttons.component";
import { GrossInputComponent } from "./gross-input/gross-input.component";
import { VatInputComponent } from "./vat-input/vat-input.component";
import { NetInputComponent } from "./net-input/net-input.component";
import { CalculatorInputComponent } from "./calculator-input/calculator-input.component";

import { VatRateService } from "./services/vat-rate.service";

@NgModule({
  declarations: [
    AppComponent,
    VatButtonsComponent,
    GrossInputComponent,
    VatInputComponent,
    NetInputComponent,
    CalculatorInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule
  ],
  providers: [VatRateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
