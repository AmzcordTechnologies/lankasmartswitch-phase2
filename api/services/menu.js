module.exports = {
  isCurrentPage: function(req, menuitem) {
    // console.log("menuitem");
    // console.log(menuitem);
    var pathArr = req.path.split('/');
    // console.log("pathArr");
    // console.log(pathArr);
    return (pathArr[1] === menuitem)
  },
  isSubMenu: function(req, parent){
  var pathArr = req.path.split('/');
  return (pathArr[2] === parent)
  },
}
