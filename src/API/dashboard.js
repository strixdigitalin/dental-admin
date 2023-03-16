// export const base_url = "https://strix-bob-prep-quiz-module.herokuapp.com/api";
export const base_url = "https://dental-back.onrender.com/api/v1";

export const getDashboardData = (callBack) => {
  //   var formdata = new FormData();

  var requestOptions = {
    method: "GET",
    // body: formdata,
    redirect: "follow",
  };

  fetch(
    base_url + "/getstats?user_id=89aeed13-5b6e-4e0d-84af-a24793a83cd7",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      callBack(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};
