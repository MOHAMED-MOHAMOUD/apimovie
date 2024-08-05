import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OurDataService {

  datalist:any[] =
  [
    {name : 'toshiba' ,price:54634 , cat:"mobile"},
    {name : 'toshiba' ,price:54634 , cat:"mobile"},
    {name : 'toshiba' ,price:54634 , cat:"mobile"},
    {name : 'toshiba' ,price:54634 , cat:"mobile"},
    {name : 'toshiba' ,price:54634 , cat:"mobile"},
    {name : 'toshiba' ,price:54634 , cat:"mobile"},
    {name : 'toshiba' ,price:54634 , cat:"mobile"},
    {name : 'toshiba' ,price:54634 , cat:"mobile"},
    {name : 'toshiba' ,price:54634 , cat:"mobile"},
  ]
  constructor() { }
}
