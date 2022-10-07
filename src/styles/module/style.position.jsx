export const style_TodoComplited = (val, direction) => {
  if (val) {
    if ((direction = "right")) {
      return "alert alert-light  border-rights todobox ";
    } else {
      return "alert alert-light  border-lefts todobox ";
    }
  } else {
    if ((direction = "right")) {
      return "alert alert-light  border-righte todobox ";
    } else {
      return "alert alert-light  border-lefte todobox ";
    }
  }
};
export const style_TodoComplitedText = (val, direction) => {
  if (val) {
    return {
      textAlign: direction === "right" ? "right" : "left",
      textDecoration: "line-through",
      width: "65%",
    };
  } else {
    return {
      textAlign: direction === "right" ? "right" : "left",
      width: "65%",
    };
  }
};
export const tabs_Direction = (direction, classNameNew) => {
  if (classNameNew === "dashed") {
    if (direction === "right") {
      return `tabs2 border-rights left-dashed ${classNameNew}`;
    } else {
      return `tabs2 border-lefts right-dashed ${classNameNew}`;
    }
  } else {
    if (direction === "right") {
      return `tabs2 border-rights ${classNameNew}`;
    } else {
      return `tabs2 border-lefts ${classNameNew}`;
    }
  }
};
export const tabs_DirectionText = (direction) => {
  if (direction === "right") {
    return `text-tabR`;
  } else {
    return `text-tabL`;
  }
};
export const tabs_Selector = (direction, selector) => {
  if (direction === "right") {
    return selector ? { borderRight: "rgb(255, 43, 96) 10px solid" } : null;
  } else {
    return selector ? { borderLeft: "rgb(255, 43, 96) 10px solid" } : null;
  }
};
export const navRight_style = (innerWidth) => {
  if (innerWidth > 1000) {
    return { height: `${innerWidth - 63}px` };
  } else {
    return { display: "none" };
  }
};
export const navLeft_style = (innerWidth) => {
  if (innerWidth > 1000) {
    return { height: `${innerWidth - 63}px` };
  } else {
    return { width: "100%" };
  }
};
export const navLeft2_style = (innerHeight) => {
  return { height: `${innerHeight - 145}px`, overflow: "auto" };
};
export const input_CreateTodo = (innerWidth) => {
  if (innerWidth > 800) {
    return { width: "80%" };
  } else {
    return null;
  }
};
export const color_Icone_close = () => {
  return "#f47373";
};
export const color_Icone = () => {
  return "#0d6efd";
};
export const color_sender = () => {
  return "#fff";
};
export const style_Aleart_SETANDDOC = () => {
  return { width: "90%", margin: "auto", borderRadius: 10 };
};
export const styele_ClassName_btn_lang = (language, name) => {
  if (language === name) {
    return "btn btn-primary mx-3 m-1";
  } else {
    return "btn btn-light mx-3 m-1";
  }
};
export const styele_ClassName_them = (them, name) => {
  if (them === name) {
    return "btn btn-primary mx-3 ";
  } else {
    return "btn btn-light mx-3 ";
  }
};
export const style_transcript = (direction)=>{
  if (direction === "right") {
    return { textAlign: "right" } 
  }else{
    return { textAlign: "left" }
  }
}