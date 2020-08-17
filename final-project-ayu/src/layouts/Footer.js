import React from "react"
import TimeDate from "./TimeDate"

const Footer = () =>{
  return (
    <footer>
      <ul>
        <li><TimeDate /></li>
        <li><a href={'https://www.instagram.com/digitradiart'} target='_blank'><img src='../img/instagram.png' style={{width:'25px'}}/></a></li>
        <li><a href={'https://www.github.com/digitradiart'} target='_blank'><img src='../img/github.png' style={{width:'25px'}}/></a></li>
        <li>&copy; 2020 by digitradiart</li>
      </ul>
      
    </footer>
  )
}

export default Footer