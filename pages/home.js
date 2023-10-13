"use client"
import React, { Component } from "react";
import axios from 'axios';
import Home from '../components/home'
import Header from "../components/header"
import Footer from "../components/footer"

class home extends Component {
    state = {
      anime: [],
    }
  
    async componentDidMount() {
      try {
        const { data: anime } = await axios.get('/api/anime.json')
        this.setState({ anime });
      }
      catch (error) {
        document
          .querySelectorAll('.erro')[0]
          .insertAdjacentHTML('beforeend', '<p> Erro ao carregar o arquivo </p>')
  
  
      }
    }
    render() {
      return (
        <>
          <Header/>
          <Home animes={ this.state.anime} />
          <div className="erro"></div>
          <Footer/>
        </>
      )
    }
  }
  export default home;
  
