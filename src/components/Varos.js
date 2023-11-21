import React, { useState } from "react";

export default function Varos({frissitVaros}) {
    const [varosInfo, setVarosInfo] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        frissitVaros(varosInfo);
    }

    const handleChange = e => {
        setVarosInfo(e.target.value);
    }

    return <React.Fragment><article className="col text-center pb-5">
            <h1>- Időjárás előrejelzés -</h1>
        </article>
        <article className="col">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" name="varos" value={varosInfo} onChange={handleChange} placeholder="Város"/>
                </div>
                <div>
                    <button className="btn btn-primary w-100">Keresés</button>
                </div>
            </form>
        </article>
    </React.Fragment>;
}