import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormEngineModule} from './form-renderer/form-renderer.module';
import {SharedModule} from './shared/shared.module';
import {EditorModule} from './editor/editor.module';

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, FormEngineModule, SharedModule, EditorModule],
  bootstrap   : [AppComponent]
})

export class AppModule {
}
