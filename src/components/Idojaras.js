import React from "react";

export default function Idojaras({ idojarasInfo }) {
    if (idojarasInfo === "") {
        return <article className="col mt-5 text-center">
            <h1>Válassz egy várost</h1>
        </article>;
    }

    const varosInfo = idojarasInfo.varos;
    const napiInfo = idojarasInfo.idojaras.daily;
    const mertekegyseg = idojarasInfo.idojaras.daily_units;
    const idojarasErtekek = [];

    for (let i = 0; i < 7; i++) {
        idojarasErtekek.push(<React.Fragment key={i}>
            <tr>
                <td>{napiInfo.time[i]}</td>
                <td>{napiInfo.temperature_2m_max[i]} {mertekegyseg.temperature_2m_max}</td>
                <td>{napiInfo.temperature_2m_min[i]} {mertekegyseg.temperature_2m_min}</td>
                <td>{napiInfo.precipitation_sum[i]} {mertekegyseg.precipitation_sum}</td>
                <td>{napiInfo.wind_speed_10m_max[i]} {mertekegyseg.wind_speed_10m_max}</td>
                <td>{napiInfo.wind_direction_10m_dominant[i]} {mertekegyseg.wind_direction_10m_dominant}</td>
            </tr>
        </React.Fragment>)
    }

    return <React.Fragment><hr className="mt-5"
    />
        <article className="col">
            <h1>{varosInfo.name}</h1>
        </article>
        <article className="col">
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Dátum</th>
                        <th>Napi max</th>
                        <th>Napi min</th>
                        <th>Csapadék</th>
                        <th>Szélsebesség</th>
                        <th>Szélirány</th>
                    </tr>
                </thead>
                <tbody>{idojarasErtekek}</tbody>
            </table>
        </article>
    </React.Fragment>;
}