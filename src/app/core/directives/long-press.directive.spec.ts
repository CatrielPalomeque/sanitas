import { LongPressDirective } from './long-press.directive';
import { TestBed, ComponentFixture, fakeAsync, tick, flush } from '@angular/core/testing';
import { HomePage } from '../../home/home.page';
import { SharedModule } from '../shared/shared.module';
import { IonicModule, IonItem } from '@ionic/angular';
import { InfoComponent } from '../../info/info.component';
import { By } from '@angular/platform-browser';



describe('LongPressDirective', () => {
  let fixture: ComponentFixture<HomePage>;
  let component: HomePage;
  const directive = new LongPressDirective();


  beforeEach(async() => {
  
    await TestBed.configureTestingModule({
      declarations: [HomePage, InfoComponent],
      imports: [IonicModule.forRoot(), SharedModule]
    }).compileComponents();
  
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });


  it('slould select an item', fakeAsync(() => {
    fixture.componentInstance.getImages();
    fixture.autoDetectChanges(); // <--- 
    tick(1000); // <---
    fixture.detectChanges();
    flush();
    const compiled = fixture.debugElement.query(By.directive(IonItem));
    compiled.triggerEventHandler('touchstart');
    tick(1000);
    compiled.triggerEventHandler('touchend');
    expect(component.itemsSelected.length).toBeGreaterThan(0);
  }));

  it('slould not select an item', fakeAsync(() => {
    fixture.componentInstance.getImages();
    fixture.autoDetectChanges(); // 
    tick(1000); 
    fixture.detectChanges();
    flush();
    const compiled = fixture.debugElement.query(By.directive(IonItem));
    compiled.triggerEventHandler('touchstart');
    tick(500);
    compiled.triggerEventHandler('touchend');
    expect(component.itemsSelected.length).toBe(0);
  }));

});
