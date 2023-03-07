import { base_url } from "./dashboard";

export const newGetQuestions = (callBack) => {
  var formdata = new FormData();

  var requestOptions = {
    method: "GET",
    body: formdata,
    redirect: "follow",
  };

  fetch(
    base_url + "/getallquestion?user_id=89aeed13-5b6e-4e0d-84af-a24793a83cd7",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      callBack(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};

export const getByPAckageId = (id, callBack) => {
  var formdata = new FormData();
  console.log("callingpackages");
  var requestOptions = {
    method: "GET",
    // body: formdata,
    redirect: "follow",
  };

  fetch(
    base_url +
      "/questionbypackage?user_id=89aeed13-5b6e-4e0d-84af-a24793a83cd7&package_id=" +
      id,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      callBack(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};

export const newAddMCQ = (payload, callBack) => {
  var formdata = new FormData();
  formdata.append("user_id", "89aeed13-5b6e-4e0d-84af-a24793a83cd7");
  formdata.append("category_id", "1");
  formdata.append("subject_id", payload.subject_id);
  formdata.append("question", payload.question);
  formdata.append("description", payload.description);
  formdata.append("option1", payload.option1);
  formdata.append("option2", payload.option2);
  formdata.append("option3", payload.option3);
  formdata.append("option4", payload.option4);
  formdata.append("is_correct", payload.is_correct);
  formdata.append("level", payload.level);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch(base_url + "/addquestion", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      callBack(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};
