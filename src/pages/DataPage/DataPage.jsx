import React, { useMemo, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component';
import './DataPage.style.css';

const FilterComponent = ({ filterText, onFilter, onClear }) => {
    return (
        <>
            <input
                id="search"
                type='text'
                placeholder="Filter By Name"
                aria-label="Search Input"
                value={filterText}
                onChange={onFilter} />
            <button type="button" onClick={onClear}>X</button>
        </>
    )
}

/* This is the columns for the table. */
export const DataPage = ({ employees }) => {

    const columns = [
        {
            name: 'First Name',
            selector: row => row.firstName,
            sortable: true,
            allowOverflow: true,
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
            sortable: true,
            allowOverflow: true,
        },
        {
            name: 'Start Date',
            selector: row => row.startDate,
            sortable: true,
            allowOverflow: true,
        },
        {
            name: 'Department',
            selector: row => row.department,
            sortable: true,
            allowOverflow: true,
        },
        {
            name: 'Date of Birth',
            selector: row => row.dateOfBirth,
            sortable: true,
            allowOverflow: true,
        },
        {
            name: 'Street',
            selector: row => row.street,
            sortable: true,
            allowOverflow: true,
        },
        {
            name: 'City',
            selector: row => row.city,
            sortable: true,
            allowOverflow: true,
        },
        {
            name: 'State',
            selector: row => row.state,
            sortable: true,
            allowOverflow: true,
        },
        {
            name: 'Zip Code',
            selector: row => row.zipCode,
            sortable: true,
            allowOverflow: true,
        },
    ];

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = employees.filter((item) =>
        (item.firstName && item.lastName) && (item.firstName.toLowerCase().includes(filterText.toLowerCase()) || item.lastName.toLowerCase().includes(filterText.toLowerCase())),
    );

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);

/* Returning the HTML for the page. */
    return (
        <>
            <header className="title">
                <h1>HRnet</h1>
            </header>
            <div id="employee-div" className="container">
                <h2>Current Employees</h2>
                <Link to={"/"}>Home</Link>
                <DataTable
                    className='data-table'
                    style={{ margin: '16px' }}
                    title="Current Employees"
                    columns={columns}
                    data={filteredItems}
                    pagination
                    paginationResetDefaultPage={resetPaginationToggle}
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                    selectableRows
                    persistTableHead
                />
            </div>
        </>
    )
}

/**
 * This function takes the state of the Redux store as an argument and returns an object that maps the
 * state to the props of the component.
 * @returns The employees array from the store.
 */
const mapStateToProps = (state) => {
    return {
        employees: state.employees
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(DataPage)