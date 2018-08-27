import { NgModule } from '@angular/core';

import { DemoBootstrapSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [DemoBootstrapSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [DemoBootstrapSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DemoBootstrapSharedCommonModule {}
