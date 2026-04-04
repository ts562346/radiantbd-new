import './OrgChart.css';

export default function OrgChart() {
  return (
    <div className="org-chart">
      {/* CEO Level */}
      <div className="org-level level-1">
        <div className="org-node ceo">
          <div className="node-name">Md. Anwarul Hoque</div>
          <div className="node-title">Chief Executive</div>
        </div>
      </div>

      {/* GM Level */}
      <div className="org-level level-2">
        <div className="org-node gm">
          <div className="node-name">Mr. Zahidul Hoque</div>
          <div className="node-title">GM Operations</div>
        </div>
        <div className="org-node gm">
          <div className="node-name">Sharmin Sultana</div>
          <div className="node-title">GM Finance</div>
        </div>
        <div className="org-node gm">
          <div className="node-name">Md. Ahsanul Hoque</div>
          <div className="node-title">Quality Control</div>
        </div>
      </div>

      {/* Manager Level */}
      <div className="org-level level-3">
        <div className="org-branch">
          <div className="org-node manager">
            <div className="node-name">Sagor Barua</div>
            <div className="node-title">Manager Operations</div>
          </div>
        </div>
        
        <div className="org-branch">
          <div className="org-node manager">
            <div className="node-name">Ezazul Hoque</div>
            <div className="node-title">Office Assistant</div>
          </div>
        </div>

        <div className="org-branch">
          <div className="org-node manager">
            <div className="node-name">Sadia Afrin</div>
            <div className="node-title">Accounts Assistant</div>
          </div>
        </div>

        <div className="org-branch">
          <div className="org-node manager">
            <div className="node-name">Milton</div>
            <div className="node-title">Materials Procurement & Supply Assistant</div>
          </div>
        </div>
      </div>

      {/* Staff Level */}
      <div className="org-level level-4">
        <div className="org-branch staff-group">
          <div className="org-node staff">
            <div className="node-name">Shorif</div>
            <div className="node-title">Area In-Charge Dhanmondi</div>
            <div className="node-subtitle">Bill~Quality~Sales</div>
          </div>
          <div className="org-node staff">
            <div className="node-name">Enamul</div>
            <div className="node-title">Area In-Charge, Motijheel</div>
            <div className="node-subtitle">Bill~Quality~Sales</div>
          </div>
          <div className="org-node staff">
            <div className="node-name">Titu Molla</div>
            <div className="node-title">Area In-Charge Gulshan</div>
            <div className="node-subtitle">Bill~Quality~Sales</div>
          </div>
          <div className="org-node staff">
            <div className="node-name">Anki</div>
            <div className="node-title">Area In-Charge Uttara, Savar, Gazipur</div>
            <div className="node-subtitle">Bill~Quality~Sales</div>
          </div>
        </div>

        <div className="org-branch staff-group">
          <div className="org-node staff">
            <div className="node-name">3-Trainee Supervisor</div>
            <div className="node-title">10-Backup Cleaners</div>
          </div>
        </div>

        <div className="org-branch staff-group empty">
        </div>

        <div className="org-branch staff-group">
          <div className="org-node staff">
            <div className="node-name">Liton Miah</div>
            <div className="node-title">Driver</div>
          </div>
        </div>
      </div>
    </div>
  );
}
