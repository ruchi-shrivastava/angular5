import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class DataService {

    private carList = ['civic', 'honda', 'activa']; 

    //public fetchCarList(){
      //  return this.carList;
    //}

   /* public fetchCarList(cb) {

        const a = setTimeout (() =>{
            this.carList =  ['civic', 'honda', 'activa']; 
             cb(this.carList);
        },2000);
    }

    /*
    public fetchCarList(){
        const promise = new Promise((resolve,reject) => {
            this.carList = ['civic', 'honda', 'activa']; 

            resolve(this.carList);
        });
        return promise;
    }
}
*/

public fetchCarList(){
    const promise = new Promise((resolve,reject) =>{
        this.carList = ['civic','honda','activa'];
        resolve(this.carList)
    });
    return promise;
}
}
