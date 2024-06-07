import React from "react";
import { render, screen } from "@testing-library/react"
import MissionsList from "./MissionsList";


const missions = [
    {
        mission_name: "Thaicon",
        mission_id: "901B7E0"
    },
    {
        mission_name: "Telstar",
        mission_id: "F4F83DE"
    },
]

test('missions list shows data when rerendered with new missions data', () => {
    const { rerender } = render(<MissionsList errros="" missions={[]}/>)
    let missionsObjects = screen.queryAllByTestId("mission")
    console.log(missionsObjects)
    expect(missionsObjects).toHaveLength(0)
    
    rerender(<MissionsList errros="" missions={missions}/>)
    missionsObjects = screen.queryAllByTestId('mission')
    expect(missionsObjects).toHaveLength(2)
})