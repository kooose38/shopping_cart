import { MODAL_CLOSE, MODAL_OPEN } from "./constans";

export const handleOpen = () => {
  return (dispatch) => {
    dispatch({
      type: MODAL_OPEN,
      payload: {
        open: true,
      },
    });
  };
};

export const handleClose = () => {
  return (dispatch) => {
    dispatch({
      type: MODAL_CLOSE,
      payload: {
        open: false,
      },
    });
  };
};
