import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    mixIt() {
      if (this.get('mixing')) {
        this.set('mixing', false);
      }
      else {
        this.set('mixing', true);
      }
      //this.get('model');
    },

    apply() {
      var cofeeMix = 'Mixed Coffee: ' +
      'coffee ' + this.get('coffee') + ', ' +
      'sugar ' + this.get('sugar') + ', ' +
      'milk ' + this.get('milk');
      this.transitionToRoute('coffeeserved', {queryParams: {coffeeType: cofeeMix}});
    }
  },

  mixing: false,

  coffee: "50",
  sugar: "50",
  milk: "50",
});
