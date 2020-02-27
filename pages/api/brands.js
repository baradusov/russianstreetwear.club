import data from './data.json';

export default (req, res) => {
  const { id } = req.query;

  if (id) {
    const brand = data.brands.filter(brand => {
      return id == brand.id;
    });

    res.status(200).json(brand[0]);
  }
};
