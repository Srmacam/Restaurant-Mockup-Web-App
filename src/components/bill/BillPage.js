import React from 'react';
import { TopNav } from '../common/Topnav';
import { Chatbar } from '../common/Chatbar';
import {BillTable} from './BillTable';

class BillPage extends React.Component {

    render() {
        return (
            <div className = "billBG">
                <TopNav />
                <BillTable />
                <Chatbar />
            </div>
            
        );
    }
}

export default BillPage;
