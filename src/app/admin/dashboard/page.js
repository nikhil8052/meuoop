'use client'
import React, { useEffect, useState } from 'react';
import FlowList from '../../components/admin/FlowList'

export default function Page() {
  const [dashboardData, setDashboardData] = useState({
    total_flows: 0,
    total_images: 0,
    total_categories: 0,
    total_elements: 0,
    ux_flow_count: 0,
    landing_pages_count: 0,
    app_ui_count: 0
  });

  useEffect(() => {
    // Fetch data from the API
    async function fetchDashboardData() {
      try {
        const response = await fetch('/api/dashboard'); // Adjust to the correct endpoint
        if (response.ok) {
          const data = await response.json();
          setDashboardData(data);
        } else {
          console.error("Failed to fetch dashboard data");
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    }
    fetchDashboardData();
  }, []);

  return (
    <>
      <div className="dashboard-main">
        <div>
          <div>
            <h2 className="mb-2">Dashboard</h2>
          </div>
        </div>
        <div className="dashboard-main-container">
          <div className="dashboard_stats_div">
            <div className="title">Total Uploaded</div>
            <div className="value">{dashboardData.total_flows}</div>
            <div className="icon"><i className="fas fa-chart-line"></i></div>
          </div>
          <div className="dashboard_stats_div">
            <div className="title">Landing Pages</div>
            <div className="value">{dashboardData.landing_pages_count}</div>
            <div className="icon"><i className="fas fa-chart-line"></i></div>
          </div>
          <div className="dashboard_stats_div">
            <div className="title">UX Flows</div>
            <div className="value">{dashboardData.ux_flow_count}</div>
            <div className="icon"><i className="fas fa-chart-line"></i></div>
          </div>
          <div className="dashboard_stats_div">
            <div className="title">App UI</div>
            <div className="value">{dashboardData.app_ui_count}</div>
            <div className="icon"><i className="fas fa-chart-line"></i></div>
          </div>
          <div className="dashboard_stats_div">
            <div className="title">Total Images</div>
            <div className="value">{dashboardData.total_images}</div>
            <div className="icon"><i className="fas fa-chart-line"></i></div>
          </div>
          <div className="dashboard_stats_div">
            <div className="title">Total Categories</div>
            <div className="value">{dashboardData.total_categories}</div>
            <div className="icon"><i className="fas fa-chart-line"></i></div>
          </div>
          <div className="dashboard_stats_div">
            <div className="title">Total Elements</div>
            <div className="value">{dashboardData.total_elements}</div>
            <div className="icon"><i className="fas fa-chart-line"></i></div>
          </div>
        </div>
      </div>
      
      <FlowList />
    </>
  );
}
