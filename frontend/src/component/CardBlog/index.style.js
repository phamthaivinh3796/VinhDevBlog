import Styles from "styled-components";

export default Styles.div`
    .image-card{
        background-image: url(${(props) => props.image});
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        width:100%;
        height:250px;
    }
`;
