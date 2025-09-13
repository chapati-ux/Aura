import React from "react";
import CardSwap, { Card } from "./CardSwap";
import { Color } from "ogl";
import s1 from '../assets/Services/s1.jpg'
const Service1 = () => {
  return (
    <div>
      <div className="h-[100vh] w-[100%] bg-amber-100 overflow-hidden">
        <div
          style={{
            height: "100vh",
            width:"100%",
            position: "relative",
          }}
        >
          <CardSwap 
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
            className="absolute top-0 z-10"
          >
            <Card className="">
              <h3 className="bg-yellow-400 rounded-2xl">Card 1</h3>
              <img className="object-cover" src={s1} alt="" />
            </Card>
            <Card>
              <h3 className="bg-yellow-400 rounded-2xl">Card 2</h3>
              <img className="object-cover" src={s1} alt="" />
            </Card >
            <Card >
              <h3 className="bg-yellow-400 rounded-2xl">Card 3</h3>
              <img className="object-cover" src={s1} alt="" />
            </Card>
            <Card >
              <h3 className="bg-yellow-400 rounded-2xl">Card 4</h3>
              <img className="object-cover" src={s1} alt="" />
            </Card>
            <Card >
              <h3 className="bg-yellow-400 rounded-2xl">Card 5</h3>
              <img className="object-cover" src={s1} alt="" />
            </Card>
          </CardSwap>
        </div>
      </div>
    </div>
  );
};

export default Service1;
