import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {HeroContainer,HeroContent, HeroItems,HeroH1,HeroP} from './HeroElements';
import {HeroBtn} from './HeroElements';
import { } from './'
import { } from './'


const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen);
    };
    return (
        <HeroContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />

        <HeroContent>
            <HeroItems>
                <HeroH1>Hotel Voucher</HeroH1>
                <HeroP>Give the gift of travel with CoTu Hotel Group</HeroP>
                  <HeroBtn >Buy now</HeroBtn>  
                  

            </HeroItems>
        </HeroContent>
        </HeroContainer>
    )
}

export default Hero