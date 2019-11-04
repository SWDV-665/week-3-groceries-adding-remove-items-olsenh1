import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

	title = "Groceries";
	author = "Henrik Olsen (0913075)"

	items = [
		{
			name: "Bananas", 
			quantity: 6
		},
		{
			name: "Milk", 
			quantity: 1
		},
		{
			name: "Bread", 
			quantity: 2
		},
		{
			name: "Cheese", 
			quantity: 3
		},
	];

  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController) {}

	async removeItem(item){
		var toastMsg = "< " + this.items[item].name + " > removed from " + this.title + "… ";
		(this.items).splice(item, 1);
		const toast = await this.toastCtrl.create({
			message: toastMsg,
			duration: 3000
		});
		toast.present();
	}

	async addItem() {
		console.log("Adding item...")
		const prompt = await this.alertCtrl.create({

			message: 'Please enter item...',

			inputs: [
				{
					name: 'name',
					placeholder: 'Name'
				},
				{
					name: 'quantity',
					placeholder: 'Quantity'
				},
			],
			buttons: [
				{
					text: 'Cancel',
					handler: data => {
						console.log('Cancel clicked');
					}
				},
				{
					text: 'Save',
					handler: item => {
						console.log('Saved clicked', item);
						this.items.push(item);
					}
				}
			]
		});
		prompt.present();
	}

}
