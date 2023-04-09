export const GET_RESOURSE = "GET_RESOURSE";
export const CLEAR_NOTIFICATOR = 'CLEAR_NOTIFICATOR'

export const getResourseAC = (response) => ({
  type: GET_RESOURSE,
  payload: response,
});

export const clearNotificatorAC = () => ({type:CLEAR_NOTIFICATOR})

export const getData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`No connection: Status response ${response.status}`);
    }
    
    return response.json();

  } catch (e) {
    throw e;
  }
};

export const setStore = (url, dispatch) => {
  getData(url)
    .then((result) =>
      dispatch(
        getResourseAC({
          title: "Success",
          description: `${result.title}`,
          background: "#90ee90",
        })
      )
    )
    .catch((e) =>
      dispatch(
        getResourseAC({
          title: "Unsuccess",
          description: `${e}`,
          background: "#E32636",
        })
      )
    );
};
