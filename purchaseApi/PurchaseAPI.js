import InAppBilling from 'react-native-billing';
import DeviceInfo from 'react-native-device-info';

const purchase = (productId) => {
  let result;
  if (DeviceInfo.isEmulator()) {
    return Promise.resolve({ name: "dummy emulator purchase result" });
  } else {
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
  }
};

const consume = (productId) => {
  if (DeviceInfo.isEmulator()) {
    return Promise.resolve({ name: "dummy emulator purchase result" });
  } else {
    return InAppBilling.close()
      .then(InAppBilling.open)
      .then(() => InAppBilling.consumePurchase(productId))
      .then(InAppBilling.close)
  }
};

export default { purchase, consume };
