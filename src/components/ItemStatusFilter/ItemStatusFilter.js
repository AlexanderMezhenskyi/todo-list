import React from 'react';
import ItemsStatusExtraFilter from '../ItemsStatusExtraFilter/ItemsStatusExtraFilter'
import './style.css';

const ItemStatusFilter = ({onToggleItemsStatus, statusFilter}) => {
    const filters = [
        {code: 'all', label: 'All'},
        {code: 'active', label: 'Active'},
        {code: 'done', label: 'Done'},
        {code: 'important', label: 'Important'},
        {code: 'favorite', label: 'Favorite'}
    ];

    return (
        <div>
            <div className="btn-group">
                {filters.map((el) => {
                    const cls = el.code === statusFilter ? 'btn-info' : 'btn-outline-secondary';

                    return (
                        <button key={el.code}
                                type="button"
                                onClick={() => {onToggleItemsStatus(el.code)}}
                                className={`btn ${cls}`}
                        >
                            {el.label}
                        </button>
                    )
                })}
            </div>
            <ItemsStatusExtraFilter statusFilter={statusFilter}/>
        </div>
    )
};

export default ItemStatusFilter;