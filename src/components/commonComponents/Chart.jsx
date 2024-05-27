import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
    { value: 5 },
    { value: 25 },
    { value: 10 },
    { value: 25 }];

const size = {
    width: 400,
    height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 15,
}));

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    const lineHeight = 10; // Adjust as needed
    const lines = React.Children.toArray(children);

    return (
        <>
        {lines.map((line, index) => (
                <StyledText
                    key={index}
                    x={left + width / 2}
                    y={top + height / 2 + index * lineHeight}
                >
                    {line}
                </StyledText>
            ))}
        </>
    );
}

export default function PieChartWithCenterLabel() {
    return (
        <>
            <h1></h1>
            <PieChart
                series={[{ data, innerRadius: 85 }]}
                {...size}
                colors={["#FFF500", "#205AEF", "#0F8805", "#EF5820"]}
            >
                <PieCenterLabel>
                    01:15
                    <br />
                    hours
                </PieCenterLabel>
            </PieChart>
        </>
    );
}
