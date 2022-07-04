module.exports = {


  friendlyName: 'View singleitem',


  description: 'Display "Singleitem" page.',

  inputs: {
    slug: {
      type: 'string'
    }
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/singleitem'
    }

  },

  fn: async function(inputs, exits) {
// TEST
    var data = await Product.findOne({
      slug: inputs.slug
    }).populate('category').populate('createdBy').populate('updatedBy');

    var sliderArr = [];

    if (data) {
      for (var i = 0; i < 5; i++) {
        sliderArr[0] = {
          image: data.image,
          type: 0,
        };
        sliderArr[1] = {
          image: data.gallary_image_02,
          type: 0,

        };
        sliderArr[2] = {
          image: data.gallary_image_03,
          type: 0,

        };
        sliderArr[3] = {
          image: data.gallary_image_04,
          type: 0,

        };
        sliderArr[4] = {
          image: data.gallary_image_05,
          type: 0,

        };

      }

      var myArr = data.name.split(" ");

      var relatedItems = await Product.find({
        where: {
          name: {
            contains: "Wifi"
          }
        },
        select: ['name', 'image', 'slug', 'amount']
      }).limit(4);

    }

    console.log("sliderArr");
    console.log(sliderArr);

    // Respond with view.
    return exits.success({
      data: data,
      slug: inputs.slug,
      relatedItems: relatedItems,
      sliderArr: sliderArr
    });

  }


};
