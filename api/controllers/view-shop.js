module.exports = {


  friendlyName: 'View shop',


  description: 'Display "Shop" page.',

  inputs: {

    name: {
      description: 'Search Name',
      type: 'string'
    },

    slug: {
      type: 'string'
    },

    page: {
      description: 'Page Number of the Pagenation',
      type: 'number'
    },

    limit: {
      description: 'Limit Records Per Page',
      type: 'number'
    },

  },

  exits: {

    success: {
      viewTemplatePath: 'pages/shop'
    }

  },


  fn: async function(inputs, exits) {

    var category = {};
    var findCat = false;

    if (inputs.slug) {
      category = await sails.helpers.getCategoryBySlug(inputs.slug);
      findCat = true;
    }


    // IF EMPTY ALL INPUTS IT MEANS DIRECT LIST
    if (_.isEmpty(inputs)) {

      delete this.req.session.carFilterList;

    }

    var formatedLimit = await sails.helpers.limitPerPage(inputs.limit);
    var formatedPage = await sails.helpers.parsePage(inputs.page);
    var tag_types = sails.config.custom.TAG_TYPES;

    // VARIABLES
    var data = [];
    var numRecords = 0;
    var filter = {};

    // SET FILTER
    if (typeof this.req.session.carFilterList !== "undefined") {

      if (this.req.session.carFilterList.name && (typeof inputs.name === 'undefined')) {

        inputs.name = this.req.session.carFilterList.name;

      }


    }

    // SET FILTER VALUES
    Object.keys(inputs).forEach((name, i) => {

      var value = inputs[name];

      // NAME
      if (name == 'name' && value != '') {

        filter.name = {
          'contains': inputs.name
        };

      }


    });

    if (!_.isEmpty(category)) {
      filter.category = category.id;
    }

    filter.status = 1;

    data = await Product.find({
      where: filter,
      select: ['name', 'slug', 'amount', 'id', 'image']
    }).populate('createdBy').populate('updatedBy').paginate(formatedPage, formatedLimit).meta({
      makeLikeModifierCaseInsensitive: true
    }).sort('createdAt DESC');


    var catagoryData = await Category.find({
      status: 1
    }).sort('name DESC');

    // RECORDS
    numRecords = await Product.count(filter);

    this.req.session.carFilterList = inputs;

    var pageCount = Math.ceil(numRecords / formatedLimit);



    return exits.success({
      data: data,
      category: category,
      findCat: findCat,
      catagoryData: catagoryData,
      pageCount: pageCount,
      page: formatedPage,
      limit: formatedLimit,
      tag_types: tag_types ? tag_types : [],
      filter: this.req.session.carFilterList ? this.req.session.carFilterList : {}
    });

  }


};
