"use client"
import React from 'react'
import Image from 'next/image'
import Chiquita from '../assets/chichichi.png'

import Link from 'next/link'

import "../CSS/header.css"

export default function Header(){
    return(
        <>
            <header>
                <Link href="/"><Image src={Chiquita} className="logo"/></Link>
                <Link href="/"><p className='tituloHeader'>Ricardo Lanches</p></Link>
                <nav>
                    
                    <ul>
                         
                        <li className='navega'>
                        
                            <Link className='links' href="/">Criar conta</Link>
               
                        </li>
                        <li className='navega'>
                            <Link className='links' href="/login">Acessar conta
                            </Link>
                        </li>
                        <li className='navega'>
                            <Link className='links' href="/">Sobre nós</Link>
                            
                        </li>  
                        
              
                    </ul>
                </nav>
            </header>
        </>
    )
}