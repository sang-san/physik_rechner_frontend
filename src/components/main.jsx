import { useState, useEffect } from "react"
import Rechart from "./rechart";
import BasicTable from "./table";


 
export default function Main () {

    const [TMax, setTMax] = useState(30);
    const [DeltaT, setDeltaT] = useState(1.0);
    const [M, setM] = useState(80);
    const [G, setG] = useState(-9.8);
    const [CW, setCW] = useState(0.9);
    const [A, setA] = useState(0.3);
    const [P, setP] = useState(1.3);
    const [T, setT] = useState(0.0);
    const [V_O, setV_O] = useState(0.0);
    const [X_0, setX_0] = useState(2000);
    const [F_0, setF_0] = useState(0.0);

    const [DataList, setDataList] = useState([]);

    var getParams = () => {
        return "t_max=" + TMax + "&delta_t=" + DeltaT + "&m=" + M + "&g=" + G + "&c_w=" + CW + "&A=" + A + "&p=" + P + "&t=" + T + "&v_0=" + V_O + "&x_0=" + X_0 + "&F_0=" + F_0
    }

    var getData = () => {
        console.log(getParams())
        fetch("http://3.70.45.113//freierFall?" + getParams(),{
            method: "GET",
            headers: {

            },
            })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setDataList(result)
                
                },
                (error) => {
                console.log(error);
                }
            )
    }


    return (
        <div>
        <div style={{ float: "left", margin: "50px"}}>
            <h1 style={{ marginBottom: "20px"}}>
                Physik Rechner <small className="text-muted">Raphael Hauser - Simon Hees</small>
            </h1>

            <div style={{ "marginTop": "10px", float: ""}}>
                <span>Delta t: <input value={DeltaT} onInput={
                    e => setDeltaT(e.target.value)
                } style={{ width: "47px", height: "70%"}} /> Masse m: <input value={M} onInput={
                    e => setM(e.target.value)
                } style={{ width: "47px", height: "70%"}} /> Gewichtskraft g: <input value={G} onInput={
                    e => setG(e.target.value)
                } style={{ width: "47px", height: "70%"}} /> cw: <input value={CW} onInput={
                    e => setCW(e.target.value)
                } style={{ width: "47px", height: "70%"}} /> Angriffsfäche a: <input value={M} onInput={
                    e => setA(e.target.value)
                } style={{ width: "47px", height: "70%"}} />  </span>
                
            </div>
            <div style={{ float: "", marginTop: "10px"}}>
                <span>Luftdichte P: <input value={P} onInput={
                    e => setP(e.target.value)
                } style={{ width: "47px", height: "70%"}} /> t Start: <input value={T} onInput={
                    e => setT(e.target.value)
                } style={{ width: "47px", height: "70%"}} /> t Maximum: <input value={TMax} onInput={
                    e => setTMax(e.target.value)
                } style={{ width: "47px", height: "70%"}} /> x Start: <input value={X_0} onInput={
                    e => setX_0(e.target.value)
                } style={{ width: "47px", height: "70%"}} /></span>
            </div>
            <button onClick={ getData } type="button" class="btn btn-primary" style={{ width: "100%", marginTop: "20px", marginBottom: "5px"}}>Neu Berechnung</button>
            <BasicTable rows={DataList}></BasicTable>

        </div>
        <div style={{ float: "right", margin: "50px", marginTop: "50px"}}>
            <Rechart name={"v"} rows={DataList.map(l => ({t: l[0], value: l[1]}))} />
            <Rechart name={"x"} rows={DataList.map(l => ({t: l[0], value: l[2]}))} />
            <Rechart name={"f"} rows={DataList.map(l => ({t: l[0], value: l[3]}))} />
        </div>
        </div>
    )
}