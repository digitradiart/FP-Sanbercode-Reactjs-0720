import React, {Component} from "react"
import axios from "axios"

function minuteToHours(num){
  var hours = (num / 60);
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return ( rhours === 0 ? "" : rhours + " Jam") + (rminutes === 0 ? "" : " " + rminutes + " Menit")
}

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    axios.get(`https://www.backendexample.sanbersy.com/api/movies`)
    .then(res => {
      let movies = res.data.map(el=>{ return {
        id: el.id, 
        title: el.title, 
        description: el.description,
        year: el.year,
        duration: el.duration,
        genre: el.genre,
        rating: el.rating,
        review: el.review,
        image: el.image_url
      }})
      this.setState({movies})
    })
  }

  render(){
    return (
      <>
        <h1>Best Movies of the Year</h1>
        <div className="article-list">
          {
            this.state.movies.map((item)=>{
              return(
                <div className="cards">
                  <h3>{item.title}</h3>
                  <strong>Image: {item.image_url}</strong><br/>
                  <strong>Year: {item.year}</strong><br/>
                  <strong>Rating {item.rating}</strong><br/>
                  <strong>Duration: {minuteToHours(item.duration)}</strong><br/>
                  <p>
                    <strong>Description</strong>: 
                    {item.description}
                  </p>
                  <p>
                    <strong>Review: {item.review}</strong>
                  </p>
                  <hr/>
                </div>
              )
            })
          }
        </div>
      </>
    )
  }
}

export default Home