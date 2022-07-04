/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    name: {
      type: 'string'
    },

    brand:{
      type:'string'
    },

    slug: {
      type: 'string'
    },

    image: {
      type: 'string'
    },

    gallary_image_02: {
      type: 'string'
    },

    gallary_image_03: {
      type: 'string'
    },

    gallary_image_04: {
      type: 'string'
    },

    gallary_image_05: {
      type: 'string'
    },

    color: {
      type: 'string'
    },

    description: {
      type: 'string'
    },

    additional_information: {
      type: 'string'
    },

    amount: {
      type: 'number'
    },

    quentity: {
      type: 'number'
    },

    status: {
      type: 'number'
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    category: {
      model: 'category'
    },

    createdBy: {
      model: 'user'
    },

    updatedBy: {
      model: 'user'
    }
  },

};
