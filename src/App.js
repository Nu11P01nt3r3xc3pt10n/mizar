import './App.css';

import Table from "./components/Table"
import React from "react";
import makeData, {columnsValue} from "./utils";
function App() {

    const columns = React.useMemo(
        () => columnsValue,[]
    )

    const data = React.useMemo(() => makeData(20), [])


    return (
    <div className="App">
        <div className="title"><p>Excercise</p></div> 
        <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
