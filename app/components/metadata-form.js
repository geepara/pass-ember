import Component from '@ember/component';
import Ember from 'ember';

//parms: takes in a schema

export default Ember.Component.extend({
  // session: Ember.inject.service(),
  // store: Ember.inject.service(),
  // metaDataString: Ember.computed('output', function() {
  //   return JSON.stringify(this.get('output'));
  // }),
  actions: {

  },
  didInsertElement () {
    // console.log('didUpdateAttrs ', this.get('schema'))
    // $(".alpaca-form").alpaca(this.get('schema'));

    // const that = this;
    // let originalForm = this.get('input');
    // let newForm = JSON.parse(JSON.stringify(originalForm));
    // if (!originalForm.options) {
    //   newForm['options'] = {};
    // }
    // if (!originalForm['view']) {
    //   newForm['view'] = 'web-edit';
    // }
    // newForm.options.form = {
    //   "buttons": {
    //     "submit": {
    //       "label": "Save Changes to Metadata",
    //       "click": function() {
    //         var value = this.getValue();
    //         that.set('output', value);
    //       }
    //     }
    //   }
    // };
    $(document).ready(() => {
      $("#form-"+this.get('identifier')).alpaca(this.get('schema'));
    });
  }
});
