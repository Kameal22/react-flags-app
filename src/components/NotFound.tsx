import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundDiv = styled.div`
    width: 100%;
    min-height: 90vh;
    background-color: ${({ theme }) => theme.background.container};
    color: ${({ theme }) => theme.textColor.container};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div{
    position: absolute;
    top:25%; 
    left:50%; 
    transform:translate(-50%, -50%);
    text-align: center;
    }

    p{
        margin-top: 2vh;
        font-size: .95em
    }
`

const NotFount: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/', { replace: true })
        }, 1500)
    }, [])
    return (
        <NotFoundDiv>
            <div>
                <h1>Page not found</h1>
                <p>Redirecting..</p>
            </div>
        </NotFoundDiv>
    )
}

export default NotFount;;