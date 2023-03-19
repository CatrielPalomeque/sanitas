import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ImagesService } from '../core/services/images.service';
import { Iimagelist } from '../core/interfaces/imagelist.interface';
import { InfoComponent } from '../info/info.component';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit, AfterViewInit{

  loadingImages: boolean = true;
  imagesList: Iimagelist[];
  keyword: string = '';
  fakeImages = new Array(10);
  itemsSelected: number[] = [];
  modal!: HTMLIonModalElement;
  toast!: HTMLIonToastElement;


  constructor(private imagesService: ImagesService,
              private modalControler: ModalController,
              private toastController: ToastController) {
    this.imagesList = new Array();
  }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
   this.getImages();
  }

  getImages(): void{
    this.loadingImages = true;
    this.imagesService.getImages(4000).then( (imagesList: Iimagelist[]) => {
      this.imagesList = imagesList;
      this.loadingImages = false;
    });
  }

  
  /**
  * Delete item
  *
  * @param key
  * Image id to remove. 
  */
  delete(key: number, id: number){
    this.imagesList = this.imagesList.filter((item, index) => index !== key)
    this.presentToast(id);
  }

  selectItems(key: number):void {
    if (!this.itemsSelected.includes(key)) {
      this.itemsSelected.push(key);
    }
  }

  deselectItems():void {
    this.itemsSelected = [];
  }

  isSelected(key: number):boolean {
    return this.itemsSelected.includes(key);
  }

  deleteSelectedItems():void {
    this.imagesList = this.imagesList.filter((item, index) => !this.itemsSelected.includes(index) );
    this.itemsSelected = [];
    this.presentToast();
  }

  async presentToast(id?:number) {

    const msg = (!id) ? `Imágenes eliminada con éxito.` : `Imagen ${id} eliminada con éxito.`;
    const toast = this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'bottom',
      color: 'dark'

    });
    const present = (await toast).present();
  }

  async presentModal() {
    const modal = this.modalControler.create({
      component: InfoComponent,
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.8
    });
    const present = (await modal).present();
    return present;
  }
}
