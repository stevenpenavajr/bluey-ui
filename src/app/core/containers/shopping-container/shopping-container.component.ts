import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/shared/services/firestore/firestore.service';
import { ResponsiveService } from 'src/app/shared/services/responsive/responsive.service';
import { ShopItem } from '../../models/Product';
import { CDN_BASE_URL } from '../../../core/consts/cdn.consts';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartService } from '../../services/cart/cart.service';
import { SpinnerService } from 'src/app/shared/services/spinner/spinner.service';
@Component({
  templateUrl: './shopping-container.component.html',
  styleUrls: ['./shopping-container.component.scss'],
})
export class ShoppingContainerComponent implements OnInit {
  availableDecks$: Observable<ShopItem[]> | Observable<unknown[]> = this
    .firestoreService.availableDecks;

  spinnerAction$: Observable<string> = this.spinnerService.spinnerAction$;

  // TODO: MOVE TO ENVIRONMENT SERVICE
  cdnBaseUrl = CDN_BASE_URL;

  // animate to remove item
  // header bar color - ICON
  // font stuff
  // bold add to cart text or color darken maybe navy or same blue

  // #BDBDFF
  constructor(
    private firestoreService: FirestoreService,
    private cart: CartService,
    private router: Router,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {}
}
