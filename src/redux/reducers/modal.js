import { INIT_STATE } from "../../constants";
import { getType, hideModal, showModal } from "../actions";

export default function postsReducers(state = INIT_STATE.modal, action) {
  switch (action.type) {
    case getType(showModal):
      return {
        isShow: true,
      };
    case getType(hideModal):
      return {
        isShow: false,
      };
    default:
      return state;
  }
}
