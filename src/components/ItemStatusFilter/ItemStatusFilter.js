import React from 'react';
import './style.css';

const ItemStatusFilter = ({onToggleItemsStatus, statusFilter}) => {
    let itemClasses = 'btn btn-outline-secondary';

    return (
        <div className="btn-group">
            <button type="button"
                    className={(statusFilter === 'all') ? itemClasses + ' active' : itemClasses}
                    onClick={() => {onToggleItemsStatus('all')}}>All
            </button>
            <button type="button"
                    className={(statusFilter === 'active') ? itemClasses + ' active' : itemClasses}
                    onClick={() => {onToggleItemsStatus('active')}}>Active
            </button>
            <button type="button"
                    className={(statusFilter === 'done') ? itemClasses + ' active' : itemClasses}
                    onClick={() => {onToggleItemsStatus('done')}}>Done
            </button>
        </div>
    )
};

export default ItemStatusFilter;