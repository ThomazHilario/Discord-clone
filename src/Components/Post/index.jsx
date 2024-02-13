import styled from "styled-components";

export const Post = styled.div`
    display:flex;
    gap:15px;

    .profile{
        display:flex;
        flex-direction:column;
        justify-content:start;

        img{
            height:35px;
            width:35px;
            border-radius:50%;
            object-fit:cover;
        }
    }

    .mensageUser{
        h4{
            font-size:16px;
            font-family:arial;
            font-weight:500;
            color:rgba(123, 53, 222, 0.7);
        }

        p{
            font-family:inter;
            color:#CFCFCA;
            font-weight:400;
            margin:5px 0px;
        }

        a{
            font-size:15px;
            color:#349EE0;
            font-family:inter;
            font-weight:lighter;
            cursor:pointer;
        }

        .contentLink{
            display:flex;
            flex-direction:column;
            aling-items:start;
            gap:3px;
            padding:10px 10px;
            margin:10px 0px;
            width:420px;
            border-radius:8px;
            background-color:rgba(36,36,36,0.4);
            border-left:4px solid red;            
            
            .titlePlatform{
                color:#9E9E9E;
                font-size:13px;
            }

            .creatorContent{
                font-family:inter;
                font-weight:400;
                color:white;
                font-size:14px;
            }

            .titleContent{
                color:#349EE0;
                text-decoration:none;
                font-weight:bold;
            }

            img{
                height:220px;
                width:400px;
                border-radius:10px;
                margin:5px 0;
            }
        }
    }
`