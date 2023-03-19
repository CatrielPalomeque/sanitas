import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick, flush } from '@angular/core/testing';
import { IonicModule, ToastController, ModalController, IonModal } from '@ionic/angular';

import { InfoComponent } from './info.component';
import { HomePage } from '../home/home.page';
import { SharedModule } from '../core/shared/shared.module';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  let modalController: ModalController;
  let modal: HTMLIonModalElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoComponent, ],
      imports: [IonicModule.forRoot(), SharedModule,],
      providers: [ModalMock,
        { provide: ModalController, useClass: ModalMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close modal', waitForAsync(async () => {
    let modal = fixture.debugElement.injector.get(ModalMock);
    let closed = await component.closeModal();
    expect(closed).toBeTruthy();
  }));

  
  

});

export class ModalMock {

  public present(): Promise<boolean> {
      return new Promise(function (resolve: Function): void {
          resolve(true);
      });
  }

  public dismiss(): Promise<boolean> {
    return new Promise(function (resolve: Function): void {
        resolve(true);
    });
}
}
