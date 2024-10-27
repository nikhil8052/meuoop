import React from 'react'

export default function page() {
  return (
    <>
      <div className='dashboard-main'>
        <div>
          <div>
            <h2 className='mb-2'> Dashboard</h2>
          </div>
        </div>
        <div className='dashboard-main-container'>
          <div class="dashboard_stats_div">
            <div class="title"> Total uploaded</div>
            <div class="value">7,265</div>
            <div class="icon"><i class="fas fa-chart-line"></i></div>
          </div>
          <div class="dashboard_stats_div">
            <div class="title">Landing page</div>
            <div class="value">3,671</div>
            <div class="icon"><i class="fas fa-chart-line"></i></div>
          </div>
          <div class="dashboard_stats_div">
            <div class="title">Ux Flows</div>
            <div class="value">256</div>
            <div class="icon"><i class="fas fa-chart-line"></i></div>
          </div>
          <div class="dashboard_stats_div">
            <div class="title">App Design</div>
            <div class="value">3,671</div>
            <div class="icon"><i class="fas fa-chart-line"></i></div>
          </div>
          <div class="dashboard_stats_div">
            <div class="title">Total Users </div>
            <div class="value">3,671</div>
            <div class="icon"><i class="fas fa-chart-line"></i></div>
          </div>
        </div>

      </div>

    </>
  )
}
