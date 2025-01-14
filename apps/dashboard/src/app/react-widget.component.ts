// apps/angular-app/src/app/react-widget/react-widget.component.ts
import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

@Component({
  selector: 'ng-mf-react-widget',
  template: '<div #reactContainer></div>',
})
export class ReactWidgetComponent implements AfterViewInit {
  @ViewChild('reactContainer', { static: true }) reactContainer!: ElementRef;

  async ngAfterViewInit() {
    // Загружаем модуль из Remote
    // const MyReactWidget = await loadRemoteModule( 'myremote', './Module');

    // Рендерим React-компонент
    // ReactDOM.render(MyReactWidget, this.reactContainer.nativeElement);

    const MyReactWidget = await loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'myremote',
      exposedModule: './Module'
    });

    const ReactWidget = MyReactWidget.default; // Assuming default export
    const reactElement = React.createElement(ReactWidget, { label: 'Click Me' });

    const container = this.reactContainer.nativeElement;
    const root = ReactDOM.createRoot(container);
    root.render(reactElement); // Render using 'createRoot'

  }
}
