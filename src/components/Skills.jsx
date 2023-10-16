import React from "react";
import styled from "styled-components"; 

const SkillsContainer = styled.div`
    h1 {
        font-size: 4rem;
        margin-bottom: 1rem;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        padding: 0;
        margin: 0;
    }

    li {
        margin-bottom: 0.5rem;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
    }

    img {
        width: 50%;
        margin-bottom: 1rem;
    }

    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
`;

const Skills = () => {
    return (
        <SkillsContainer>
            <h1>Skills</h1>
            <ul>
                
            <li>
                    <img src="https://yt3.googleusercontent.com/h0n8phylgeZKuMlGmcPhkOM8rkV1IHTr5oumqZL581iQCSeMeFrnmYB69a69RQAQoVqgxM5ENX8=s900-c-k-c0x00ffffff-no-rj" alt="DSA" />
                    <p>Data Structures and Algorithms</p>
                </li>
                <li>

                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_168209.png" alt="Java" />
                    <p>Firebase</p>
                </li>
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="C++" />
                    <p>C++</p>
                </li>
                
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" alt="JavaScript" />
                    <p>JavaScript</p>
                </li>
                
            </ul>
        </SkillsContainer>
    );
};

export default Skills;

