"use client"
import React, { Component } from "react";
import axios from 'axios';
import ListaAnimes from '../components/listaAnimes'
import Header from "../components/header"
import Footer from "../components/footer"

class lista extends Component {
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
        <ListaAnimes animes={ this.state.anime} />
        <div className="erro"></div>
        <Footer/>
      </>
    )
  }
}
export default lista;
