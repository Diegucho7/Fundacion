import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var paypal: any;



@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styles: [
  ]
})
export class DonacionesComponent implements OnInit {

  public donanteForm! : FormGroup;
  @ViewChild('paypal' ,{static:true}) paypalElement?: ElementRef;
 
  producto = {
    descripcion: 'donacion',
    valor: 2
  }

  
  constructor(
    private fb: FormBuilder
    ){}
    
    title = 'paypal-button';
    
    
    ngOnInit(): void {
      this.donanteForm = this.fb.group({
        nombre: ['', Validators.required],
        valor: ['', Validators.required]
      })
      
      
     

    paypal

    
      .Buttons({



        createOrder: (data:any,actions:any) =>{
          return actions.order.create({
            purchase_units:[
              {
                description: this.producto.descripcion,
                amount: {
                  currency_code: 'USD',
                  value        : this.producto.valor
                }
              }
            ]

          })
        },
        onApprove: async(data:any, actions:any) =>{
          const order = await actions.order.capture();
          console.log(order)
          console.log(this.donanteForm.value('valor'))
        },
        onError: (err: any) =>{
          console.log(err)
        }
      })
      .render(this.paypalElement?.nativeElement);
   
  }

  //bussines


  // sb-ky347c7542549@business.example.com

  // 1wF!?MSN




  //Personal
  // sb-azppu7575028@personal.example.com
  // BE2;$]@l

}
