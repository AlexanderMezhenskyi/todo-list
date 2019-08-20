import React from 'react';
import './style.css';
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

const TopPanel = ({onSearch, term, onToggleItemsStatus, statusFilter}) => {
    return (
        <div className="top-panel d-flex mb-3">
            <SearchPanel onSearch={onSearch} term={term}/>
            <ItemStatusFilter onToggleItemsStatus={onToggleItemsStatus} statusFilter={statusFilter}/>
        </div>
    )
};

export default TopPanel;