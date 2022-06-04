import React from 'react';
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const TimeLine = ({ timelines = [] }) => {
    return (
        <div>
            <Timeline position="alternate">
                {
                    timelines.map((timeline, index) => (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent>
                                3/22/2020
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <Event />
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6" component="h1">
                                    Title
                                </Typography>
                                <Typography variant="body2" component="p">
                                    description
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))
                }
            </Timeline>
        </div>
    )
}

export default TimeLine;