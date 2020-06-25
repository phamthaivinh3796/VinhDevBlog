import Styles from "styled-components";

export default Styles.div`
    .detail-container{
        padding-top : 100px;
    }
    .image-card{
        background-image: url(${(props) => props.image});
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        width:50%;
        height:350px;
    }
    .content-container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .content{
        font-size:1.2em;
        margin-top:0.5em;
        width:85%;
        font-weight:500;
        text-align: justify;
    }
`;
