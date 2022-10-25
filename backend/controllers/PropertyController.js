const Property = require(`../models/PropertyModel`);

exports.createProperty = async (req, res, next) => {
  const property = await Property.create(req.body);

  res.status(200).json({
    success: true,
    property,
  });
};
