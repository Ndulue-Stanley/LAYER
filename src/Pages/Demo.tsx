import { styled } from "styled-components";
import pic from '../Assets/bg-3.jpg'
import vid from '../Assets/video_bg.png'

const Demo = () =>{
    return (
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
                    <Img src = {vid}/>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Demo;

const Img = styled.img`
@media screen and (max-width: 500px){
        width: 65%;
    }
`
const Bottom = styled.div`
flex-wrap: wrap;
@media screen and (max-width: 500px){
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
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
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
@media screen and (max-width: 500px){
    width: 100%;
}
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
@media screen and (max-width: 500px){
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }
`

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 70px;
    flex-wrap: wrap;
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${pic});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    margin-top: 100px;
`
