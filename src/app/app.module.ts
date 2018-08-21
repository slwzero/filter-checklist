import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component'; // 子组件自动引入
import { FilterResultComponent } from './filter-result/filter-result.component'; // 子组件自动引入
import { MatCheckboxModule } from '@angular/material/checkbox'; // 添加material的checkbox
@NgModule({
  declarations: [AppComponent, FilterComponent, FilterResultComponent],
  imports: [BrowserModule, MatCheckboxModule], // import material的组件module
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
