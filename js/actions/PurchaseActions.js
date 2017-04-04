import PurchaseAPI from '../purchaseApi/PurchaseAPI';
import { useDummyGoogleProductID } from '../config';
import types from './ActionTypes';

import { showLoginModal } from './Actions';

export function purchaseQuest(questId, productId) {
  return (dispatch) => {
    dispatch(purchaseQuestStart(questId, productId));

    if (useDummyGoogleProductID) {
      productId = "android.test.purchased";
    }
    PurchaseAPI.purchase(productId)
      .then((res) => {
        console.log('You purchased: ', res);
        if (useDummyGoogleProductID) {
          return PurchaseAPI.consume(productId);
        }
      })
      .then(() => {
        dispatch(purchaseQuestSuccess(questId, productId));
        dispatch(showLoginModal());
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function purchaseQuestStart(questId, productId) {
  return { type: types.PURCHASE_QUEST_START, questId, productId };
}

export function purchaseQuestSuccess(questId, productId) {
  return { type: types.PURCHASE_QUEST_SUCCESS, questId, productId, updatingProgress: true };
}

