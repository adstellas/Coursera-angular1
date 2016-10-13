(function () {
  'use strict';
  angular.module("ShoppingListCheckOff", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);
  
  ToBuyController.$inject = ["ShoppingListCheckOffService"];  
  function ToBuyController (ShoppingListCheckOffService) {
    var buyCtrl = this;
    buyCtrl.items = ShoppingListCheckOffService.getToBuyItems();
    
    buyCtrl.markItemAsBought = function (index, name, quantity)
    { ShoppingListCheckOffService.markItemAsBought(index, name, quantity)
    };
  }
  
  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var boughtCtrl = this;
    boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
  }
  
  function ShoppingListCheckOffService () {
    var service = this;
    
    var toBuyItems = [
      { name: "Milk",
        quantity: "2 bottles"
      },
      { name: "Cheese",
        quantity: "1 kilo"
      },
      { name: "Bread",
        quantity: "2 loafs"
      },
      { name: "Tomatoes",
        quantity: "3 kilos"
      },
      { name: "Red pepper",
        quantity: "4 kilos"
      }
    ];
    var boughtItems = [];
    
    service.markItemAsBought = function (index, name, quantity) {
      service.addItem(name, quantity);
      service.removeItem(index);
      console.log(toBuyItems);
      console.log(boughtItems);
    };
    
    service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      boughtItems.push(item);
    };
    
    service.removeItem = function (index) {
      toBuyItems.splice(index, 1);
    };
    
    service.getToBuyItems = function () {
      return toBuyItems;
    };
    
    service.getBoughtItems = function () {
      return boughtItems;
    };
  }
}());