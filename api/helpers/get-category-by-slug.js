module.exports = {


  friendlyName: 'Get category by slug',


  description: '',


  inputs: {
    slug: {
      type: 'string'
    }
  },


  exits: {

    success: {
      outputFriendlyName: 'Category by slug',
    },

  },


  fn: async function(inputs) {

    // Get category by slug.
    var categoryBySlug;
    // TODO

    categoryBySlug = await Category.findOne({
      status: 1,
      slug: inputs.slug,
    });

    // Send back the result through the success exit.
    return categoryBySlug;

  }


};
