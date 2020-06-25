import Styles from "styled-components";

export default Styles.div`
    .header-container{
        background: ${(props) => (props.changecolor ? "#00b3c5" : "black")};
        width:100%;
        height: 80px;
        display: flex;
        justify-content: space-around;
        position:fixed;
        z-index:999;
        align-items: center;
        .logo-blog{
            color: white;
            font-size: 2.5em;
            width: 10%;
            font-weight: bold;
        }
        .menu{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            color: ${(props) => (props.changecolor ? "black" : "white")};;
            width: 80%;
            font-size: 1.2em;
            font-weight: bold;
            div{
                margin:0rem 0.5rem;
            }
        }
    }
    .color-black{
        color:black;
    }
`;
