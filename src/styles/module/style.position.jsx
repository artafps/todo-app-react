export const style_TodoComplited = (them, val, direction) => {
  console.log(them === "dark");
  if (them === "dark") {
    if (val) {
      if ((direction = "right")) {
        return "alert alert-d  border-rights todobox ";
      } else {
        return "alert alert-d  border-lefts todobox ";
      }
    } else {
      if ((direction = "right")) {
        return "alert alert-d  border-righte todobox ";
      } else {
        return "alert alert-d  border-lefte todobox ";
      }
    }
  } else {
    if (val) {
      if ((direction = "right")) {
        return "alert alert-l  border-rights todobox ";
      } else {
        return "alert alert-l  border-lefts todobox ";
      }
    } else {
      if ((direction = "right")) {
        return "alert alert-l  border-righte todobox ";
      } else {
        return "alert alert-l  border-lefte todobox ";
      }
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
export const tabs_Direction = (them, direction, classNameNew) => {
  if (them === "dark") {
    if (classNameNew === "dashed") {
      if (direction === "right") {
        return `tabs2 aleart-d border-rights left-dashed ${classNameNew}`;
      } else {
        return `tabs2 aleart-d border-lefts right-dashed ${classNameNew}`;
      }
    } else {
      if (direction === "right") {
        return `tabs2 aleart-d border-rights ${classNameNew}`;
      } else {
        return `tabs2 aleart-d border-lefts ${classNameNew}`;
      }
    }
  } else {
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
export const navRight_style = (innerHeight, innerWidth) => {
  if (innerWidth > 1000) {
    return { height: `${innerHeight - 63}px` };
  } else {
    return { display: "none" };
  }
};
export const navLeft_style = (innerHeight, innerWidth) => {
  if (innerWidth > 1000) {
    return { height: `${innerHeight - 63}px` };
  } else {
    return { width: "100%" };
  }
};
export const navLeft2_style = (innerHeight) => {
  return { height: `${innerHeight - 145}px`, overflow: "auto" };
};
export const input_CreateTodo = (innerWidth, dir) => {
  if (innerWidth > 800) {
    if (dir === "right") {
      return { width: "80%", textAlign: "right", direction: "rtl" };
    } else {
      return { width: "80%", textAlign: "left", direction: "ltr" };
    }
  } else {
    if (dir === "right") {
      return { textAlign: "right", direction: "rtl" };
    } else {
      return { textAlign: "left", direction: "ltr" };
    }
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
export const styele_ClassName_btn_lang = (them, language, name) => {
  if (them === "dark") {
    if (language === name) {
      return "btn btn-primary mx-3 m-1 active-btn";
    } else {
      return "btn btn-light mx-3 m-1";
    }
  } else {
    if (language === name) {
      return "btn btn-primary mx-3 m-1 ";
    } else {
      return "btn btn-light mx-3 m-1";
    }
  }
};
export const styele_ClassName_them = (them, name) => {
  if (them === "dark") {
    if (them === name) {
      return "btn btn-primary mx-3 active-btn";
    } else {
      return "btn btn-light mx-3 ";
    }
  } else {
    if (them === name) {
      return "btn btn-primary mx-3 ";
    } else {
      return "btn btn-light mx-3 active-btn";
    }
  }
};
export const styele_color_them = (them, name) => {
  if (them === "dark") {
    if (them === name) {
      return "#25252f";
    } else {
      return "#fff";
    }
  } else {
    if (them === name) {
      return "#fff";
    } else {
      return "#25252f";
    }
  }
};
export const style_transcript = (direction) => {
  if (direction === "right") {
    return { textAlign: "right" };
  } else {
    return { textAlign: "left" };
  }
};

export const style_Them = (them) => {
  if (them === "dark") {
    return "themDarkBack";
  } else {
    return null;
  }
};
