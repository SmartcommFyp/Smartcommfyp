import React, { } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CDataTable, CBadge, CCard, CCardHeader, CCardBody, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CWidgetIcon } from '@coreui/react'
import usersData from '../../users/UsersData'
import { CChartBar } from '@coreui/react-chartjs/lib'
import CIcon from '@coreui/icons-react'

const fields = ['item#', 'name', 'units sold', 'revenue', 'total stock']

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}

const Statistics = () => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Product Statistics
                </div>
                <div className="card-body">
                    <CCard>
                        <CCardHeader>Monthly Valuation</CCardHeader>
                        <CCardBody>
                            <CRow>
                                <CCol xs="12" sm="6" lg="3">
                                    <CWidgetIcon text="units sold" header="$1.999,50" color="primary" iconPadding={false}>
                                        <CIcon width={24} name="cil-settings" />
                                    </CWidgetIcon>
                                </CCol>
                                <CCol xs="12" sm="6" lg="3">
                                    <CWidgetIcon text="estimated profit" header="$1.999,50" color="info" iconPadding={false}>
                                        <CIcon width={24} name="cil-laptop" />
                                    </CWidgetIcon>
                                </CCol>
                                <CCol xs="12" sm="6" lg="3">
                                    <CWidgetIcon text="revenue" header="$1.999,50" color="warning" iconPadding={false}>
                                        <CIcon width={24} name="cil-moon" />
                                    </CWidgetIcon>
                                </CCol>
                                <CCol xs="12" sm="6" lg="3">
                                    <CWidgetIcon text="total discount" header="$1.999,50" color="danger" iconPadding={false}>
                                        <CIcon width={24} name="cil-bell" />
                                    </CWidgetIcon>
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>
                    <CRow>
                        <CCol>
                            <CDropdown className="row justify-content-md-center">
                                <CDropdownToggle>
                                    Select Product
                                </CDropdownToggle>
                                <CDropdownMenu>
                                    <CDropdownItem>Sufi Banaspati</CDropdownItem>
                                    <CDropdownItem>jam e shireen</CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                            <CCard>
                                <CCardHeader>
                                    Sales Per Month
                                </CCardHeader>
                                <CCardBody>
                                    <CChartBar
                                        type="bar"
                                        datasets={[
                                            {
                                                label: 'GitHub Commits',
                                                backgroundColor: '#f87979',
                                                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                                            }
                                        ]}
                                        labels="months"
                                        options={{
                                            tooltips: {
                                                enabled: true
                                            }
                                        }}
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol>
                            <CCard>
                                <CCardHeader>
                                    Top Selling
                                </CCardHeader>
                                <CCardBody>
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
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                </div>
            </div>
        </>
    )
}

export default Statistics
