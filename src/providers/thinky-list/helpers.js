export const prepareForMap = item => [item.id, item];

export const mapResponse = ({ id, type, attributes }) => ({
  id,
  type,
  components: attributes.components
});

