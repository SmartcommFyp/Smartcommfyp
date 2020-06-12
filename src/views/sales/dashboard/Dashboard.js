import React, { } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CDataTable, CBadge, CCard, CCardHeader, CCardBody, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CWidgetIcon, CWidgetProgress, CProgress } from '@coreui/react'
import usersData from '../../users/UsersData'
import { CChartBar } from '@coreui/react-chartjs/lib'
import CIcon from '@coreui/icons-react'

const fields = ['order#', 'status', 'date', 'sub total', 'shipping method', 'payment method', 'coupon code', 'discount amount']

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}

const Dashboard = () => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Statistics
                </div>
                <div className="card-body">
                    <CRow>
                        <CCol xs="12" sm="6" lg="3">
                            <CCard>
                                <CCardHeader>
                                    Sales Amount
                                </CCardHeader>
                                <CCardBody>
                                    <CWidgetIcon text="gross sales" header="$1.999,50" color="primary">
                                        <CIcon width={24} name="cil-dollar" />
                                    </CWidgetIcon>
                                    <CWidgetProgress variant="inverse" value={40} header="$1.999,50" text="Revenue" />
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol xs="12" sm="6" lg="3">
                            <CCard>
                                <CCardHeader>
                                    Sales Volume
                                </CCardHeader>
                                <CCardBody>
                                    <CWidgetIcon text="orders" header="50" color="info">
                                        <CIcon width={24} name="cil-dollar" />
                                    </CWidgetIcon>
                                    <CWidgetProgress variant="inverse" color="info" value={40} header="150" text="Units Sold" />
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol xs="12" sm="6" lg="3">
                            <CCard>
                                <CCardHeader>
                                    Net Before COGS
                                </CCardHeader>
                                <CCardBody>
                                    <CWidgetIcon text="refunded" header="$1.999,50" color="warning">
                                        <CIcon width={24} name="cil-dollar" />
                                    </CWidgetIcon>
                                    <CWidgetProgress variant="inverse" color="warning" value={40} header="$1.999,50" text="COGS" />
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol xs="12" sm="6" lg="3">
                            <CCard>
                                <CCardHeader>
                                    Net Profit
                                </CCardHeader>
                                <CCardBody>
                                    <CWidgetIcon text="Net Profit" header="$1.999,50" color="success">
                                        <CIcon width={24} name="cil-dollar" />
                                    </CWidgetIcon>
                                    <CWidgetProgress variant="inverse" color="success" value={40} header="$1.999,50" text="ROI" />
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                            <CCard>
                                <CCardHeader>
                                    Revenue Per Month
                                </CCardHeader>
                                <CCardBody>
                                    <CChartBar
                                        type="bar"
                                        datasets={[
                                            {
                                                label: 'PKR',
                                                backgroundColor: '#60fcef',
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
                                    Units Sold Per Month
                                </CCardHeader>
                                <CCardBody>
                                    <CChartBar
                                        type="bar"
                                        datasets={[
                                            {
                                                label: 'Number of units',
                                                backgroundColor: '#fcd360',
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
                    </CRow>
                </div>
            </div>
        </>
    )
}

export default Dashboard
