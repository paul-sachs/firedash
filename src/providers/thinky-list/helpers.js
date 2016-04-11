export const prepareForMap = item => [item.id, item];

export const mapResponse = ({ id, type }) => ({
  id,
  type
});
