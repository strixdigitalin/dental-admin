import { base_url } from "./dashboard";

export const newgetAllPackage = (callBack) => {
  var formdata = new FormData();

  var requestOptions = {
    method: "GET",
    //   body: formdata,
    redirect: "follow",
  };

  fetch(
    base_url + "/getpackage?user_id=89aeed13-5b6e-4e0d-84af-a24793a83cd7",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      callBack(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};
export const newGetAllSubjects = (id = 1, callBack) => {
  var formdata = new FormData();

  var requestOptions = {
    method: "GET",
    //   body: formdata,
    redirect: "follow",
  };

  fetch(
    base_url +
      "/getsubject?user_id=89aeed13-5b6e-4e0d-84af-a24793a83cd7&category_id=" +
      id,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      callBack(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};
export const newGetAllCategory = (callBack) => {
  var formdata = new FormData();

  var requestOptions = {
    method: "GET",
    //   body: formdata,
    redirect: "follow",
  };

  fetch(
    base_url + "/getcategory?user_id=89aeed13-5b6e-4e0d-84af-a24793a83cd7",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      callBack(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};

export const newaddPackage = (name, callBack) => {
  var formdata = new FormData();
  formdata.append("user_id", "89aeed13-5b6e-4e0d-84af-a24793a83cd7");
  formdata.append("package_name", name);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch(base_url + "/addpackage", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      callBack(result);
    })
    .catch((error) => console.log("error", error));
};

export const newAddSubject = (name, category, callBack) => {
  var formdata = new FormData();
  formdata.append("user_id", "89aeed13-5b6e-4e0d-84af-a24793a83cd7");
  formdata.append("name", name);
  formdata.append("category_id", category);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch(base_url + "/addsubject", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      callBack(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};

export const newAddCategory = (name, callBack) => {
  var formdata = new FormData();
  formdata.append("user_id", "89aeed13-5b6e-4e0d-84af-a24793a83cd7");
  formdata.append("name", name);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch(base_url + "/addcategory", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      callBack(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};
