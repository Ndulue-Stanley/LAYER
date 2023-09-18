import { styled } from "styled-components";
import pic from '../Assets/about-4.png'
import {MdOutlineScreenshotMonitor} from 'react-icons/md'
import {CiSettings} from 'react-icons/ci'
import {HiSpeakerphone} from 'react-icons/hi'

const Welcome  = () =>{
    return (
        <div>
          <Container>
            <Wrapper>
                <Top>
                    <h2>WELCOME TO <span>LAYER</span></h2>
                    <Shape>
                        <Circle/>
                        <Line/>
                        <Line1/>
                    </Shape>
                    <p style={{textAlign: 'center'}}>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Top>
                <Bottom>
                    <Text>
                        <First>
                       
                        <Write>
                            <h3>BOOTSTRAP 3.2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, saliqua . </p>
                            </Write>
                            <Cicle><MdOutlineScreenshotMonitor color="white" style={{fontSize: '35px'}}/></Cicle>
                        </First>
                        <First>
                       
                        <Write>
                            <h3>CREATIVE DESIGN</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, saliqua . </p>
                            </Write>
                            <Cicle1><CiSettings color="white" style={{fontSize: '35px'}}/></Cicle1>
                        </First>
                        <First>
                       
                        <Write>
                            <h3>EASY TO USE</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, saliqua . </p>
                            </Write>
                            <Cicle2><HiSpeakerphone color="white" style={{fontSize: '35px'}}/></Cicle2>
                        </First>
                    </Text>
                    <Img src= {pic}/>
                </Bottom>
            </Wrapper>
          </Container>
        </div>
    )
}

export default Welcome;

const Cicle2 = styled.div`
width: 70px;
height: 70px;
background: rgb(243,63,104);
background: linear-gradient(25deg, rgba(243,63,104,1) 34%, rgba(252,102,80,1) 76%);
border-radius: 100px;
display: flex;
align-items: center;
justify-content: center;
`
const Cicle1 = styled.div`
width: 70px;
height: 70px;
background: rgb(236,96,68);
background: linear-gradient(25deg, rgba(236,96,68,1) 34%, rgba(250,130,0,1) 76%);
border-radius: 100px;
display: flex;
align-items: center;
justify-content: center;
`
const Cicle = styled.div`
width: 70px;
height: 70px;
background: rgb(202,108,210);
background: linear-gradient(286deg, rgba(202,108,210,1) 22%, rgba(130,0,209,1) 76%);;
border-radius: 100px;
display: flex;
align-items: center;
justify-content: center;
`
const Write = styled.div`
    transition: all 350ms ease;
text-align: right;
margin-right: 7px;;
@media screen and (max-width: 768px) {
    /* flex-wrap: wrap;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50%; */
}

`
const First = styled.div`
display: flex;
align-items: center;
/* justify-content: center; */
/* background-color: red; */
gap: 20px;
`
const Img = styled.img`
@media screen and (max-width: 768px) {
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 50%; */
}
`
const Text = styled.div`
width: 550px;
height: 590px;
/* background-color: blue; */
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
@media screen and (max-width: 768px) {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
const Bottom = styled.div`
width: 85%;
height: 25%;
/* background-color: yellowgreen; */
display: flex;
gap: 50px;
margin-top: 0px;
@media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin-top: 0px;
}
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
    color: grey;
}
`
const Wrapper = styled.div`
width:100%;
height: 100%;
/* background-color: grey; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 100px;
flex-wrap: wrap;
@media screen and (max-width: 768px) {
    width: 100%;
}
`
const Container = styled.div`
width: 100%;
height: 100%;
background-color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
`