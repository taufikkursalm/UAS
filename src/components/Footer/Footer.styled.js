// Mengimport react-router-dom dan styled components
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #FFFFFFFF;
`;
    
const FooterStyled = styled.div`
    .footer {
    background-color: #06D6A0;
    padding: 1rem;
    color: #ffffef;
    }

    ul {
    list-style-type: none;
    }

    li {
    margin-bottom: 1rem;
    }

    Link {
    color: #fff;
    text-decoration: none;
    }

    /* Medium Screen */
    @media (min-width: 768px) {
        .footer {
        align-items: center;
        justify-content: space-between;
        display: flex;
        direction: row;
        }
    
        ul {
            flex-direction: row;
            display: flex;
        }
        li {
            margin: 0 1rem;
        }
    }
`;

export { StyledLink, FooterStyled };