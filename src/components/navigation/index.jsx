
"use client";
import {BtnList} from "@/app/data";
import NavButton from "@/components/navigation/NavButton";

const Navigation = () => {
    const angleIncrement = 360 / BtnList.length;
    return(
        <div className={'w-full fixed h-screen flex items-center justify-center'}>
            <div className={"w-max flex items-center justify-between relative"}>
                {
                    BtnList.map((btn, idx) => {
                        const angleRad = (idx * angleIncrement * Math.PI) / 180;
                        const radius = 'calc(20vw - 1rem)'
                        const x = `calc(${radius}*${Math.cos(angleRad)})`
                        const y = `calc(${radius}*${Math.sin(angleRad)})`
                        //console.log(idx, angleRad, radius, x, y)
                        return <NavButton key={btn.label} x={x} y={y} {...btn} />
                        // <button key={idx} className={'absolute'} style={{
                        //     transform: `translate(${x}, ${y})`
                        // }}>{btn.label}</button>
                    })
                }
            </div>
        </div>
    )
}
export default Navigation