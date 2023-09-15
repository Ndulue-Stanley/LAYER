import { styled } from "styled-components";
import pic from '../Assets/big-screen.png'
import pic1 from '../Assets/small-screen.png'


const How = ()=>{
    return(
        <div>
            <Container>
                <Wrapper>
                        <Img>
                        <Img2 >
                        <Img1 src = {pic1}/>
                        </Img2>
                       
                        </Img>
                        <Side>
                        <Top>
                    <h2>HOW  IT <span>WORKS</span></h2>
                    <Shape>
                        <Circle/>
                        <Line/>
                        <Line1/>
                    </Shape>
                    <p style={{textAlign: 'left'}}>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum alias, voluptates maxime necessitatibus natus enim adipisci quis esse, illo id accusamus velit, porro unde explicabo?</p>
                </Top>
                            <Middle>
                                <Head>Benefits of App</Head>
                                <Boxes>
                                    <Box1>
                                        <Box>
                                            <Logo></Logo>
                                            <Write>
                                                <h2 style={{margin: '0px'}}>
Notifications</h2>
                                        <p style={{margin: '0px' , color: 'gray'}}>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit</p>
                                            </Write>
                                        </Box>
                                        <Box>
                                        <Logo></Logo>
                                            <Write>
                                                <h2 style={{margin: '0px'}}>
24/7 Support</h2>
                                        <p style={{margin: '0px' , color: 'gray'}}>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit</p>
                                            </Write>
                                        </Box>
                                    </Box1>
                                    <Box2>
                                    <Box>
                                            <Logo></Logo>
                                            <Write>
                                                <h2 style={{margin: '0px'}}>
Favourites</h2>
                                        <p style={{margin: '0px' , color: 'gray'}}>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit</p>
                                            </Write>
                                        </Box>
                                        <Box>
                                        <Logo></Logo>
                                            <Write>
                                                <h2 style={{margin: '0px'}}>Wishlist
    </h2>
                                        <p style={{margin: '0px', color: 'gray'}}>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit</p>
                                            </Write>
                                        </Box>
                                    </Box2>
                                </Boxes>
                            </Middle>
                            <End>
                                <Button>Learn more</Button>
                            </End>
                        </Side>
                </Wrapper>
            </Container>
        </div>
    )
}

export default How;

const Button = styled.button`
padding: 20px 30px;
background-color:  #ED7569;
border-radius: 50px;
border: none;
color: white;
&:hover{
    background-color: black;
    transform: scale(1.05);
    cursor: pointer;
}
`
const Write = styled.div`
width: 290px;
`
const Logo = styled.div`
width: 50px;
height: 50px;
background-color: cadetblue;
border-bottom-right-radius: 0px;
border-bottom-left-radius: 50px;
border-top-right-radius: 50px;
border-top-left-radius: 50px;
`
const Box = styled.div`
width: 350px;
height: 50%;
// background-color: gray;
display: flex;
justify-content: space-between;
align-items: center;
gap: 20px;

`
const Box2 = styled.div`
width: 350px;
height: 50%;
// background-color: gray;
display: flex;
justify-content: space-between;
align-items: center;
gap: 20px;
`
const Box1 = styled.div`
width: 100%;
height: 50%;
// background-color: yellow;
display: flex;
align-items: center;
gap: 30px;
`
const Boxes = styled.div`
width: 100%;
height: 300px;
// background-color: green;
`
const Head = styled.div`
font-size: 35px;
font-weight: 500;
`
const End = styled.div``
const Middle = styled.div`
width: 100%;
height: 25%;
// background-color: red;
`
// const Top = styled.div``
const Side = styled.div`
height: 100%;
width: 60%;
@media screen {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
}
`

const Img1 = styled.img`
/* width: 100%; */
height: 95%;
margin-right: 45px;
`
const Img2 = styled.div`
width: 53%;
height: 100%;
background-image: url(${pic});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
object-fit: contain;
display: flex;
justify-content: center;
align-items: last baseline;
`
const Img = styled.div`
width: 40%;
height: 95%;
display: flex;
justify-content: center;
align-items: center;

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
width: 100%;
height: 25%;
// background-color: yellowgreen;
display: flex;

flex-direction: column;
margin-right: 0px;
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
    line-height: 2;

}
`
const Wrapper = styled.div`
height: 95%;
width: 95%;
// background-color: grey;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
@media screen and (max-width: 768px){
    display: flex;
    align-items    : center;
    justify-content: space-around;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 30px;
}
`
const Container = styled.div`
height: 100%;
width: 100%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;
`