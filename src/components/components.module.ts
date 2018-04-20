import { NgModule } from '@angular/core';
import { NewsComponent } from './news/news';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
@NgModule({
	declarations: [NewsComponent,
    LoginComponent,
    RegisterComponent],
	imports: [],
	exports: [NewsComponent,
    LoginComponent,
    RegisterComponent]
})
export class ComponentsModule {}
