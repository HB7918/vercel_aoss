export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-title">Usage</div>
        <div style={{ padding: '0 8px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '13px', color: '#666' }}>Last 30 days</span>
            <button style={{ 
              background: '#000', 
              color: '#fff', 
              border: 'none', 
              padding: '4px 12px', 
              borderRadius: '4px',
              fontSize: '12px'
            }}>
              Upgrade
            </button>
          </div>
          <UsageItem label="Fast Data Transfer" value="0 / 100 GB" />
          <UsageItem label="Fast Origin Transfer" value="0 / 10 GB" />
          <UsageItem label="Edge Requests" value="0 / 1M" />
          <UsageItem label="Edge Request CPU Duration" value="0 / 1h" />
        </div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-title">Alerts</div>
        <div className="upgrade-box">
          <h4>Get alerted for anomalies</h4>
          <p>Automatically monitor your projects for anomalies and get notified.</p>
          <a href="#" className="upgrade-link">Upgrade to Observability Plus</a>
        </div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-title">Recent Previews</div>
        <div style={{ 
          padding: '32px 16px', 
          textAlign: 'center',
          color: '#888',
          fontSize: '13px'
        }}>
          <div style={{ 
            width: '32px', 
            height: '32px', 
            margin: '0 auto 12px',
            border: '2px dashed #ddd',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            @
          </div>
          <p>Preview deployments that you have recently visited or created will appear here.</p>
        </div>
      </div>
    </aside>
  );
}

function UsageItem({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '6px 0',
      fontSize: '13px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ 
          width: '8px', 
          height: '8px', 
          borderRadius: '50%', 
          border: '1.5px solid #ccc' 
        }} />
        <span style={{ color: '#666' }}>{label}</span>
      </div>
      <span style={{ color: '#999' }}>{value}</span>
    </div>
  );
}
