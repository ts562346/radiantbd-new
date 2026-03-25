import './PageHeader.css';

export default function PageHeader({ title, subtitle, bgColor }) {
  return (
    <div className="page-header" style={bgColor ? { background: bgColor } : {}}>
      <div className="page-header-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}
