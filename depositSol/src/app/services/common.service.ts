import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {AppService} from '../app.service';

@Injectable()
export class CommonService {

  constructor(private _appService: AppService) { }

  getBase64(rawString: string) {
    return window.btoa(rawString);
  }

  preventBodyScroll(state: boolean) {
    this._appService.scrollBody.emit(state);
  }

  getDynamicComponentInstance(container: ViewContainerRef, componentName: any, resolver: ComponentFactoryResolver) {
    container.clear();
    const factory: any =  resolver.resolveComponentFactory(componentName);
    const ComponentRef: any = container.createComponent(factory);
    return ComponentRef.instance.type;
  }
}
