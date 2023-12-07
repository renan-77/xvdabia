import React from 'react'
import { Divider } from 'antd'

const Hero = ({heading, message}) => {
  return (

    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
        {/*Overlay*/}
        <div className='text-center p-5 text-white z-[2] mt-[-10rem]'>
            <h2 className='text-4xl font-bold raleway'>{heading}</h2>
            <p className='py-5 text-xl'>{message}</p>
            <Divider className='mx-2'/>
        <div className="flex mb-4 my-5 mx-1">
            <div className="flex-col w-1/2">
                <p className='mx-5 font-bold text-3xl text-center'>Visto</p>
                <div className="text-center">
                  <ul className='my-5 list-disc mx-3'>
                    <li><p className='text-justify'>Cropped: PP</p></li>
                    <li><p className='text-justify'>Blusa: P</p></li>
                    <li><p className='text-justify'>Parte de baixo: 34</p></li>
                  </ul>
                </div>
            </div>
            <div className="flex-col w-1/2">
                <p className='mx-5 font-bold text-3xl text-center'>Calço</p>
                <div className="text-center">
                  <ul className='my-5 list-disc mx-3'>
                    <li><p className='text-justify'>Tênis e Sandália: 35</p></li>  
                    <li><p className='text-justify'>Chinelo: 37/38</p></li>
                  </ul>
                </div>
            </div>
        </div>
        <Divider className='mx-2'/>
        <p className='mx-5 font-bold text-xl text-center'>Chave Pix: (21) 97227-0939</p>
    </div>
    </div>
  ) 
}

export default Hero