import { styled } from 'styled-components';
import pic from '../Assets/features-bg2.jpg'
import pic1 from '../Assets/about-2.png'
import {FaRegPenToSquare} from 'react-icons/fa6'
import {TfiFlagAlt} from 'react-icons/tfi'
import {AiOutlineThunderbolt} from 'react-icons/ai'
import {TfiPalette} from 'react-icons/tfi'
import {TfiWorld} from 'react-icons/tfi'
import {FaMicrophoneAlt} from 'react-icons/fa'

const Features =()=>{
    return (
        <div>
           <Container>
            <Wrapper>
                <Top>
                <h2>AWESOME<span> FEATURES</span></h2>
                    <Shape>
                        <Circle/>
                        <Line/>
                        <Line1/>
                    </Shape>
                    <p style={{textAlign: 'center'}}>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Top>
                <Bottom>
                    <Card>
                        <First>
                            <Icon><FaRegPenToSquare style={{color: 'red', fontSize: '45px', fontWeight: '200'}}/></Icon>
                            <Write>
                                <h4 style={{margin: '0px', textAlign: 'left', fontSize: '23px', fontWeight: '500'}}>Creative Design</h4>
                                <p style={{marginTop: '5px', textAlign: 'left', fontSize: '17px', fontWeight: '390', color : 'gray'}}>Lorem ipsum dolor sit amet elit</p>
                            </Write>
                        </First>
                        <Second><Icon><TfiFlagAlt  style={{color: 'blue', fontSize: '45px', fontWeight: '200'}}/></Icon>
                            <Write>
                                <h4 style={{margin: '0px', textAlign: 'left', fontSize: '23px', fontWeight: '500'}}>
Easy To Customize</h4>
                                <p style={{marginTop: '5px', textAlign: 'left', fontSize: '17px', fontWeight: '390', color : 'gray'}}>Lorem ipsum dolor sit amet elit</p>
                            </Write>

                        </Second>
                        <Third>
                        <Icon><AiOutlineThunderbolt style={{color: '#FF7511', fontSize: '45px', fontWeight: '200'}}/></Icon>
                            <Write>
                                <h4 style={{margin: '0px', textAlign: 'left', fontSize: '23px', fontWeight: '500'}}>
Bootstrap 3</h4>
                                <p style={{marginTop: '5px', textAlign: 'left', fontSize: '17px', fontWeight: '390', color : 'gray'}}>Lorem ipsum dolor sit amet elit</p>
                            </Write>
                        </Third>
                    </Card>
                    <Img src= {pic1}/>
                    <Card>
                    <First>
                    <Icon><TfiPalette style={{color: '#DC64FF', fontSize: '45px', fontWeight: '200'}}/></Icon>
                            <Write>
                                <h4 style={{margin: '0px', textAlign: 'left', fontSize: '23px', fontWeight: '500'}}>DIFFERENT COLORS</h4>
                                <p style={{marginTop: '5px', textAlign: 'left', fontSize: '17px', fontWeight: '390', color : 'gray'}}>Lorem ipsum dolor sit amet elit</p>
                            </Write>
                    </First>
                        <Second>

                        <Icon><TfiWorld style={{color: '#56D6E5', fontSize: '45px', fontWeight: '200'}}/></Icon>
                            <Write>
                                <h4 style={{margin: '0px', textAlign: 'left', fontSize: '23px', fontWeight: '500'}}>
SEO FRIENDLY</h4>
                                <p style={{marginTop: '5px', textAlign: 'left', fontSize: '17px', fontWeight: '390', color : 'gray'}}>Lorem ipsum dolor sit amet elit</p>
                            </Write>
                        </Second>
                        <Third>
                        <Icon><FaMicrophoneAlt style={{color: '#FF936F', fontSize: '45px', fontWeight: '200'}}/></Icon>
                            <Write>
                                <h4 style={{margin: '0px', textAlign: 'left', fontSize: '23px', fontWeight: '500'}}>
24/7 SUPPORT</h4>
                                <p style={{marginTop: '5px', textAlign: 'left', fontSize: '17px', fontWeight: '390', color : 'gray'}}>Lorem ipsum dolor sit amet elit</p>
                            </Write>
                        </Third>
                    </Card>

                </Bottom>
            </Wrapper>
           </Container>
        </div>
    )
}

export default Features;


const  Icon = styled.div`
width: 100px;
height: 50px;
font-size: 100px;
font-weight: 300;
display: flex;
justify-content: center;
align-items: center;
`
const  Write = styled.div`
width: 240px;
height: 50px;
/* background-color: yellow; */
display: flex;
justify-content: center;
/* align-items: center; */
flex-direction: column;


` 
const  Third = styled.div` 
width: 350px;
height: 130px;
border-radius: 20px;
box-shadow: 1px 1px 1px silver;
background-color: white;
margin-left: 40px;
display: flex;
align-items: center;
justify-content: center;
&:hover{
    color: #E74C3C;
    /* transform: scale(1.05); */
    transition: all ease-in-out 350ms;
}
`
const Second = styled.div`
width: 350px;
height: 130px;
border-radius: 20px;
box-shadow: 1px 1px 1px silver;
background-color: white;
margin-right: 40px;
display: flex;
align-items: center;
justify-content: center;
&:hover{
    color: #E74C3C;
    /* transform: scale(1.05); */
    transition: all ease-in-out 350ms;
}
`
const First = styled.div`
width: 350px;
gap: 0px;
box-shadow: 1px 1px 1px silver;
height: 130px;
border-radius: 20px;
background-color: white;
margin-left: 40px;
display: flex;
align-items: center;
justify-content: center;
&:hover{
    color: #E74C3C;
    /* transform: scale(1.05); */
    transition: all ease-in-out 350ms;
}
`
const Img = styled.img``


const Card = styled.div`
height: 100%;
width: 400px;
/* background-color: green; */
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
gap: 45px;
@media screen and (max-width: 768px){
 display: flex;
 justify-content: space-evenly;
 align-items: center;
}
`

const Bottom = styled.div`
width: 100%;
height: 85%;
/* background-color: red; */
display: flex;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 768px){
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
}
`

const Line1 = styled.div`
width: 30px;
height: 2px;   
background-color: grey;
`
const Line = styled.div`
width: 30px;
height: 2px;
background-color: #ED7569;
`
const Circle = styled.div`
width: 10px;
height: 10px;
background-color: #ED7569;
border-radius: 100px;
`
const Shape = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const Top = styled.div`
width: 85%;
height: 25%;
/* background-color: yellowgreen; */
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
h2{
    font-size: 37px;
    font-weight: 600;
}
span{
    color: #ED7569;
}p{
    font-size: 13px;
    font-weight: 300px;
    /* color: grey; */
}
`
const Wrapper = styled.div`
width: 95%;
height: 95%;
/* background-color: grey; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
const Container = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${pic});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`