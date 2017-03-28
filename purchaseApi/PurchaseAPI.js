import InAppBilling from 'react-native-billing';

const purchase = (productId) => {
  let result;
  return InAppBilling.close()
    .then(InAppBilling.open)
    .then(() => {
      return InAppBilling.isPurchased(productId);
    })
    .then((purchased) => {
      if (!purchased) {
        return InAppBilling.purchase(productId);
      }
    })
    .then((res) => {
      result = res;
    })
    .then(InAppBilling.close)
    .then(() => {
      return result;
    })
    .catch((...args) => {
      console.log(args);
    });
};

const consume = (productId) => {
  return InAppBilling.close()
    .then(InAppBilling.open)
    .then(() => InAppBilling.consumePurchase(productId))
    .then(InAppBilling.close)
};

export default { purchase, consume };
