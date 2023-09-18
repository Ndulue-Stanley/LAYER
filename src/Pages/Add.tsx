import { styled } from "styled-components";
import pic from "../Assets/about-4.png";
import pix from '../Assets/about-3.png'

const Add =()=>{
    return(
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
                <Middle>
                
                    <Card>
                    <Icon></Icon>
                       <Write>
                       <h3 style={{margin: '0px'}}>BOOTSTRAP 3.2</h3>
                        <p style={{margin: '5px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit est is</p>
                       </Write>
                    </Card>
                    <Card>
                    <Icon></Icon>
                       <Write>
                       <h3 style={{margin: '0px'}}>BOOTSTRAP 3.2</h3>
                        <p style={{margin: '5px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit est is</p>
                       </Write>
                    </Card>
                    <Card>
                    <Icon></Icon>
                       <Write>
                       <h3 style={{margin: '0px'}}>BOOTSTRAP 3.2</h3>
                        <p style={{margin: '5px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit est is</p>
                       </Write>
                    </Card>
                    <Card>
                    <Icon></Icon>
                       <Write>
                       <h3 style={{margin: '0px'}}>BOOTSTRAP 3.2</h3>
                        <p style={{margin: '5px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit est is</p>
                       </Write>
                    </Card>
                </Middle>
                <Img src = {pix}/>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Add;

const Write = styled.div`
margin-top: 40px;
color: white;
`
const Icon = styled.div`
width: 50px;
height: 50px;
border-radius: 100px;
background-color:#ED7569;
color: white;
position: absolute;
top: 0px;
`
const Card = styled.div`
width: 320px;
height: 150px;
/* background-color: yellow; */
border-top: 1px solid #ED7569;
border-left: 1px solid #ED7569;
border-right: 1px solid #ED7569;
display: flex;
align-items: center;
justify-content: center;
position: relative;
text-align: center;
flex-direction: column;
`
const Img = styled.img`
@media screen and (max-width: 500px){
 width : 65%;

}
`
const Middle = styled.div`
width: 100%;
height: 100%;
/* background-color: red;  */
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
@media screen and (max-width: 500px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 70px;
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
    color: white;
}
span{
    color: #ED7569;
}p{
    font-size: 13px;
    font-weight: 300px;
    color: white;
}
`

const Wrapper = styled.div`
height: 95%;
width: 99%;
background-color: rgba(0, 0, 0, 0.7);
display: flex; 
align-items: center;
justify-content: space-around;
flex-direction: column;
@media screen and (max-width: 500px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 70px;
}
`
const Container = styled.div`
width: 100%;
height: 100%;
background-image: url(${pic});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
background-attachment: fixed;
display: flex;
align-items: center;
justify-content: center;
margin-top: 100px;

`



