import { Injectable } from '@angular/core';
import { empty, Observable } from 'rxjs';
import { Iimagelist } from '../interfaces/imagelist.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  /**
  * Get Images Service
  *
  * @param number
  * Quantity of images to generate in service. 
  */
  getImages(number: number): Promise<Iimagelist[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const list: Iimagelist[] = new Array(number).fill(undefined).map((item, key) => ({
          id: key,
          photo: `https://picsum.photos/id/${key}/500/500`,
          text: this.randomText
        }));
        resolve(list);
      }, 1000);
    });
  }

  get randomText(): string {
    const li = [
      "Lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet,",
      "consectetur",
      "adipiscing",
      "elit.",
      "Vivamus",
      "porta",
      "sollicitudin",
      "risus.",
      "Etiam",
      "rutrum",
      "justo",
      "turpis,",
      "aliquet",
      "mollis",
      "dui",
      "interdum",
      "quis.",
      "Ut",
      "ac",
      "tellus",
      "id",
      "eros",
      "rutrum",
      "mollis",
      "vel",
      "et",
      "lacus.",
      "Donec",
      "placerat",
      "tempus",
      "neque,",
      "vitae",
      "bibendum",
      "odio.",
      "Cras",
      "et",
      "scelerisque",
      "enim.",
      "Vivamus",
      "sed",
      "posuere",
      "tortor.",
      "Proin",
      "lectus",
      "massa,",
      "vestibulum",
      "a",
      "semper",
      "eu,",
      "suscipit",
      "et",
      "libero.",
      "Proin",
      "ut",
      "risus",
      "eu",
      "purus",
      "mattis",
      "scelerisque",
      "vel",
      "id",
      "nisl.",
      "Sed",
      "ornare",
      "viverra",
      "nibh",
      "ac",
      "ultrices.",
      "Orci",
      "varius",
      "natoque",
      "penatibus",
      "et",
      "magnis",
      "dis",
      "parturient",
      "montes,",
      "nascetur",
      "ridiculus",
      "mus.",
      "Cras",
      "volutpat,",
      "sapien",
      "vel",
      "lacinia",
      "egestas,",
      "diam",
      "odio",
      "venenatis",
      "dolor,",
      "sed",
      "posuere",
      "odio",
      "enim",
      "porta",
      "neque.",
      "Vestibulum",
      "elementum",
      "ante",
      "sit",
      "amet",
      "dolor",
      "luctus",
      "semper."
    ];
    const length = Math.ceil(Math.random() * 9);
    let string = '';
    for(let i = 0; i < length; i++) {
      const randomPos = Math.floor(Math.random() * 108);
      string = `${string} ${li[randomPos]}`;
    } 
    return string;
  }

}
