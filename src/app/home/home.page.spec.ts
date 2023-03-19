import { async, ComponentFixture, fakeAsync, TestBed, tick, waitForAsync, flush } from '@angular/core/testing';
import { IonicModule, IonSearchbar, ToastController, IonModal } from '@ionic/angular';

import { HomePage } from './home.page';
import { InfoComponent } from '../info/info.component';
import { SharedModule } from '../core/shared/shared.module';
import { By } from '@angular/platform-browser';
import { FilterPipe } from '../core/pipes/filter.pipe';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage, InfoComponent],
      imports: [IonicModule.forRoot(), SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the data', fakeAsync(() => {
    fixture.componentInstance.getImages();
    tick(1000);
    fixture.detectChanges();   
    expect(component.imagesList.length > 0).toBeTruthy();
  }));

  it('should show and hide skeleton', fakeAsync(() => {
    expect(component.loadingImages).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.skeleton'))).toBeTruthy();
    fixture.componentInstance.getImages();
    tick(1000);
    fixture.detectChanges();   
    expect(component.loadingImages).toBeFalsy();
    expect(fixture.debugElement.query(By.css('.skeleton'))).toBeFalsy();
  }));

  it('should show blankState', fakeAsync(() => {
    fixture.componentInstance.getImages();
    component.keyword = 'Nothing found';
    tick(1000);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.blankState'))).toBeTruthy();  
  }));

  it('should select item', (() => {
    component.selectItems(1);
    expect(component.itemsSelected.length === 1).toBeTruthy();  
  }));

  it('should deselect item', (() => {
    component.itemsSelected = new Array(10);
    expect(component.itemsSelected.length === 10).toBeTruthy();  
    component.deselectItems();
    expect(component.itemsSelected.length === 0).toBeTruthy();  
  }));

  it('should detect item selected or not', (() => {
    component.selectItems(10);
    expect(component.isSelected(10)).toBeTruthy();
    expect(component.isSelected(20)).toBeFalsy();  
  }));

  it('should show searchbar and hide actionbar', fakeAsync(() => {
    expect(fixture.nativeElement.querySelector('[data-test="searchbar"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="actionbar"]')).toBeFalsy();
  }));

  it('should show actionbar and hide searchbar', fakeAsync(() => {
    component.itemsSelected = new Array(1);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[data-test="actionbar"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="sarchbar"]')).toBeFalsy();
   }));

  it('should delete item', fakeAsync(() => {
    fixture.componentInstance.getImages();
    tick(1000);
    fixture.detectChanges();
    const length = component.imagesList.length;
    component.delete(3, 3);
    expect(component.imagesList.length !== length).toBeTruthy();
  }));

  it('should delete multiple items', fakeAsync(() => {
    fixture.componentInstance.getImages();
    tick(1000);
    fixture.detectChanges();
    const length = component.imagesList.length;
    component.itemsSelected = [1,2,3,4,5,6,7,8,9,0];
    component.deleteSelectedItems();
    expect(component.imagesList.length !== length).toBeTruthy();
  }));

  it('should don\'t add selected item', (() => {
    component.itemsSelected = [3];
    component.selectItems(3);
    expect(component.itemsSelected.length === 1).toBeTruthy();
  }));

  it('should show toast when delete one', waitForAsync(async () => {
    spyOn(fixture.componentInstance, 'presentToast').and.callThrough();
    await component.delete(3,3);
    expect(fixture.componentInstance.presentToast).toHaveBeenCalled();
  }));

  it('should show toast when delete multiple', waitForAsync(async () => {
    spyOn(fixture.componentInstance, 'presentToast').and.callThrough();
    await component.deleteSelectedItems();
    expect(fixture.componentInstance.presentToast).toHaveBeenCalled();
  }));

  it('should show modal',  async() => {
    await expectAsync(component.presentModal()).toBeResolved();
  });


});

