import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const Head = () => {
    return <h1 className='cardHead'>CREDIT CARD</h1>
}
const Chip = () => {
    return <img alt='cardChip' src='http://jamesdelaney.ie/dev/chip.png' className='cardChip'/>
}
const CardNumber=() => {
    return <h2 className='cardNumber'>7351 3472 7641 2834</h2>
}
const MonthYear=()=>{
    return <span className='month'>MONTH / YEAR</span>
}
const ExpDate=()=>{
    return <span className='expDate'>11/50</span>
}
const ValidTxt=()=>{
    return <span className='valThru'>VALID THRU > </span>
}
const ValDiv=()=>{
    return <div className='expdatefull'>
             <MonthYear/>
             <div className='valdt'>
                <ValidTxt/>
                <ExpDate/>
             </div>
            </div>
}
const Holder=()=>{
    return <h3 className='holder'>CARD HOLDER</h3>
}
const VisaMaster=()=>{
    return <img className='master' alt='master visa' src='http://2.bp.blogspot.com/-U9vdZ7rRswA/TxC_txd_QvI/AAAAAAAAAAs/nyUWpH6c6Ic/s1600/page.jpg'/>
}
const FullCard=()=>{
    return <div className='all'>
    <Head/>
    <Chip/>
    <div className='lastLine'>
        <div className='left'>
            <CardNumber/>
            <ValDiv/>
            <Holder/>
        </div>
        <VisaMaster/>
    </div>
    </div>
}

ReactDOM.render(
    <FullCard/>,document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
