const url = "https://striveschool.herokuapp.com/api/product/";
const encoder = btoa('user26:Q2h7j3FtxhdxMdab');

// GET ALL THE EVENTS --> https://striveschool.herokuapp.com/api/agenda/
// GET SINGLE EVENT --> https://striveschool.herokuapp.com/api/agenda/5ece27ec2a64b60017cfd32f
// DELETE SINGLE EVENT --> https://striveschool.herokuapp.com/api/agenda/5ece27ec2a64b60017cfd32f
// EDIT SINGLE EVENT --> https://striveschool.herokuapp.com/api/agenda/5ece27ec2a64b60017cfd32f
const getEvents = async () => {
  let response = await fetch(url, {
    method: "GET",
    headers: new Headers({
      Authorization: 'Basic '+ btoa('user26:Q2h7j3FtxhdxMdab'),
    })
  }); // this is getting the response from the API fetching
  return await response.json(); // this is returning the result of the promise in an usable format
};

const getEvent = async (id) => {
  let response = await fetch(url + id);
  return await response.json();
};

const saveEvent = async (agendaEvent) => {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(agendaEvent),
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": "Basic " + btoa('user26:Q2h7j3FtxhdxMdab'),
    }),
  });
  return response;
};

const editEvent = async (id, agendaEvent) => {
  let response = await fetch(url + id, {
    method: "PUT",
    body: JSON.stringify(agendaEvent),
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": "Basic " + btoa('user26:Q2h7j3FtxhdxMdab'),
    }),
  });
  return response;
};

const deleteEvent = async (id) => {
  let response = await fetch(url + id, {
    method: "DELETE",
  });
  return response;
};
