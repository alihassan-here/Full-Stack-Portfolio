import { Typography } from '@mui/material';
import React from 'react';
import "./about.css";

const about = () => {
    return (
        <div className="about">
            <div className="aboutContainer">
                <Typography>This is sample quote</Typography>
            </div>
            <div className="aboutContainer2">
                <div>
                    <img
                        src="https://avatars.githubusercontent.com/u/25050652?v=4"
                        alt="ali"
                        className="aboutAvatar"
                    />
                    <Typography
                        variant="h4"
                        style={{ margin: "1vmax 0", color: "black" }}
                    >Ali Hassan</Typography>
                    <Typography>Full Stack Developer</Typography>
                    <Typography style={{ margin: "1vmax 0" }}>I am a Software Developer</Typography>
                </div>
                <div>
                    <Typography
                        style={{
                            wordSpacing: "5px",
                            lineHeight: "50px",
                            letterSpacing: "5px",
                            textAlign: 'right'
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi iure, expedita, nulla reprehenderit aspernatur quod sint molestiae repellat optio numquam aliquid! Reiciendis ut facere corporis quis recusandae. Cumque, facilis vel.
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default about;