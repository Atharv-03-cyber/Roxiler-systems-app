const paginate = async (model, query, page, perPage) => {
    const skip = (page - 1) * perPage;
    const total = await model.countDocuments(query);
    const data = await model.find(query).skip(skip).limit(perPage);
  
    return {
      data,
      total,
      page,
      perPage,
      totalPages: Math.ceil(total / perPage),
    };
  };
  
  module.exports = { paginate };
  