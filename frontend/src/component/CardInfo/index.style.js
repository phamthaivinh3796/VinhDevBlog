import Styles from "styled-components";
export default Styles.div`
    .card-container{
        display: flex;
        flex-direction:column;
        align-items:center;
        border: none;
    }
    .img-info{
        background-image: url(${(props) => props.avatar});
        background-position: center center;
        background-size:cover;
        background-repeat:no-repeat;
        border-radius:50%;
        height: 100px;
        width:100px;
    }
    .channel-info{
        width: 2.5em;
        height: 2.5em;
        display: flex;
        align-items:center;
        justify-content:center;
        border:  1px solid #dff0e3;
        border-radius: 50%;
        cursor:pointer;
        .channel-icon{
            font-size: 1.1em;
        }
    }
    .channel-active{
        font-size: 1.3em;
        color:blue;
    }    
`;
