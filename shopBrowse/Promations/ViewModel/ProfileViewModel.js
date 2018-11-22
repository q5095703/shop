

function productItem(product) {

    this.ID = ko.observable(product.id);
    this.Name = ko.observable(product.name);
    this.isPromated = ko.observable(product.isPromoted);
    this.Price = ko.observable(product.price);
    if (product.count > 3) {

        this.Count = ko.observable("In Stock");
        this.alert = ko.observable(false);
    } else {
        this.Count = ko.observable("Only " + product.count + " left");
        this.alert = ko.observable(true);
    }
    
    this.Promotion = ko.observable("Currently on sale, Price:" + ((product.price) / 2).toFixed(2));
    this.AddToBasket = function () { };
    this.URL = ko.observable(product.url);
    }
   


var viewModel = function () {

    var self = this;
    self.load = ko.observable(false);
    self.model = {};
    self.model.Products = ko.observableArray();
    self.Logged = ko.observable(true);
    self.search = ko.observable("");
    self.search.subscribe(function (newText) {
        console.log(newtext);
    })
}




$(function () {
    var vm = new viewModel();
  
   
    $.getJSON("/Products/Product", function (Products) {
        vm.model.Products.removeAll();
        if (Products.length !== 0) {
            $.each(Products, function (index, item) {
                
                vm.model.Products.push(new productItem(item));
            });
        }
        tryApply();
    })

    function tryApply() {
        vm.load(true);
        ko.applyBindings(vm);

    }


})

