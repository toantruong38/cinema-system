import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

declare var paypal;
declare var $: any;
@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

  // @ViewChild('paypal', {static: true}) paypalElement: ElementRef;

  product = {
    price: 777.77,
    description: 'used couch, decent condition',
    img: 'assets/couch.jpg'
  };

  paidFor = false;

  ngOnInit() {
    $('#test').hide();
    $('button').click(function(){
      $('#test').show();
    });

    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.product.price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: err => {
          console.log(err);
        },
        style: {
          color: 'blue',
          shape: 'pill',
          label: 'pay',
          height: 40,
          width: 100
        }
      })
      .render('#test');
  }
}
