import React, {  } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CDataTable, CBadge } from '@coreui/react'
import usersData from '../../users/UsersData'

const fields = ['item#','name','category','cost', 'quantity', 'registered']

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}


const List = () => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Products List
                </div>
                <div className="card-body">
                    <CRow>
                        <CCol>
                            <CDataTable
                                items={usersData}
                                fields={fields}
                                hover
                                striped
                                bordered
                                size="sm"
                                itemsPerPage={10}
                                pagination
                                scopedSlots={{
                                    'status':
                                        (item) => (
                                            <td>
                                                <CBadge color={getBadge(item.status)}>
                                                    {item.status}
                                                </CBadge>
                                            </td>
                                        )
                                }}
                            />
                        </CCol>
                    </CRow>
                </div>
            </div>
        </>
    )
}

export default List
