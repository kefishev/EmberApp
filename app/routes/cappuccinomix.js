import Ember from 'ember';

export default Ember.Route.extend({
  //model: function() {
    /*this.store.findRecord('cappuccinomix', 'myname').then(function(rec) {
      console.log("rec = " + rec.get("coffee") + "," + rec.get("sugar"));
    });*/

    //return this.store.findRecord('cappuccinomix', 'myname');
    //return this.store.findAll('cappuccinomix');
    //return {coffee:50, sugar: 50 };
  //},

  model() {
    return Ember.RSVP.hash({
      mix: { coffee:50, sugar:50 },
      preferenceMix: this.store.findAll('cappuccinomix')
    });
  },

  actions: {
    save() {
      console.log("v1=", this.currentModel.prefName);
      console.log("v2=", this.currentModel.mix.coffee);
      console.log("v3=", this.currentModel.mix.sugar);

      var prefName = this.currentModel.mix.prefName == null ? "My pref" :
        this.currentModel.mix.prefName;

      var rec = this.store.createRecord('cappuccinomix', {
        prefName: prefName,
        coffee: this.currentModel.mix.coffee,
        sugar: this.currentModel.mix.sugar
      });

      rec.save();
    },
    apply() {
      var cofeeMix = 'Mixed Coffee: ' +
      'coffee ' + this.currentModel.mix.coffee + ', ' +
      'sugar ' + this.currentModel.mix.sugar;
      this.transitionTo('coffeeserved', {queryParams: {coffeeType: cofeeMix}});
    },
    menuItmeClick (coffee, sugar) {
      console.log("Item clicked: " + coffee + ", " + sugar);
      Ember.set(this.currentModel, "mix.coffee", coffee);
      Ember.set(this.currentModel, "mix.sugar", sugar);
    }
  }
});
