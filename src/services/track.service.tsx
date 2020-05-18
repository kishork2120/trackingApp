export default class TrackService{
  async getAllDriverList(){
    return await fetch(`http://localhost:3000/track/getAllDriverList`, {
      method: "GET"
    }).then((d) => d.json())
  }
}